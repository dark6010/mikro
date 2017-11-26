@echo off
title DEVELOPED BY DARKGHOST
FOR /f "TOKENS=2* DELIMS=:" %%y IN ('netsh interface ipv4 show config "ethernet"') DO (echo %%y)
echo "++++++++++++++++++++++"
FOR /f "TOKENS=1* DELIMS=:" %%y IN ('netsh interface ipv4 show config "ethernet"') DO (echo %%y)
echo "++++++++++++++++++++++"
netsh interface ipv4 show interfaces "ethernet"
exit