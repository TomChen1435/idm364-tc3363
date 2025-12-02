import { listAirlines, getAirline, getAssets, getAssetContent } from 'soaring-symbols'

// Get a list of all airlines
const all = listAirlines()

// Get a specific airline's data
// const vna = getAirline('VN') 

/* output example
{
    "name": "Vietnam Airlines",
    "iata": "VN",
    "icao": "HVN",
    "country": "VN",
    "flag_carrier": true,
    "website": "https://www.vietnamairlines.com",
    "alliance": "SkyTeam",
    "branding": {
        "primary_color": "#d99e09",
        "tagline": "Reach Further",
        "guidelines": "https://www.vietnamairlines.com/~/media/FilesDownload/AboutUs/Corporate-Identity/GSM-2017-Web1.pdf"
    },
    "slug": "vietnam-airlines"
}
*/

// Get asset paths for an airline
// const assets = getAssets('VN')

/* output example
{
    "icon": {
        "color": "assets/vietnam-airlines/icon.svg",
        "monochrome": null,
        "color_model": "single",
        "colors": [
            "#d99e09"
        ]
    },
    "logo": {
        "color": "assets/vietnam-airlines/logo.svg",
        "monochrome": "assets/vietnam-airlines/logo-mono.svg",
        "color_model": "multi",
        "colors": [
            "#d99e09",
            "#005e80"
        ]
    }
}
*/

// Get SVG content for an airline
// const content = getAssetContent('VN')

/* output example - SVG content is truncated for brevity
{
    "icon": {
        "color": "<svg>...</svg>",
        "monochrome": null,
        "color_model": "single",
        "colors": ["#d99e09"]
    },
    "logo": {
        "color": "<svg>...</svg>",
        "monochrome": "<svg>...</svg>",
        "color_model": "multi",
        "colors": ["#d99e09", "#005e80"]
    }
}
*/
