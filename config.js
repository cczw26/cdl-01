var config = {
    style: 'mapbox://styles/cczw/clsklo6wx023801qy340jbo2a',
    accessToken: 'pk.eyJ1IjoiY2N6dyIsImEiOiJjbHNiNTlpOXQwYmFtMmpya2Rtc3gyc3h5In0.oOmCV89h1wOPbyLB6gynMQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Hawker Centers in Singapore',
    subtitle: "How important are Hawker Centres in Singapore, really?",
    byline: "From a planner's perspective to your local foodie on the street",
    footer: 'Source: HDB, URA and NEA.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'center',
            hidden: false,
            title: 'Introduction to Hawker Centers in SG',
            image: './image/SG_Hawker_1.jpg',
            description: "Hawker centers have long been ingrained in Singapore's urban fabric, serving as vital communal gathering spaces, as well as providing affordable and accessible food sources for all. These vibrant hubs not only showcase Singapore's rich food heritage, but also embody the nation's commitment to inclusivity and multiculturalism in ensuring diverse culinary offerings. In light of GST increase and higher living costs, such spaces are becoming more important especially for low-income households. Through a spatial lens, this series of maps thus seeks to understand the importance of hawker centers to different stakeholders, represented by the different kinds of datasets used.",
            location: {
                center: [103.78768, 1.35797],
                zoom: 10.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hawker-centers-sg',
                    opacity: 0.9,
                    duration: 0
                },
                {
                    layer: 'PA-boundary',
                    opacity: 0,
                                
                },
                {
                    layer: 'hawker-names',
                    opacity: 0              
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0              
                },
                {
                    layer: 'choropleth-fill',
                    opacity: 0              
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'hawker-centers-sg',
                    opacity: 0.5,
                    duration: 5000
                },
                {
                    layer: 'PA-boundary',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Hawker Distribution & Housing Prices',
           
            description: "Examining the choropleth map alongside the distribution of hawker centers reveals intriguing urban patterns and potential trends. Firstly, while areas such as Bukit Merah located near the Central Business District boasts a high concentration of hawker centers, the correlation between hawker center numbers and housing prices appears nuanced. Planning areas like Bedok, Ang Mo Kio, and Geylang exhibit substantial hawker counts but display significant variations in average housing prices. This discrepancy suggests that factors beyond the presence of hawker centers may influence housing prices, while also acknowledging the potential impact of gentrification that may affect the affordability of food prices in the future.",
            location: {
                center: [103.78768, 1.35797],
                zoom: 10.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hawker-centers-sg',
                    opacity: 0.6
                    ,
                    duration: 1000
                },
                {
                    layer: 'PA-boundary',
                    opacity: 0,        
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'hawker-names',
                    opacity: 0              
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0            
                },
                {
                    layer: 'choropleth-fill',
                    opacity: 0.8,
                    duration: 2000           
                }
            ],
            onChapterExit: [
                {
                    layer: 'hawker-centers-sg',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'PA-boundary',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0                
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Bedok! Affordable Housing, Hawkers Aplenty!',
            description: 'Bedok planning area features the highest hawker Center count with the lowest resale price. Zooming into the area, the impact of hawker centers on housing price seems to be of secondary importance, relative to other factors such as proximity to transport hubs (i.e. Bedok MRT station), as well as proximity to schools and recreational facilities (i.e. Bedok Town Park, Bedok Stadium). What this might mean for planners and policy makers, is the need to consider the significance of hawker centers alongside these other key factors as a measure of liveability.',
            location: {
                center: [103.91795, 1.32502],
                zoom: 13.7,
                pitch: 0,
                bearing: 0,
                speed: 1
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hawker-centers-sg',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'PA-boundary',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'hawker-names',
                    opacity: 1,
                    duration: 1000

                },
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 2000              
                },
                {
                    layer: 'choropleth-fill',
                    opacity: 0.3,
                    duration: 2000           
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'hawker-centers-sg',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'hawker-names',
                    opacity: 0,
                    duration: 1000              
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0,
                    duration: 1000           
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 1000
                }
                
            ],
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Qualitative Insights on Quality Food in Bedok',
            image: './image/East-Coast-lagoon.jpg',
            description: 'Leveraging on Google Reviews where visitors share personal insights and experiences, the ratings (out of 5) represent a composite of subjective factors such as taste, atmosphere and cost. Given the overall high ratings that is consistent across all the hawkers, this provides qualitative insight into how well-loved and patronised these hawker centers are by fellow Singaporeans, in spite of its less-than-ideal central location that may be a deterrent for some.',
            location: {
                center: [103.92606, 1.31947],
                zoom: 14.04,
                pitch: 0,
                bearing: 0,
                speed: 0.5
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hawker-centers-sg',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'hawker-names',
                    opacity: 0,
                    duration: 2000              
                },
                {
                    layer: 'hawker-markers',
                    opacity: 1,
                    duration: 1000             
                },
                 {
                    layer: 'symbols',
                    opacity: 1,
                    duration: 500

                }
                
            ],
            onChapterExit: [
                {
                    layer: 'symbols',
                    opacity: 1,
                    duration: 1000
                    
                }
                          
            ]
        }
    ]
};
