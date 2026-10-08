@echo off
title Push to GitHub
cd /d "%~dp0"
echo ======================================================
echo Pushing Alpha Detailers to GitHub...
echo ======================================================
git push -u origin main
echo.
echo ======================================================
echo Push complete! Press any key to close this window.
echo ======================================================
pause
