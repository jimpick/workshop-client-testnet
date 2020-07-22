const annotations = {
  // Routable - active
  t0117803: 'active, China, Shenzhen, seal times: 10h, 9h, 9h, 10h, ' +
    '<20h, 9h, 12h, thu, sat, mon, wed',
  t0118133: 'active, China, Shijiazhuang, seal times: 12h, 15h, 12h, ' +
    '12h, 1h, <20h, 16h, wed, fri, sun, wed',
  t0118797: 'active, China, Huzhou, top miner, seal times: 13h, sat, ' +
    'mon, wed',
  t0119390: 'active, China, Shenzen, seal times: 9h, 9h, 12h, 8h, 9h, ' +
    '9h, 8h, <20, 10h, 9h, 11h, 10h, wed',
  t0119822: 'active, China, Beijing, seal times: 24h, 9h, 8h, 1d, 3d, ' +
    '1d, 9h, 1d, 23h, <1d, wed',
  t0120642: 'active, China, Chongqing, seal times: 12h, 11h, 11h, <20h, ' +
    '10h, 11h, 9h, 12h, 12h, 9h, mon, wed',
  t0120993: 'active, China, Hunan, seal times: 22h, 11h, 10h, <20h, 14h, ' +
    '11h, 3d, sat, mon, wed',
  t0121477: 'active, China, Jinan, seal times: 8h, <20h, 13h, 6h, 1d, ' +
    '11h, <1d, wed',
  t0121763: 'active, China, Beijing, seal times: 23h, 10h, 17h, 14h, ' +
    '13h, sun, wed',
  t0121852: 'active, China, Ningxia, seal times: 2d, 18h, 23h, mon, ' +
    'wed',
  t0122424: 'active, Korea, Guro-gu, seal times: 18h, sun, wed',
  t0122821: 'active, China, Dongguan, 13h, mon, wed',
  t0122928: 'active, China, Baoding, seal times: 11h, sun, wed',
  t0123392: 'active, China, Shanghai, seal times: <1d, wed',
  t0123404: 'active, China, Shanghai, seal times: <1d, wed',
  t0123416: 'active, China, Yibin, seal times: <1d, wed',
  t0123498: 'active, China, Shenzhen, seal times: <1d, wed',

  // Routable - new, recycle, sealing
  t01025: 'sealing, China, Yangzhou, top miner, sat, mon, wed',
  t01459: 'sealing, China, Guilin, top miner, seal times: 24h, sat, mon, ' +
    'wed',
  t02020: 'sealing, China, Chengdu, top miner, sat, mon, wed',
  t0117628: 'sealing, China, Nanjing, sat, mon, wed',
  t0117734: 'sealing, USA, seal times: 19h, 24h, 24h, 19h, 1d, 18h, thu, ' +
    'fri, sun, wed',
  t0119792: 'sealing, China, Hong Kong, sat, mon, wed',
  t0120304: 'sealing, China, Beijing, sat, wed',
  t0120796: 'sealing, China, Shanghai, 64G, fri, sun, wed',
  t0121324: "sealing, China, Xi'an, fri, sun, wed",
  t0121953: 'waitingfordatarequest, China, Zhongshan, seal times: 7h, ' +
    '9h, mon, wed',
  t0122244: 'sealing, China, Chengdu, thu, sat, mon, wed',
  t0122401: 'sealing, Korea, Seoul, fri, sun, wed',
  t0122924: 'sealing, China, Fuzhou, sat, mon, wed',
  t0122948: 'sealing, China, Fuzhou, sat, mon, wed',
  t0123030: 'sealing, China, Fuzhou, sun, wed',
  t0123032: 'sealing, China, Fuzhou, sun, wed',
  t0123406: 'sealing, China, Shanghai, mon, wed',
  t0123492: "sealing, China, Xi'an, mon, wed",
  t0123507: 'sealing, China, Shanghai, mon, wed',
  t0124469: 'sealing, China, Fuzhou, mon, we, wedd',
  t0124719: 'sealing, China, Shandong, wed',
  t0125040: 'sealing, China, Guiyang, wed',
  t0125093: 'new, China, Yibin',
  t0125917: 'sealing, Ireland, Dublin, wed',

  // Error
  t0101180: 'error, China, Foshan, seal times: 15h, 6h, 7h, 8h, 7h, 6h, ' +
    '5h, 12h, 5h, 7h, <20h, 19h',
  t0106399: 'error, Japan, Heiwajima', // stream reset
  t0109653: 'error, China, Weifang, seal times: 11h', // unexpected deal status while waiting for data request: 7
  t0109755: 'error, China, Fuzhou', // stream reset
  t0117879: 'error, China, Hong Kong, sat', // error reading Response message: EOF
  t0120313: 'error, USA, Boardman', // sending proposal to storage provider failed: failed to dial
  t0120545: 'error, Singapore, fri, sun, mon', // stream reset
  t0120741: 'error, USA, Boardman, @jimpick, seal times: 13h, 13h, 9h, ' +
    '1d, <20h, 19h, wed', // unexpected deal status while waiting for data request: 7
  t0120770: 'error, Singapore, thu', // stream reset
  t0120937: 'error, USA, Clarksville, seal times: 1d, 1d', // error reading Response message: EOF
  t0121097: 'error, China, Shenzhen, seal times: 13h, 1d, <20h, tue, thu', // stream reset
  t0121681: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0121685: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0121813: 'error, China, Shenzhen, tue, thu', // error reading Response message: EOF
  t0122513: 'error, China, Shandong', // unexpected deal status while waiting for data request: 7
  t0122856: 'error, China, Guilin, sat, mon', // error reading Response message: unmarshaling t.Response: failed to read cid field t.Proposal: stream reset
  t0122955: 'error, China, Shenzhen, sat', // sending proposal to storage provider failed: failed to dial
  t0123012: 'error, China, Fuzhou, sat, mon', // sending proposal to storage provider failed: failed to dial
  t0124520: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0124584: 'error, China, Shandong', // unexpected deal status while waiting for data request: 7

  // Stuck
  t01784: 'error, China, Shenzhen, sat, mon', // transferring
  t0123249: 'error, China, Chongqing, sun', // validating
 
  // XNR

  // Non-routable top miners
  t01007: 'NR, top miner',
  t01019: 'NR, China, Chengdu, top miner',
  t01009: 'NR, top miner',
  t01102: 'NR, top miner',
  t09084: 'NR, top miner',
  t09833: 'NR, China, Mianyang, top miner',
  t011101: 'NR, China, Shanghai, top miner',
  t020890: 'NR, China, Huzhou, top miner',
  t021661: 'NR, top miner',
  t032055: 'NR, top miner',
  t039272: 'NR, top miner',
  t0105366: 'NR, China, Shenzhen, top miner',
  t0117756: 'NR, USA, Boardman, wed, fri, sun, tue',
  t0118696: 'NR, top miner',
  t0118768: 'NR, top miner',
  t0119320: 'NR, top miner',
  t0119666: 'NR, top miner',


  // Ex-top miners
  t01546: 'NR, ex-top',
  t04463: 'NR, China, Dongguan, ex-top, mon',
  t010581: 'NR, ex-top',

  // Non-routable with deals
  t055280: 'NR, deals',

  // Non-routable former geo-located
  t01015: 'NR - Poland, Krakow, @magik6k, seal times: 12h, wed',
  t01027: 'NR - China, Chengdu',
  t01215: 'NR - China, Zhongshan, wed, fri, sun',
  t01886: 'NR, China, Chengdu, top miner', // stream reset
  t01985: 'NR, China, Wuxi, ex-top', // unexpected deal status while waiting for data request: 9
  t04503: 'NR - China, Beijing',
  t04842: 'NR - China, Changsha',
  t05900: 'NR - China, Changzhou',
  t07211: 'NR - China, Wuxi',
  t08293: 'NR - China, Shangrao', // unexpected deal status while waiting for data request: 7
  t08459: 'NR - China, Wuxi',
  t08275: 'NR - China, Wuxi',
  t013836: 'NR - China, Guangdong',
  t013966: 'NR - China, Guangdong',
  t020889: 'NR - China, Shenzhen',
  t020894: 'NR - China, Xiamen',
  t029571: 'NR - Korea, Seongnam-si',
  t033740: 'NR - China, Ningbo',
  t039025: 'NR - USA, San Francisco',
  t040585: 'NR, China, Shanghai, top miner, wed, fri, sun, tue',
  t046856: 'NR - China, Guiyang, seal times: 24h',
  t052328: 'NR - China, Beijing',
  t055393: 'NR - China, Beijing',
  t056726: 'NR - China, Hunan',
  t070999: 'NR - China, Foshan',
  t078580: 'NR, Latvia, Riga, seal times: 72h, 17h, 17h, 12h, sat, ' +
    'mon, wed',
  t091046: 'NR - Singapore',
  t0102008: 'NR - China, Wuxi',
  t0102830: 'NR - China, Beijing, seal times: 48h',
  t0104765: 'NR - China, Yunnan',
  t0106436: 'NR - China, Shenyang',
  t0106446: 'NR - China, Hangzhou',
  t0106549: 'NR, China, Wuhan, seal times: 21h, 24h, 24h, 1d, 9h, ' +
    '<20h, 15h, 19h, 14h, 9h, 7h, 7h',
  t0106575: 'NR - China, Beijing',
  t0106603: 'NR - Germany',
  t0109282: 'NR - China, Cangzhou',
  t0109329: 'NR - China, Shenzhen',
  t0109538: 'NR - China, Changsha',
  t0109589: 'NR - China, Shenzhen',
  t0109604: 'NR, China, Beijing, wed, fri, sun, tue', // stream reset
  t0109648: 'NR - China, Beijing',
  t0109776: 'NR, China, Jinan, seal times: 48h',
  t0116113: 'NR, China, Shenyang, sat',
  t0111839: 'NR - China, Chongqing',
  t0111870: 'NR - China, Shenyang',
  t0111921: 'NR - USA, Ashburn',
  t0111923: 'NR - China, Shenzhen',
  t0111939: 'NR - China, Shenyang',
  t0111994: 'NR - China, Shijiazhuang',
  t0113893: 'NR - China, Shanghai',
  t0114172: 'NR - China, Wuxi',
  t0114193: 'NR - Canada, St. Marys, wed, fri, sun',
  t0114215: 'NR - China, Shenyang',
  t0114252: 'NR - China, Ningbo, seal times: 9h, 21h, 12h',
  t0114231: 'NR - China, Meishan',
  t0115997: 'NR - China, Shaanxi',
  t0116001: 'NR - China, Chongqing',
  t0116034: 'NR - China, Shenzhen, seal times: 10h, 11h',
  t0116037: 'NR - China, Hong Kong',
  t0116082: 'NR - USA, Boardman, Jim',
  t0116085: 'NR - Singapore',
  t0116103: 'NR - China, Shenzhen',
  t0116197: 'NR - Australia, Chatswood',
  t0116210: 'NR - China, Beijing',
  t0117284: 'NR - China, Guilin',
  t0117348: 'NR - China, Beijing',
  t0117363: 'NR - China, Shijiazhuang',
  t0117386: 'NR - USA',
  t0117390: 'NR - China, Beijing',
  t0117396: 'NR - China, Beijing',
  t0117482: 'NR - USA',
  t0117576: 'NR - China, Jinan',
  t0117534: 'NR - China, Guangzhou',
  t0117595: 'NR - China, Beijing',
  t0117597: 'NR - USA, Clarksville',
  t0117599: 'NR - China, Shenzhen',
  t0117600: 'NR - China, Shenzhen',
  t0117613: 'NR - China, Shenzhen',
  t0117719: 'NR - China, Guandong, 64G',
  t0117826: 'NR - China, Beijing',
  t0117926: 'NR - China, Ningxia, seal times: 17h, 23h, 24h',
  t0117933: 'NR - China, Meishan',
  t0118078: 'NR - USA, Santa Clara',
  t0118144: 'NR - China, Hangzhou, seal times: 12h',
  t0118150: 'NR - China, Shenzhen',
  t0118155: 'NR, USA, Irvine, seal times: 15h, 7h, 7h, 6h, 6h, 6h, ' +
    '12h, 6h, 6h, <20h, 9h, 21h',
  t0118186: 'NR - Korea, Seongnam-si',
  t0118238: 'NR - China, Shenzhen',
  t0118304: 'NR - China, Guangdong',
  t0118388: 'NR - China, Hangzhou',
  t0118477: 'NR - USA, Boardman, Jim, seal times: 13h',
  t0118498: 'NR, China, Nanchong, wed, fri, sun, tue',
  t0118502: 'NR - China, Jinan, seal times: 15h, 7h',
  t0118579: 'NR - China, Guangdong, was active',
  t0118595: 'NR - Singapore',
  t0118821: 'NR - China, Shenzhen, seal times: 13h',
  t0118867: 'NR - China, Shenzhen, was active',
  t0118999: 'NR - Japan, Osaka',
  t0119018: 'NR - China, Shenzhen, seal times: 14h',
  t0119022: 'NR - China, Shenzhen',
  t0119030: 'NR - Singapore',
  t0119045: 'NR - China, Beijing',
  t0119061: 'NR - China, Shenzhen',
  t0119064: 'NR - China, Chengdu, wed, fri, sun',
  t0119101: 'NR - China, Chongqing, seal times: 17h',
  t0119143: 'NR - China, Shenzhen, seal times: 22h',
  t0119224: 'NR - USA, San Francisco',
  t0119228: 'NR - China, Shaanxi, seal times: 24h, mon, wed, fri',
  t0119252: 'NR - China, Hangzhou, seal times: 8h',
  t0119263: 'NR - USA, Boardman, Jim',
  t0119277: 'NR - China, Chongqing',
  t0119282: 'NR - China, Chongqing, wed, fri, sun',
  t0119287: 'NR - China, Hangzhou',
  t0119326: 'NR - USA, Santa Clara',
  t0119332: 'NR - China, Shenzhen, seal times: 7h',
  t0119350: 'NR - China, Hebei',
  t0119370: 'NR - China, Shenzhen',
  t0119442: 'NR - USA, Clarksville, seal times: 24h, 18h',
  t0119462: 'NR - China, Guilin',
  t0119544: 'NR - China, Shenzhen',
  t0119547: 'NR - China, Shenzhen',
  t0119553: 'NR - China, Qingdao',
  t0119574: 'NR, China, Guilin, seal times: 11h, 10h, 12h, 12h, 8h, ' +
    '12h, sat',
  t0119579: 'NR - China, Shenzhen',
  t0119591: 'NR - China, Beijing, seal times: 48h',
  t0119593: 'NR - China, Changsha, seal times: 8h, 8h, 8h',
  t0119618: 'NR, China, Hangzhou, seal times: 12h, 10h, 12h, 14h, ' +
    'wed, fri, sun, tue',
  t0119659: 'NR - China, Shanghai',
  t0119695: 'NR - USA, Boardman, @jimpick, seal times: 13h, 16h, 19h',
  t0119698: 'NR - China, Shanghai, 13h',
  t0119753: 'NR, China, Xiamen, thu, sat',
  t0119785: 'NR - China, Beijing',
  t0119806: 'NR - China, Hefei',
  t0119808: 'NR - China, Hunan',
  t0119826: 'NR - China, Shenzhen, seal times: 7h',
  t0119832: 'NR - China, Beijing',
  t0119858: 'NR - China, Hangzhou, seal times: 24h, 24h',
  t0119896: 'NR - China, Hebei, seal times: 15h',
  t0119900: 'NR - China, Hunan, seal times: 15h',
  t0119951: 'NR - Canada, Surrey',
  t0119961: 'NR - Korea, Gwangju',
  t0119995: 'NR, China, Shandong, seal times: 4h, 4h, 6h, 3h, 9h, ' +
    '3h, 6h, 8h, <20h, 4h, 8h, thu',
  t0120000: 'NR - China, Chongqing, seal times: 13h, 9h, 12h, 12h',
  t0120011: 'NR - China, Chongqing',
  t0120023: 'NR - China, Chengdu',
  t0120029: 'NR - China, Ningxia, seal times: 16h, 15h, 9h, fri',
  t0120064: 'NR - Hungary',
  t0120129: "NR - China, Xi'an",
  t0120155: 'NR - Korea, Gwangju, wed, fri',
  t0120174: 'NR - China, Shenzhen',
  t0120177: 'NR - China, Guilin, seal times: 24h',
  t0120195: 'NR - China, Shenzhen',
  t0120199: 'NR - China, Changsha',
  t0120206: 'NR, China, Beijing, wed, fri, sun, tue, thu',
  t0120221: 'NR - China, Yibin, seal times: 7h, 5h, 5h, 19h, sat, mon',
  t0120295: 'NR - China, Beijing, seal times: 24h, 24h, 24h, 2d, 1d',
  t0120297: 'NR - Korea, Ansan-si',
  t0120336: 'NR - China, Shenzhen',
  t0120337: 'NR, China, Chengdu, thu, sat, mon, wed',
  t0120339: 'NR, China, Beijing, sat',
  t0120369: 'NR - China, Shenzhen, seal times: 7h',
  t0120378: 'NR - China, Foshan, 64G, seal times: 16h',
  t0120387: 'NR - China, Shenzhen',
  t0120403: 'NR, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0120405: 'NR, China, Dongguan, seal times: 9h, 12h, sat',
  t0120422: 'NR - China, Shenzhen, seal times: 8h',
  t0120432: 'NR - China, Cangzhou',
  t0120434: 'NR - China, Shenzhen, seal times: 24h',
  t0120443: 'NR - China, Shanghai',
  t0120458: 'NR, China, Suzhou, seal times: 17h, 13h, sat, mon, wed',
  t0120511: 'NR - China, Chengdu, tue, fri',
  t0120523: 'NR - China, Zhongshan',
  t0120572: 'NR - Finland, Helsinki, seal times: 18h',
  t0120579: 'NR - China, Shanghai',
  t0120621: 'NR - Singapore, thu, sat, mon',
  t0120638: 'NR, China, Guilin, seal times: 21h, sat',
  t0120647: 'NR, China, Shenzhen, thu, sat',
  t0120661: 'NR - China, Wuxi',
  t0120663: 'NR - China, Shenzhen',
  t0120775: 'NR - USA, Bellevue',
  t0120782: 'NR - China, Chengdu',
  t0120786: 'NR - China, Xianning',
  t0120798: 'NR - China, Shenzhen, seal times: 6h',
  t0120802: 'NR - China, Shenzhen',
  t0120804: 'NR - China, Shenzhen, seal times: 7h, fri',
  t0120859: 'NR - China, Beijing',
  t0120905: 'NR - China, Hangzhou, seal times: 14h, 12h, 15h, 12h, mon',
  t0120972: 'NR, China, Chengdu, seal times: 15h, 11h, 10h, <20h, ' +
    '10h, 10h, 20h, 9h, mon',
  t0120990: 'NR - China, Shanghai, fri, sun',
  t0120974: 'NR - China, Shenzhen, fri',
  t0121029: 'NR - China, Beijing',
  t0121033: 'NR - Netherlands, Purmerend, fri, sun',
  t0121040: 'NR, China, Beijing, fri, sun, tue',
  t0121080: 'NR, China, Beijing, seal times: 1d, sat',
  t0121108: 'NR - China, Zhongshan, fri, sun',
  t0121182: 'NR, USA, Bellevue, sat',
  t0121083: 'NR - China, Shenzhen, fri',
  t0121185: 'NR, USA, Columbus, sat',
  t0121201: "NR - China, Xi'an",
  t0121269: 'NR - China, Zhongshan, sat', // error reading Response message: stream reset
  t0121321: 'NR, China, Guangdong, sat',
  t0121365: 'NR - USA, Newark, sun',
  t0121378: 'NR - China, Beijing, sun',
  t0121409: 'NR - China, Beijing, sun',
  t0121475: 'NR, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0121587: 'NR - China, Beijing, mon',
  t0121645: 'NR - Hungary, mon',
  t0121652: 'NR, China, Zhongshan, sat, mon',
  t0121655: 'NR, China, Guangdong, 15h, 23h, fri',
  t0121677: 'NR - China, Shenzhen, mon',
  t0121762: 'NR, China, Shenzhen, seal times: 22h, 19h, 13h, fri, sun',
  t0121765: 'NR, China, Heyuan', // stream reset
  t0121797: 'NR - China, Hangzhou, seal times: 7h',
  t0121864: 'NR, Korea, Bucheon-si, tue',
  t0121879: 'NR, Germany, Wiesloch, tue',
  t0121985: 'NR, China, Beijing, seal times: 19h, thu, sat',
  t0121994: 'NR, China, Hangzhou, wed',
  t0122046: 'NR, China, Zhongshan, thu',
  t0122065: 'NR, China, Zhongshan, thu',
  t0122067: 'NR, China, Zhongshan, wed',
  t0122074: 'NR, China, Shanghai, wed, fri',
  t0122088: 'NR, China, Beijing, wed, fri, sun',
  t0122106: 'NR, Canada, St. Marys, wed, fri, sun',
  t0122108: 'NR, China, Chongqing, wed',
  t0122137: 'NR, Korea, Bucheon-si, thu, sat',
  t0122232: 'NR, China, Chengdu, thu',
  t0122287: 'NR, China, Beijing, thu',
  t0122290: 'NR, China, Guangdong, thu',
  t0122389: 'NR, Korea, Seoul, seal times: 20h, mon',
  t0122398: 'NR, China, Beijing, fri, sun ',
  t0122466: 'NR, China, Yangzhou, fri, sun',
  t0122580: 'NR, China, Shandong, seal times: 19h',
  t0122713: 'NR, China, Chongqing, fri',
  t0122720: 'NR, China, Beijing, fri, sun',
  t0122736: 'NR, China, Shenzhen, fri',
  t0122763: 'NR, Korea, Seongnam-si, fri',
  t0122853: 'NR, China, Chengdu, sat',
  t0122908: 'NR, China, Wuhan, seal times: 9h, sun',
  t0122933: 'NR, China, Beijing',
  t0123301: 'NR, Korea, Seongnam-si',
  t0123010: 'NR, China, Shenzhen, sat',
  t0123014: 'NR, China, Fuzhou, sat, mon',
  t0123189: 'NR, China, Shenzhen, sun',
  t0123289: 'NR, China, Shandong, sun',
  t0123308: 'NR, Korea, Seongnam-si, seal times: <1d',
  t0123336: 'NR, China, Chengdu, mon',
  t0123338: 'NR, China, Shenzhen, mon',
  t0123480: 'NR, China, Yangzhou',
  t0123505: 'NR, Canada, Embrun, mon',

  // Non-routable Bootstrappers
  t01000: 'NR, bootstrap',
  t01001: 'NR, bootstrap',
  t01002: 'NR, bootstrap'
}

export default annotations
