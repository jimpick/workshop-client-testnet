// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

  f02401: 'candidate, Canada, Chambly, NBFS Canada', // carry-over
  f024007: 'candidate, China, Fuzhou', // carry-over
  f042558: 'candidate, China, Beijing + USA, Portland + Newcastle', // carry-over
  f047419: 'candidate, USA, Waukesha', // carry-over
  f062770: 'candidate, China, Fuzhou', // carry-over
  f065200: 'candidate, China, Yibin', // carry-over
  f073697: 'candidate, China, Xinjiang', // carry-over

  // Active

  // Sealing (active-sealing = previously active, retesting with new deal)

  f08240: 'active-sealing, Russia, Novosibirsk, Rabinovitch', // 1409876
  f09693: 'active-sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1409868
  f09848: 'active-sealing, USA, Irvine, BigBearLake', // 1409826
  f014768: 'active-sealing, Singapore, Funktafide, @Funk', // 1409809
  f019100: 'active-sealing, Romania, Cluj-Napoca, noisyfan', // 1409852
  f049882: 'active-sealing, Netherlands, De Rijp, Chipz', // 1409875
  f065103: 'active-sealing, USA, Portland + China, Shenzhen', // 1409823
  f066596: 'active-sealing, USA, San Diego', // 1409878
  f067545: 'active-sealing, Canada, Kitchener', // 1409851
  f079817: "active-sealing, Russia, Ul'yanovka", // 1409896

  // Sealing

  f02540: 'sealing, USA, Rochester, @there', // 1409870
  f010241: 'sealing, China, Beijing + USA, Portland, 6Block-P', // 1409867
  f023467: 'sealing, Norway, Oslo, PhiMining.io', // 1409879
  f025007: 'sealing, Korea, Gyeonggi-do', // 1409877
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1409866
  f065280: 'sealing, Korea, Songpa-gu, Data Store Ltd', // 1409881
  f080480: 'sealing, Ukraine, Lviv', // 1409869
  f089840: 'sealing, Korea, Yeongdeungpo-gu', // 1409883

  // Stuck

  f01240: 'stuck, Netherlands, HidNand', // CheckForAcceptance: about 1 hour
  f01287: 'stuck, China, Jiaxing, MaiTian', // Transferring: about 2 hours
  f01799: 'stuck, China, Jinan, TokenHome', // Transferring: about 2 hours
  f02665: 'stuck, Netherlands, Amsterdam, fm-ops', // CheckForAcceptance: about 2 hours
  f03339: 'stuck, China, Luzhou, benxun', // Transferring: about 2 hours
  f07819: 'stuck, China, Wuxi, YC--wuxi', // Transferring: about 2 hours
  f08285: 'stuck, Latvia, Riga, stander', // CheckForAcceptance: about 2 hours
  f08403: 'stuck, UK, Lower Slaughter, TippyFlits', // StartDataTransfer: about 2 hours
  f08482: 'stuck, USA, Athol, @why', // CheckForAcceptance: about 2 hours
  f010479: 'stuck, France, Fontenay-sous-Bois, s0nik42', // CheckForAcceptance: about 2 hours
  f010491: 'stuck, China, Shenzhen', // Transferring: about 2 hours
  f010523: 'stuck, China, Beijing, Interstellar Roewe', // ClientTransferRestart: 34 minutes
  f014395: 'stuck, China, Dongguan', // Transferring: about 2 hours
  f015927: 'stuck, USA, East Islip, CDImine', // CheckForAcceptance: about 2 hours
  f016594: 'stuck, Germany', // CheckForAcceptance: about 2 hours
  f019240: 'stuck, China, Beijing', // Transferring: 29 minutes
  f019243: 'stuck, USA, Jackson', // CheckForAcceptance: about 2 hours
  f019824: 'stuck, USA', // CheckForAcceptance: about 2 hours
  f022163: 'stuck, dns:fil.akasha.network', // CheckForAcceptance: about 2 hours
  f022261: 'stuck, China, Luzhou', // Transferring: about 2 hours
  f022522: 'stuck, China, Dongguan', // Transferring: about 2 hours
  f023971: 'stuck, USA, @Brian Y', // CheckForAcceptance: about 2 hours
  f024511: 'stuck, China, Shenzhen', // Transferring: about 2 hours
  f025017: 'stuck, China, Hefei, 一三科技-913', // Transferring: about 2 hours
  f025019: 'stuck, China, Taiwan, Hsinchu', // CheckForAcceptance: about 2 hours
  f030125: 'stuck, China, Nantong', // Transferring: about 2 hours
  f030335: 'stuck, China, Fujian', // Transferring: about 2 hours
  f033549: 'stuck, China, Quzhou', // Transferring: about 2 hours
  f034701: 'stuck, China, Shenzhen', // Transferring: about 2 hours
  f040218: 'stuck, China, Wuxi', // Transferring: about 2 hours
  f042567: 'stuck, China, Jinhua', // Transferring: about 2 hours
  f054677: 'stuck, Finland, Helsinki', // CheckForAcceptance: about 2 hours
  f057127: 'stuck, China, Suzhou', // Transferring: 29 minutes
  f058000: 'stuck, China, Suzhou', // Transferring: about 2 hours
  f066568: 'stuck, Korea, Gwangju, aoc-0002', // CheckForAcceptance: about 2 hours
  f066898: 'stuck, Japan, Bunkyo-ku, @visvirial', // CheckForAcceptance: about 2 hours
  f078425: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 2 hours
  f079425: 'stuck, NR', // Transferring: about 2 hours
  f083235: 'stuck, Serbia, Belgrade', // CheckForAcceptance: about 2 hours
  f083638: 'stuck, China, Chongqing', // Transferring: 29 minutes
  f085899: 'stuck, China, Wuxi', // Transferring: about 2 hours
  f086423: 'stuck, China, Chengdu', // Transferring: about 2 hours
  f087931: 'stuck, China, Beijing', // Transferring: 29 minutes
  f088305: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 2 hours
  f089767: 'stuck, China, Changsha', // Transferring: 29 minutes
  f091139: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 2 hours

  // Min-size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 134217728 < 1073741824
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 134217728 < 2147483648
  f02419: 'min-size, China, Shanghai, yuantai', // 134217728 < 268435456
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 134217728 < 2147483648
  f03488: 'min-size, Korea, Geumcheon-gu, we4u', // 134217728 < 1073741824
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 134217728 < 1073741824
  f07709: 'min-size, Korea, Dongjak-gu', // 134217728 < 268435456
  f07998: 'min-size, China, Hangzhou', // 134217728 < 1000000000
  f09569: 'min-size, China, Beijing', // 134217728 < 536870912
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 134217728 < 1000000000
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 134217728 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 134217728 < 536870912
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 134217728 < 268435456
  f022142: 'min-size, USA, Queens, Nelson SR2', // 134217728 < 5368709120
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 134217728 < 536870912
  f024184: 'min-size, Korea, Gangnam-gu, we4u-GREEN', // 134217728 < 1073741824
  f033356: 'min-size, Korea, Gangnum-gu, we4u-YELLOW', // 134217728 < 1073741824
  f062353: 'min-size, Germany, Frankfurt', // 134217728 < 1073741824

  // Max-size

  f01247: 'max-size, Canada, Montreal', // 134217728 > 1048576
  f02490: 'max-size, China, Fujian', // 268435456 > 134217728
  f02619: 'max-size, China, Beijing, Blockcasting', // 134217728 > 1048576
  f010399: 'max-size, China, Guangzhou', // 134217728 > 1048576
  f014324: 'max-size, Canada, Vancouver', // 134217728 > 1048576
  f015233: 'max-size, China, Nanjing', // 134217728 > 1048576
  f019437: 'max-size, Korea, Guro-gu', // 134217728 > 1048576
  f020747: 'max-size, China, Xiamen', // 134217728 > 1048576
  f021075: 'max-size, China, Chengdu', // 134217728 > 1048576
  f021716: 'max-size, New Zealand, Wellington', // 134217728 > 1048576
  f023179: 'max-size, China, Fuzhou', // 134217728 > 1048576
  f024550: 'max-size, China, Wenzhou', // 134217728 > 1048576
  f024944: 'max-size, Korea, Yeongdeungpo-dong', // 134217728 > 1048576
  f042391: 'max-size, China, Fuzhou', // 134217728 > 1048576

  // Min-ask

  f01241: 'min-ask, USA, Portland, 6block', // carry-over
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f02301: 'min-ask, USA', // carry-over
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // carry-over
  f02405: 'min-ask, China, Shenzhen', // carry-over
  f02415: 'min-ask, China, Hong Kong', // carry-over
  f02423: 'min-ask, Ukraine, Kyiv, igowreck', // carry-over
  f02500: 'min-ask, Korea, Seongnam-si', // carry-over
  f02501: 'min-ask, USA, Portland, 6block', // carry-over
  f02514: 'min-ask, USA, Portland, 6block', // carry-over
  f02520: 'min-ask, China, Hong Kong + Dongguan', // carry-over
  f02606: 'min-ask, China, Shanghai', // carry-over
  f02620: 'min-ask, Poland, Krakow, @magik6k', // carry-over
  f02622: 'min-ask, USA, Portland, 6block', // carry-over
  f02623: 'min-ask, USA, Portland, 6block', // carry-over
  f02633: 'min-ask, China, Hong Kong', // carry-over
  f02645: 'min-ask, China, Hong Kong', // carry-over
  f03224: 'min-ask, Ukraine, Irpin, oboltusov', // carry-over
  f03273: 'min-ask, USA, Portland, 6block', // carry-over
  f03274: 'min-ask, USA, Portland, 6block', // carry-over
  f03275: 'min-ask, USA, Portland, 6block', // carry-over
  f03364: 'min-ask, China, Guangzhou', // carry-over
  f03482: 'min-ask, China, Wuxi', // carry-over
  f03491: 'min-ask, China, Hong Kong', // carry-over
  f05315: 'min-ask, USA, Portland, 6block', // carry-over
  f05316: 'min-ask, USA, Portland, 6block', // carry-over
  f07850: 'min-ask, USA, Portland, 6block', // carry-over
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // carry-over
  f07990: 'min-ask, China, Hong Kong', // carry-over
  f08025: 'min-ask, China, Hong Kong', // carry-over
  f08257: 'min-ask, China, Ningbo + USA, Boardman', // carry-over
  f08383: 'min-ask, USA, Portland, 6block', // carry-over
  f09696: 'min-ask, USA, Portland + Singapore', // carry-over
  f010010: 'min-ask, China, Changzhou + Hong Kong', // carry-over
  f010253: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f010254: 'min-ask, Japan, Minamata', // carry-over
  f010405: 'min-ask, China, Foshan', // carry-over
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // carry-over
  f015897: 'min-ask, China, Guangdong', // carry-over
  f015941: 'min-ask, Ukraine, Kyiv', // carry-over
  f017665: 'min-ask, China, Shenyang', // carry-over
  f018780: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018781: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018782: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018783: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018784: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018785: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f019104: 'min-ask, Canada, Chambly, NBFS DEV', // 12500000000 < 25000000000
  f020378: 'min-ask, Bulgaria, Asenovgrad', // carry-over
  f020541: 'min-ask, China, Shanghai', // carry-over
  f021265: 'min-ask, China, Wuhan', // carry-over
  f022308: 'min-ask, China, Shenzhen', // carry-over
  f023152: 'min-ask, China, Quanzhou', // carry-over
  f023495: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f023565: 'min-ask, China, Fuzhou', // carry-over
  f023660: 'min-ask, China, Fuzhou', // carry-over
  f023662: 'min-ask, China, Fuzhou', // carry-over
  f023825: 'min-ask, USA, Portland', // carry-over
  f023843: 'min-ask, China, Zhangjiakou', // carry-over
  f023854: 'min-ask, China, Fuzhou', // carry-over
  f023855: 'min-ask, China, Fuzhou', // carry-over
  f023858: 'min-ask, China, Fuzhou', // carry-over
  f023859: 'min-ask, China, Fuzhou', // carry-over
  f023861: 'min-ask, China, Fuzhou', // carry-over
  f023868: 'min-ask, China, Fuzhou', // carry-over
  f023869: 'min-ask, China, Fuzhou', // carry-over
  f023870: 'min-ask, China, Fuzhou', // carry-over
  f023871: 'min-ask, China, Fuzhou', // carry-over
  f023928: 'min-ask, China, Fuzhou', // carry-over
  f023977: 'min-ask, China, Fuzhou', // carry-over
  f023978: 'min-ask, China, Fuzhou', // carry-over
  f023980: 'min-ask, China, Fuzhou', // carry-over
  f023981: 'min-ask, China, Fuzhou', // carry-over
  f024006: 'min-ask, China, Fuzhou', // carry-over
  f024012: 'min-ask, China, Fuzhou', // carry-over
  f024013: 'min-ask, China, Fuzhou', // carry-over
  f024014: 'min-ask, China, Fuzhou', // carry-over
  f024015: 'min-ask, USA, Portland, FILmiPool-JP01', // carry-over
  f024016: 'min-ask, USA, Portland', // carry-over
  f024081: 'min-ask, undefined', // carry-over
  f024084: 'min-ask, China, Fuzhou', // carry-over
  f024085: 'min-ask, China, Fuzhou', // carry-over
  f024136: 'min-ask, China, Fuzhou', // carry-over
  f024146: 'min-ask, China, Fuzhou', // carry-over
  f024148: 'min-ask, China, Fuzhou', // carry-over
  f024156: 'min-ask, USA', // carry-over
  f024972: 'min-ask, undefined', // carry-over
  f029344: 'min-ask, Korea, Seongnam-si', // carry-over
  f029401: 'min-ask, USA, Portland + New Castle', // carry-over
  f030203: 'min-ask, undefined', // carry-over
  f030384: 'min-ask, undefined', // carry-over
  f032913: 'min-ask, China, Shenzhen', // carry-over
  f032934: 'min-ask, Korea, Incheon', // carry-over
  f033123: 'min-ask, USA, Portland + New Castle', // carry-over
  f034581: 'min-ask, NR', // carry-over
  f034592: 'min-ask, NR', // carry-over
  f039800: 'min-ask, China, Chengdu', // carry-over
  f042540: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042635: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f050260: 'min-ask, China, Suzhou', // carry-over
  f052447: 'min-ask, China, Beijing + USA, Portland + New Castle', // carry-over
  f054370: 'min-ask, China, Dongguan', // carry-over
  f056611: 'min-ask, USA, Portland + New Castle', // carry-over
  f057614: 'min-ask, USA, Portland + New Castle', // carry-over
  f057698: 'min-ask, NR', // carry-over
  f060072: 'min-ask, China, Chongqing', // carry-over
  f061407: 'min-ask, China, Shenzhen', // carry-over
  f061740: 'min-ask, USA, Portland + New Castle', // carry-over
  f062260: 'min-ask, China, Guangzhou', // carry-over
  f062318: 'min-ask, Korea, Naju', // carry-over
  f062334: 'min-ask, USA, Portland + New Castle', // carry-over
  f062518: 'min-ask, Korea, Gwangju', // carry-over
  f062811: 'min-ask, China, Fuzhou', // carry-over
  f062982: 'min-ask, China, Fuzhou', // carry-over
  f066104: 'min-ask, China, Xingjiang + USA, Portland', // carry-over
  f066845: 'min-ask, China, Dongguan', // carry-over
  f069915: 'min-ask, NR', // carry-over
  f069919: 'min-ask, NR', // carry-over
  f070999: 'min-ask, China, Xinjiang', // carry-over
  f071664: 'min-ask, China, Shandong', // carry-over
  f073552: 'min-ask, NR', // carry-over
  f073628: 'min-ask, USA, New Castle', // carry-over
  f074738: 'min-ask, Korea, Seongbuk-gu', // carry-over
  f078522: 'min-ask, NR', // carry-over
  f078770: 'min-ask, China, Xinjiang', // carry-over
  f078772: 'min-ask, NR', // carry-over
  f079197: 'min-ask, NR', // carry-over
  f079247: 'min-ask, USA, New Castle', // carry-over
  f082452: 'min-ask, China, Dongguan', // carry-over
  f083625: 'min-ask, China, Xinjiang', // carry-over
  f084879: 'min-ask, Korea, Seongnam-si', // carry-over
  f086572: 'min-ask, NR', // carry-over

  // Xfr-failed

  f03328: 'xfr-failed, China, Xinxiang, Golden Miner',
  f03345: 'xfr-failed, China, Fuzhou, chh',
  f08103: 'xfr-failed, China, Foshan, 花生酱肠粉',
  f010400: 'xfr-failed, China, Shenyang',
  f010501: 'xfr-failed, China, Hangzhou, Interstellar Roewe',
  f010513: 'xfr-failed, China, Chongqing',
  f010528: 'xfr-failed, China, Chongqing, Interstellar Roewe',
  f015747: 'xfr-failed, Japan, Setagaya-ku',
  f015877: 'xfr-failed, China, Jiaxing + USA',
  f017242: 'xfr-failed, China, Guangdong',
  f018501: 'xfr-failed, China, Beijing',
  f020523: 'xfr-failed, China, Suzhou, changjiang',
  f022853: 'xfr-failed, China, Fuzhou',
  f023581: 'xfr-failed, China, Hong Kong, mine-much',
  f039515: 'xfr-failed, China, Chongqing',
  f047858: 'xfr-failed, China, Wuhan',
  f048172: 'xfr-failed, China, Suzhou',
  f048192: 'xfr-failed, China, Suzhou',
  f050022: 'xfr-failed, China, Changsha',
  f053088: 'xfr-failed, China, Shanghai',
  f054163: 'xfr-failed, China, Dongguan',
  f056226: 'xfr-failed, NR',
  f061158: 'xfr-failed, China, Guangdong',
  f063996: 'xfr-failed, China, Sichuan',
  f067170: 'xfr-failed, China, Jiangmen',
  f067314: 'xfr-failed, China, Ningbo',
  f068096: 'xfr-failed, China, Sichuan',
  f071914: 'xfr-failed, China, Beijing',
  f076954: 'xfr-failed, China, Shenzhen',
  f080444: 'xfr-failed, China, Chengdu',
  f082356: 'xfr-failed, China, Jiaxing',
  f083065: 'xfr-failed, China, Taizhou',
  f085710: 'xfr-failed, China, Chengdu',

  // Error

  f02666: 'error, China, Chengdu', // EOF
  f02668: 'error, China, Chengdu', // EOF
  f02824: 'error, China, Chengdu', // EOF
  f04443: 'error, China, Shanghai, 罗良科技', // failed to restart data transfer: Unable to send restart request: exhausted %!d(float64=5) attempts but failed to open stream, err: context deadline exceeded
  f010493: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f014394: 'error, China, Suzhou, IPFSCloud', // EOF
  f019029: 'error, Serbia, Boljevac', // stream reset
  f023205: 'error, NR', // stream reset
  f030327: 'error, China, Beijing', // stream reset
  f034777: 'error, China, Chengdu', // stream reset
  f046073: 'error, China, Shanghai', // EOF
  f046074: 'error, China, Shanghai', // EOF
  f055132: 'error, Vietman, Ho Chi Minh City + China', // stream reset
  f059280: 'error, China, Shenzhen', // EOF
  f063173: 'error, Korea, Gyeonggi-do', // EOF
  f065732: 'error, Korea, Gyeonggi-do', // EOF
  f071190: 'error, Korea, Gyeonggi-do', // EOF
  f073048: 'error, Korea, Gyeonggi-do', // EOF
  f073535: 'error, Korea, Gyeonggi-do', // EOF

  // Backoff

  // Rejected

  f02387: 'rejected, Canada, Brampton, NBFS Canada',
  f03624: 'rejected, Germany, Chemnitz, ode', // no online
  f010617: 'rejected, Canada, Surrey, kernelogic2, @feiya200', // System maintenance
  f014409: 'rejected, USA, Waxhaw, Meatball Part III',
  f083550: 'rejected, Korea, Hwaseong-si', // no online

  // Dial

  // XNR

  // Error during ask

  f01276: 'error-ask, Canada, Brampton, NBFS Canada', // carry-over
  f01280: 'error-ask, China, Wuxi, 了凡超算', // carry-over
  f01291: 'error-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f08019: 'error-ask, China, Yantai, 三合', // carry-over
  f010446: 'error-ask, Netherlands, Angelo', // carry-over
  f014569: 'error-ask, China, Yangzhou', // carry-over
  f019806: 'error-ask, China, Beijing', // carry-over
  f020436: 'error-ask, China, Beijing', // carry-over
  f024008: 'error-ask, China, Fuzhou', // carry-over
  f024147: 'error-ask, China, Fuzhou', // carry-over
  f025025: 'error-ask, China, Qingdao', // carry-over
  f029404: 'error-ask, USA, Portland + New Castle', // carry-over
  f033511: 'error-ask, China, Dongguan', // carry-over
  f057466: 'error-ask, China, Guangzhou', // carry-over
  f057842: 'error-ask, Korea, Gyeonggi-do', // carry-over
  f068898: 'error-ask, China, Fuzhou', // carry-over
  f070501: 'error-ask, USA + China, Hong Kong', // carry-over
  f071980: 'error-ask, China, Xinjiang', // carry-over
  f079301: 'error-ask, USA, New Castle', // carry-over
  f080468: 'error-ask, NR' // carry-over
}

export default annotations
