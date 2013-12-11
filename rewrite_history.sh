#!/usr/bin/env bash

git filter-branch --force --env-filter 'if [ $GIT_AUTHOR_EMAIL = accounts@hackreactor.com -o $GIT_AUTHOR_EMAIL = github@hackreactor.com -o $GIT_AUTHOR_EMAIL = students@hackreactor.com ]; then GIT_AUTHOR_EMAIL="catherine.ann.jenkins@gmail.com"; GIT_AUTHOR_NAME="Kate Jenkins"; fi; export GIT_AUTHOR_EMAIL; export GIT_AUTHOR_EMAIL'
