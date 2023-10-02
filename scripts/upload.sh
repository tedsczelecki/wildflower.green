#!/bin/bash
gatsby clean
rm -rf /public
yarn build

aws s3 sync ./public s3://wildflower.green/ \
  --delete \
  --metadata-directive REPLACE \
  --cache-control max-age=31536000,public \
  --acl public-read

#aws cloudfront create-invalidation --distribution-id=E3STOEHQLAOTZ0 --paths /
