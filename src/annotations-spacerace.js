const annotations = {

  // Active - wed
 
  t01289: 'retest, China, Hangzhou + USA, <19h', // rejected?
  t01799: 'retest, China, Jinan, TokenHome, <19h', // rejected?
  t02301: 'active, USA, <19h',
  t02421: 'active, China, Deyang + Singapore, <19h, 腾盛科技',
  t02613: 'active, China, Chongqing, 10h, <19h',
  t02625: 'active, China, Shanghai, IPFS星际工厂, <19h',
  t02627: 'active, China, Guilin, <19h',
  t03194: 'active, China, Shenzhen, 成都云存&Npool, <19h',
  t03223: 'active, USA, <19h',
  t03305: 'active, Kenya, Nairobi, <19h',
  t03306: 'active, Australia, <19h',
  t03340: "active, China, Xi'an, <19h",
  t03345: 'active, China, Fuzhou, chh, <19h',
  t03346: 'reset, China, Huzhou, wckj, <19h', // error reset?
  t07710: 'reset, Hong Kong, <19h',  // backoff?
  t07772: 'active, China, Dongguan, <19h',
  t07826: 'active, China, Shenzhen, 星际医生, <19h',
  t08019: 'active, China, Yantai, 三合, <19h',
  t08220: 'active, China, Shenzhen, <19h',
  t08284: 'active, China, Liaoning, <19h',
  t08301: 'active, Japan, Setagaya-ku, MEIK, <19h',
  t08311: 'active, China, Shenzhen, <19h',
  t08904: 'retest, China, Deyang, <19h', // backoff?
  t08911: 'active, Korea, Wanju, <19h',

  // Active/sealing - wed
 
  t02385: 'retest, USA, East Islip, 20h, wed', // backoff?
  t02404: 'active, Korea, Seoul, 10h, TVCC& BLOCK DATA BANK, wed',
  t02419: 'active, China, Shanghai, 10h, yuantai, wed',
  t02540: 'active, USA, Rochester, 12h, wed',
  t02620: 'active, Poland, Krakow, @magik6k, 20h, wed',
  t03484: 'active, Netherlands, 14h, wed',
  t07709: 'retest, Korea, Dongjak-gu, 13h, WIGO M.C., wed', // rejected?
  t07775: 'active, China, Shenzhen, 16h, wed',
  t07829: 'retest, Japan, 21h, wed', // rejected?

  // Sealing - thu

  t09036: 'sealing, China, Chengdu, CD-oursoft, thu',
  t09559: 'sealing, Canada, Waterloo, thu',
  t09573: 'retest, China, Xiamen, thu', // dial?
  t09589: 'sealing, China, Changsha, thu',
  t09643: 'sealing, China, Beijing, thu',
  t09707: 'sealing, China, Guangdong, thu',
  t09712: 'sealing, China, Chengdu, thu',
  t09731: 'sealing, China, Guiyang, thu',
  t09733: 'sealing, China, Chongqing, thu',
  t09736: 'sealing, China, Guangdong, thu',
  t09762: 'sealing, China, Guangdong, thu',
  t09763: 'sealing, China, Mianyang, thu',
  t09792: 'sealing, USA, Council Bluffs, thu',

  // Stuck - thu

  t09710: 'stuck, China, Jieyang, thu-xfr',
  t09753: 'stuck, Korea, Pyeongtaek-si, thu-cfa',

  // Sealing - wed

  t01152: 'sealing, China, Beijing, wed',
  t02307: 'sealing, China, Taiyuan, filecoin.monster, wed',
  t02418: 'retest, China, Fujian + Netherlands, wed', // dial?
  t02506: 'sealing, USA, Clarksville, wed',
  t02575: 'retest, USA, Davis, wed', // xnr?
  t02658: 'sealing, China, Ningbo, bluematrix, wed',
  t02665: 'sealing, Netherlands, Amsterdam, fm-ops, wed',
  t03120: 'retest, China, Guangzhou, wed', // dial?
  t03136: "sealing, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, wed",
  t03140: 'retest, China, QingDao, wed', // dial?
  t03222: 'retest, China, Yuncheong, 星云矿池, wed', // error reset?
  t03225: 'sealing, China, Guyuan, wed',
  t03264: 'sealing, Korea, Bucheon-si, wed',
  t03307: 'sealing, Australia, wed',
  t03328: 'sealing, China, Xinxiang, wed',
  t03337: 'sealing, China, Sichuan, 朝日&网科巨力, wed',
  t03339: 'sealing, China, Luzhou, benxun, wed',
  t03512: 'sealing, New Zealand, Auckland, NZFILECOIN01, wed',
  t03519: 'sealing, USA, wed',
  t03523: 'sealing, China, Wuxi, YC--wuxi, wed',
  t03544: 'sealing, China, Guiyang, wed',
  t03620: 'sealing, Germany, Frankfurt, wed',
  t03646: 'retest, China, Beijing, JingTang, wed', // backoff?
  t06262: 'retest, China, Guangzhou, wed', // xnr?
  t07806: 'sealing, China, Wuhan, HelloXP, wed',
  t07827: 'sealing, China, Wuhan, 天际合, wed',
  t07848: 'retest, China, Wuhan, wed', // backoff?
  t07944: 'sealing, China, Hangzhou, SupremeTreasure, wed',
  t07945: 'sealing, China, Dongguan, wed',
  t07964: 'sealing, USA, Ashburn, wed',
  t07987: 'sealing, China, Beijing, wed',
  t08006: 'sealing, China, Shaanxi, wed',
  t08063: 'retest, China, Huizhou, wed', // dial?
  t08073: 'sealing, China, Qiqihar, QY7TT, wed',
  t08094: 'sealing, China, Guangzhou, dongshao, wed',
  t08178: 'retest, China, Jiaxing, CAAP-金华, wed', // error reset?
  t08225: 'sealing, Australia, Sydney, wed',
  t08229: 'retest, China, Nanchang, wed', // backoff?
  t08246: 'sealing, USA, wed',
  t08295: 'retest, China, Suzhou, IPFS Cloud, wed', // error?
  t08315: 'retest, China, Chongqing, wed', // xnr?
  t08346: 'retest, Korea, wed', // dial?
  t08361: 'sealing, Malaysia, Kulai, wed',
  t08399: 'sealing, USA, Sammamish, wed',
  t08402: 'sealing, China, Sichuan, wed',
  t08432: 'sealing, China, Taizhou, wed',
  t08448: 'sealing, China, Guangdong, wed',
  t08482: 'sealing, USA, Athol, @why, Why, wed',
  t08574: 'retest, USA, wed', // xnr?
  t08854: 'retest, China, Dongguan, wed', // error?
  t08937: 'sealing, China, Wuxi, YC--wuxi, wed',
  t08980: 'retest, USA, San Jose, wed', // xnr?
  t08988: 'sealing, Korea, Hwaseong-si, wed',
  t08991: 'retest, China, Ili, wed', // dial?
  t09007: 'retest, Korea, Hwaseong-si, wed', // backoff?
  t09053: 'sealing, China, Shenzhen, wed',
  t09055: 'retest, China, Jieyang, wed', // backoff?
  t09088: 'retest, China, Changsha, wed', // dial?

  // Stuck - wed

  t01156: 'stuck, China, Hangzhou, wed-cfa',
  t01274: 'stuck, China, Guangdong, 11h, wed-funds',
  t02382: 'stuck, China, Zhongshan, wed-cfa',
  t03220: 'stuck, China, Ordos, wed-xfr',
  t03490: 'stuck, China, Dongguan, wed-xfr',
  t07752: 'stuck, Chian, Dongguan, wed-cfa',
 

  // New


  // Asks

  t09056: 'min-ask, China, Shenzhen, SZSQ1',

  // Error

  t01102: 'error, China, Shandong, 5h, 7h', // reset
  t02304: 'error, USA, Mountain View, 6h, tue', // EOF
  t03002: 'error, China, Chongqing, 11h, wed-cfa', // PublishStorageDeals errored: handler: websocket connection closed
  t03326: 'error, USA, Seattle, tue', // market balance
  t03344: 'error, China, Guangzhou, 13h', // reset
  t03365: 'error, China, Wuhan + Wuxi', // market balance
  t03366: 'error, China, Wuhan + Wuxi', // getting client market balance failed
  t03485: 'error, Netherlands, 13h, 14h', // market balance
  t03517: 'error, China, Wuhan + Wuxi', // getting client market balance failed
  t03619: 'error, China, Xiamen', // (State=26) handing off deal to node: AddPiece failed: getting available sector: getting sector number: filemist has not start seal yet
  t06775: 'error, China, Shenzhen, IPSB&CAAP, wed', // reset
  t07924: 'error, USA, wed-funds', // reset
  t08076: 'error, Netherlands, Alphen aan den Rijn, Ang, tue', // deal failed: (State=26) handing off deal to node: AddPiece failed: getting available sector: too many sectors sealing
  t08109: 'error, USA, qianyuanyunshuo', // reset
  t08205: 'error, Brazil, Sao Paulo', // market balance
  t08406: 'error, China, Shenzhen', // reset
  t08572: 'error, Brazil, Sao Paulo', // market balance
  t09077: 'error, China, Xiamen', // reset
  t09261: 'error, Brazil, Sao Paulo', // market balance
  t09734: 'error, China, Dongguan', // reset
  t09811: 'error, China, Dongguan', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build tree Caused by: 0: failed to create data store 1: No such file or directory (os error 2)
  t09814: 'error, China, Fuzhou', // reset



  // Dial backoff

  t03149: 'backoff, USA, Newton, mon',
  t08161: 'backoff, China, Weifang, wed', // backoff?
  t08390: 'backoff, China, Shenzhen, <19h',
  t08440: 'backoff, France, Fontenay-sous-Bois, wed',
  t09789: 'backoff, USA, thu',

  // Rejected

  t01012: 'rejected, China, Hong Kong + Guangzhou',
  t01100: 'rejected, Serbia, Belgrade, filmine.io',
  t01151: 'rejected, USA, Waxhaw',
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
  t01291: 'rejected, Sweden, Stockholm, tvsthlm',
  t01782: 'rejected, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  t01800: 'rejected, China, Shenzhen + Chengdu, 8h',
  t01801: 'rejected, Switzerland, Baar, Gogoșel',
  t02299: 'rejected, China, Dongguan, Yolo',
  t02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  t02305: 'rejected, China, Dongguan, SZSQ',
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
  t02501: 'rejected, USA, Portland',
  t02503: 'rejected, China, Wuhan',
  t02505: 'rejected, China, Wuhan, tue',
  t02514: 'rejected, USA, Portland',
  t02515: 'rejected, China, Hangzhou',
  t02516: 'rejected, China, Hong Kong',
  t02520: 'rejected, China, Hong Kong + Dongguan',
  t02528: 'rejected, China, Hong Kong + Inner Mongolia',
  t02532: 'rejected, Singapore',
  t02534: 'rejected, China, Beijing',
  t02574: 'rejected, Japan, Minamata, mon',
  t02576: 'rejected, Denmark, Gjerlev, BenjaminH',
  t02606: 'rejected, China, Shanghai',
  t02607: 'rejected, China, Beijing',
  t02614: 'rejected, Singapore, mon',
  t02619: 'rejected, China, Beijing, Blockcasting',
  t02621: "rejected, China, Xi'an",
  t02622: 'rejected, USA, Portland',
  t02623: 'rejected, USA, Portland',
  t02624: 'rejected, China, Shanghai, filecoin.cn',
  t02626: 'rejected, China, Guangzhou + Hong Kong',
  t02633: 'rejected, China, Hong Kong',
  t02726: 'rejected, USA, Brooklyn',
  t02732: 'rejected, USA',
  t02755: 'rejected, China, Shijiazhuang',
  t02768: 'rejected, China, Hong Kong',
  t02770: 'rejected, China, Hong Kong',
  t02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  t03021: 'rejected, China, Hong Kong',
  t03131: 'rejected, China, Changsha',
  t03143: 'rejected, China, Shijiazhuang + Hong Kong, 12h, 任鹏网络',
  t03144: 'rejected, Germany, Frankfurt',
  t03176: 'rejected, USA, San Mateo, Five Star-Helmsman&Heiben',
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
  t07998: 'rejected, China, Hangzhou, wed', // dial?
  t08022: 'rejected, China, Yibin',
  t08025: 'rejected, China, Hong Kong',
  t08040: 'rejected, Australia, Sydney',
  t08042: 'rejected, Brazil, Sao Paulo',
  t08061: 'rejected, China, Foshan',
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
  t08788: 'rejected, China, Fuzhou',
  t08789: 'rejected, China, Fuzhou',
  t08895: 'rejected, Japan, Ebisunishi',
  t08949: 'rejected, Norway, Oslo',
  t08958: 'rejected, China, Fuzhou',
  t08985: 'rejected, USA',
  t08995: 'rejected, China, Fuzhou',
  t09005: 'rejected, China, Fuzhou',
  t09029: 'rejected, China, Wuhan',
  t09037: 'rejected, Singapore',
  t09048: 'rejected, China, Fuzhou',
  t09087: 'rejected, USA',
  t09523: 'rejected, China, Beijing',
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
  t09723: 'rejected, China, Xiamen',
  t09737: 'rejected, USA, Sudbury',
  t09797: 'rejected, China, Fuzhou',
  t09801: 'rejected, China, Fuzhou',
  t09805: 'rejected, China, Fuzhou',
  t09808: 'rejected, China, Fuzhou',
  t09809: 'rejected, China, Fuzhou',
  t09810: 'rejected, China, Fuzhou',
  t09813: 'rejected, China, Fuzhou',
  t09817: 'rejected, China, Fuzhou',



  // Dial errors

  t01229: 'dial, China, Hong Kong',
  t01475: 'dial, China, Wuhan + Germany',
  t02386: 'dial, Latvia, Riga',
  t02400: 'dial, China, Beijing',
  t02414: "dial, China, Xi'an, zhejiangyunchu",
  t02438: 'dial, Singapore',
  t02490: 'dial, China, Fujian',
  t02529: 'dial, China, Chongqing',
  t02533: 'dial, Spain, Terrassa, LowFeeValidation.com, mon',
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
  t03134: 'dial, China, Cangzhou, 乔木信息',
  t03269: 'dial, Australia',
  t03276: 'dial, China, Dongguan, tue',
  t03302: 'dial, China, Chengdu',
  t03327: 'dial, Kenya, Nairobi',
  t03350: 'dial, China, Wuhan',
  t03351: 'dial, China, Chengdu, 10h',
  t03359: 'dial, China, Shanghai',
  t03367: 'dial, Singapore',
  t03764: 'dial, China, Beijing, foobar',
  t03766: 'dial, China, Weifang, mon',
  t05317: 'dial, USA, Portland',
  t07451: 'dial, China, Hangzhou, mon',
  t07774: 'dial, China, Shenzhen',
  t07819: 'dial, China, Wuxi, YC--wuxi',
  t07857: 'dial, China, Zhengzhou, mon',
  t07947: 'dial, China, Zhengzhou, mon',
  t07982: 'dial, China, Shenzhen',
  t07991: 'dial, China, Changsha',
  t08032: 'dial, China, Weifang',
  t08047: 'dial, China, Hangzhou',
  t08101: 'dial, China, Wuxi',
  t08149: 'dial, China, Jiangmen',
  t08150: 'dial, China, Hangzhou',
  t08203: 'dial, Germany, Frankfurt',
  t08330: 'dial, China, Chengdu, oursoft',
  t08344: 'dial, UK, Hartlepool',
  t08358: 'dial, China, Shenzhen',
  t08396: 'dial, France, Fontenay-sous-Bois',
  t08405: 'dial, China, Guangdong, wed',
  t08497: 'dial, Brazil, Sao Paulo',
  t08793: 'dial, China, Fuzhou',
  t08928: 'dial, USA, Arlington, theartist',
  t08953: 'dial, China, Fuzhou',
  t09091: 'dial, Netherlands',
  t09631: 'dial, China, Changzhou',


  // XNR

  t01101: 'xnr, China, Shanghai, 5h, 5h',
  t01232: 'xnr, China, Hangzhou, wed',
  t02424: 'xnr, Korea, Wanju, mon, tue',
  t02436: 'xnr, Netherlands',
  t02518: 'xnr, China, Shaanxi, mon',
  t02608: 'xnr, USA, San Jose, mon',
  t07717: 'xnr, China, Shenyang, tue',
  t07796: 'xnr, China, Hunan, mon',
  t08097: 'xnr, Korea, Pyeongtaek-si, mon',
  t08388: 'xnr, China, Taizhou, <19h',
  t08424: 'xnr, China, Chengdu, wed',
  t09610: 'xnr, China, Beijing, thu',
  t09719: 'xnr, Korea, Geumcheon-gu',
  t09721: 'xnr, ???, CD-oursoft-1',

  // NR
  t01013: 'NR',
  t02654: 'NR',
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
  t08053: 'NR',
  t08091: 'NR',
  t08135: 'NR',
  t08139: 'NR',
  t08170: 'NR',
  t08171: 'NR',
  t08204: 'NR',
  t08223: 'NR',
  t08238: 'NR',
  t08290: 'NR',
  t08293: 'NR',
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
  t09529: 'NR',
  t09561: 'NR',
  t09594: 'NR',
  t09639: 'NR',
  t09656: 'NR',
  
  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
