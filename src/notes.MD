pull keywords from the user app data array 
    userApps = ['CVE Impact Score', 'whatsapp', 'telegram', 'viber', 'skype', 'hangouts', 'Average']
    for each app in the user app data array run the api search using the app as the keyword.

    
1. get all of the CVE impact scores.
2. Add them up for a total.
    This will go in the totalAPIResults component
4. sort them into 'no impact', 1-2, 3-4, 5-6, 7-8, 9-10.
    This will go into the data for the BarChart component
3. Sort them into their applications list.
     Should already be sorted since we ran each api call seperately. This is done
     so that we can view the number of CVE's per application.
5. Add them to the chart. 
6. Get the averages.



const api = thisiswheretheapiwillgo;
const userApps = ['CVE Impact Score', 'whatsapp', 'telegram', 'viber', 'skype', 'hangouts', 'Average']

for (let i = 0; i < userApps.length; i++) {
  apiPlusKeyword += api + userApps[i];
  console.log(apiPlusKeyword)
}

import axios from 'axios'

const api = "https://services.nvd.nist.gov/rest/json/cves/1.0?keyword="
const keywords = ['CVE Impact Score', 'whatsapp', 'telegram'];
for(const keyword of keywords) {
  const response = await axios.get(`${api}${keyword}`);
  console.log(response.data)
}