//URL 타이틀과 썸네일 불러오기
exports.getUrlTitleAndThumbnail = async function (url) {
  if (url === undefined || url === null || url === "") {
    return { urlTitle: undefined, urlThumbnail: undefined };
  }

  const requestOptions = {
    url: url,
    timeout: 500,
    //원하는 헤더 추가
    // 브라우저 헤더 예시
    // headers: {
    //   "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    //   "Accept-Language": "ko-KR",
    // },
    // 앱 헤더 예시
    headers: {
      "User-Agent": "MyApp/1.0 (Android; SDK 30; Samsung Galaxy S10)",
      "Accept-Language": "en-US",
      "X-App-Auth-Token": "abcdef123456",
    },
  };

  const parsedUrl = URL.parse(url, true);
  let urlTitle;
  let urlThumbnail;
  try {
    const response = await request.get(requestOptions);

    let $ = cheerio.load(response);
    urlTitle =
      $("meta[property='og:title']").attr("content") ||
      $("meta[property='twitter:title']").attr("content") ||
      $("meta[name='twitter:image']").attr("content") ||
      $("title").text() ||
      $("meta[property^=og:]").attr("content");

    urlThumbnail =
      $("meta[property='og:image']").attr("content") ||
      $("meta[property='twitter:image']").attr("content") ||
      $("meta[name='twitter:image']").attr("content");

    if (urlThumbnail === undefined) {
      let icon = $("link[rel='icon']").attr("href");
      if (icon !== undefined) {
        if (icon.includes("http") === false) {
          icon = parsedUrl.protocol + parsedUrl.hostname + icon;
        }
        urlThumbnail = icon;
      }
    }
  } catch (error) {
    return { urlTitle: undefined, urlThumbnail: undefined };
  }

  urlTitle = urlTitle === "" ? undefined : urlTitle;
  urlThumbnail = urlThumbnail === "" ? undefined : urlThumbnail;

  return { urlTitle: urlTitle, urlThumbnail: urlThumbnail };
};
