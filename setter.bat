@echo off
title DEVELOPED BY DARKGHOST

netsh interface set interface name="Conexión de área local" newname="ethernet"
netsh interface set interface name="Local Area Connection" newname="ethernet"
ipconfig
exit