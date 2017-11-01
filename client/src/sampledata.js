const sampleData = 
{
 "kind": "qpxExpress#tripsSearch",
 "trips": {
  "kind": "qpxexpress#tripOptions",
  "requestId": "gEnb9IuqjWLpbhmTs0RY73",
  "data": {
   "kind": "qpxexpress#data",
   "airport": [
    {
     "kind": "qpxexpress#airportData",
     "code": "LAX",
     "city": "LAX",
     "name": "Los Angeles International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "SFO",
     "city": "SFO",
     "name": "San Francisco International"
    }
   ],
   "city": [
    {
     "kind": "qpxexpress#cityData",
     "code": "LAX",
     "name": "Los Angeles"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "SFO",
     "name": "San Francisco"
    }
   ],
   "aircraft": [
    {
     "kind": "qpxexpress#aircraftData",
     "code": "320",
     "name": "Airbus A320"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "738",
     "name": "Boeing 737"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "739",
     "name": "Boeing 737"
    }
   ],
   "tax": [
    {
     "kind": "qpxexpress#taxData",
     "id": "ZP",
     "name": "US Flight Segment Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "AY_001",
     "name": "US September 11th Security Fee"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "US_001",
     "name": "US Transportation Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "XF",
     "name": "US Passenger Facility Charge"
    }
   ],
   "carrier": [
    {
     "kind": "qpxexpress#carrierData",
     "code": "AS",
     "name": "Alaska Airlines"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "UA",
     "name": "United Airlines"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "VX",
     "name": "Virgin America Inc."
    }
   ]
  },
  "tripOption": [
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB005",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 80,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 80,
        "flight": {
         "carrier": "VX",
         "number": "1925"
        },
        "id": "G7xQ813u1rWimhVk",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LNTo8wOebCvZkolf",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T09:20-07:00",
          "departureTime": "2017-10-29T08:00-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 80,
          "onTimePerformance": 100,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "segmentId": "G7xQ813u1rWimhVk"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX VX SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T10:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00F",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 91,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 91,
        "flight": {
         "carrier": "UA",
         "number": "1863"
        },
        "id": "GpCFxHewwXz9DU7j",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LM5DdcAvpMxtS8zA",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T16:46-07:00",
          "departureTime": "2017-10-29T15:15-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 91,
          "onTimePerformance": 90,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "GpCFxHewwXz9DU7j"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T18:14-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00I",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 97,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 97,
        "flight": {
         "carrier": "UA",
         "number": "708"
        },
        "id": "Gkw6Svbwk+z9m7hG",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 2,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LocAMVcuvovGP9YI",
          "aircraft": "739",
          "arrivalTime": "2017-10-29T12:56-07:00",
          "departureTime": "2017-10-29T11:19-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 97,
          "onTimePerformance": 90,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "Gkw6Svbwk+z9m7hG"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T14:18-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00B",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 90,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 90,
        "flight": {
         "carrier": "UA",
         "number": "731"
        },
        "id": "G9ZXEEB9Y+-7sEhC",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L0A3thbScM23sxHE",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T21:40-07:00",
          "departureTime": "2017-10-29T20:10-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 90,
          "onTimePerformance": 80,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "G9ZXEEB9Y+-7sEhC"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T23:09-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB007",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 83,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 83,
        "flight": {
         "carrier": "VX",
         "number": "1899"
        },
        "id": "GujmowSmCMOJeYzY",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L1DezHd41VV5RlVE",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T12:40-07:00",
          "departureTime": "2017-10-29T11:17-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 83,
          "onTimePerformance": 35,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "segmentId": "GujmowSmCMOJeYzY"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX VX SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T14:16-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00H",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 93,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 93,
        "flight": {
         "carrier": "UA",
         "number": "632"
        },
        "id": "G25VNM46He-B31fe",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LV6cihzjdJVZIRqb",
          "aircraft": "739",
          "arrivalTime": "2017-10-29T13:58-07:00",
          "departureTime": "2017-10-29T12:25-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 93,
          "onTimePerformance": 90,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "G25VNM46He-B31fe"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T15:24-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00E",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 91,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 91,
        "flight": {
         "carrier": "UA",
         "number": "420"
        },
        "id": "G6ZbuMWwmygma6kS",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LSz9NVoqKaz29Jkv",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T16:14-07:00",
          "departureTime": "2017-10-29T14:43-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 91,
          "onTimePerformance": 90,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "G6ZbuMWwmygma6kS"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T17:42-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00K",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 112,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 112,
        "flight": {
         "carrier": "UA",
         "number": "1294"
        },
        "id": "GhLO5749PM3rCfCN",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 5,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LLrx6zdg35H-bKTQ",
          "aircraft": "738",
          "arrivalTime": "2017-10-29T09:52-07:00",
          "departureTime": "2017-10-29T08:00-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 112,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "GhLO5749PM3rCfCN"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T10:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB001",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 78,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 78,
        "flight": {
         "carrier": "VX",
         "number": "1929"
        },
        "id": "GwbY89ROLypAijXI",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LKIPrYYLyMtD0g4Z",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T15:23-07:00",
          "departureTime": "2017-10-29T14:05-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 78,
          "onTimePerformance": 52,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "segmentId": "GwbY89ROLypAijXI"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX VX SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T17:04-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB002",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 78,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 78,
        "flight": {
         "carrier": "AS",
         "number": "1929"
        },
        "id": "GQQSpb5o7XDU9zhT",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LMRy7aQ5DuPNw2Ur",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T15:23-07:00",
          "departureTime": "2017-10-29T14:05-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 78,
          "operatingDisclosure": "OPERATED BY VIRGIN AMERICA",
          "onTimePerformance": 52,
          "mileage": 337,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "segmentId": "GQQSpb5o7XDU9zhT"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX AS SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T17:04-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB004",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 79,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 79,
        "flight": {
         "carrier": "AS",
         "number": "1947"
        },
        "id": "GSIDyyOqkROVWsdN",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LwDnwHvfeyosgn+i",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T22:14-07:00",
          "departureTime": "2017-10-29T20:55-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 79,
          "operatingDisclosure": "OPERATED BY VIRGIN AMERICA",
          "onTimePerformance": 80,
          "mileage": 337,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "segmentId": "GSIDyyOqkROVWsdN"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX AS SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T23:54-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB003",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 79,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 79,
        "flight": {
         "carrier": "VX",
         "number": "1947"
        },
        "id": "GsLkLYrYsMmhxlT8",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LcgrvI92jl-zqB-V",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T22:14-07:00",
          "departureTime": "2017-10-29T20:55-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 79,
          "onTimePerformance": 42,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "segmentId": "GsLkLYrYsMmhxlT8"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX VX SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T23:54-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00D",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 91,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 91,
        "flight": {
         "carrier": "UA",
         "number": "414"
        },
        "id": "G8FkWTbS5+h81NpT",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 2,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LxHL69hPjaFXkHwy",
          "aircraft": "739",
          "arrivalTime": "2017-10-29T07:31-07:00",
          "departureTime": "2017-10-29T06:00-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 91,
          "onTimePerformance": 90,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "G8FkWTbS5+h81NpT"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T08:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB006",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 80,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 80,
        "flight": {
         "carrier": "AS",
         "number": "1925"
        },
        "id": "G8i4zZ8+I9mp+lQt",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LxG3kgK7mk56ERVJ",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T09:20-07:00",
          "departureTime": "2017-10-29T08:00-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 80,
          "operatingDisclosure": "OPERATED BY VIRGIN AMERICA",
          "onTimePerformance": 75,
          "mileage": 337,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "segmentId": "G8i4zZ8+I9mp+lQt"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX AS SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T10:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00C",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 90,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 90,
        "flight": {
         "carrier": "UA",
         "number": "283"
        },
        "id": "GSzp6V8H1UgsL1Y3",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 2,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L8ka0j8GiZ1cCLIu",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T20:35-07:00",
          "departureTime": "2017-10-29T19:05-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 90,
          "onTimePerformance": 70,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "GSzp6V8H1UgsL1Y3"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T22:04-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00A",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 83,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 83,
        "flight": {
         "carrier": "AS",
         "number": "1927"
        },
        "id": "G7Y7bypH+g9F+63z",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LWfiRwd9U-1XyzcO",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T11:13-07:00",
          "departureTime": "2017-10-29T09:50-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 83,
          "operatingDisclosure": "OPERATED BY VIRGIN AMERICA",
          "onTimePerformance": 19,
          "mileage": 337,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "segmentId": "G7Y7bypH+g9F+63z"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX AS SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T12:49-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00G",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 92,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 92,
        "flight": {
         "carrier": "UA",
         "number": "447"
        },
        "id": "GR2cTCX0iuE4exxT",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LvBA3MAGrstuv5+A",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T15:17-07:00",
          "departureTime": "2017-10-29T13:45-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 92,
          "onTimePerformance": 80,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "GR2cTCX0iuE4exxT"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T16:44-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB00J",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 97,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 97,
        "flight": {
         "carrier": "UA",
         "number": "1845"
        },
        "id": "G7H5Tk6LHTNqhrID",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LmBKZgO-aTHdtl+S",
          "aircraft": "739",
          "arrivalTime": "2017-10-29T11:52-07:00",
          "departureTime": "2017-10-29T10:15-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "7",
          "destinationTerminal": "3",
          "duration": 97,
          "onTimePerformance": 70,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "carrier": "UA",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HAA0AKEN"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AjE+RnaOFDmsbOR+RmiLa+RK9HKN5nj1mhTpVjvV5aRQ",
        "segmentId": "G7H5Tk6LHTNqhrID"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX UA SFO 147.91HAA0AKEN USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T13:14-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB008",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 83,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 83,
        "flight": {
         "carrier": "VX",
         "number": "1927"
        },
        "id": "G6pKU85tX-f3-SaM",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Li33rn-ET0r9e9Jq",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T11:13-07:00",
          "departureTime": "2017-10-29T09:50-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 83,
          "onTimePerformance": 48,
          "mileage": 337,
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "carrier": "VX",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AfWmtwvAz3TBsfUukpgDfprDuDNwskUtZ04QBWLqnH8k",
        "segmentId": "G6pKU85tX-f3-SaM"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX VX SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T12:49-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD173.20",
    "id": "GTrCZG30k01S4KruVy3kqB009",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 83,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 83,
        "flight": {
         "carrier": "AS",
         "number": "1899"
        },
        "id": "Gez1MHPV2RDCX7X3",
        "cabin": "COACH",
        "bookingCode": "H",
        "bookingCodeCount": 3,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lld+WvqFuC47pnvx",
          "aircraft": "320",
          "arrivalTime": "2017-10-29T12:40-07:00",
          "departureTime": "2017-10-29T11:17-07:00",
          "origin": "LAX",
          "destination": "SFO",
          "originTerminal": "6",
          "destinationTerminal": "2",
          "duration": 83,
          "operatingDisclosure": "OPERATED BY VIRGIN AMERICA",
          "onTimePerformance": 27,
          "mileage": 337,
          "meal": "Food for Purchase",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "carrier": "AS",
        "origin": "LAX",
        "destination": "SFO",
        "basisCode": "HVXVN5"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ALjj4HxTE1iffaw0mcTh/YjfMc84KOFaFjw2MgeE58jM",
        "segmentId": "Gez1MHPV2RDCX7X3"
       }
      ],
      "baseFareTotal": "USD147.91",
      "saleFareTotal": "USD147.91",
      "saleTaxTotal": "USD25.29",
      "saleTotal": "USD173.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_001",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD11.09"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZP",
        "chargeType": "GOVERNMENT",
        "code": "ZP",
        "country": "US",
        "salePrice": "USD4.10"
       }
      ],
      "fareCalculation": "LAX AS SFO 147.91HVXVN5 USD 147.91 END ZP LAX XT 11.09US 4.10ZP 5.60AY 4.50XF LAX4.50",
      "latestTicketingTime": "2017-10-29T14:16-04:00",
      "ptc": "ADT"
     }
    ]
   }
  ]
 }
}

export default sampleData;