// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Retest

  // Candidates

  f02654: 'candidate, China, Shanghai',
  f07709: 'candidate, Korea, Dongjak-gu',
  f019661: 'candidate, Russia, Pyatigorsk',
  f030184: 'candidate, USA, Aliquippa',
  f030327: 'candidate, China, Beijing',
  f030347: 'candidate, China, Zhejiang',

  // Testing

  f029566: 'testing, NR',

  // Active

  f029404: 'active, USA, Portland + New Castle',

  f01234: 'candidate, Belgium, De Klinge, Eliovp',
  f01238: 'candidate, Vietnam, Hanoi, FILECOIN-VIETNAM',
  f01241: 'candidate, USA, Portland, 6block',
  f01247: 'candidate, Canada, Montreal, BigChungus™',
  f01272: 'candidate, Singapore',
  f01278: 'candidate, USA, Grand Rapids, MiMiner',
  f01799: 'candidate, China, Jinan, TokenHome',
  f01800: 'candidate, China, Shenzhen + Chengdu',
  f02301: 'candidate, USA',
  f02388: 'candidate, Netherlands, Amersfoort, Kroketje',
  f02401: 'candidate, Canada, Chambly, NBFS Canada',
  f02620: 'candidate, Poland, Krakow, @magik6k',
  f03176: 'candidate, USA, San Mateo, Five Star-Helmsman&Heiben',
  f03223: 'candidate, USA',
  f03273: 'candidate, USA, Portland, 6block',
  f03274: 'candidate, USA, Portland, 6block',
  f03339: 'candidate, China, Luzhou, benxun',
  f03363: 'candidate, Singapore',
  f05316: 'candidate, USA, Portland, 6block',
  f05317: 'candidate, USA, Portland',
  f07819: 'candidate, China, Wuxi, YC--wuxi',
  f07919: 'candidate, China, Beijing, Shanghai, Hunan',
  f08073: 'candidate, China, Qiqihar, QY7TT',
  f08157: 'candidate, China, Beijing + Germany, Frankfurt, 超星际',
  f08204: 'candidate, USA, St. Louis',
  f08240: 'candidate, Russia, Novosibirsk, Rabinovitch',
  f08403: 'candidate, UK, Lower Slaughter',
  f09569: 'candidate, China, Beijing',
  f09696: 'candidate, USA, Portland + Singapore',
  f09731: 'candidate, China, Guiyang',
  f09848: 'candidate, USA',
  f010048: 'candidate, China, Shanghai',
  f010088: 'candidate, DNS:purumine.com',
  f010446: 'candidate, Netherlands',
  f010507: 'candidate, China, Hangzhou',
  f010558: 'candidate, China, Shenzhen + Hong Kong',
  f014281: 'candidate, Netherlands, Permerend',
  f014768: 'candidate, Singapore',
  f016594: 'candidate, Germany',
  f019100: 'candidate, Romania, Cluj-Napoca',
  f019638: 'candidate, Germany, Frankfurt',
  f020608: 'candidate, Russia',
  f020904: 'candidate, Korea, Uijeongbu-si',
  f021255: 'candidate, China, Suzhou + Netherlands',
  f021540: 'candidate, Germany, Frankfurt, @hsanjuan',
  f021583: 'candidate, China, Jiaxing',
  f021710: 'candidate, China, Shijiazhuang',
  f021870: 'candidate, USA, Portland',
  f022072: 'candidate, China, Jieyang',
  f022142: 'candidate, USA, Queens',
  f023467: 'candidate, Norway, Oslo',
  f023490: 'candidate, Ukraine, Kyiv',
  f023495: 'candidate, China, Beijing + USA, Portland',
  f023647: 'candidate, Korea, Gangseo-gu',
  f023649: 'candidate, Korea, Seoul',
  f024127: 'candidate, China, Fuzhou',
  f024800: 'candidate, China, Hong Kong',
  f024969: 'candidate, NR',
  f025017: 'candidate, China, Hefei',
  f025019: 'candidate, China, Taiwan, Hsinchu',

  // Active/sealing

  // Sealing

  f01155: 'sealing, China, Shanghai, DianCun Tech',
  f01782: 'sealing, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  f02501: 'sealing, USA, Portland, 6block',
  f02514: 'sealing, USA, Portland, 6block',
  f02622: 'sealing, USA, Portland, 6block',
  f02623: 'sealing, USA, Portland, 6block',
  f03222: 'sealing, China, Yuncheong',
  f03340: "sealing, China, Xi'an",
  f03488: 'sealing, Korea, Geumcheon-gu',
  f05315: 'sealing, USA, Portland, 6block',
  f07850: 'sealing, USA, Portland, 6block',
  f08019: 'sealing, China, Yantai, 三合',
  f08285: 'sealing, Latvia, Riga, stander',
  f08383: 'sealing, USA, Portland, 6block',
  f09693: 'sealing, USA, Portland + Singapore',
  f010241: 'sealing, China, Beijing + USA, Portland',
  f010253: 'sealing, China, Beijing + USA, Portland',
  f010512: 'sealing, China, Zhengzhou',
  f014324: 'sealing, Canada, Vancouver',
  f015734: 'sealing, China, Qingdao',
  f015877: 'sealing, China, Jiaxing + USA',
  f015927: 'sealing, USA, East Islip',
  f019354: 'sealing, Germany, Frankfurt',
  f019362: 'sealing, China, Hangzhou',
  f019551: 'sealing, UK',
  f020398: 'sealing, China, Zhangjiakou',
  f021274: 'sealing, China, Shanghai',
  f021339: 'sealing, China, Jiaxing',
  f021346: 'sealing, China, Shanghai',
  f021357: 'sealing, China, Shanghai',
  f021483: 'sealing, China, Beijing',
  f022125: 'sealing, China, Shenzhen',
  f022289: 'sealing, China, Mianyang',
  f023152: 'sealing, China, Quanzhou',
  f023573: 'sealing, Japan, Kumamoto',
  f023825: 'sealing, USA, Portland',
  f023858: 'sealing, China, Fuzhou',
  f023859: 'sealing, China, Fuzhou',
  f023861: 'sealing, China, Fuzhou',
  f023868: 'sealing, China, Fuzhou',
  f023869: 'sealing, China, Fuzhou',
  f023870: 'sealing, China, Fuzhou',
  f023871: 'sealing, China, Fuzhou',
  f023876: 'sealing, China, Fuzhou',
  f023928: 'sealing, China, Fuzhou',
  f023971: 'sealing, USA, @Brian Y',
  f023977: 'sealing, China, Fuzhou',
  f023978: 'sealing, China, Fuzhou',
  f023980: 'sealing, China, Fuzhou',
  f023981: 'sealing, China, Fuzhou',
  f024006: 'sealing, China, Fuzhou',
  f024007: 'sealing, China, Fuzhou',
  f024008: 'sealing, China, Fuzhou',
  f024012: 'sealing, China, Fuzhou',
  f024013: 'sealing, China, Fuzhou',
  f024014: 'sealing, China, Fuzhou',
  f024015: 'sealing, USA, Portland',
  f024016: 'sealing, USA, Portland',
  f024030: 'sealing, Korea, Gwangju',
  f024081: 'sealing, China, Fuzhou',
  f024084: 'sealing, China, Fuzhou',
  f024085: 'sealing, China, Fuzhou',
  f024130: 'sealing, Korea',
  f024136: 'sealing, China, Fuzhou',
  f024156: 'sealing, USA',
  f024944: 'sealing, Korea, Yeongdeungpo-dong',
  f029425: 'sealing, NR',
  f029552: 'sealing, China, Changsha',
  f029556: 'sealing, China, Wuxi',
  f029587: 'sealing, Hungary',
  f029595: 'sealing, China, Guangdong',
  f029619: 'sealing, China, Hefei',
  f029628: 'sealing, Australia, Brisbane',
  f030144: 'sealing, Korea, Gyeonggi-do',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',
  f030296: 'sealing, USA, Cary',
  f030335: 'sealing, China, Fujian',
  f030338: 'sealing, USA, Santa Fe Springs',
  f030379: 'sealing, Korea, Uiwang',
  f030518: 'sealing, China, Wuhan',
  f030641: 'sealing, China, Shaanxi',

  // Stuck

  f09639: 'stuck, China, Fuzhou', // CheckForAcceptance: about 1 hour
  f010035: 'stuck, Netherlands', // Transferring: about 1 hour
  f010247: 'stuck, China, Yantai', // CheckForAcceptance: about 1 hour
  f019824: 'stuck, USA', // CheckForAcceptance: about 4 hours
  f020436: 'stuck, China, Beijing', // CheckForAcceptance: about 1 hour
  f021532: 'stuck, China, Shanghai', // Transferring: about 1 hour
  f022287: 'stuck, China, Dongguan', // CheckForAcceptance: about 1 hour
  f023501: 'stuck, China, Mianyang',
  f029529: 'stuck, China, Dongguan', // CheckForAcceptance: about 1 hour
  f030391: 'stuck, China, Chengdu', // CheckForAcceptance: 36 minutes

  // Min-size

  f010479: 'min-size, France, Fontenay-sous-Bois', // 134217728 < 4294967296
  f014409: 'min-size, USA, Waxhaw', // 134217728 < 262144000

  // Min-ask

  // Error

  f01240: 'error, Netherlands, HidNand', // EOF
  f01277: 'error, Sweden, Stockholm, tvsthlm', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: failed to load message: blockstore: block not found
  f01279: 'error, China, Sichuan',
  f01280: 'error, China, Wuxi, 了凡超算',
  f01287: 'error, China, Jiaxing, MaiTian',
  f01289: 'error, China, Hangzhou + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02305: 'error, China, Dongguan',
  f02381: 'error, China, Dongguan, 西野七濑迷叔',
  f02387: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02399: 'error, China, Zhejiang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02405: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02415: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02416: 'error, China, Guangdong, 星际无限',
  f02419: 'error, China, Shanghai, yuantai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02423: 'error, Ukraine, Kyiv, igowreck',
  f02492: 'error, China, Shenzhen',
  f02500: 'error, Korea, Seongnam-si',
  f02576: 'error, Denmark, Gjerlev, BenjaminH', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.066168254449834551 FIL, balance: 0.065864025821538587 FIL): not enough funds to execute transaction
  f02606: 'error, China, Shanghai',
  f02619: 'error, China, Beijing, Blockcasting', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02625: 'error, China, Shanghai, IPFS星际工厂',
  f02633: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02645: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.075978404462843351 FIL, balance: 0.072142108337803117 FIL): not enough funds to execute transaction
  f02665: 'error, Netherlands, Amsterdam, fm-ops',
  f02668: 'error, China, Chengdu',
  f02772: 'error, China, Chengdu',
  f03134: 'error, China, Cangzhou, 乔木信息',
  f03224: 'error, Ukraine, Irpin, oboltusov',
  f03275: 'error, USA, Portland, 6block',
  f03302: 'error, China, Chengdu',
  f03328: 'error, China, Xinxiang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03345: 'error, China, Fuzhou, chh',
  f03364: 'error, China, Guangzhou',
  f03482: 'error, China, Wuxi',
  f03491: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03512: 'error, New Zealand, Auckland, NZFILECOIN01',
  f03544: 'error, China, Guiyang',
  f03624: 'error, Germany, Chemnitz, ode', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f04443: 'error, China, Shanghai, 罗良科技',
  f07806: 'error, China, Wuhan, HelloXP',
  f07824: 'error, China, Shanghai',
  f07990: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07998: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08025: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08094: 'error, China, Guangzhou, dongshao',
  f08220: 'error, China, Shenzhen',
  f08311: 'error, China, Shenzhen',
  f08371: 'error, China, Chengdu',
  f08474: 'error, China, Hong Kong',
  f08482: 'error, USA, Athol, @why', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.094202223837650696 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f09002: 'error, Singapore',
  f09592: 'error, Japan, Minamata',
  f09675: 'error, China, Weifang',
  f09770: "error, China, Xi'an",
  f09833: 'error, USA, San Jose',
  f010063: 'error, China, Mianyang',
  f010084: 'error, China, Beijing',
  f010257: 'error, China, Hong Kong, DNS:feiyuipfs.com', // stream reset
  f010399: 'error, China, Guangzhou',
  f010438: 'error, USA',
  f010491: 'error, China, Shenzhen',
  f010498: 'error, China, Shenzhen',
  f010501: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010505: 'error, China, Wuhan',
  f010513: 'error, China, Chongqing',
  f010523: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010528: 'error, China, Chongqing',
  f010617: 'error, Canada, Surrey, @feiya200', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f014329: 'error, China, Hong Kong',
  f014394: 'error, China, Suzhou',
  f014569: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015233: 'error, China, Nanjing',
  f015747: 'error, Japan, Setagaya-ku',
  f015941: 'error, Ukraine, Kyiv',
  f016482: 'error, USA, Aliquippa',
  f017665: 'error, China, Shenyang',
  f017734: 'error, Australia, Sydney',
  f017970: 'error, China, Baoding',
  f018501: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018772: 'error, Australia',
  f018780: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018781: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018782: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018783: 'error, Singapore + Germany, Frankfurt + USA',
  f018784: 'error, Singapore + Germany, Frankfurt + USA',
  f018785: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019024: 'error, China, Sichuan',
  f019041: 'error, Singapore',
  f019074: 'error, China, Guangdong',
  f019104: 'error, Canada, Chambly',
  f019118: 'error, China, Jiaxing',
  f019174: 'error, UK, Halifax',
  f019240: 'error, China, Beijing',
  f019243: 'error, USA, Jackson',
  f019437: 'error, Korea, Guro-gu',
  f020489: 'error, China, Lioaning',
  f020523: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020541: 'error, China, Shanghai',
  f020605: 'error, China, Yibin', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020923: 'error, China, Cangzhou',
  f020928: 'error, China, Deyang + Singapore', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f020975: 'error, China, Shandong',
  f021265: 'error, China, Wuhan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: failed to find any peer in table
  f021328: 'error, China, Dongguan',
  f021444: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f021479: 'error, China, Qingdao',
  f022070: 'error, China, Jieyang',
  f022163: 'error, NR',
  f022227: 'error, China, Jiangsu',
  f022352: 'error, Norway, Borgen', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f022376: 'error, China, Dongguan',
  f022566: 'error, China, Nanchong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022753: 'error, China, Hong Kong',
  f022832: 'error, China',
  f022836: 'error, China, Chongqing',
  f022841: 'error, China, Zhongshan',
  f022853: 'error, China, Fuzhou',
  f022855: 'error, Finland, Helsinki',
  f022922: 'error, China, Shenzhen',
  f022969: 'error, China, Chengdu',
  f023108: 'error, China, Dongguan',
  f023179: 'error, China, Fuzhou',
  f023200: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023229: 'error, China, Shandong',
  f023492: 'error, China, Beijing', // AddPiece failed: adding piece to sector: writing piece: pieceCid error: generating piece commitment: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f023526: 'error, China, Chongqing',
  f023571: 'error, NR',
  f023581: 'error, China, Hong Kong',
  f023660: 'error, China, Fuzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f023662: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.091284369820604385 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f023843: 'error, NR',
  f023853: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023855: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023939: 'error, NR',
  f023943: 'error, USA, Ashburn',
  f024066: 'error, NR',
  f024101: 'error, China, Guiyang',
  f024146: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024147: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024148: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024468: 'error, China, Shenzhen',
  f024496: 'error, China, Dongguan',
  f024521: 'error, Korea, Gyeonggi-do',
  f024550: 'error, China, Wenzhou',
  f024617: 'error, Korea, Bucheon-si',
  f024902: 'error, Korea, Incheon',
  f024983: 'error, China, Hong Kong',
  f025007: 'error, Korea, Gyeonggi-do',
  f025025: 'error, China, Qingdao', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f029421: 'error, China, Hong Kong',
  f030158: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030226: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030230: 'error, China, Sichuan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: routing: not found

  // Timeout during ask

  f03194: 'timeout-ask, China, Shenzhen, 成都云存&Npool',
  f05664: 'timeout-ask, China, Shenzhen, 艾比特网络科技',

  // Rejected

  f02417: 'rejected, China, Liaoning',
  f03347: 'rejected, China, Shenzhen', // proposed provider collateral below minimum: 0 < 4565067147293
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima', // sh: 1: /home/miner/.lotusminer/dealfilter.pl: Permission denied
  f019422: 'rejected, South Africa, Johannesburg',
  f020385: 'rejected, Korea, Incheon', // no online
  f021075: 'rejected, China, Chengdu',
  f023013: 'rejected, China, Hong Kong',
  f023678: 'rejected, China, Jiaxing', // no online
  f023854: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024184: 'rejected, Korea, Gangnam-gu',

  // Dial

  f010493: 'dial, China, Shanghai', // * [/ip4/218.78.187.146/tcp/21735] dial tcp4 218.78.187.146:21735: connect: connection refused
  f021316: 'dial, China, Yangzhou',
  f022261: 'dial, China, Luzhou',
  f022820: 'dial, China, Guangdong',
  f024986: 'dial, China, Zhongshan'

  // XNR

  // Error during ask
}

export default annotations
