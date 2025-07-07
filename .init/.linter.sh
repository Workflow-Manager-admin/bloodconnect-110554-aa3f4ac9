#!/bin/bash
cd /home/kavia/workspace/code-generation/bloodconnect-110554-aa3f4ac9/frontend_web
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

