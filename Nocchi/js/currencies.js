var Currency = {
  rates: {"USD":1.0,"EUR":1.09063,"GBP":1.29302,"CAD":0.733036,"ARS":0.0649911,"AUD":0.74834,"BRL":0.314897,"CLP":0.00149948,"CNY":0.144794,"CYP":0.397899,"CZK":0.0406341,"DKK":0.146626,"EEK":0.0706676,"HKD":0.128571,"HUF":0.0034844,"ISK":0.00942124,"INR":0.0155569,"JMD":0.00776725,"JPY":0.00898473,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0531361,"NZD":0.687289,"NOK":0.116727,"PLN":0.258049,"SGD":0.715897,"SKK":21.5517,"SIT":175.439,"ZAR":0.0749173,"KRW":0.00087989,"SEK":0.113063,"CHF":1.00573,"TWD":0.03312,"UYU":0.0355854,"MYR":0.230321,"BSD":1.0,"CRC":0.00178217,"RON":0.240236,"PHP":0.0199292,"AED":0.272231,"VEB":9.88168e-05,"IDR":7.50269e-05,"TRY":0.281383,"THB":0.0289223,"TTD":0.14859,"ILS":0.276188,"SYP":0.00466592,"XCD":0.37037,"COP":0.00034007,"RUB":0.0175613,"HRK":0.146112,"KZT":0.00317864,"TZS":0.000447108,"XPT":948.36,"SAR":0.266602,"NIO":0.033642,"LAK":0.000121239,"OMR":2.59707,"AMD":0.00206371,"CDF":0.000715922,"KPW":0.00771882,"SPL":6.0,"KES":0.00968283,"ZWD":0.00276319,"KHR":0.00024835,"MVR":0.064865,"GTQ":0.136261,"BZD":0.499862,"BYR":5.34759e-05,"LYD":0.716615,"DZD":0.00914609,"BIF":0.000582467,"GIP":1.29302,"BOB":0.144644,"XOF":0.00166266,"STD":4.44757e-05,"NGN":0.00324327,"PGK":0.311564,"ERN":0.065169,"MWK":0.00137504,"CUP":0.0377358,"GMD":0.0222001,"CVE":0.00986812,"BTN":0.0155569,"XAF":0.00166266,"UGX":0.000273838,"MAD":0.100739,"MNT":0.000414054,"LSL":0.0749173,"XAG":17.252,"TOP":0.434711,"SHP":1.29302,"RSD":0.00884634,"HTG":0.0146855,"MGA":0.000313342,"MZN":0.0155452,"FKP":1.29302,"BWP":0.0954378,"HNL":0.0426516,"PYG":0.000179548,"JEP":1.29302,"EGP":0.0552927,"LBP":0.000661954,"ANG":0.558561,"WST":0.38603,"TVD":0.74834,"GYD":0.00483763,"GGP":1.29302,"NPR":0.00972469,"KMF":0.00221688,"IRR":3.08322e-05,"XPD":827.808,"SRD":0.132786,"TMM":5.71429e-05,"SZL":0.0749173,"MOP":0.124827,"BMD":1.0,"XPF":0.00913951,"ETB":0.0435434,"JOD":1.4103,"MDL":0.0521899,"MRO":0.00278429,"YER":0.00399726,"BAM":0.557632,"AWG":0.558659,"PEN":0.308273,"VEF":0.0988168,"SLL":0.000133183,"KYD":1.21951,"AOA":0.00602709,"TND":0.410565,"TJS":0.117959,"SCR":0.0736902,"LKR":0.00655144,"DJF":0.00559444,"GNF":0.000109226,"VUV":0.00904211,"SDG":0.149459,"IMP":1.29302,"GEL":0.409431,"FJD":0.476014,"DOP":0.0211705,"XDR":1.37018,"MUR":0.0286409,"MMK":0.000734285,"LRD":0.0107275,"BBD":0.5,"ZMK":0.000107124,"XAU":1270.38,"VND":4.39775e-05,"UAH":0.0376576,"TMT":0.285714,"IQD":0.000850469,"BGN":0.557725,"KGS":0.0148157,"RWF":0.00121296,"BHD":2.65379,"UZS":0.000269623,"PKR":0.00954451,"MKD":0.0177175,"AFN":0.0147965,"NAD":0.0749173,"BDT":0.012032,"AZN":0.593936,"SOS":0.00172372,"QAR":0.274563,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.127522,"ALL":0.00807617,"BND":0.715897,"KWD":3.28242,"GHS":0.241953,"ZMW":0.107124,"XBT":1363.14,"NTD":0.0337206,"BYN":0.534097},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};
