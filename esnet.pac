function FindProxyForURL(url, host) {

 var esnet_proxy = "SOCKS5 127.0.0.1:9998";
 if (shExpMatch(url,"*.es.net/*"))     { return esnet_proxy; }
 if (shExpMatch(url, "*.es.net:*/*"))  { return esnet_proxy; }
 //if (shExpMatch(url,"*.lbl.gov/*"))    { return esnet_proxy; }
 //if (shExpMatch(url, "*.lbl.gov:*/*")) { return esnet_proxy; }
 if (shExpMatch(url, "*.startap.net/*"))                       { return esnet_proxy; }
 if (shExpMatch(url, "al2s.net.internet2.edu/*"))              { return esnet_proxy; }

 return "DIRECT";
}
