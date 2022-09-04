# s3

## policy example
```json
{
    "Version": "2012-10-17",
    "Id": "Policy1660754391470",
    "Statement": [
        {
            "Sid": "Stmt1660754379771",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::mypet-backend"
        },
        {
            "Sid": "S3PolicyStmt-DO-NOT-MODIFY-1660770723586",
            "Effect": "Allow",
            "Principal": {
                "Service": "logging.s3.amazonaws.com"
            },
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::mypet-backend/*"
        }
    ]
}
```

## cors example
```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "HEAD",
            "GET",
            "PUT",
            "POST",
            "DELETE",
            "OPTIONS"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ]
    }
]
```
