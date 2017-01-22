/*START AUTOCOMPLETE FIELDS*/
var locationList = ["New Albany, IN, United States (USNWA)", "New Alexandria, PA, United States (USNA3)", "New Annan, PE, Canada (CANEA)", "New Delhi, India (INICD)", "New Orleans, Louisiana, United States (USMSY)", "New Plymouth, Taranaki, New Zealand (NZNPL)", "New Westminster, British Columbia, Canada (CANWE)", "New York, New York, United States (USNYC)", "Newark, New Jersey, United States (USEWR)", "Newburgh, United States (USSWF)", "Newcastle Upon Tyne (England), United Kingdom (GBNCL)", "Newcastle, New South Wales, Australia (AUNTL)", "Hong Kong, Hong Kong (HKHKG)", "Honiara, Guadalcanal Is, Solomon Islands (SBHIR)", "Honolulu, Hawaii, United States (USHNL)", "Long Beach, California, United States (USLGB)", "Shanghai, Shanghai, China (CNSHA)"];

var countryList = ["AFGHANISTAN", "ALBANIA", "ALGERIA", "AMERICAN SAMOA", "ANDORRA", "ANGOLA", "ANGUILLA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ARGENTINA", "ARMENIA", "ARUBA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BERMUDA", "BHUTAN", "BOLIVIA", "BOSNIA AND HERZEGOVINA", "BOTSWANA", "BRAZIL", "BRITISH INDIAN OCEAN TERRITORY", "BRUNEI", "BULGARIA", "BURKINA FASO", "BURUNDI", "CAMBODIA", "CAMEROON", "CANADA", "CAPE VERDE", "CAYMAN ISLANDS", "CENTRAL AFRICAN REPUBLIC", "CHAD", "CHILE", "CHINA", "CHRISTMAS ISLANDS", "COCOS (KEELING) ISLANDS", "COLOMBIA", "COMORO ISLANDS", "CONGO", "CONGO, DEMOCRATIC REPUBLIC OF", "COOK ISLANDS", "COSTA RICA", "CROATIA", "CUBA", "CURAÇAO", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICAN REPUBLIC", "ECUADOR", "EGYPT", "EL SALVADOR", "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "ETHIOPIA", "FALKLAND ISLAND", "FAROE ISLANDS", "FIJI ISLANDS", "FINLAND", "FRANCE", "FRENCH GUIANA", "FRENCH POLYNESIA", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GIBRALTAR", "GREECE", "GREENLAND", "GRENADA", "GUADELOUPE", "GUAM", "GUAM", "GUATEMALA", "GUINEA", "GUINEA-BISSAU", "GUYANA", "HAITI", "HEARD ISLAND AND MCDONALD ISLANDS", "HONDURAS", "HONG KONG", "HUNGARY", "ICELAND", "INDIA", "INDONESIA", "INSTALLATIONS IN INTERNATIONAL WATERS", "IRAN", "IRAQ", "IRELAND", "ISLE OF MAN", "ISRAEL", "ITALY", "IVORY COAST", "JAMAICA", "JAPAN", "JORDAN", "KAZAKHSTAN", "KENYA", "KIRIBATI", "KOREA, NORTH", "KOREA, SOUTH", "KUWAIT", "KYRGYZSTAN", "LAO PEOPLES DEMOCRATIC REPUBLIC", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MACAU", "MACEDONIA", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI", "MALTA", "MARSHALL ISLANDS", "MARTINIQUE", "MAURITANIA", "MAURITIUS", "MAYOTTE", "MEXICO", "MOLDOVA", "MONACO", "MONGOLIA", "MONTENEGRO", "MONTSERRAT", "MOROCCO", "MOZAMBIQUE", "MYANMAR", "NAMIBIA", "NAURA ISLANDS", "NEPAL", "NETHERLANDS", "NETHERLANDS ANTILLES", "NEW CALEDONIA", "NEW ZEALAND", "NICARAGUA", "NIGER", "NIGERIA", "NIUE", "NORFOLK ISLAND", "NORTHERN MARIANAS", "NORWAY", "OMAN", "PAKISTAN", "PANAMA", "PAPUA NEW GUINEA", "PARAGUAY", "PERU", "PHILIPPINES", "PITCAIRN", "POLAND", "PORTUGAL", "PUERTO RICO", "Palestinian Territory, Occupied", "QATAR", "ROMANIA", "RUSSIAN FEDERATION", "RWANDA", "RÉUNION", "SAINT KITTS AND NEVIS", "SAINT PIERRE AND MIQUELON", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SAN MARINO", "SAUDI ARABIA", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRA LEONE", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SOLOMON ISLANDS", "SOMALIA", "SOUTH AFRICA", "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", "SOUTH SUDAN", "SPAIN", "SRI LANKA", "ST LUCIA", "ST. HELENA", "SUDAN", "SURINAME", "SVALBARD AND JAN MAYEN", "SWAZILAND", "SWEDEN", "SWITZERLAND", "SYRIAN ARAB REPUBLIC", "TAIWAN", "TAJIKISTAN", "TANZANIA", "THAILAND", "TIMOR-LESTE", "TOGO", "TOKELAU", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TURKS AND CAICOS", "TUVALU", "UGANDA", "UKRAINE", "UNITED ARAB EMIRATES", "UNITED KINGDOM", "UNITED STATES", "URUGUAY", "US MINOR OUTLYING ISLANDS", "UZBEKISTAN", "VANUATU", "VATICAN CITY STATE", "VENEZUELA", "VIETNAM", "VIRGIN ISLANDS, BRITISH", "VIRGIN ISLANDS, U.S.", "WALLIS AND FUTUNA", "WESTERN SAHARA", "YEMEN", "ZAMBIA", "ZIMBABWE"];

var packageList = ["Box", "Box, aluminum", "Box, Commonwealth Handling Equipment Pool (CHEP), Eurobox", "Box, fibreboard", "Box, for liquids", "Box, natural wood", "Box, plastic", "Box, plastic, expanded", "Box, plastic, solid", "Box, plywood"];

var vesselList = ["SEOL EXPRESS", "SEOL TOWER", "SEOLTOWER", "SEOUL", "SEOUL EXPRESS", "SEOUL TOVER", "SEOUL TOWER", "SEOUL ESPRESS", "SEOUL EXP", "SEOUL EXPESS", "MAE BOSTON", "MAE BROWNSVILLE", "MAE DARTMOUTH", "MAE DELLYS", "MAE DENVER", "MAE DHAHRAN", "MAE DRURY", "MAE KLEVEN", "MAE SINGAPORE", "MAE STRALSUND", "ARTHUR MAERSK", "ABS", "ABC", "ABC MAERSK", "ABC VESSEL", "ABC-0W", "ABC123", "ABCD", "ABCDE", "ABCDEF", "ABCDEFG"];

var carrierList = ["Alianca", "ANL", "APL", "CMA CGM", "CNC Line", "CSAV", "Hamburg Sud", "Hapag Lloyd", "Maersk Line", "MCC Transport", "MOL", "Mediterranean Shipping Company", "NYK Line", "Safmarine", "United Arab Shipping Company", "ZIM"];

var blRequestor = [{
    "companyId" : "843722",
    "label" : "ABC Company"
}, {
    "companyId" : "815565",
    "label" : "A.R.T. NV,BELCROWNLAAN 9,,B-2100 ANTWERPEN/DEURNE,"
}, {
    "companyId" : "847264",
    "label" : "ABC Commercial Trading,436 B. Cabildo St,Intramuros"
}, {
    "companyId" : "804497",
    "label" : "AHLERS BELGIUM N.V.,Noorderlaan 139"
}, {
    "companyId" : "857098",
    "label" : "ALLIANCE TIRE COMPANY (1992) LTD,Unknown"
}, {
    "companyId" : "844299",
    "label" : "AMI MIDDLE EAST LLC,PO BOX 32194,DUBAI , U.A.E"
}, {
    "companyId" : "857104",
    "label" : "AQUATRON ROBOTIC SYSTEM LTD,Unknown"
}, {
    "companyId" : "823625",
    "label" : "Arab and International Service S.L.,Islas Canarias, 259-1º-1ª"
}, {
    "companyId" : "823581",
    "label" : "At Home Pvt. Ltd. Company,F-33/7, ,Okhla Industrial Area,,Phase - II"
}, {
    "companyId" : "857103",
    "label" : "CAESAR STONE SDOT YAM LTD,Unknown"
}, {
    "companyId" : "842233",
    "label" : "CHIEN SHING HARBOUR SERVICE CO., LTD.(Taipei),8F.-1, No.130, Sec. 2, Zhongxiao E. Rd.,,Zhongzheng District, Taipei City 100,,Taiwan (R.O.C.)"
}, {
    "companyId" : "806451",
    "label" : "CTS INTERNATIONAL TRANSPORTATION CO.,LTD,20th Floor,Tian An Center,No.338 Nanjing Road (West)"
}, {
    "companyId" : "822415",
    "label" : "Century Distribution Systems (Shenzhen) Ltd.,Room 3103,3104,31/F, Block A, Shenfang Plaza,,No:3005 Renmin South Road, Luohu District,"
}, {
    "companyId" : "836419",
    "label" : "DE WELL CONTAINER SHIPPING CORP,HENG XIN COMM. CENTRE / YINGTONG STREET"
}, {
    "companyId" : "835962",
    "label" : "EDI Shipper 2,EDI Shipper 2 address 1,EDI Shipper 2 address 2,EDI Shipper 2 address 3"
}, {
    "companyId" : "835964",
    "label" : "EDI Shipper 4,EDI Shipper 4 address 1,EDI Shipper 4 address 2,EDI Shipper 4 address 3"
}, {
    "companyId" : "820472",
    "label" : "Enzafoods New Zealand Limited,Williams Street, ,PO BOX 45,"
}, {
    "companyId" : "844102",
    "label" : "European Chartering Systems NV,KANAALDIJK 35"
}, {
    "companyId" : "857099",
    "label" : "FRUTAROM LTD,Unknown"
}, {
    "companyId" : "831486",
    "label" : "Footner & Company, Inc.,6610-B Tributary Street, Suite 300"
}, {
    "companyId" : "811571",
    "label" : "Fr. Meyer's Sohn GmbH & Co. (KG) (Antwerp),Rijnkaai 37,"
}, {
    "companyId" : "857100",
    "label" : "GALAM CONSUMER PACK,Unknown"
}, {
    "companyId" : "826401",
    "label" : "IBBCO TRADING PTY LIMITED,25 MASEFIELD PLACE"
}, {
    "companyId" : "848094",
    "label" : "INTTRA SI Act 2 test Co,Islands Brygge 43"
}, {
    "companyId" : "815585",
    "label" : "ISL-INTERNACIONAL SHIPPING LOG DO BRASIL LTDA,RUA FREI GASPAR, 51,SALA 31,CENTRO"
}, {
    "companyId" : "816639",
    "label" : "Indaia Logistica Internacional Ltda,Rua Senador Feijo, 14, Conj 61, 71 e 72, Centro"
}, {
    "companyId" : "810757",
    "label" : "JAS Jet Air Service S.A. (Buenos Aires),Av. Eduardo Madero 1020 - 3"
}, {
    "companyId" : "808315",
    "label" : "Kuehne & Nagel Ltd,24/Floor, MassMutual Tower,38 Gloucester Road,,Wanchai"
}, {
    "companyId" : "877465",
    "label" : "LiMei Customer,80 Robinson Road,#12-01"
}, {
    "companyId" : "830801",
    "label" : "MGH LOGISTICS PVT LTD (Mumbai),419/A, 4th Floor, Skylark, Plot No.64,Sector-11, CBD Belapur,"
}, {
    "companyId" : "877509",
    "label" : "MLASHIPPER,3 CHURCH ST"
}, {
    "companyId" : "821826",
    "label" : "Mars Hava ve Deniz Kargo Tasimaciligi A.S.,Merkez Mah Degirmenbahce Cad. no:21,Yenibosna Bahcelievler"
}, {
    "companyId" : "829728",
    "label" : "North East Equity Pty Ltd T/A Sumich,no.386 Mandagolup Rd,Mandagolup,,P.O.BOx 456"
}, {
    "companyId" : "836011",
    "label" : "PT. Gajah Tunggal Tbk,Wisma Hayam Wuruk 10th Fl,Jl. Hayam Wuruk 8"
}, {
    "companyId" : "818426",
    "label" : "Panalpina World Transport (S) Pte Ltd,16, CHANGI NORTH WAY"
}, {
    "companyId" : "821200",
    "label" : "QAXML,TEST ADDRESS 1,TEST ADDRESS 2,TEST ADDRESS 3"
}, {
    "companyId" : "828200",
    "label" : "RADO SHIPPING AGENCIES PVT. LTD., (Chennai),108, THE CATHOLIC CENTRE,,ARMENIAN STREET, 1ST FLOOR,"
}, {
    "companyId" : "877529",
    "label" : "RCVtest,Singapore"
}, {
    "companyId" : "816561",
    "label" : "RS Assessoria Aduaneira Ltda,Rua Riachuelo, 121 ,Cj. 23,Centro"
}, {
    "companyId" : "807665",
    "label" : "SCHENKER DO BRASIL TRANSPORTES INTERNACIONAIS LTDA,Rua Geraldo Flausino Gomes, 78,13º Andar - Brooklin Novo"
}, {
    "companyId" : "807662",
    "label" : "SOLVAY CHEMICALS INTERNATIONAL,Rue du Prince Albert, 33"
}, {
    "companyId" : "857101",
    "label" : "STARPLAST INDUSTRIES (1967) LTD,Unknown"
}, {
    "companyId" : "835371",
    "label" : "SUMMIT INTERNATIONAL LOGISTICS LTD SHENZHEN BRANCH,41F, The Panglin Plaza,2002 Jiabin Rd. Luohu Dist"
}, {
    "companyId" : "871406",
    "label" : "Samsung Electronics Co., Ltd,416 MEATAN-3 DONG, YEONGTON-GU,KYONGGI-DO"
}, {
    "companyId" : "824609",
    "label" : "Servimex Logistica ltda (SAO PAULO),Av. Moema, 877 - Indianopolis"
}, {
    "companyId" : "802443",
    "label" : "TESTqaCONSIGNEE EDIF,ADDRESS LINE 1,ADDRESS LINE 2,ADDRESS LINE 3"
}, {
    "companyId" : "802444",
    "label" : "TESTqaCONTRACTPARTY EDIF,ADDRESS LINE 1,ADDRESS LINE 2,ADDRESS LINE 3"
}, {
    "companyId" : "802442",
    "label" : "TESTqaFORWARDER EDIF,ADDRESS LINE 1"
}, {
    "companyId" : "802438",
    "label" : "TESTqaFORWARDER X12,Singapore,ADDRESS LINE 2,ADDRESS LINE 3"
}, {
    "companyId" : "802445",
    "label" : "TESTqaNOTIFYPARTY EDIF,ADDRESS LINE 1,ADDRESS LINE 2,ADDRESS LINE 3"
}, {
    "companyId" : "862808",
    "label" : "TESTqaSHIPPERBK2XML,INTTRA"
}, {
    "companyId" : "862807",
    "label" : "TESTqaSHIPPERX12BK2300,INTTRA"
}, {
    "companyId" : "828619",
    "label" : "TOPOCEAN CONSOLIDATION SERVICE (CHINA) LTD TIANJIN BRANCH,ROOM 3618,TIANJIN GOLDEN EMPEROR MANSION,NO 20 NANJING ROAD,HEXI DISTRICT,"
}, {
    "companyId" : "824287",
    "label" : "TOPOCEAN CONSOLIDATION SERVICE INC.,ROOM 1206 THE BANK CENTRE 189 XIAHE ROAD XIAMEN CHINA"
}, {
    "companyId" : "829671",
    "label" : "TOPOCEAN CONSOLIDATION SERVICE INC. QINGDAO OFFICE,NO.100 HONG KONG MIDDLE ROAD"
}, {
    "companyId" : "826029",
    "label" : "TOPOCEAN CONSOLIDATION SERVICE LTD. - FUZHOU,C-3 26FLOOR,WORLD TRADE PLAZA 71 ,WUSI ROAD"
}, {
    "companyId" : "830932",
    "label" : "TOPOCEAN VIETNAM,78-80 CMT8 ST, WARD 6, DIST.3"
}, {
    "companyId" : "857102",
    "label" : "TOSAF COMPOUNDS LTD,Unknown"
}, {
    "companyId" : "877528",
    "label" : "TestDevFeb2012,80 Robinson Rd,,add1,add2"
}, {
    "companyId" : "877442",
    "label" : "TestQA,Noida"
}, {
    "companyId" : "843811",
    "label" : "Topocean Consolidation Service Ltd. - Zhongshan office,RM 611, NORTH TOWER, HOLIDAY PLAZA,,NO.6 XINGZHONG ROAD, ZHONGSHAN,"
}, {
    "companyId" : "847767",
    "label" : "Union Services (S) Pte Ltd,150 Beach Road #13-05/07,Gateway West"
}, {
    "companyId" : "878209",
    "label" : "dev_test,address,address"
}, {
    "companyId" : "878229",
    "label" : "devtest1,devtest1"
}, {
    "companyId" : "854255",
    "label" : "reg81626Shipper,Address 1,Address 2,Address3"
}, {
    "companyId" : "854259",
    "label" : "reg816QAForwarder,Address 1,Address 2,Address 3"
}, {
    "companyId" : "854256",
    "label" : "reg816QAShipper edit on 20090327,Av. Santiago de las Montañas 06 60,y Padre Juan de Velasco,Address 3 edit - updated on 20090327"
}, {
    "companyId" : "853254",
    "label" : "regtestLC001,Address 1,Address 2,Address 3"
}, {
    "companyId" : "853265",
    "label" : "regtestLC321,Address 1,Address 2,Address 3"
}, {
    "companyId" : "853267",
    "label" : "regtestLC323,Address 1 update,Address 2 update,Address 3 update"
}, {
    "companyId" : "853268",
    "label" : "regtestLC324,Address 1,Address 2,Address 3"
}];
/*STARTS COMMON FORMATING DESCRIPTION FUNCTION- 'n' LINE OF 'm'(MAX)CHAR*/
function truncateString(element, Cnt, lineLength, message) {
    var data = $(element).val().split("\n");
    var newAddr = [];
    var count = Cnt;
    var currentCount = data.length;
    if(data.length > Cnt) {
        alert(message);
    } else {
        for(var k = 0; k < data.length; k++) {
            if(data[k].length > lineLength) {
                alert(message);
                break;
            }
        }
    }
    for(var i = 0; i < currentCount; i++) {
        if(data[i].length <= lineLength && data[i].length > 0) {
            newAddr.push(data[i]);
            count--;
            if(count <= 0) {
                break;
            }
        } else if(data[i].length > lineLength) {
            var newLineCnt = Math.ceil(data[i].length / lineLength);
            for(var j = 0; j < newLineCnt; j++) {
                newAddr.push(data[i].slice(0, lineLength));
                data[i] = data[i].slice(lineLength);
                //console.log(newAddr[i] + " : " + data[i]);
                count--;
                if(count <= 0) {
                    break;
                }
            }
            if(count <= 0) {
                break;
            }
        } else if(data[i].length == 0) {
            newAddr.push("");
            count--;
            if(count <= 0) {
                break;
            }
        }
    }
    var len = newAddr.length;
    var str = "";
    $.each(newAddr, function(i) {
        //console.log(i + " : " + len);
        if(i == (len - 1)) {
            str += newAddr[i];
        } else {
            str += newAddr[i] + "\n";
        }
    });
    $(element).val(str);
}

/*ENDS COMMON FORMATING DESCRIPTION FUNCTION- 'n' LINE OF 'm'(MAX)CHAR*/

$(function() {
	
	/*START NAVBAR COLLAPSE LOGIC*/
	$('#mainNavbar').on('show.bs.collapse', function () {
		$('.utility-menu').hide();
	  	$(this).append($('.utility-menu').html());
	});
	$('#mainNavbar').on('hidden.bs.collapse', function () {
	  $('#mainNavbar ul.navbar-right').remove();
	});
	$(window).on('resize', function () {
		if (window.innerWidth > 768) {
			$('#mainNavbar ul.navbar-right').hide();
		}
		if (window.innerWidth < 768) {
			$('#mainNavbar ul.navbar-right').show();
		}
	});
	/*END NAVBAR COLLAPSE LOGIC*/

    /* START WINDOW PRINT */
    $('.print-page').on("click", function(e) {
        e.preventDefault();
        window.print();
    });
    /* END WINDOW PRINT */

    /* START PREVENT LINKS */
    $('.prevent-link').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().click();
    });
    $('.prevent-anchor').click(function(e) {
        e.preventDefault();
    });
    $('.stop-propagation').click(function(e) {
        e.stopImmediatePropagation();
    });
    /* END PREVENT LINKS */

    /*START LOGO SELECTION*/
    function fadeLogoSwap(logoSrc) {
        logo.fadeOut('slow', function() {
            logo.attr("src", logoSrc);
            logo.fadeIn('slow');
        });
    }

    function fadeInLogo(logoSrc) {
        logo.fadeOut('slow', function() {
            logo.attr("src", logoSrc);
            setTimeout(function() {
                logo.show('slow');
            }, 100);
        });
    }


    $("#carrierLogo").hide();
    $("#carrierName").on("change", function() {
        selCarrier = $("#carrierName").val();
        logo = $("#carrierLogo");
        if(selCarrier == '') {
            logo.hide('slow');
        } else if(selCarrier == 'alianca') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/alianca_logo.png');
            } else {
                fadeInLogo('../common/images/alianca_logo.png');
            }
        } else if(selCarrier == 'anl') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/anl_logo.png');
            } else {
                fadeInLogo('../common/images/anl_logo.png');
            }
        } else if(selCarrier == 'apl') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/apl_logo.png');
            } else {
                fadeInLogo('../common/images/apl_logo.png');
            }
        } else if(selCarrier == 'a') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/carrier_a.png');
            } else {
                fadeInLogo('../common/images/carrier_a.png');
            }
        } else if(selCarrier == 'g') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/carrier_g.png');
            } else {
                fadeInLogo('../common/images/carrier_g.png');
            }
		} else if(selCarrier == 'h') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/carrier_h.png');
            } else {
                fadeInLogo('../common/images/carrier_h.png');
            }
        } else if(selCarrier == 'cmacgm') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/cmacgm_logo.png');
            } else {
                fadeInLogo('../common/images/cmacgm_logo.png');
            }
        } else if(selCarrier == 'cnc') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/cnc_logo.png');
            } else {
                fadeInLogo('../common/images/cnc_logo.png');
            }
        } else if(selCarrier == 'eculine') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/eculine_logo.png');
            } else {
                fadeInLogo('../common/images/eculine_logo.png');
            }
        } else if(selCarrier == 'hamburgsud') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/hamburgsud_logo.png');
            } else {
                fadeInLogo('../common/images/hamburgsud_logo.png');
            }
        } else if(selCarrier == 'hapaglloyd') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/hapaglloyd_logo.png');
            } else {
                fadeInLogo('../common/images/hapaglloyd_logo.png');
            }
        } else if(selCarrier == 'ml') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/ml_logo.png');
            } else {
                fadeInLogo('../common/images/ml_logo.png');
            }
        } else if(selCarrier == 'mcc') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/mcc_logo.png');
            } else {
                fadeInLogo('../common/images/mcc_logo.png');
            }
        } else if(selCarrier == 'msc') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/msc_logo.png');
            } else {
                fadeInLogo('../common/images/msc_logo.png');
            }
        } else if(selCarrier == 'zim') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/zim_logo.png');
            } else {
                fadeInLogo('../common/images/zim_logo.png');
            }
        } else if(selCarrier == 'uasc') {
            if(logo.is(':visible')) {
                fadeLogoSwap('../common/images/uasc_logo.png');
            } else {
                fadeInLogo('../common/images/uasc_logo.png');
            }
        } else {
            logo.hide('slow');
        }
    });
    /*END LOGO SELECTION*/

    /*START ADDITIONAL PARTIES ICON TOGGLE*/
    function toggleAddParties(e) {
        $('#partyToggle').find('i.indicator').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    }


    $('#additional-parties').on('hide.bs.collapse', toggleAddParties);
    $('#additional-parties').on('show.bs.collapse', toggleAddParties);
    /*END ADDITIONAL PARTIES ICON TOGGLE*/

    /*START PARTY DETAILS FIELD DISABLING*/
    $('#partyName').on('keyup', function() {
        if($(this).val() == '') {
            $('#partyPhone').prop('disabled', true);
            $('#partyFax').prop('disabled', true);
            $('#partyEmail').prop('disabled', true);
        } else {
            $('#partyPhone').prop('disabled', false);
            $('#partyFax').prop('disabled', false);
            $('#partyEmail').prop('disabled', false);
        }
    });
    /*END PARTY DETAILS FIELD DISABLING*/
    var NoResultsLabel = "No matches found";
    $(".autocomplete-loc").autocomplete({
        source : function(request, response) {
            var results = $.ui.autocomplete.filter(locationList, request.term);
            //response(results.slice(0, 10));
            if(!results.length) {
                results = [NoResultsLabel];
            }
            response(results);
        },
        select : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                $(this).val('');
                event.preventDefault();
            }
        },
        focus : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                event.preventDefault();
            }
        },
        change : function(event, ui) {
            if(!ui.item) {
                $(this).val('');
            }
        },
        minLength : 3,
        autoFocus : true
    });
    $(".autocomplete-blReq").autocomplete({
        source : function(request, response) {
            var results = $.ui.autocomplete.filter(blRequestor, request.term);
            //response(results.slice(0, 10));
            if(!results.length) {
                results = [NoResultsLabel];
            }
            response(results);
        },
        select : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                $(this).val('');
                event.preventDefault();
            }
        },
        focus : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                event.preventDefault();
            }
        },
        change : function(event, ui) {
            if(!ui.item) {
                $(this).val('');
            }
        },
        minLength : 3,
        autoFocus : true
    });
	
    $(".autocomplete-pkg").autocomplete({
        source : function(request, response) {
            var results = $.ui.autocomplete.filter(packageList, request.term);
            //response(results.slice(0, 10));
            if(!results.length) {
                results = [NoResultsLabel];
            }
            response(results);
        },
        select : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                $(this).val('');
                event.preventDefault();
            }
        },
        focus : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                event.preventDefault();
            }
        },
        change : function(event, ui) {
            if(!ui.item) {
                $(this).val('');
            }
        },
        minLength : 3,
        autoFocus : true
    });

    $(".autocomplete-cty").autocomplete({
        source : function(request, response) {
            var results = $.ui.autocomplete.filter(countryList, request.term);
            //response(results.slice(0, 10));
            if(!results.length) {
                results = [NoResultsLabel];
            }
            response(results);
        },
        select : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                $(this).val('');
                event.preventDefault();
            }
        },
        focus : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                event.preventDefault();
            }
        },
        change : function(event, ui) {
            if(!ui.item) {
                $(this).val('');
            }
        },
        minLength : 3,
        autoFocus : true
    });

    /*STARTS SEARCH-SI / SEARCH-BK VESSEL CHANGE*/
    $(".autocomplete-vessel").autocomplete({
        source : function(request, response) {
            var results = $.ui.autocomplete.filter(vesselList, request.term);
            //response(results.slice(0, 10));
            if(!results.length) {
                results = [NoResultsLabel];
            }
            response(results);
        },
        select : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                $(this).val('');
                event.preventDefault();
            }
            if(ui.item.value) {
                $("#voyageCombo").prop("disabled", false).prop('selectedIndex', 1);
            }
        },
        focus : function(event, ui) {
            if(ui.item.label === NoResultsLabel) {
                event.preventDefault();
            }
        },
        change : function(event, ui) {
            if(!ui.item) {
                $(this).val('');
                $("#voyageCombo").prop("disabled", true).prop('selectedIndex', 0);
            }
        },
        minLength : 3,
        autoFocus : true
    });

    /*ENDS SEARCH-SI VESSEL CHANGE*/

    /*JQUERY HACK THAT BOLDS AUTOCOMPLETE MATCHED TEXT - REPLACE THIS CODE SOMETHING MORE LEGIT*/
    $.ui.autocomplete.prototype._renderItem = function(ul, item) {
        item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
        return $("<li></li>").data("item.autocomplete", item).append("<a>" + item.label + "</a>").appendTo(ul);
    };
    /*END JQUERY HACK*/

    /*MAKE AUTOCOMPLETE WIDTH AUTO -START*/
    $.extend($.ui.autocomplete.prototype.options, {
        open : function(event, ui) {
            $(this).autocomplete("widget").css({

                "width" : 'auto',
                "min-width" : ($(this).width() + 22 + "px")
            });
        }
    });
    /*MAKE AUTOCOMPLETE WIDTH AUTO-END*/

    /*END AUTOCOMPLETE FIELDS*/

    /*START - SELECT ALL INPUT TEXT ON CLICK*/
    $('.select-this').focus(function() {
        $(this).select();
    });
    /*END - SELECT ALL INPUT TEXT ON FOCUS*/

    /*START - SET FOOTER COPYRIGHT YEAR - REMOVE FROM PRODUCTION - USE SERVER SIDE DATE*/
    var currentYear = (new Date).getFullYear();
    $("#copyright-year").text(currentYear);
    /*END - SET FOOTER COPYRIGHT YEAR - REMOVE FROM PRODUCTION - USE SERVER SIDE DATE*/
	
	/*START - GO TO HOME/DASHBOARD*/
    $("#goToDashboard").on('click', function(){
		location.href='../portal/my_inttra.html';
	});
    /*END - GO TO HOME/DASHBOARD*/

    /*START TOOLTIPS*/
    $(".language-tip").tooltip({
        container : 'body',
        placement : 'top',
        animation : true,
        html : true
    });
    $(".icon-tip").tooltip({
        container : 'body',
        placement : 'top',
        animation : true,
        html : true
    });
    $(".icon-button-tip").tooltip({
        container : 'body',
        placement : 'top',
        animation : true,
        html : true
    });
    /*END TOOLTIPS*/

    /*START CALENDAR OVER MODAL- MONTH AND YEAR SELECTION*/
    /*
     var enforceModalFocusFn = $.fn.modal.Constructor.prototype.enforceFocus;
     $.fn.modal.Constructor.prototype.enforceFocus = function() {

     };*/

    /*END CALENDAR OVER MODAL- MONTH AND YEAR SELECTION*/

    /* START RADIO BUTTON DISPLAY FOR TABS*/
    /*
     $('[data-toggle="buttons"] > .btn.active > input[type="radio"]').css("display", "inline").prop('checked', true);
     $('[data-toggle="buttons"] > .btn').click(function() {
     $('[data-toggle="buttons"] > .btn.active > input[type="radio"]').css("display", "inline").prop('checked', true);
     });
     $('[data-toggle="buttons"] > .btn > input[type="radio"]').click(function(e) {
     e.stopPropagation();
     $(this).parents('[data-toggle="buttons"] > .btn').click();
     });
     */
    /* END RADIO BUTTON DISPLAY FOR TABS*/

    /* START CUSTOMER SERVICE CENTER*/
    $('.csc-link').on('click', function(e) {
        window.open("/CTP.ecocp?Request_Name=CustomerServiceCenter&ACTION=CustomerServiceCenter", "CustomerServiceCenter", "left=40px,top=40px,height=600px,width=800px,status=yes,scrollbars=yes,resizable=yes");
        e.preventDefault();
    });
    /* END CUSTOMER SERVICE CENTER*/
    $(".datePickTxt").datepicker({
        dateFormat : 'dd-M-yy',
        changeMonth : true,
        changeYear : true,
        minDate : new Date(1900, 1 - 1, 1),
        onSelect : function() {
            $('form').validate().element(this);
        }
    });

    /*MODAL WINDOW BACKGROUND SCROLLING*/
    $('.modal').on("show.bs.modal", function() {
        if($('.modal-backdrop.fade.in').length < 1) {
            $('body').addClass('modal-open-cust');
        }
    });

    $('.modal').on("hide.bs.modal", function() {
        if($('.modal-backdrop.fade.in').length > 1) {
            $('body').addClass('modal-open-cust');
        } else {
            $('body').removeClass('modal-open-cust');
        }
    });

    $('.modal').on("hidden.bs.modal", function() {
        if($('.modal-backdrop.fade.in').length == 0) {
            $('body').removeClass('modal-open-cust');
        }
    });

    $("body").on("click", ".bootbox .modal-footer .btn", function() {
        if($('.modal-backdrop.fade.in').length > 1) {
            $('body').addClass('modal-open-cust');
        } else {
            $('body').removeClass('modal-open-cust');
        }
    });
    /*MODAL WINDOW STACKING ORDER AND BACKGROUND MANAGEMENT*/
    $('.modal').on('show.bs.modal', function(event) {
        var idx = $('.modal:visible:not(".bootbox")').length;
        $(this).css('z-index', 1060 + (10 * idx));
        $(this).find('.modal-content').css('z-index', 1061 + (10 * idx));
    });
    $('.modal').on('shown.bs.modal', function(event) {
        var idx = ($('.modal:visible').length) - 1;
        // raise backdrop after animation.
        $('.modal-backdrop').not('.stacked').css('z-index', 1059 + (10 * idx));
        $('.modal-backdrop').not('.stacked').addClass('stacked');
    });
    /*PREVENT MODAL WINDOW TABBING GIVE FOCUS BACK TO PREVIOUS PAGES*/
    $('.modal').keydown(function(e) {
        if($('.modal-footer .btn.btn-default').is(":focus") && (e.which || e.keyCode) == 9) {
            e.preventDefault();
            $('.modal-header .close', $(this)).focus();
        }
    });
    /*IDENTIFY STOP OF SCROLLING AND MANAGE EACH ELEMENT*/
    $.fn.scrollStopped = function(callback) {
        $(this).scroll(function() {
            var self = this, $this = $(self);
            if($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, 150, self));
        });
    };
    /*HIDE MODAL WINDOW ON SCROLL AT MODAL WINDOW*/
    $('.modal').scrollStopped(function() {
        $('.ui-datepicker').fadeOut("slow");
    });
});
/* START LOADER ANIMATION */
function showLoader(theID) {
    $('#' + theID + ' .progress-loader').fadeIn('slow');
}

function hideLoader(theID) {
    $('#' + theID + ' .progress-loader').fadeOut('slow');
}

/* END LOADER ANIMATION */

