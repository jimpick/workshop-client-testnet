const annotations = {

  // Active - sun

  // Active/sealing - sun

  t02404: 'active, Korea, Seoul, 10h, TVCC& BLOCK DATA BANK, <22h, sun',
  t02419: 'active, China, Shanghai, yuantai, 10h, 14h, <23h, sun',
  t02620: 'active, Poland, Krakow, @magik6k, 20h, <16h, 13h, sun',
  t03002: 'active, China, Chongqing, 11h, 9h, <22h, 9h, <23h, sun',
  t03328: 'active, China, Xinxiang, <22h, sun',
  t03345: 'active, China, Fuzhou, chh, <19h, <16h, 8h, <23h, 10h, sun',
  t07806: 'active, China, Wuhan, HelloXP, <23h, sun',
  t08220: 'active, China, Shenzhen, <19h, sun',
  t08854: 'active, China, Dongguan, <16h, 10h, <23h, 11h, sun',
  t08937: 'active, China, Wuxi, YC--wuxi, <22h, 14h, sun',
  t09573: 'active, China, Xiamen, 13h, <15h, <23h, sun',
  t09833: 'active, USA, San Jose, <13h, 8h, 8h, 7h, 6h, 7h, 7h, 7h, sun',
  t010538: 'active, China, Ordos, 13h, <22h, <23h, <23h, sun',
  t014207: 'active, USA, <15h, <23h, sun',
  t014233: 'active, China, Shanghai, <22h, 14h, <23h, <15h, <22h, sun',
  t014394: 'active, China, Suzhou, <23h, 12h, <23h, sun',
  t015647: 'active, China, Shenzhen, 9h, <23h, sun',
  t015753: 'active, China, Guyuan, <22h, sun',
  t015795: 'active, Brazil, Sao Paulo, <22h, sun',
  t016436: 'active, Korea, Seoul, 8h, <15h, sun',
  t016563: 'active, China, Deyang, <15h, <23h, sun',
  t016594: 'active, Germany, 10h, <23h, sun',
  t017665: 'active, China, Shenyang, 11h, sun',

  // Sealing - sun

  t03225: 'sealing, China, Guyuan, sun',
  t03339: 'sealing, China, Luzhou, benxun, sun',
  t03340: "sealing, China, Xi'an, <19h, <23h, sun", 
  t03344: 'sealing, China, Guangzhou, 13h, sun',
  t03619: 'sealing, China, Xiamen, sun',
  t07827: 'sealing, China, Wuhan, 天际合, sun',
  t08094: 'sealing, China, Guangzhou, dongshao, 10h, <22h, sun',
  t08371: 'sealing, China, Chengdu, sun',
  t08432: 'sealing, China, Taizhou, sun',
  t08482: 'sealing, USA, Athol, @why, sun',
  t09053: 'sealing, China, Shenzhen, sun',
  t09597: 'sealing, China, Shanghai, sun',
  t09731: 'sealing, China, Guiyang, sun',
  t010152: 'sealing, Germany, sun',
  t010399: 'sealing, China, Guangzhou, sun',
  t010449: 'sealing, China, Jiangmen, sun',
  t010516: 'sealing, Brazil, Sao Paulo, sun',
  t010558: 'sealing, China, Shenzhen + Hong Kong, sun',
  t014366: 'sealing, USA, Mountain View, sun',
  t014432: 'sealing, China, Chengdu, sun',
  t014436: 'sealing, China, Chengdu, <23h, sun',
  t014638: 'sealing, USA, sun',
  t014803: 'sealing, China, Beijing, sun',
  t015757: 'sealing, China, Hangzhou, sun',
  t015777: 'sealing, Australia, Sydney, sun',
  t015940: 'sealing, Netherlands, Amsterdam, sun',
  t016456: 'sealing, China, Zhejiang, sun',
  t016462: 'sealing, USA, Clarksville, sun',
  t016509: 'sealing, China, Fuzhou, sun',
  t016659: 'sealing, USA, Alpharetta, sun',
  t016688: 'sealing, Germany, Frankfurt, sun',
  t016917: 'sealing, China, Guangdong, sun',
  t017294: 'sealing, China, Shenzhen, sun',
  t017430: 'sealing, Australia, Alexandria, sun',
  t017488: 'sealing, USA, Council Bluffs, sun',
  t017635: 'sealing, China, Nanchong, sun',
  t017794: 'sealing, USA, Columbus, sun',
  t017795: 'sealing, USA, Columbus, sun',
  t018119: 'sealing, China, Dongguan, sun',
  t018164: 'sealing, USA, Howell, sun',
  t018425: 'sealing, USA, Howell, sun',
  t018441: 'sealing, USA, sun',
  t018506: 'sealing, USA, New York, sun',
  t018509: 'sealing, China, Dongguan, sun',
  t018517: 'sealing, USA, Columbus, sun',
  t018525: 'sealing, USA, Queens, sun',
  t018530: 'sealing, China, Shaanxi, sun',
  t018531: 'sealing, China, Shaanxi, sun',
  t018537: 'sealing, China, Shaanxi, sun',
  t018544: 'sealing, Korea, Uijeongbu-si, sun',
  t018562: 'sealing, New Zealand, Masterton, sun',
  t018754: 'sealing, China, Dali, sun',
  t018761: 'sealing, Russia, St. Petersburg, sun',
  t018790: 'sealing, China, Chengdu, sun',
  t018802: 'sealing, China, Dongguan, sun',
  t018803: 'sealing, Korea, Seodaemun-gu, sun',

  // Stuck - sun

  t010257: 'stuck, China, Hong Kong, <23h, sun-cfa',
  t015938: 'stuck, Canada, Waterloo, sun-funds',
  t018518: "stuck, China, Xi'an, sun-cfa",

  // Busy - sun

  t018203: 'new-busy, Finland, Helsinki, sun',

  // Sealing - sat

  t010173: 'xnr, Korea, Pyeongtaek-si, sat',
  t014556: 'xnr, Korea, Bucheon-si, sat',
  t015848: 'error, China, Ordos, sat', // reset
  t015891: 'backoff, China, Shanghai, sat',
  t017117: 'xnr, Russia, Samara, sat',
  t018490: 'xnr, Korea, Hwaseong-si, sat',

  // Stuck - sat

  t06775: 'stuck, China, Shenzhen, IPSB&CAAP, <23h, sat-funds',
  t010446: 'stuck, Netherlands, sat-cfa',
  t015709: 'stuck, China, Hefei, sat-funds',
  t016706: 'stuck, China, Guangzhou, sat-xfr',
  t017618: 'stuck, Korea, Wanju, sat-funds',
  t018484: 'stuck, China, Shanghai, sat-cfa',

  // Busy - sat

 
  // New



  // Min Size

  t014786: 'min-size, China, Xiamen, mon', // piece size less than minimum required size: 131072 < 204800
  t016207: 'min-size, China, Xiamen, tue', // piece size less than minimum required size: 131072 < 1048576
  t018474: 'min-size, China, Xiamen, sat', // piece size less than minimum required size: 131072 < 1048576

  // Min Ask

  t03136: "min-ask, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat",
  t09056: 'min-ask, China, Shenzhen, SZSQ1',

  // Error

  t03194: 'error, China, Shenzhen, 成都云存&Npool, <19h, <22h, sat', // normal shutdown of state machine
  t03305: 'error, Kenya, Nairobi, <19h', // market balance
  t03306: 'error, Australia, <19h', // market balance
  t03307: 'error, Australia, wed', // market balance
  t03365: 'error, China, Wuhan + Wuxi', // market balance
  t03366: 'error, China, Wuhan + Wuxi', // market balance
  t03484: 'error, Netherlands, 14h, wed', // market balance
  t03485: 'error, Netherlands, 13h, 14h', // market balance
  t03517: 'error, China, Wuhan + Wuxi', // market balance
  t03620: 'error, Germany, Frankfurt, wed', // market balance
  t07987: 'error, China, Beijing, thu', // reset
  t08205: 'error, Brazil, Sao Paulo', // market balance
  t08390: 'error, China, Shenzhen, <19h', // EOF
  t08406: 'error, China, Shenzhen', // reset
  t08572: 'error, Brazil, Sao Paulo', // market balance
  t09261: 'error, Brazil, Sao Paulo', // market balance
  t010040: 'error, China, Shenzhen, fri', // reset
  t014380: 'error, China, Hangzhou + Wuhan + Singapore, 10h, 9h', // market balance
  t014382: 'error, Singapore, 10h, thu', // market balance
  t014386: 'error, Singapore, <22h, <23h, thu-cfa', // market balance
  t014425: 'error, Singapore, tue', // market balance
  t014431: 'error, Singapore, 10h, thu-cfa', // market balance
  t014433: 'error, Singapore, thu-cfa', // market balance
  t014464: 'error, China, Hangzhou + Singapore, <23h, tue', // market balance
  t015231: 'error, China, Wuxi, mon', // market balance
  t015747: 'error, Japan, Setagaya-ku, <23h, sat', // reset
  t015760: 'error, Kenya, Nairobi, wed-funds', // eof
  t015763: 'error, South Africa, Cape Town, sat', // eof
  t015771: 'error, Brazil, Sao Paulo, wed-funds', // reset
  t015782: 'error, Australia, thu', // market balance
  t015947: 'error, Finland, Helsinki, thu', // eof
  t016228: 'error, China, Chengdu, tue', // reset
  t016297: 'error, China, Mianyang + USA, wed', // market balance
  t018397: 'error, USA, Howell, sat', // nonce


  // Dial backoff

  t02627: 'backoff, China, Guilin, <19h, 12h, sat',
  t03245: 'backoff, USA, Los Angeles, <1d',
  t08109: 'backoff, USA, qianyuanyunshuo, wed-funds', // reset
  t014279: 'backoff, Finland, Helsinki, thu',
  t014487: 'backoff, China, Shanghai, thu',
  t015905: 'backoff, Lithuania, wed',
  t016579: 'backoff, USA, Howell, thu',
  t017285: 'backoff, China, Maoming, sun',
  t018088: 'backoff, USA, Mountain View, fri',

  // Rejected

  t01012: 'rejected, China, Hong Kong + Guangzhou',
  t01100: 'rejected, Serbia, Belgrade, filmine.io',
  t01151: 'rejected, USA, Waxhaw',
  t01152: 'rejected, China, Beijing, wed',
  t01154: 'rejected, Sweden, Alvsjo',
  t01155: 'rejected, China, Shanghai, DianCun Tech',
  t01231: 'rejected, Singapore',
  t01234: 'rejected, Belgium, De Klinge, Eliovp',
  t01235: 'rejected, Singapore, IPFSMain',
  t01236: 'rejected, Singapore',
  t01238: 'rejected, Vietnam, Hanoi, FILECOIN-VIETNAM',
  t01240: 'rejected, Netherlands, HidNand',
  t01241: 'rejected, USA, Portland',
  t01243: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t01247: 'rejected, Canada, Montreal, BigChungus™, mon',
  t01248: 'rejected, Germany, Frankfurt + China, Guangdong',
  t01272: 'rejected, Singapore, 12h',
  t01275: 'rejected, Korea, Seongnam-si',
  t01276: 'rejected, Canada, Brampton, NBFS Canada',
  t01277: 'rejected, Sweden, Stockholm, tvsthlm',
  t01278: 'rejected, USA, Grand Rapids, MiMiner',
  t01279: 'rejected, China, Sichuan',
  t01280: 'rejected, China, Wuxi, 了凡超算',
  t01287: 'rejected, China, Jiaxing, MaiTian',
  t01288: 'rejected, China, Yibin, BlackStone, mon',
  t01289: 'rejected, China, Hangzhou + USA, <19h',
  t01291: 'rejected, Sweden, Stockholm, tvsthlm',
  t01782: 'rejected, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  t01799: 'rejected, China, Jinan, TokenHome, <19h',
  t01800: 'rejected, China, Shenzhen + Chengdu, 8h',
  t01801: 'rejected, Switzerland, Baar, Gogoșel',
  t02299: 'rejected, China, Dongguan, Yolo',
  t02301: 'rejected, USA, <19h, <16h, 9h, 8h, 10h, <23h',
  t02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  t02305: 'rejected, China, Dongguan, SZSQ',
  t02307: 'rejected, China, Taiyuan, filecoin.monster, wed',
  t02381: 'rejected, China, Dongguan, 西野七濑迷叔, 12h, tue-xfr',
  t02383: 'rejected, China, Shenzhen',
  t02387: 'rejected, Canada, Brampton, NBFS Canada',
  t02388: 'rejected, Netherlands, Amersfoort, Kroketje',
  t02398: 'rejected, China, Hong Kong',
  t02399: 'rejected, China, Zhejiang',
  t02401: 'rejected, Canada, Chambly, NBFS Canada',
  t02403: 'rejected, UK, London, AIM',
  t02405: 'rejected, China, Shenzhen',
  t02415: 'rejected, China, Hong Kong',
  t02416: 'rejected, China, Guangdong, 星际无限',
  t02417: 'rejected, China, Liaoning',
  t02420: 'rejected, China, Wuhan, 7h',
  t02422: "rejected, China, Xi'an",
  t02423: 'rejected, Ukraine, Kyiv, igowreck',
  t02425: 'rejected, USA',
  t02492: 'rejected, China, Shenzhen',
  t02500: 'rejected, Korea, Seongnam-si, fri',
  t02501: 'rejected, USA, Portland',
  t02503: 'rejected, China, Wuhan',
  t02505: 'rejected, China, Wuhan, tue',
  t02514: 'rejected, USA, Portland',
  t02515: 'rejected, China, Hangzhou',
  t02516: 'rejected, China, Hong Kong',
  t02519: 'rejected, Brazil, Sao Paulo, fri',
  t02520: 'rejected, China, Hong Kong + Dongguan',
  t02528: 'rejected, China, Hong Kong + Inner Mongolia',
  t02532: 'rejected, Singapore',
  t02534: 'rejected, China, Beijing',
  t02574: 'rejected, Japan, Minamata, mon',
  t02576: 'rejected, Denmark, Gjerlev, BenjaminH',
  t02606: 'rejected, China, Shanghai',
  t02607: 'rejected, China, Beijing',
  t02609: 'rejected, USA, tue',
  t02613: 'rejected, China, Chongqing, 10h, <19h, 8h, thu',
  t02614: 'rejected, Singapore, mon',
  t02619: 'rejected, China, Beijing, Blockcasting',
  t02621: "rejected, China, Xi'an",
  t02622: 'rejected, USA, Portland',
  t02623: 'rejected, USA, Portland',
  t02624: 'rejected, China, Shanghai, filecoin.cn',
  t02625: 'rejected, China, Shanghai, IPFS星际工厂, <19h',
  t02626: 'rejected, China, Guangzhou + Hong Kong',
  t02633: 'rejected, China, Hong Kong',
  t02658: 'rejected, China, Ningbo, bluematrix, sun',
  t02665: 'rejected, Netherlands, Amsterdam, fm-ops, sat', // no online
  t02726: 'rejected, USA, Brooklyn',
  t02732: 'rejected, USA',
  t02755: 'rejected, China, Shijiazhuang',
  t02768: 'rejected, China, Hong Kong',
  t02770: 'rejected, China, Hong Kong',
  t02775: 'rejected, China, Hong Kong, sun',
  t02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  t03021: 'rejected, China, Hong Kong',
  t03131: 'rejected, China, Changsha',
  t03143: 'rejected, China, Shijiazhuang + Hong Kong, 12h, 任鹏网络',
  t03144: 'rejected, Germany, Frankfurt',
  t03176: 'rejected, USA, San Mateo, Five Star-Helmsman&Heiben',
  t03222: 'rejected, China, Yuncheong, 星云矿池, wed',
  t03223: 'rejected, USA, <19h',
  t03224: 'rejected, Ukraine, Irpin, oboltusov',
  t03266: 'rejected, USA',
  t03273: 'rejected, USA, Portland',
  t03274: 'rejected, USA, Portland',
  t03275: 'rejected, USA, Portland',
  t03286: 'rejected, China, Mianyang',
  t03287: 'rejected, USA',
  t03312: 'rejected, China, Beijing',
  t03314: 'rejected, China, Zhangjiakou, mon, tue-xfr',
  t03317: 'rejected, China, Shenzhen + Hong Kong + Jieyang',
  t03325: 'rejected, Germany, Frankfurt',
  t03337: 'rejected, China, Sichuan, 朝日&网科巨力, wed',
  t03346: 'rejected, China, Huzhou, wckj, <19h',
  t03347: 'rejected, China, Shenzhen',
  t03361: 'rejected, China, Guangzhou, mon',
  t03362: 'rejected, Germany, Berlin',
  t03364: 'rejected, China, Guangzhou',
  t03427: 'rejected, Russia, airalab, mon',
  t03428: 'rejected, China, Beijing + Jiaxing + Germany, Frankfurt, mon',
  t03482: 'rejected, China, Wuxi',
  t03487: 'rejected, China, Yibin',
  t03488: 'rejected, Korea, Geumcheon-gu',
  t03491: 'rejected, China, Hong Kong',
  t03523: 'rejected, China, Wuxi, YC--wuxi, 12h, <23h, wed',
  t03548: 'rejected, Singapore',
  t03515: 'rejected, China, Dongguan',
  t03624: 'rejected, Germany, Chemnitz, ode',
  t03630: 'rejected, China, Wuhan',
  t03638: 'rejected, USA, 13h',
  t03765: 'rejected, Colombia, Medellin',
  t04443: 'rejected, China, Shanghai, 罗良科技',
  t04921: 'rejected, China, Shanghai, mon',
  t05315: 'rejected, USA, Portland',
  t05316: 'rejected, USA, Portland',
  t07709: 'rejected, Korea, Dongjak-gu, 13h, WIGO M.C., wed',
  t07829: 'rejected, Japan, 21h, wed',
  t07830: 'rejected, Singapore',
  t07833: 'rejected, China, Changzhou, 星巢',
  t07850: 'rejected, USA, Portland',
  t07851: 'rejected, Netherlands, Purmerend',
  t07866: 'rejected, China, Foshan',
  t07919: 'rejected, China, Beijing, Shanghai, Hunan',
  t07956: 'rejected, Russia, mon',
  t07961: 'rejected, China, Changzhou, 9h',
  t07969: 'rejected, China, Hangzhou, FME',
  t07990: 'rejected, China, Hong Kong',
  t07998: 'rejected, China, Hangzhou, wed',
  t08022: 'rejected, China, Yibin',
  t08025: 'rejected, China, Hong Kong',
  t08040: 'rejected, Australia, Sydney',
  t08042: 'rejected, Brazil, Sao Paulo',
  t08061: 'rejected, China, Foshan',
  t08073: 'rejected, China, Qiqihar, QY7TT, <23h, thu',
  t08088: 'rejected, China, Dongguan',
  t08095: 'rejected, Canada, Surrey',
  t08096: 'rejected, China, Wuhan',
  t08103: 'rejected, China, Foshan, 花生酱肠粉',
  t08136: "rejected, China, Xi'an",
  t08148: 'rejected, China, Shanghai',
  t08157: 'rejected, China, Beijing + Germany, Frankfurt, 超星际',
  t08183: 'rejected, USA, Irvine',
  t08197: 'rejected, China, Foshan',
  t08199: 'rejected, USA, Sudbury',
  t08229: 'rejected, China, Nanchang, wed',
  t08235: 'rejected, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际',
  t08240: 'rejected, Russia, Novosibirsk, Rabinovitch',
  t08242: 'rejected, China, Weifang',
  t08257: 'rejected, China, Ningbo + USA, Boardman',
  t08285: 'rejected, Latvia, Riga, stander',
  t08289: 'rejected, Canada, Embrun',
  t08322: 'rejected, China, Chongqing',
  t08338: 'rejected, China, Weifang',
  t08347: 'rejected, China, Chengdu',
  t08349: 'rejected, China, Guangzhou, hkicloud',
  t08383: 'rejected, USA, Portland',
  t08384: 'rejected, China, Shandong + Hong Kong + Japan, Heiwajima + ' +
    'Russia, Khabarovsk',
  t08403: 'rejected, UK, Lower Slaughter',
  t08446: 'rejected, Norway, Borgen',
  t08481: 'rejected, USA, Berkeley',
  t08568: 'rejected, USA, Waxhaw, Meatball Part II',
  t08684: 'rejected, China, Fuzhou',
  t08685: 'rejected, China, Fuzhou',
  t08787: 'rejected, China, Yibin, fri',
  t08788: 'rejected, China, Fuzhou',
  t08789: 'rejected, China, Fuzhou',
  t08895: 'rejected, Japan, Ebisunishi',
  t08949: 'rejected, Norway, Oslo',
  t08908: 'rejected, USA, thu',
  t08958: 'rejected, China, Fuzhou',
  t08985: 'rejected, USA',
  t08995: 'rejected, China, Fuzhou',
  t09002: 'rejected, Singapore, fri',
  t09005: 'rejected, China, Fuzhou',
  t09029: 'rejected, China, Wuhan',
  t09037: 'rejected, Singapore',
  t09048: 'rejected, China, Fuzhou',
  t09087: 'rejected, USA',
  t09523: 'rejected, China, Beijing',
  t09555: 'rejected, Australia, Sydney, tue',
  t09560: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t09565: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t09592: 'rejected, Japan, Minamata',
  t09605: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  t09619: 'rejected, China, Shanghai',
  t09620: 'rejected, China, Weifang',
  t09642: 'rejected, Sweden, Alvsjo',
  t09653: 'rejected, China, Chengdu',
  t09662: 'rejected, Canada, Surrey',
  t09671: 'rejected, China, Chongqing',
  t09672: 'rejected, China, Chengdu',
  t09675: 'rejected, China, Weifang',
  t09680: 'rejected, Japan, Ebisunishi',
  t09689: 'rejected, USA, Portland',
  t09696: 'rejected, USA, Portland + Singapore, thu',
  t09710: 'rejected, China, Jieyang, thu-xfr',
  t09723: 'rejected, China, Xiamen',
  t09737: 'rejected, USA, Sudbury',
  t09748: 'rejected, China, Tianjin, fri',
  t09761: 'rejected, China, Beijing, sat',
  t09771: 'rejected, China, Hangzhou, wed',
  t09797: 'rejected, China, Fuzhou',
  t09801: 'rejected, China, Fuzhou',
  t09805: 'rejected, China, Fuzhou',
  t09808: 'rejected, China, Fuzhou',
  t09809: 'rejected, China, Fuzhou',
  t09810: 'rejected, China, Fuzhou',
  t09813: 'rejected, China, Fuzhou',
  t09817: 'rejected, China, Fuzhou',
  t09825: 'rejected, China, Jinhua, sat',
  t09848: 'rejected, USA, fri',
  t09964: 'rejected, China, Beijing + Jiaxing, fri',
  t09983: 'rejected, China, Guangzhou, sat',
  t09985: 'rejected, China, Qingdao, sat',
  t010010: 'rejected, China, Changzhou + Hong Kong, sat',
  t010015: 'rejected, China, Taizhou, sat',
  t010032: 'rejected, China, Fuzhou, sat',
  t010035: 'rejected, Netherlands, sat',
  t010038: 'rejected, China, Hangzhou + Singapore, sat',
  t010048: 'rejected, China, Shanghai, sat',
  t010056: 'rejected, Singapore, sat',
  t010063: 'rejected, China, Mianyang, sat',
  t010078: 'rejected, China, Zhangjiakou + Hong Kong, sat',
  t010202: 'rejected, Singapore, sat',
  t010223: 'rejected, China, Ordos, <19h, <20h, mon',
  t010225: 'rejected, China, Ordos, 11h, 8h, thu',
  t010238: 'rejected, China, Xiamen, sat',
  t010247: 'rejected, China, Yantai, fri',
  t010254: 'rejected, Japan, Minamata, fri',
  t010265: 'rejected, China, Zhengzhou, fri',
  t010274: 'rejected, China, Fuzhou, sat',
  t010276: 'rejected, USA, fri',
  t010277: 'rejected, France, Fontenay-sous-Bois, fri',
  t010287: 'rejected, China, Fuzhou, sat',
  t010291: 'rejected, China, Fuzhou, sat',
  t010293: 'rejected, China, Xiamen, sat',
  t010299: 'rejected, China, Yibin, sat',
  t010308: 'rejected, Germany, Frankfurt, sun',
  t010346: 'rejected, China, Karamay, tue',
  t010362: 'rejected, Brazil, Sao Paulo, sat',
  t010372: 'rejected, Brazil, Sao Paulo, sat',
  t010419: 'rejected, China, Sichuan, sat',
  t010424: 'rejected, Australia, Sydney, sat',
  t010479: 'rejected, France, Fontenay-sous-Bois, sat',
  t010491: 'rejected, China, Shenzhen, <23h, sat',
  t010493: 'rejected, China, Shanghai, sun',
  t010495: 'rejected, China, Tainjin, sat',
  t010496: 'rejected, China, Guangzhou, sun',
  t010498: 'rejected, China, Shenzhen, sat',
  t010505: 'rejected, China, Wuhan, sat',
  t010512: 'rejected, China, Zhengzhou, sat',
  t010513: 'rejected, China, Chongqing, sat',
  t010517: 'rejected, China, Chongqing, sat',
  t010520: 'rejected, China, Hangzhou, tue',
  t010523: 'rejected, China, Beijing, fri',
  t010551: 'rejected, China, Shenyang, 10h, mon',
  t010591: 'rejected, China, Wuhan, sat',
  t010600: 'rejected, USA, sat',
  t010602: 'rejected, China, Guangdong, sat',
  t010606: 'rejected, China, Fuzhou, sat',
  t010608: 'rejected, China, Fuzhou, sat',
  t010609: 'rejected, China, Fuzhou, sat',
  t010617: 'rejected, Canada, Surrey, sat',
  t014230: 'rejected, China, Fuzhou, sat',
  t014241: 'rejected, Norway, Borgen, sun',
  t014248: 'rejected, Turkey, sun',
  t014251: 'rejected, Singapore, sun',
  t014261: 'rejected, China, Fuzhou, sun',
  t014271: 'rejected, China, Fuzhou, mon',
  t014281: 'rejected, Netherlands, Permerend, wed',
  t014302: 'rejected, China, Ningbo, tue',
  t014311: 'rejected, China, Ordos, 10h, thu',
  t014327: 'rejected, China, Ningbo, mon',
  t014329: 'rejected, China, Hong Kong, mon',
  t014348: 'rejected, Brazil, Sao Paulo, mon',
  t014365: 'rejected, Australia, Marrickville + Japan, Heiwajima, sun',
  t014379: 'rejected, Japan, Ebisunishi, mon',
  t014392: 'rejected, Russia, Khabarovsk + USA + Japan, Heiwajima, sun',
  t014395: 'rejected, China, Dongguan, mon',
  t014409: 'rejected, USA, Waxhaw, mon',
  t014415: 'rejected, USA, tue',
  t014440: 'rejected, Hong Kong, tue',
  t014472: 'rejected, China, Ningbo, mon',
  t014483: 'rejected, USA, Clarksville, 11h',
  t014632: 'rejected, Canada, mon',
  t014634: 'rejected, USA, Boardman, mon',
  t014644: 'rejected, USA, Berkeley, tue',
  t014683: 'rejected, China, Shenzhen, tue',
  t014686: 'rejected, Singapore, thu',
  t014699: 'rejected, USA, fri',
  t014701: 'rejected, China, Changzhou, tue',
  t014706: 'rejected, China, Ordos, tue',
  t014741: 'rejected, China, Wuhan, mon',
  t014744: 'rejected, China, Taiyuan, wed',
  t014778: 'rejected, China, Ordos, tue',
  t014804: 'rejected, China, Ordos, tue',
  t014805: 'rejected, China, Ningbo, wed',
  t015232: 'rejected, Poland, Warsaw, mon',
  t015642: 'rejected, China, Fuzhou, wed',
  t015662: 'rejected, China, Beijing, <23h, <22h, thu',
  t015720: 'rejected, China, Ningbo, tue',
  t015726: 'rejected, China, Qingdao, sat',
  t015731: 'rejected, China, Ordos, wed-funds',
  t015732: 'rejected, USA, Portland, tue',
  t015742: 'rejected, China, Ningbo, tue',
  t015751: 'rejected, Canada, Huron East, mon', // no online
  t014799: 'rejected, China, Chongqing, mon',
  t014813: 'rejected, China, Hangzhou + USA, mon',
  t015061: 'rejected, Australia, Sydney, thu',
  t015714: 'rejected, China, Ordos, <23h, tue',
  t015797: 'rejected, Germany, Rostock, thu',
  t015798: 'rejected, Germany, thu',
  t015799: 'rejected, Germany, Rostock, thu',
  t015800: 'rejected, Germany, Sankt Andreasberg, thu',
  t015801: 'rejected, Germany, Ismaning, fri',
  t015802: 'rejected, Germany, thu',
  t015803: 'rejected, Germany, thu',
  t015804: 'rejected, Germany, Ismaning, thu',
  t015805: 'rejected, Germany, fri',
  t015806: 'rejected, Germany, thu',
  t015807: 'rejected, Germany, thu',
  t015808: 'rejected, Germany, thu',
  t015809: 'rejected, Germany, thu',
  t015810: 'rejected, Germany, thu',
  t015811: 'rejected, Germany, Lanshut, thu',
  t015812: 'rejected, Germany, thu',
  t015818: 'rejected, Netherlands, mon',
  t015819: 'rejected, China, Fuzhou, fri',
  t015826: 'rejected, China, Fuzhou, fri',
  t015827: 'rejected, Russia, mon',
  t015829: 'rejected, China, Beijing, mon',
  t015839: 'rejected, China, Fuzhou, sun',
  t015845: 'rejected, China, Fuzhou, sun',
  t015846: 'rejected, South Africa, Johannesburg, fri',
  t015860: 'rejected, Ukraine, Odessa, mon',
  t015862: 'rejected, Ukraine, Odessa, wed-funds',
  t015866: 'rejected, China, Fuzhou, fri',
  t015867: 'rejected, Netherlands, Amsterdam, mon',
  t015870: 'rejected, China, Hangzhou, mon',
  t015873: 'rejected, China, Fuzhou, mon',
  t015875: 'rejected, China, Fuzhou, mon',
  t015877: 'rejected, China, Jiaxing + USA, thu',
  t015887: 'rejected, China, Fuzhou, sun',
  t015900: 'rejected, Germany, thu',
  t015901: 'rejected, Germany, thu',
  t015902: 'rejected, Germany, fri',
  t015903: 'rejected, Germany, thu',
  t015907: 'rejected, Canada, Calgary, wed',
  t015910: 'rejected, Turkey, tue',
  t015918: 'rejected, China, Fuzhou, tue',
  t015919: 'rejected, China, Ordos, fri',
  t015922: 'rejected, China, fri',
  t015925: 'rejected, China, Ordos, fri',
  t015926: 'rejected, China, fri',
  t015927: 'rejected, USA, East Islip, tue',
  t015941: 'rejected, Ukraine, Kyiv, sun',
  t015942: 'rejected, China, Ningbo, tue',
  t016024: 'rejected, China, Fuzhou, tue',
  t016056: 'rejected, USA, Arlington, wed',
  t016140: 'rejected, China, Beijing, tue',
  t016202: 'rejected, Korea, Songpa-gu, sun',
  t016279: 'rejected, Finland, Helsinki, tue',
  t016302: 'rejected, China, Fuzhou, wed',
  t016303: 'rejected, USA, Boardman, @ribasushi, wed',
  t016304: 'rejected, USA, Boardman, @ribasushi, wed',
  t016305: 'rejected, USA, Boardman, @ribasushi, wed',
  t016306: 'rejected, USA, Boardman, @ribasushi, wed', 
  t016309: 'rejected, USA, Boardman, @ribasushi, wed', 
  t016398: 'rejected, Singapore, fri',
  t016412: 'rejected, China, Taiwan, Taipei, wed',
  t016482: 'rejected, USA, Aliquippa, thu',
  t016850: 'rejected, Japan, thu',
  t016866: 'rejected, China, Fuzhou, thu',
  t017067: 'rejected, China, Fuzhou, thu',
  t017082: 'rejected, South Africa, Johannesburg, thu',
  t017136: 'rejected, Australia, Sydney, thu',
  t017193: 'rejected, Singapore, fri',
  t017200: 'rejected, Lithuania, thu',
  t017229: 'rejected, USA, Portland, fri',
  t017242: 'rejected, China, Guangdong, thu',
  t017273: 'rejected, China, Liaoning, fri',
  t017323: 'rejected, Poland, Warsaw, fri',
  t017250: 'rejected, China, Zhejiang, thu',
  t017628: 'rejected, Brazil, Sao Paulo, fri',
  t017738: 'rejected, China, fri',
  t017796: 'rejected, China, Fuzhou, fri',
  t018081: 'rejected, Germany, fri',
  t018095: 'rejected, Colombia, Medellin, fri',
  t018393: 'rejected, Colombia, Medellin, sat',
  t018456: 'rejected, Brazil, Sao Paulo, sat',
  t018476: 'rejected, China, Fuzhou, sat',
  t018493: 'rejected, Denmark, Kobenhavn S, sun',
  t018498: 'rejected, Singapore, sun',
  t018520: 'rejected, China, sun',


  // Dial errors

  t01229: 'dial, China, Hong Kong',
  t01475: 'dial, China, Wuhan + Germany',
  t02382: 'dial, China, Zhongshan, tue-cfa', // actor not found
  t02386: 'dial, Latvia, Riga',
  t02400: 'dial, China, Beijing',
  t02414: "dial, China, Xi'an, zhejiangyunchu",
  t02418: 'dial, China, Fujian + Netherlands, wed',
  t02421: 'dial, China, Deyang + Singapore, 腾盛科技, <19h, sun',
  t02438: 'dial, Singapore',
  t02490: 'dial, China, Fujian',
  t02529: 'dial, China, Chongqing',
  t02533: 'dial, Spain, Terrassa, LowFeeValidation.com, mon',
  t02540: 'dial, USA, Rochester, 12h, mon',
  t02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima',
  t02610: 'dial, Netherlands',
  t02632: 'dial, China, Tianjin',
  t02645: 'dial, China, Hong Kong',
  t02657: 'dial, China, Ordos, tue-xfr',
  t02664: 'dial, China, Hangzhou, ciger',
  t02721: 'dial, USA',
  t02723: 'dial, China, Hong Kong',
  t02725: 'dial, China, Hong Kong',
  t02731: 'dial, Singapore',
  t02774: 'dial, Australia, Sydney, tue',
  t03120: 'dial, China, Guangzhou, wed',
  t03134: 'dial, China, Cangzhou, 乔木信息',
  t03140: 'dial, China, QingDao, wed',
  t03220: 'dial, China, Ordos, wed-xfr',
  t03269: 'dial, Australia',
  t03276: 'dial, China, Dongguan, tue',
  t03302: 'dial, China, Chengdu',
  t03326: 'dial, USA, Seattle, tue',
  t03327: 'dial, Kenya, Nairobi',
  t03350: 'dial, China, Wuhan',
  t03351: 'dial, China, Chengdu, 10h',
  t03359: 'dial, China, Shanghai',
  t03360: 'dial, China, Shaanxi, fri',
  t03367: 'dial, Singapore',
  t03490: 'dial, China, Dongguan, wed-xfr',
  t03512: 'dial, New Zealand, Auckland, NZFILECOIN01, thu',
  t03519: 'dial, USA, wed',
  t03646: 'dial, China, Beijing, JingTang, fri-cfa',
  t03764: 'dial, China, Beijing, foobar',
  t03766: 'dial, China, Weifang, mon',
  t05317: 'dial, USA, Portland',
  t07451: 'dial, China, Hangzhou, mon',
  t07710: 'dial, Hong Kong, <19h',
  t07752: 'dial, China, Dongguan, wed-cfa',
  t07774: 'dial, China, Shenzhen',
  t07775: 'dial, China, Shenzhen, 16h, <22h, <23h, sat',
  t07819: 'dial, China, Wuxi, YC--wuxi',
  t07826: 'dial, China, Shenzhen, 星际医生, <19h',
  t07848: 'dial, China, Wuhan, wed',
  t07857: 'dial, China, Zhengzhou, mon',
  t07944: 'dial, China, Hangzhou, SupremeTreasure, sun',
  t07947: 'dial, China, Zhengzhou, mon',
  t07982: 'dial, China, Shenzhen',
  t07991: 'dial, China, Changsha',
  t08006: 'dial, China, Shaanxi, wed',
  t08032: 'dial, China, Weifang',
  t08047: 'dial, China, Hangzhou',
  t08063: 'dial, China, Huizhou, wed',
  t08076: 'dial, Netherlands, Alphen aan den Rijn, Ang, tue',
  t08101: 'dial, China, Wuxi',
  t08149: 'dial, China, Jiangmen',
  t08150: 'dial, China, Hangzhou',
  t08161: 'dial, China, Weifang, wed',
  t08178: 'dial, China, Jiaxing, CAAP-金华, 12h, tue',
  t08203: 'dial, Germany, Frankfurt',
  t08295: 'dial, China, Suzhou, IPFS Cloud, sat',
  t08301: 'dial, Japan, Setagaya-ku, MEIK, <19h, sun',
  t08330: 'dial, China, Chengdu, oursoft',
  t08344: 'dial, UK, Hartlepool',
  t08346: 'dial, Korea, wed',
  t08358: 'dial, China, Shenzhen',
  t08396: 'dial, France, Fontenay-sous-Bois',
  t08405: 'dial, China, Guangdong, wed',
  t08418: 'dial, China, Chansha + USA, sat',
  t08243: 'dial, USA, Queens, sat',
  t08448: 'dial, China, Guangdong, sun',
  t08497: 'dial, Brazil, Sao Paulo',
  t08264: 'dial, China, Xianning, mon',
  t08399: 'dial, USA, Sammamish, mon',
  t08793: 'dial, China, Fuzhou',
  t08904: 'dial, China, Deyang, <19h',
  t08917: 'dial, China, Beijing, thu',
  t08928: 'dial, USA, Arlington, theartist',
  t08953: 'dial, China, Fuzhou',
  t08991: 'dial, China, Ili, wed',
  t09036: 'dial, China, Chengdu, CD-oursoft, sat',
  t09077: 'dial, China, Xiamen',
  t09082: 'dial, Australia, Canberra, sat',
  t09088: 'dial, China, Changsha, wed',
  t09091: 'dial, Netherlands',
  t09537: 'dial, USA, El Monte, tue',
  t09559: 'dial, Canada, Waterloo, thu',
  t09589: 'dial, China, Changsha, <13h, mon',
  t09631: 'dial, China, Changzhou',
  t09643: 'dial, China, Beijing, sat',
  t09664: 'dial, Australia, Sydney, sat',
  t09707: 'dial, China, Guangdong, sat',
  t09729: 'dial, China, Dongguan, sat',
  t09734: 'dial, China, Dongguan',
  t09736: 'dial, China, Guangdong, sun',
  t09763: 'dial, China, Mianyang,  <13h',
  t09789: 'dial, USA, thu',
  t09792: 'dial, USA, Council Bluffs, thu',
  t09814: 'dial, China, Fuzhou',
  t09830: 'dial, Korea, Geumcheon-gu, sat',
  t09838: 'dial, Russia, Irkutsk, thu',
  t09859: 'dial, USA, fri',
  t09972: 'dial, Finland, Helsinki, sat',
  t010005: 'dial, China, Zhongshan, tue',
  t010020: 'dial, China, Chongqing, sat',
  t010170: 'dial, China, Fuzhou, sat',
  t010224: 'dial, China, Fuzhou, fri',
  t010268: 'dial, China, Hangzhou, sat',
  t010270: 'dial, China, Shijiazhuang, tue',
  t010289: 'dial, China, Fuzhou, sat',
  t010298: 'dial, China, Fuzhou, sat',
  t010374: 'dial, Norway, Borgen, sat',
  t010400: 'dial, China, Shenyang, tue',
  t010411: 'dial, USA, sat',
  t010438: 'dial, USA, sun',
  t010507: 'dial, China, Hangzhou, <19h',
  t010533: 'dial, China, Ordos, 12h, 13h, wed',
  t010553: 'dial, China, Ordos, 10h, tue',
  t010598: 'dial, Canada, Waterloo, sat',
  t010607: 'dial, China, Guangzhou, tue',
  t010612: 'dial, USA, Mountain View, sat',
  t010613: 'dial, Canada, Waterloo, sat',
  t014393: 'dial, China, Zhejiang, wed',
  t014407: 'dial, China, Shanghai, thu',
  t014420: 'dial, Russia, Samara, mon',
  t014328: 'dial, Canada, Waterloo, 12h, wed',
  t014481: 'dial, China, Shanghai, <23h',
  t014547: 'dial, China, Fuzhou, mon',
  t014573: 'dial, China, Fuzhou, mon',
  t014606: 'dial, Australia, Sydney, mon',
  t014609: 'dial, China, Fuzhou, mon',
  t014640: 'dial, Hungary, tue',
  t014768: 'dial, Singapore, thu',
  t015643: 'dial, China, Ordos, <23h, wed',
  t015733: 'dial, China, Ordos, wed-funds',
  t015737: 'dial, Brazil, Sao Paulo, mon',
  t015756: 'dial, Finland, Helsinki, mon',
  t015861: 'dial, Ukraine, Odessa, mon',
  t015898: 'dial, Lithuania, mon',
  t015914: 'dial, China, Fuzhou, tue',
  t015928: 'dial, China, Fuzhou, tue',
  t015933: 'dial, Finland, Helskinki, tue',
  t016172: 'dial, China, Guangdong, tue',
  t016263: 'dial, Australia, Sydney, tue',
  t016276: 'dial, China, Beijing, fri',
  t016299: 'dial, China, Shanghai, sat',
  t016364: 'dial, China, Hefei, thu',
  t016419: 'dial, USA, Mountain View, thu',
  t016479: 'dial, China, Dongguan, thu',
  t017038: 'dial, China, Fuzhou, thu',
  t017186: 'dial, China, Jiaxing, thu',
  t017194: 'dial, China, Hefei, thu',
  t017266: 'dial, China, Fuzhou, thu',
  t017672: 'dial, China, Cangzhou, fri',
  t018128: 'dial, China, Dongguan, fri',
  t018440: 'dial, Russia, St. Petersburg, sat',
  t018464: 'dial, Sweden, Stockholm, sat',


  // XNR

  t01101: 'xnr, China, Shanghai, 5h, 5h',
  t01102: 'xnr, China, Shandong, 5h, 7h, sat',
  t01156: 'xnr, China, Hangzhou, wed-cfa',
  t01232: 'xnr, China, Hangzhou, wed',
  t01274: 'xnr, China, Guangdong, 11h, wed-funds',
  t02304: 'xnr, USA, Mountain View, 6h, tue',
  t02385: 'xnr, USA, East Islip, 20h, wed',
  t02424: 'xnr, Korea, Wanju, mon, tue',
  t02436: 'xnr, Netherlands',
  t02506: 'xnr, USA, Clarksville, wed',
  t02518: 'xnr, China, Shaanxi, mon',
  t02575: 'xnr, USA, Davis, wed',
  t02608: 'xnr, USA, San Jose, mon',
  t03149: 'xnr, USA, Newton, mon',
  t03264: 'xnr, Korea, Bucheon-si, wed',
  t03544: 'xnr, China, Guiyang, wed',
  t06262: 'xnr, China, Guangzhou, wed',
  t07717: 'xnr, China, Shenyang, tue',
  t07772: 'xnr, China, Dongguan, <19h',
  t07796: 'xnr, China, Hunan, mon',
  t07924: 'xnr, USA, wed-funds',
  t07945: 'xnr, China, Dongguan, wed',
  t07964: 'xnr, USA, Ashburn, wed',
  t08019: 'xnr, China, Yantai, 三合, <19h, <22h, mon',
  t08097: 'xnr, Korea, Pyeongtaek-si, mon',
  t08225: 'xnr, Australia, Sydney, wed',
  t08246: 'xnr, USA, wed',
  t08284: 'xnr, China, Liaoning, <19h',
  t08311: 'xnr, China, Shenzhen, <19h',
  t08315: 'xnr, China, Chongqing, wed',
  t08361: 'xnr, Malaysia, Kulai, wed',
  t08388: 'xnr, China, Taizhou, <19h',
  t08402: 'xnr, China, Sichuan, wed',
  t08424: 'xnr, China, Chengdu, wed',
  t08440: 'xnr, France, Fontenay-sous-Bois, wed',
  t08574: 'xnr, USA, wed',
  t08911: 'xnr, Korea, Wanju, <19h, sat',
  t08980: 'xnr, USA, San Jose, wed',
  t08988: 'xnr, Korea, Hwaseong-si, tue',
  t09007: 'xnr, Korea, Hwaseong-si, wed',
  t09055: 'xnr, China, Jieyang, wed',
  t09610: 'xnr, China, Beijing, thu',
  t09712: 'xnr, China, Chengdu, mon',
  t09719: 'xnr, Korea, Geumcheon-gu',
  t09721: 'xnr, ???, CD-oursoft-1',
  t09733: 'xnr, China, Chongqing, thu',
  t09753: 'xnr, Korea, Pyeongtaek-si, thu-cfa',
  t09762: 'xnr, China, Guangdong, thu',
  t09840: 'xnr, China, Baoding, sat',
  t09912: 'xnr, USA, Concord, sat',
  t09974: 'xnr, Canada, Calgary, sat',
  t09811: 'xnr, China, Dongguan, sun',
  t09997: 'xnr, USA, sun',
  t010009: 'xnr, USA, East Islip, sat',
  t010028: 'xnr, USA, Berkeley, sat',
  t010227: 'xnr, China, Xiamen, fri',
  t010244: 'xnr, USA, Newton, fri',
  t010248: 'xnr, China, Yibin, fri',
  t010275: 'xnr, Korea, Cheongju-si + USA, fri',
  t010281: 'xnr, China, Shanghai, fri-cfa',
  t010282: 'xnr, USA, San Francisco, fri',
  t010283: 'xnr, Brazil, Sao Paulo, fri',
  t010297: 'xnr, USA, Howell, tue',
  t010303: 'xnr, China, Guangdong, sun',
  t010310: 'xnr, Canada, Surrey, sat',
  t010311: 'xnr, Korea, Hwaseong-si, mon',
  t010315: 'xnr, Canada, Surrey, sat',
  t010402: 'xnr, China, Shenyang, mon',
  t010433: 'xnr, Korea, Seoul, sun',
  t010453: 'xnr, China, Shaanxi, sun',
  t010468: 'xnr, China, Guangzhou, mon',
  t010542: 'xnr, China, Ordos, sun',
  t010549: 'xnr, China, Ordos, sun',
  t010593: 'xnr, USA, East Islip, <19h',
  t010603: 'xnr, China, Baoding, sun',
  t014246: 'xnr, China, Shenzhen, mon',
  t014314: 'xnr, Korea, Bucheon-si, wed',
  t014331: 'xnr, China, Chongqing, mon',
  t014354: 'xnr, USA, Concord, mon',
  t014388: 'xnr, China, Guangdong, tue',
  t014389: 'xnr, China, Chongqing, mon',
  t014419: 'xnr, USA, San Diego, mon',
  t014477: 'xnr, China, Hangzhou, mon',
  t014478: 'xnr, Finland, mon',
  t014495: 'xnr, China, Hong Kong, thu',
  t014514: 'xnr, China, Fuzhou, mon',
  t014533: 'xnr, China, Fuzhou, mon',
  t014540: 'xnr, USA, Newton, mon',
  t014660: 'xnr, Korea, Busan, mon',
  t014685: 'xnr, Hong Kong, mon',
  t015655: 'xnr, Korea, Geumcheon-gu, mon',
  t015724: 'xnr, China, Guangdong, mon',
  t014745: 'xnr, China, Shenyang, <22h, <24h',
  t014764: 'xnr, Korea, Wanju, thu',
  t015833: 'xnr, China, Baoding, mon',
  t015920: 'xnr, China, Guangdong, tue',
  t015935: 'xnr, China, Sichuan, tue',
  t016162: 'xnr, France, Borgo, thu',
  t016203: 'xnr, China, Chengdu, wed',
  t016217: 'xnr, China, Nanchong, tue',
  t016234: 'xnr, China, Chengdu, thu',
  t016262: 'xnr, China, Fuzhou, tue',
  t016271: 'xnr, Korea, Seodaemun-gu, tue',
  t017181: 'xnr, China, Nanchong, thu',
  t017215: 'xnr, Finland, fri',
  t017251: 'xnr, USA, <1d, fri',
  t017334: 'xnr, China, Fuzhou, fri',
  t017970: 'xnr, China, Baoding, fri',
  t018311: "xnr, China, Xi'an, <23h",
  t018429: 'xnr, Korea, Hwaseong-si, sat',
  t018446: 'xnr, China, Dongguan, sat',


  // NR
  t01013: 'NR',
  t02654: 'NR',
  t02767: 'NR',
  t03319: 'NR',
  t03320: 'NR, bcm',
  t03341: 'NR',
  t03358: 'NR',
  t03363: 'NR',
  t03622: 'NR, 黑犇科技',
  t03702: 'NR, LianDongJingLing',
  t05664: 'NR, 艾比特网络科技',
  t07731: 'NR',
  t07756: 'NR',
  t07810: 'NR',
  t07824: 'NR',
  t07843: 'NR',
  t07931: 'NR',
  t07959: 'NR',
  t08053: 'NR',
  t08091: 'NR',
  t08135: 'NR',
  t08139: 'NR',
  t08170: 'NR',
  t08171: 'NR',
  t08204: 'NR',
  t08207: 'NR',
  t08223: 'NR',
  t08238: 'NR',
  t08280: 'NR',
  t08290: 'NR',
  t08293: 'NR',
  t08319: 'NR',
  t08327: 'NR',
  t08385: 'NR',
  t08393: 'NR',
  t08425: 'NR',
  t08429: 'NR, yfeing',
  t08460: 'NR',
  t08474: 'NR, lone',
  t08503: 'NR',
  t08791: 'NR',
  t08893: 'NR',
  t08902: 'NR',
  t08964: 'NR',
  t08986: 'NR',
  t08994: 'NR',
  t09006: 'NR',
  t09035: 'NR',
  t09076: 'NR',
  t09084: 'NR',
  t09529: 'NR',
  t09538: 'NR',
  t09561: 'NR',
  t09569: 'NR',
  t09578: 'NR',
  t09594: 'NR',
  t09629: 'NR',
  t09639: 'NR',
  t09656: 'NR',
  t09704: 'NR',
  t09828: 'NR',
  t09966: 'NR',
  t09969: 'NR',
  t010033: 'NR',
  t010084: 'NR',
  t010088: 'NR',
  t010200: 'NR',
  t010213: 'NR',
  t010222: 'NR',
  t010241: 'NR',
  t010253: 'NR',
  t010292: 'NR',
  t010313: 'NR',
  t010382: 'NR',
  t010398: 'NR',
  t010405: 'NR',
  t010425: 'NR',
  t010490: 'NR',
  t010527: 'NR',
  t010566: 'NR',
  t010601: 'NR',
  t010616: 'NR',
  t014324: 'NR',
  t014377: 'NR',
  t014486: 'NR',
  t014522: 'NR',
  t014629: 'NR',
  t014749: 'NR',
  t014782: 'NR',
  t015233: 'NR',
  t015685: 'NR',
  t016238: 'NR',
  t016408: 'NR',
  t016426: 'NR',
  t016511: 'NR',
  t016603: 'NR',
  t016628: 'NR',
  t016859: 'NR',
  t017171: 'NR',
  t017209: 'NR',
  t017216: 'NR',
  t017236: 'NR',
  t017655: 'NR',
  t017722: 'NR',
  t017747: 'NR',
  t017793: 'NR',
  t018369: 'NR',
  t018437: 'NR',
  t018501: 'NR',
  t018513: 'NR',
  t018538: 'NR',
  
  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
