$myPath = (Split-Path (Resolve-Path $myInvocation.MyCommand.Path))
Write-Host " #####  $myPath  ###"
cd .\.bin
.\npm.cmd install
.\npm.cmd install karma-teamcity-reporter
cd .\..\node_modules\.bin
.\karma.cmd start ..\..\karma.unit.conf.js --single-run