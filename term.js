/*!
 * Please do not remove the copyright-
 * Blogger Recent Search Term
 * http://www.entranceuniversity.com/ 
 * Copyright 2012, ENTRANCE UNIVERSITY PORTAL
 * Date: Thu May 23 2012 */
function fillTable(result) {
                var table = document.getElementById('inbound_keywords').tBodies[0];
                var data = result.data;
                for (var i = 0; i < data.length; i++) {
                    table.innerHTML += ['<tr>', '<td>', data[i][0], '</td>', '<td>', data[i][1], '</td>', '</tr>'].join('');
                }
            }
            
            var script = document.createElement('script');
            script.src = 'https://api.tynt.com/publisher/v1/keyword/inbound?site_guid=dftXmKLVWr54nUaKltUXmc&api_key=726a6M6j374w386i3h4J3R983W7r4u3c&hours=24&callback=fillTable';
            script.async = 'async';
            document.getElementsByTagName('head')[0].appendChild(script);
document.write(document.referrer);
