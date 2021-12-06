<Div align="center">

# :biohazard: Covid Tracker App

</div>
<strong>App type:</strong> React Native App<br/>
<strong>Description: App that pulls Covid case stats</strong>
<br/>

## :bookmark_tabs: &nbsp; FEATURE LIST

### Core Application Features

1. Display global covid cases and deaths numbers
2. Search screen to look up countries
3. View the stats for the countries cases and deaths

### Nice to have features

1. Authentication
2. Bookmark specific countries
3. Load a Geo Json image map.
4. Maybe heat map for search country.

## :file_folder: &nbsp; SUPPORTING DOCUMENTS

### Sample JSON example:

{
"Global": {
"NewConfirmed": 100282,
"TotalConfirmed": 1162857,
"NewDeaths": 5658,
"TotalDeaths": 63263,
"NewRecovered": 15405,
"TotalRecovered": 230845
},
"Countries": [
{
"Country": "ALA Aland Islands",
"CountryCode": "AX",
"Slug": "ala-aland-islands",
"NewConfirmed": 0,
"TotalConfirmed": 0,
"NewDeaths": 0,
"TotalDeaths": 0,
"NewRecovered": 0,
"TotalRecovered": 0,
"Date": "2020-04-05T06:37:00Z"
},
{
"Country": "Afghanistan",
"CountryCode": "AF",
"Slug": "afghanistan",
"NewConfirmed": 18,
"TotalConfirmed": 299,
"NewDeaths": 1,
"TotalDeaths": 7,
"NewRecovered": 0,
"TotalRecovered": 10,
"Date": "2020-04-05T06:37:00Z"
},
],
"Date": "2020-04-05T06:37:00Z"
}

### References / Resources

-   Project Inspired from this covid web app [here!](https://www.arcgis.com/apps/dashboards/bda7594740fd40299423467b48e9ecf6)
-   Covid 19 API [source](https://covid19api.com/)
