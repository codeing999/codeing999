var cheerio = require("cheerio");
var request = require("request");
const URL = require("url");
const iconv = require("iconv-lite");

var url = "http://www.ziptrek.co.kr/";

request(url, function (error, response, html) {
  if (error) {
    throw error;
  }

  var $ = cheerio.load(html);

  //썸네일
  console.log($("meta[property='og:image']").attr("content"));
  console.log($("meta[property='twitter:image']").attr("content"));
  console.log($("meta[name='twitter:image']").attr("content"));

  //아이콘
  console.log($("link[rel='icon']").attr("href"));

  //타이틀
  let title = $("title").text();
  console.log("title:", title);
  console.log($("meta[property='og:title']").attr("content"));
  console.log($("meta[name='twitter:title']").attr("content"));

  //도메인 (잘 안먹히는 듯? 잘못된거일수도)
  console.log($("a").prop("hostname"));

  //   const imageUrl = $("img").attr("src");
  //   console.log("imageUrl:", imageUrl);
  //   const parsedUrl = URL.parse(imageUrl);
  //   const domain = parsedUrl.hostname;
  //   console.log(domain);

  const myURL = URL.parse(url, true);
  console.log(myURL.protocol + myURL.hostname);
  console.log(myURL.protocol + myURL.hostname + $("link[rel='icon']").attr("href"));

  console.log(response.statusCode, typeof response.statusCode);

  const brokenString = title;
  const encodedBuffer = Buffer.from(brokenString, "binary");
  const decodedString = iconv.decode(encodedBuffer, "utf-8");
  console.log(decodedString);

  //   //헤더
  //   const host = response.headers.host; //(응답 헤더엔 보통 호스트가 없나?)
  //   console.log(host);
});
