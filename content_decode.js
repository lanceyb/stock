;
var encode_version = "sojson.v5";
var dictionaries = ['w6V4B8OLGMOO', 'ZkR2eTDDgA==', 'w6fDg8K9wq57', 'DMO6EXXClQ==', 'wp1KNRN6', 'wrZnFA==', 'w7jDo8O2X1o=', 'fhrCtMOgwpA=', 'A8O/ZQ3DoA==', 'w5rChUseaw==', 'CU/Dsg3DsQ==', 'wqgSIMKIwpTCghEjKsK6aA==', 'QQvCr8O1wrY=', 'GMO3B1TCiT94GcKC', 'BxQOK8K4', 'c0MFwqY=', 'wp1+w4QZ', 'w64KPMKdwp/Cjys7IsK6dA==', 'Zl4EwqHDnGgyaXfDrsKO', 'w67ClCpwLcOIw4TDlwU=', 'cRXCj8Olwos=', 'QcK5NsO9w7s=', 'DBLDhMKxw60=', 'w6rCqSrDuw==', 'w5/DpMKlwr9zw53CjD9Jwrp/', 'wrhzwoE=', 'w44KMMKfwrA=', 'wqdowonCmRnCow==', 'wrgFw5nDo8OSLBDDoMOFwqvCnsODKGU3IH/CgMKFGi10wobDgTI=', 'OsOvUBzDjMOJw5w=', 'X8K0dUPCkw==', 'w5bCmlHCgEI=', 'w6/DqHU=', 'wozCoH04Yg==', 'woM6w5HDnMOD', 'FzXCrsOrwpw=', 'Y0sH', 'woPDvR7Dnw==', 'STFiw5cQ', 'w5DCiztlDQ==', 'LsK9w4fDsMKu', 'wqd4wrfCjCM=', 'wq8bw4PDksKC', 'wpF4Pytp', 'OGzDpRTDlw==', 'ZMK/d0XCpQ==', 'wphzGho=', 'f8KvE8Osw4A=', 'P8O6Uw==', 'wqZCLA==', 'RwDCksOBwrnClVs=', 'w5fDlcOVwpvDlg==', 'wrXCqgkMwqo=', 'bsKJZW7CjTjCiMKoEAo=', 'w5Z5AsOtFcOzwpnCqMKVLw==', 'wpLCoHktfQ==', 'LFvDuzPDow==', 'w7k5w6o=', 'DCjDssKgw5E=', 'w6U0w6x6OsKb', 'wqdew7A5w6c=', 'McK7woBz', 'cWctwoPDvg==', 'FMK1wos=', 'wr1lwrXCgxU=', 'LVDDtzTDlAU+wrY=', 'dcKKXMO9', 'w4chw6RKIA==', 'wocVw5XDs8Kz', 'wpnCvQUFwpQ=', 'GcKUw4vDn8KlIcK8wpDDnw==', 'L11wBjhRwp7CoMK9V8Ks', 'd0UPwrs=', 'YURtBHlE', 'w5l9LyoLWEo6woVnM8ODw5/DvcKEWsOGOD9gw4PDqMODIis8w5AnMsKRw7M6PsO5wqpicMKlw4x3wo5ACAbDmMOkw5FSOcK9w6lbLsKIw5srwqrCq2AQKzV4HcOBwprCgcORw7/CthrDocOrQsKkbcKLw4DDinvCqTU8wr/CgcKnFMKKPsOPwqTDmMOw', 'wpd8JzhS', 'w6ofw6BBKT1Aw7B4V1Q=', 'e8K9w5fDqMKK', 'wrjCsX0PfA==', 'wr1Kwo/Cnho=', 'fQ5jw68+', 'wphywrcd', 'QMKjBQcz', 'wqDDhD7Dj8KE', 'wqHDnic=', 'ccKKSA==', '5bmH5a2E77+8', 'U8KoeMObwpY=', 'X8KYw4rDiMKpPcKGwovDkMKzwro=', 'HcKKDcK0w6jDgQ==', 'EW3Dsg==', 'FiIqLw==', 'f2BjOw==', 'S8KRJMOow74=', 'I2fDlSXDhw==', 'J1bDujE=', 'wpZ1FStM', 'N8K/XsO8YA==', 'FMKYw5LDlg==', 'YMKcOyEgwoJYbHjCjEc=', 'ZlNrcyvDuyINMmTCrQ==', 'DMOMHmPCuQ==', 'wp3CiHYbXw==', 'GU7DnTbDpQ==', 'LsO2bjTDjw==', 'Q8KEw4LDpcKdw54yMA==', 'QTHCl8O5', 'woN4wrYAQB3DucKKe8KMw7TCrCDCoAc=', 'wpbDsQLDksKiWmrDjcOiwozCtT3DssOg', 'LMO6XBc=', 'w6UHOMKf', 'w6cww694', 'JcKaRcOc', 'MynCjXE=', 'w5LDtcObwrk=', 'wp58wqkM', 'wo5vBxY=', 'HsO3GVLCiQ==', 'wr8Kw7lGLg==', 'w7/CiUc1wqpUYgHDtWXCnzJGb2jDpMOYw6NXdE7DjcK0w6I+w4Nbw68+PC/Cg8O9w71NAsKvwpUaDVN0wqFjwrzDpMO9blfCn0AhwoTDnB98A8OednxYw73DjcKFw6I0w7BDw7rConkXw4/Cl8Omwq3mn7rnlo/pl5PvvqXog5rnsJXmiqfvvLfmlr/mtojlv6vlj43DuCbmoabmoqjosIECTcOWw5V8DsKdw5nDksKlwqPDkgzDtMKrJjMyw5p3w6DDlm53RFJ2w5fDpcKlZAdlOVDDuiHClcOdw7TluoXlrqorPBENwokKw7fCucKuw4/Cpg/CtGTDocOdw5kUw7Amw6fCqDMdTsKbCMOhwqPCucOxCSfDrVF9w7xQIDdxXlFYTWXDqWTCk8KJXhvDteafu+eVj+mXrO+9juiCr+ezoeaKqO+/p+aVkua3m+W+huWPs1hn5qCZ5qGc6LOowrvCgw==', 'wqfDlT1lKsOPwpQ=', 'MCB7w7Qzwrs=', 'CsKACcKGw7HDkXpPLQokXcO6IcKXLnbCrMODwrwrasKxDg==', 'wqfCgREHwqoIMQPCqHTCiD8PciI=', 'w4ZYFRVl', 'w5doDMOqB8KSw5c=', 'O0tGwqbDhUgsRXnDt8KEw4rClkzCvMO6w6E4ewxZ', 'JsKBJycnwpRYdGg=', 'woYPw4I5X8K3T8OZwqDDpAPCtcKmwpDDuWg=', '5bis5a+R776i', 'e8K+w4s=', 'wqFZwrU=', 'w59Dw6k=', 'wpxwOQ==', 'w43CrHTCp0Q=', 'F8KFFcKSw6w=', 'w71xw79JwrQ=', 'woHDvQbDoMKqUj7CkMO0wqjCqyrDsMOtXcKawp8jw4bCvcOLdkVf', 'dWxjOEd9', 'wqZHKhIR', 'bMKVAcORw7c=', 'w5jDs8OZwpPDjA==', 'wq0Mw7p8PQ==', 'wppuwrwiSQ==', 'w4ofOMKwwoI=', 'w63DsMObflw=', 'w5rDvcOYwrg=', 'wrk2w7/DucKF', 'w4rDtcOa', 'D8KHZsO9fQ==', 'w6U+w6U=', 'w68ODMK1wq4=', 'wpbCsBElwqk=', 'w4MHw5g+', 'w6VvG8O4Ng==', 'VQTCjcOHwrzDgw==', 'a8KGZcOKwqs=', 'wqRNOQ==', 'w5IQMsKAwp4=', 'w5vCqyDDrUg=', 'wpAAw7dULw==', 'WT/ClsOowqjDpQ==', 'ECphwofCiw==', 'AsKMEcK6w6zDnQ==', 'w5/DjsOXwrjDuw==', 'wpALw5TDnMKT', 'PsKUWsOowr1AE8KNKQ==', 'wqR9wpTCnxzDrQ==', 'AwJlwpPCr8O3PA==', 'fsKXD8OUw6A=', 'WVZfC0E=', 'w53DpMOGwrDDgw==', 'wpllw44=', '5bqK5a2R77yX', 'w6MEw44RCw==', 'woZcESc5', 'DmXDsRHDjA==', 'w78gw7JvNA==', 'w5rCvFzCqHY=', 'A8OXazjDpA==', 'wpZuGRI=', 'XREcAMKU', 'wrDCnAg/wqVbfw==', 'Di3DuMKW', 'A8KLwrVOwqw=', 'w7Nrw7FZwrjCuTUsd8OkwqIjfMK6RA==', 'wrJ1wojCng==', 'dMKLX8O8wqdvFMKYPcKBw60ANsO1w75WCgPDsMKMHxEgMsO2', 'dlVx', 'NMKtJ8KMw5Q=', 'wqVmw4cZw64=', 'LcKQNnbDhBfDj8K1URPDj8KwKsOcFw==', 'FBV0wrDCvsO2O3HDpSl1UTB2', 'IMOobw3DjsKWwodKwqYedH0=', 'w75xw5JRwo/CmSssIg==', 'wrkEw6ZH', 'esKuwol7wrQFeMKxFsOJ', 'wpvCpSsUwrodNTDDoGTCjjMSOw==', 'CcOmBUvChRZKIsKlw5BZWTMqCXjDicOMKcO/DWJ5TcOyK8Otw6pRdcKGwpQK', 'wrRjAA5pccOtW8KJw5kMwp1c', 'w47DvMOZekFcBcOm', 'w6UUIcK0wqI=', 'w7DCsVfCqn0=', 'w5Zrw40Rw5LDrjzDscK5w6w=', 'amx/NlJ5wpvDiMOUTlzCvnnDgsKF', 'MSfChw==', 'TMKPHsO4w74Dw5jCi0LCsDwrwqTDtVIx', 'wqNEOxAS', 'YFN/EFg=', 'wqFsGQI=', 'PiXDm8KYw68=', 'wrERw4bDocKs', 'UCbCjMOewrE=', 'wqUEw7ZSPzt8w6o=', 'w5LDi3M3wprCtcOOwp4=', 'IcO0TAs=', 'BG0VO8KV', 'w5TDl8KywoxW', 'w7rCjjpn', 'wo1PwpfCvTA=', 'wpBbw44Aw5c=', 'J8K4BsK/w7A=', 'wqJfLhA=', 'w6NnHB4SdsOaV8KXwoE=', 'JMKhw7PDssK/JsKlwq3DlMK2wqpEMXQ=', 'XTvCnMO5w6nDucOUwqQBwoFwwpfDqg==', 'Li3Ckn3CrcKHesKrG8KSw4k4w6QcwqE=', 'ZsKyPhUn', 'w7sJJsKO', 'TF5FFmM=', 'aFtuFQ==', 'Oj0fCMKQ', 'wp9uAAw=', 'w4V/F8OgA8OO', 'wrs7w4jDlMKv', 'EgBwwo/Co8O6OW7Djj9YHzovwpPDmBjCu8K/w53Dm2zChg0gw6xHXMKqworDk8O/woc=', 'RhLCkcOhwoo=', 'wrbDpU8qHA==', 'TsKfw5XDtg==', 'c8KARcOMwoo=', 'w5Erw7ZZJA==', 'woZHEwEB', 'bFt+AGNJwoPDoA==', 'wpVrKShEUkFr', 'w6cJNsKbwoLChC05', 'PcKARcOA', 'VsKnD8O5w5U=', 'wqtQLA==', 'w4NMJw==', 'JcO5Ow==', 'woF7LA==', 'w7DCs0rChHvDgw==', 'w4zDscO1wr/DqQ==', 'woLDgEQtEA==', 'wrVtwqkkaQ==', 'OMO+M3XCuA==', 'E8Kcw4/DnMKZ', 'agVo', 'woDDjSbDrMKE', 'w4bDj8Ob', 'wo4tw6jDp8KI', 'wrkOw5ZQGA==', 'V8KpGwgs', 'DjfDp8Kzw4I=', 'MsK2woJ7woU=', 'w5fDtHknwoc=', 'MljDgQTDkw==', 'w51rw49Iwog=', 'w7LDh8OfWHs=', 'w53CiRtgAA==', 'eHl9M0o=', 'w47DvMKLwoRN', 'wrbDpRLDusKA', 'wqvDkUY=', 'DggL', 'ZGxu', 'HBLClFPCog==', 'woUMw5zDg8KL', 'wqtVAh0s', 'wpFtwrQFWA==', 'V8KJCyge', 'KTrCgXfCqQ==', 'CyvDuMKBw4cUwoA=', 'UQzCnsOHwqLDkwhkwrE=', 'w6HCsinDpE8CIw==', 'w4XDvsKswrM=', 'w6gJO8KJwpnCgSc=', 'ZUZvDmU=', 'wpNywqoaTh3DtQ==', 'wrh5wojCnQbDsQ==', 'f2JuezE=', 'w4HCjSFcLg==', 'w4TCiBLDh0I=', 'wr5LwqTClwo=', 'CcKON8KWw7o=', 'w5LCjSM=', 'wrDClFM=', 'w7Rqw6ZrwrI=', 'w4rCvAnDtGU=', 'bcKpH8Oxw58=', 'Ywlpw4oN', 'w6nCrDdcPg==', 'w4HClzdSMg==', 'acKVPCE9wog=', 'w4Vow7R7wr4=', 'c1JqczTDnSMrcyDClcKdw63CmMOhdw==', 'w6bDucOPwpvDgw==', 'wr0Ow6ZH', 'w5s7w7FkLA==', 'PgrCsGfCrw==', 'CMKJw4zDjg==', 'eQdFw44c', 'AcO4BVLCmA==', 'w5HCiwzDtnY=', 'wptpwrzCkR8=', 'A8KgFg==', 'w6/ClC4=', 'w6vDgcOPwpfDgg==', 'wqF2CBY/', 'wrIEw4fDpcOJGxs=', 'wrHCoXfDqxUSd1fCu8KQLUjDv3bDn2zDpQ==', 'w57Dv8Oiwr/DiQ==', 'b8KcaGPCgA==', 'cMKDYw==', 'McKKVMOBXg==', 'CiIuKsK/', 'LsKuwp9x', 'MMKXVcORSVbDgcO6wpA=', 'bMKeNCk=', 'w6wjw7ByPA==', 'w6bDp8O7', 'w7rDlsOMwr3DsQ==', 'RcKCRw==', 'w5fDl3gmwpPCv8OPwpcW', 'fCFhw6E0wqs=', 'wrAUw4LDtMKeH8Kxw7o=', 'w7PCkSw=', 'wpFjw58uw6LDoAvDscOmw7kxG8K2IMO9', 'wr/Cl3fCqkE=', 'wqloCA8yQsO3V8KIwpAbwpAHTcOvwrXCvHjCiDQxw61swq/Dgg==', 'w6QXwprDqsKUC07DvcKewrLCksKdbQ==', 'wqrDu1orGQ==', 'RQ3CqMOLwpg=', 'w7bDnsOWTW8=', 'KxDCrmfCpQ==', 'fSPCk8O7wog=', 'cjNOw6sj', 'ek1WBGQ=', 'L3U8IwFpw4fDjsKJfQrCqCvDncOCSDQ=', 'MMK1cMOfSw==', 'VMKSEA==', 'PsO6TRE=', 'w6Nww6Zhwrk=', 'FgJywozCuA==', 'woHDsRLDjsKk', 'I1Q/EQ==', 'wovDl2s+NQ==', 'w5PDjMOy', 'wocYw6TDkMOi', 'wrwdw4xaOQ==', 'wq8tw5nDgcK7', 'YFwywqvDhQ==', 'esK4EMONw54=', 'b2hh', 'w7rCv0rChw==', 'SMKCw7bDlMKw', 'w70HOQ==', 'dWZq', 'wpkJw5PDhcOD', 'w7HCqSjDtEtcfA==', 'wprDjm4LNQ==', 'ZUx+BGdUwoXDocK5', 'wqDChwkvwqEFIA==', 'w7/CnyxgLA==', 'emZjLFx5wpc=', 'bmh/MQ==', 'w7/CuUrCkGDDhyw=', 'w7DCuUM=', 'C8O5G1TCgxlO', 'woBhMjlFQkdow4w=', 'E8KCw7LDn8K4IcK0wpjDlA==', 'woHDvQbDoMKnV3fDlsKqwqzCtCbDvcKkLg==', 'bMKeIjM9wrtfYXzCnQNNwqsLw6ZWw5dZRsKNdwduwpVQ', 'wo7CoB8=', 'w6YVw4o=', 'C8Kbw4jClMKqP8K0woXDnsKpw7FCIw==', 'w67CsDY='];

(function(dics, ntime) {

    // 假设dics = [1, 2, 3, 4, 5]
    // dicIndexTransfer(3)次后, dics = [4, 5, 1, 2, 3]
    // 这方法的作用是转动上面的字典
    // 恶心的加密方式
    var dicIndexTransfer = function (ntime) {
        while(--ntime) {
            dics.push(dics.shift());
        }
    };

    var doing = function() {

        var libs = {
            'data': {
         		'key': 'cookie',
         	    'value': 'timeout'
            },
            'setCookie': function (attr, key, val, rs) {
                rs = rs || {};
                var cookieStr = key + '=' + val;
                for(var i = 0, n = attr.length; i < n; i ++) {
                    var otherKey = attr[i];
                    cookieStr += ';\x20' + otherKey;
                    var abc = attr[otherKey];
                    // TODO
                    // ???什么代码,什么逻辑?
                }

                rs['cookie'] = cookieStr;
            },
            'removeCookie': function () {
                return 'dev';
            },
            'getCookie': function (handle, key) {
                handle = handle || function (temp) { return temp; }; // ???

                var uriReg = handle(new RegExp('(?:^|;\x20)' + key.replace(/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                dicIndexTransfer(ntime + 1);
                return uriReg ? decodeURIComponent(uriReg[0x1]) : undefined;
            }
        };

        var updateCookieFn = function () {
            var reg = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');

            return reg.test(libs.removeCookie().toString());
        };

        // updateCookieFn 一定返回 false
        libs['updateCookie'] = updateCookieFn;

        var isUpdated = libs.updateCookie();
        // rs == false
        if(!isUpdated) {
            libs.setCookie(['*'], 'counter', 0x1);
        } else if(isUpdated) {
            libs.getCookie(null, 'counter');
        } else {
            libs.removeCookie();
        }
    };

    doing();

})(dictionaries, 0x111);