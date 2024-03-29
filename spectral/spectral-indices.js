/*
===========
MIT License
===========

Copyright (c) 2021 David Montero Loaiza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


=================
GitHub Repository
=================

spectral module: https://github.com/davemlz/spectral
Awesome Spectral Indices for GEE: https://github.com/davemlz/awesome-ee-spectral-indices
*/

/*
==========
Attributes
==========
*/

var spectralIndices = {
    "SpectralIndices": {
        "AFRI1600": {
            "bands": [
                "N",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-17",
            "formula": "(N - 0.66 * S1) / (N + 0.66 * S1)",
            "long_name": "Aerosol Free Vegetation Index (1600 nm)",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00190-0",
            "short_name": "AFRI1600",
            "type": "vegetation"
        },
        "AFRI2100": {
            "bands": [
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-17",
            "formula": "(N - 0.5 * S2) / (N + 0.5 * S2)",
            "long_name": "Aerosol Free Vegetation Index (2100 nm)",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00190-0",
            "short_name": "AFRI2100",
            "type": "vegetation"
        },
        "ARI": {
            "bands": [
                "G",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-20",
            "formula": "(1 / G) - (1 / RE1)",
            "long_name": "Anthocyanin Reflectance Index",
            "reference": "https://doi.org/10.1562/0031-8655(2001)074%3C0038:OPANEO%3E2.0.CO;2",
            "short_name": "ARI",
            "type": "vegetation"
        },
        "ARVI": {
            "bands": [
                "N",
                "R",
                "gamma",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(N - (R - gamma * (R - B))) / (N + (R - gamma * (R - B)))",
            "long_name": "Atmospherically Resistant Vegetation Index",
            "reference": "https://doi.org/10.1109/36.134076",
            "short_name": "ARVI",
            "type": "vegetation"
        },
        "ATSAVI": {
            "bands": [
                "sla",
                "N",
                "R",
                "slb"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "sla * (N - sla * R - slb) / (sla * N + R - sla * slb + 0.08 * (1 + sla ** 2.0))",
            "long_name": "Adjusted Transformed Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(91)90009-U",
            "short_name": "ATSAVI",
            "type": "vegetation"
        },
        "AWEInsh": {
            "bands": [
                "G",
                "S1",
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "4.0 * (G - S1) - 0.25 * N + 2.75 * S2",
            "long_name": "Automated Water Extraction Index",
            "reference": "https://doi.org/10.1016/j.rse.2013.08.029",
            "short_name": "AWEInsh",
            "type": "water"
        },
        "AWEIsh": {
            "bands": [
                "B",
                "G",
                "N",
                "S1",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "B + 2.5 * G - 1.5 * (N + S1) - 0.25 * S2",
            "long_name": "Automated Water Extraction Index with Shadows Elimination",
            "reference": "https://doi.org/10.1016/j.rse.2013.08.029",
            "short_name": "AWEIsh",
            "type": "water"
        },
        "BAI": {
            "bands": [
                "R",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "1.0 / ((0.1 - R) ** 2.0 + (0.06 - N) ** 2.0)",
            "long_name": "Burned Area Index",
            "reference": "https://digital.csic.es/bitstream/10261/6426/1/Martin_Isabel_Serie_Geografica.pdf",
            "short_name": "BAI",
            "type": "burn"
        },
        "BAIS2": {
            "bands": [
                "RE2",
                "RE3",
                "RE4",
                "R",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(1.0 - ((RE2 * RE3 * RE4) / R) ** 0.5) * (((S2 - RE4)/(S2 + RE4) ** 0.5) + 1.0)",
            "long_name": "Burned Area Index for Sentinel 2",
            "reference": "https://doi.org/10.3390/ecrs-2-05177",
            "short_name": "BAIS2",
            "type": "burn"
        },
        "BCC": {
            "bands": [
                "B",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "B / (R + G + B)",
            "long_name": "Blue Chromatic Coordinate",
            "reference": "https://doi.org/10.1016/0034-4257(87)90088-5",
            "short_name": "BCC",
            "type": "vegetation"
        },
        "BLFEI": {
            "bands": [
                "G",
                "R",
                "S2",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-02-09",
            "formula": "(((G+R+S2)/3.0)-S1)/(((G+R+S2)/3.0)+S1)",
            "long_name": "Built-Up Land Features Extraction Index",
            "reference": "https://doi.org/10.1080/10106049.2018.1497094",
            "short_name": "BLFEI",
            "type": "urban"
        },
        "BNDVI": {
            "bands": [
                "N",
                "B"
            ],
            "contributor": "https://github.com/MATRIX4284",
            "date_of_addition": "2021-04-07",
            "formula": "(N - B)/(N + B)",
            "long_name": "Blue Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/S1672-6308(07)60027-4",
            "short_name": "BNDVI",
            "type": "vegetation"
        },
        "BWDRVI": {
            "bands": [
                "alpha",
                "N",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-20",
            "formula": "(alpha * N - B) / (alpha * N + B)",
            "long_name": "Blue Wide Dynamic Range Vegetation Index",
            "reference": "https://doi.org/10.2135/cropsci2007.01.0031",
            "short_name": "BWDRVI",
            "type": "vegetation"
        },
        "CIG": {
            "bands": [
                "N",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N / G) - 1.0",
            "long_name": "Chlorophyll Index Green",
            "reference": "https://doi.org/10.1078/0176-1617-00887",
            "short_name": "CIG",
            "type": "vegetation"
        },
        "CIRE": {
            "bands": [
                "N",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(N / RE1) - 1",
            "long_name": "Chlorophyll Index Red Edge",
            "reference": "https://doi.org/10.1078/0176-1617-00887",
            "short_name": "CIRE",
            "type": "vegetation"
        },
        "CSIT": {
            "bands": [
                "N",
                "S2",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "N / (S2 * T1 / 10000.0)",
            "long_name": "Char Soil Index Thermal",
            "reference": "https://doi.org/10.1080/01431160600954704",
            "short_name": "CSIT",
            "type": "burn"
        },
        "CVI": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N * R) / (G ** 2.0)",
            "long_name": "Chlorophyll Vegetation Index",
            "reference": "https://www.cabdirect.org/cabdirect/abstract/20073176046",
            "short_name": "CVI",
            "type": "vegetation"
        },
        "DVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "N - R",
            "long_name": "Difference Vegetation Index",
            "reference": "https://doi.org/10.2307/1936256",
            "short_name": "DVI",
            "type": "vegetation"
        },
        "DVIplus": {
            "bands": [
                "lambdaN",
                "lambdaR",
                "lambdaG",
                "G",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-20",
            "formula": "((lambdaN - lambdaR)/(lambdaN - lambdaG)) * G + (1.0 - ((lambdaN - lambdaR)/(lambdaN - lambdaG))) * N - R",
            "long_name": "Difference Vegetation Index Plus",
            "reference": "https://doi.org/10.1016/j.rse.2019.03.028",
            "short_name": "DVIplus",
            "type": "vegetation"
        },
        "DpRVIHH": {
            "bands": [
                "HV",
                "HH"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-12-25",
            "formula": "(4.0 * HV)/(HH + HV)",
            "long_name": "Dual-Polarized Radar Vegetation Index HH",
            "reference": "https://www.tandfonline.com/doi/abs/10.5589/m12-043",
            "short_name": "DpRVIHH",
            "type": "radar"
        },
        "DpRVIVV": {
            "bands": [
                "VH",
                "VV"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-12-25",
            "formula": "(4.0 * VH)/(VV + VH)",
            "long_name": "Dual-Polarized Radar Vegetation Index VV",
            "reference": "https://doi.org/10.3390/app9040655",
            "short_name": "DpRVIVV",
            "type": "radar"
        },
        "EBBI": {
            "bands": [
                "S1",
                "N",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-17",
            "formula": "(S1 - N) / (10.0 * ((S1 + T1) ** 0.5))",
            "long_name": "Enhanced Built-Up and Bareness Index",
            "reference": "https://doi.org/10.3390/rs4102957",
            "short_name": "EBBI",
            "type": "urban"
        },
        "EVI": {
            "bands": [
                "g",
                "N",
                "R",
                "C1",
                "C2",
                "B",
                "L"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "g * (N - R) / (N + C1 * R - C2 * B + L)",
            "long_name": "Enhanced Vegetation Index",
            "reference": "https://doi.org/10.1016/S0034-4257(96)00112-5",
            "short_name": "EVI",
            "type": "vegetation"
        },
        "EVI2": {
            "bands": [
                "g",
                "N",
                "R",
                "L"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "g * (N - R) / (N + 2.4 * R + L)",
            "long_name": "Two-Band Enhanced Vegetation Index",
            "reference": "https://doi.org/10.1016/j.rse.2008.06.006",
            "short_name": "EVI2",
            "type": "vegetation"
        },
        "ExG": {
            "bands": [
                "G",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "2 * G - R - B",
            "long_name": "Excess Green Index",
            "reference": "https://doi.org/10.13031/2013.27838",
            "short_name": "ExG",
            "type": "vegetation"
        },
        "FCVI": {
            "bands": [
                "N",
                "R",
                "G",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-20",
            "formula": "N - ((R + G + B)/3.0)",
            "long_name": "Fluorescence Correction Vegetation Index",
            "reference": "https://doi.org/10.1016/j.rse.2020.111676",
            "short_name": "FCVI",
            "type": "vegetation"
        },
        "GARI": {
            "bands": [
                "N",
                "G",
                "B",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (G - (B - R))) / (N - (G + (B - R)))",
            "long_name": "Green Atmospherically Resistant Vegetation Index",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=363",
            "short_name": "GARI",
            "type": "vegetation"
        },
        "GBNDVI": {
            "bands": [
                "N",
                "G",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (G + B))/(N + (G + B))",
            "long_name": "Green-Blue Normalized Difference Vegetation Index",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=186",
            "short_name": "GBNDVI",
            "type": "vegetation"
        },
        "GCC": {
            "bands": [
                "G",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "G / (R + G + B)",
            "long_name": "Green Chromatic Coordinate",
            "reference": "https://doi.org/10.1016/0034-4257(87)90088-5",
            "short_name": "GCC",
            "type": "vegetation"
        },
        "GDVI": {
            "bands": [
                "N",
                "nexp",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "((N ** nexp) - (R ** nexp)) / ((N ** nexp) + (R ** nexp))",
            "long_name": "Generalized Difference Vegetation Index",
            "reference": "https://doi.org/10.3390/rs6021211",
            "short_name": "GDVI",
            "type": "vegetation"
        },
        "GEMI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "((2.0*((N ** 2.0)-(R ** 2.0)) + 1.5*N + 0.5*R)/(N + R + 0.5))*(1.0 - 0.25*((2.0 * ((N ** 2.0) - (R ** 2)) + 1.5 * N + 0.5 * R)/(N + R + 0.5)))-((R - 0.125)/(1 - R))",
            "long_name": "Global Environment Monitoring Index",
            "reference": "http://dx.doi.org/10.1007/bf00031911",
            "short_name": "GEMI",
            "type": "vegetation"
        },
        "GLI": {
            "bands": [
                "G",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(2.0 * G - R - B) / (2.0 * G + R + B)",
            "long_name": "Green Leaf Index",
            "reference": "http://dx.doi.org/10.1080/10106040108542184",
            "short_name": "GLI",
            "type": "vegetation"
        },
        "GNDVI": {
            "bands": [
                "N",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - G)/(N + G)",
            "long_name": "Green Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/S0034-4257(96)00072-7",
            "short_name": "GNDVI",
            "type": "vegetation"
        },
        "GRNDVI": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (G + R))/(N + (G + R))",
            "long_name": "Green-Red Normalized Difference Vegetation Index",
            "reference": "https://www.indexdatabase.de/db/i-single.php?id=185",
            "short_name": "GRNDVI",
            "type": "vegetation"
        },
        "GVMI": {
            "bands": [
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "((N + 0.1) - (S2 + 0.02)) / ((N + 0.1) + (S2 + 0.02))",
            "long_name": "Global Vegetation Moisture Index",
            "reference": "https://doi.org/10.1016/S0034-4257(02)00037-8",
            "short_name": "GVMI",
            "type": "vegetation"
        },
        "IBI": {
            "bands": [
                "S1",
                "N",
                "R",
                "L",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-02-09",
            "formula": "(((S1-N)/(S1+N))-(((N-R)*(1.0+L)/(N+R+L))+((G-S1)/(G+S1)))/2.0)/(((S1-N)/(S1+N))+(((N-R)*(1.0+L)/(N+R+L))+((G-S1)/(G+S1)))/2.0)",
            "long_name": "Index-Based Built-Up Index",
            "reference": "https://doi.org/10.1080/01431160802039957",
            "short_name": "IBI",
            "type": "urban"
        },
        "IRECI": {
            "bands": [
                "RE3",
                "R",
                "RE1",
                "RE2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-17",
            "formula": "(RE3 - R) / (RE1 / RE2)",
            "long_name": "Inverted Red-Edge Chlorophyll Index",
            "reference": "https://doi.org/10.1016/j.isprsjprs.2013.04.007",
            "short_name": "IRECI",
            "type": "vegetation"
        },
        "MBWI": {
            "bands": [
                "omega",
                "G",
                "R",
                "N",
                "S1",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "(omega * G) - R - N - S1 - S2",
            "long_name": "Multi-Band Water Index",
            "reference": "https://doi.org/10.1016/j.jag.2018.01.018",
            "short_name": "MBWI",
            "type": "water"
        },
        "MCARI": {
            "bands": [
                "RE1",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "((RE1 - R) - 0.2 * (RE1 - G)) * (RE1 / R)",
            "long_name": "Modified Chlorophyll Absorption in Reflectance Index",
            "reference": "http://dx.doi.org/10.1016/S0034-4257(00)00113-9",
            "short_name": "MCARI",
            "type": "vegetation"
        },
        "MCARI1": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "1.2 * (2.5 * (N - R) - 1.3 * (N - G))",
            "long_name": "Modified Chlorophyll Absorption in Reflectance Index 1",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MCARI1",
            "type": "vegetation"
        },
        "MCARI2": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(1.5 * (2.5 * (N - R) - 1.3 * (N - G))) / ((((2.0 * N + 1) ** 2) - (6.0 * N - 5 * (R ** 0.5)) - 0.5) ** 0.5)",
            "long_name": "Modified Chlorophyll Absorption in Reflectance Index 2",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MCARI2",
            "type": "vegetation"
        },
        "MCARI705": {
            "bands": [
                "RE2",
                "RE1",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "((RE2 - RE1) - 0.2 * (RE2 - G)) * (RE2 / RE1)",
            "long_name": "Modified Chlorophyll Absorption in Reflectance Index (705 and 750 nm)",
            "reference": "https://doi.org/10.1016/j.agrformet.2008.03.005",
            "short_name": "MCARI705",
            "type": "vegetation"
        },
        "MCARIOSAVI": {
            "bands": [
                "RE1",
                "R",
                "G",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "(((RE1 - R) - 0.2 * (RE1 - G)) * (RE1 / R)) / (1.16 * (N - R) / (N + R + 0.16))",
            "long_name": "MCARI/OSAVI Ratio",
            "reference": "https://doi.org/10.1016/S0034-4257(00)00113-9",
            "short_name": "MCARIOSAVI",
            "type": "vegetation"
        },
        "MCARIOSAVI705": {
            "bands": [
                "RE2",
                "RE1",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "(((RE2 - RE1) - 0.2 * (RE2 - G)) * (RE2 / RE1)) / (1.16 * (RE2 - RE1) / (RE2 + RE1 + 0.16))",
            "long_name": "MCARI/OSAVI Ratio (705 and 750 nm)",
            "reference": "https://doi.org/10.1016/j.agrformet.2008.03.005",
            "short_name": "MCARIOSAVI705",
            "type": "vegetation"
        },
        "MGRVI": {
            "bands": [
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(G ** 2.0 - R ** 2.0) / (G ** 2.0 + R ** 2.0)",
            "long_name": "Modified Green Red Vegetation Index",
            "reference": "https://doi.org/10.1016/j.jag.2015.02.012",
            "short_name": "MGRVI",
            "type": "vegetation"
        },
        "MNDVI": {
            "bands": [
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - S2)/(N + S2)",
            "long_name": "Modified Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1080/014311697216810",
            "short_name": "MNDVI",
            "type": "vegetation"
        },
        "MNDWI": {
            "bands": [
                "G",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - S1) / (G + S1)",
            "long_name": "Modified Normalized Difference Water Index",
            "reference": "https://doi.org/10.1080/01431160600589179",
            "short_name": "MNDWI",
            "type": "water"
        },
        "MNLI": {
            "bands": [
                "L",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(1 + L)*((N ** 2) - R)/((N ** 2) + R + L)",
            "long_name": "Modified Non-Linear Vegetation Index",
            "reference": "https://doi.org/10.1109/TGRS.2003.812910",
            "short_name": "MNLI",
            "type": "vegetation"
        },
        "MSAVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "0.5 * (2.0 * N + 1 - (((2 * N + 1) ** 2) - 8 * (N - R)) ** 0.5)",
            "long_name": "Modified Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(94)90134-1",
            "short_name": "MSAVI",
            "type": "vegetation"
        },
        "MSR": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(N / R - 1) / ((N / R + 1) ** 0.5)",
            "long_name": "Modified Simple Ratio",
            "reference": "https://doi.org/10.1080/07038992.1996.10855178",
            "short_name": "MSR",
            "type": "vegetation"
        },
        "MSR705": {
            "bands": [
                "RE2",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "(RE2 / RE1 - 1) / ((RE2 / RE1 + 1) ** 0.5)",
            "long_name": "Modified Simple Ratio (705 and 750 nm)",
            "reference": "https://doi.org/10.1016/j.agrformet.2008.03.005",
            "short_name": "MSR705",
            "type": "vegetation"
        },
        "MTCI": {
            "bands": [
                "RE2",
                "RE1",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(RE2 - RE1) / (RE1 - R)",
            "long_name": "MERIS Terrestrial Chlorophyll Index",
            "reference": "https://doi.org/10.1080/0143116042000274015",
            "short_name": "MTCI",
            "type": "vegetation"
        },
        "MTVI1": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "1.2 * (1.2 * (N - G) - 2.5 * (R - G))",
            "long_name": "Modified Triangular Vegetation Index 1",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MTVI1",
            "type": "vegetation"
        },
        "MTVI2": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(1.5 * (1.2 * (N - G) - 2.5 * (R - G))) / ((((2.0 * N + 1) ** 2) - (6.0 * N - 5 * (R ** 0.5)) - 0.5) ** 0.5)",
            "long_name": "Modified Triangular Vegetation Index 2",
            "reference": "https://doi.org/10.1016/j.rse.2003.12.013",
            "short_name": "MTVI2",
            "type": "vegetation"
        },
        "NBR": {
            "bands": [
                "N",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - S2) / (N + S2)",
            "long_name": "Normalized Burn Ratio",
            "reference": "https://www.usgs.gov/core-science-systems/nli/landsat/landsat-normalized-burn-ratio",
            "short_name": "NBR",
            "type": "burn"
        },
        "NBR2": {
            "bands": [
                "S1",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-20",
            "formula": "(S1 - S2) / (S1 + S2)",
            "long_name": "Normalized Burn Ratio 2",
            "reference": "https://www.usgs.gov/core-science-systems/nli/landsat/landsat-normalized-burn-ratio-2",
            "short_name": "NBR2",
            "type": "burn"
        },
        "NBRT": {
            "bands": [
                "N",
                "S2",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (S2 * T1 / 10000.0)) / (N + (S2 * T1 / 10000.0))",
            "long_name": "Normalized Burn Ratio Thermal",
            "reference": "https://doi.org/10.1080/01431160500239008",
            "short_name": "NBRT",
            "type": "burn"
        },
        "NDBI": {
            "bands": [
                "S1",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(S1 - N) / (S1 + N)",
            "long_name": "Normalized Difference Built-Up Index",
            "reference": "http://dx.doi.org/10.1080/01431160304987",
            "short_name": "NDBI",
            "type": "urban"
        },
        "NDBaI": {
            "bands": [
                "S1",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-17",
            "formula": "(S1 - T1) / (S1 + T1)",
            "long_name": "Normalized Difference Bareness Index",
            "reference": "https://doi.org/10.1109/IGARSS.2005.1526319",
            "short_name": "NDBaI",
            "type": "urban"
        },
        "NDDI": {
            "bands": [
                "N",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(((N - R)/(N + R)) - ((G - N)/(G + N)))/(((N - R)/(N + R)) + ((G - N)/(G + N)))",
            "long_name": "Normalized Difference Drought Index",
            "reference": "https://doi.org/10.1029/2006GL029127",
            "short_name": "NDDI",
            "type": "drought"
        },
        "NDGI": {
            "bands": [
                "lambdaN",
                "lambdaR",
                "lambdaG",
                "G",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-20",
            "formula": "(((lambdaN - lambdaR)/(lambdaN - lambdaG)) * G + (1.0 - ((lambdaN - lambdaR)/(lambdaN - lambdaG))) * N - R)/(((lambdaN - lambdaR)/(lambdaN - lambdaG)) * G + (1.0 - ((lambdaN - lambdaR)/(lambdaN - lambdaG))) * N + R)",
            "long_name": "Normalized Difference Greenness Index",
            "reference": "https://doi.org/10.1016/j.rse.2019.03.028",
            "short_name": "NDGI",
            "type": "vegetation"
        },
        "NDII": {
            "bands": [
                "N",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-20",
            "formula": "(N - S1)/(N + S1)",
            "long_name": "Normalized Difference Infrared Index",
            "reference": "https://www.asprs.org/wp-content/uploads/pers/1983journal/jan/1983_jan_77-83.pdf",
            "short_name": "NDII",
            "type": "vegetation"
        },
        "NDMI": {
            "bands": [
                "N",
                "S1"
            ],
            "contributor": "https://github.com/bpurinton",
            "date_of_addition": "2021-12-01",
            "formula": "(N - S1)/(N + S1)",
            "long_name": "Normalized Difference Moisture Index",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00318-2",
            "short_name": "NDMI",
            "type": "vegetation"
        },
        "NDPI": {
            "bands": [
                "N",
                "alpha",
                "R",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-20",
            "formula": "(N - (alpha * R + (1.0 - alpha) * S1))/(N + (alpha * R + (1.0 - alpha) * S1))",
            "long_name": "Normalized Difference Phenology Index",
            "reference": "https://doi.org/10.1016/j.rse.2017.04.031",
            "short_name": "NDPI",
            "type": "vegetation"
        },
        "NDREI": {
            "bands": [
                "N",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(N - RE1) / (N + RE1)",
            "long_name": "Normalized Difference Red Edge Index",
            "reference": "https://doi.org/10.1016/1011-1344(93)06963-4",
            "short_name": "NDREI",
            "type": "vegetation"
        },
        "NDSI": {
            "bands": [
                "G",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - S1) / (G + S1)",
            "long_name": "Normalized Difference Snow Index",
            "reference": "https://doi.org/10.1109/IGARSS.1994.399618",
            "short_name": "NDSI",
            "type": "snow"
        },
        "NDSII": {
            "bands": [
                "R",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(R - S1) / (R + S1)",
            "long_name": "Normalized Difference Snow Ice Index",
            "reference": "https://doi.org/10.1080/01431160119766",
            "short_name": "NDSII",
            "type": "snow"
        },
        "NDVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - R)/(N + R)",
            "long_name": "Normalized Difference Vegetation Index",
            "reference": "https://ntrs.nasa.gov/citations/19740022614",
            "short_name": "NDVI",
            "type": "vegetation"
        },
        "NDVI705": {
            "bands": [
                "RE2",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "(RE2 - RE1) / (RE2 + RE1)",
            "long_name": "Normalized Difference Vegetation Index (705 and 750 nm)",
            "reference": "https://doi.org/10.1016/S0176-1617(11)81633-0",
            "short_name": "NDVI705",
            "type": "vegetation"
        },
        "NDVIMNDWI": {
            "bands": [
                "N",
                "R",
                "G",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "((N - R)/(N + R)) - ((G - S1)/(G + S1))",
            "long_name": "NDVI-MNDWI Model",
            "reference": "https://doi.org/10.1007/978-3-662-45737-5_51",
            "short_name": "NDVIMNDWI",
            "type": "water"
        },
        "NDVIT": {
            "bands": [
                "N",
                "R",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(N - (R * T1 / 10000.0))/(N + (R * T1 / 10000.0))",
            "long_name": "Normalized Difference Vegetation Index Thermal",
            "reference": "https://doi.org/10.1080/01431160600954704",
            "short_name": "NDVIT",
            "type": "burn"
        },
        "NDWI": {
            "bands": [
                "G",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - N) / (G + N)",
            "long_name": "Normalized Difference Water Index",
            "reference": "https://doi.org/10.1080/01431169608948714",
            "short_name": "NDWI",
            "type": "water"
        },
        "NDYI": {
            "bands": [
                "G",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(G - B) / (G + B)",
            "long_name": "Normalized Difference Yellowness Index",
            "reference": "https://doi.org/10.1016/j.rse.2016.06.016",
            "short_name": "NDYI",
            "type": "vegetation"
        },
        "NGRDI": {
            "bands": [
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - R) / (G + R)",
            "long_name": "Normalized Green Red Difference Index",
            "reference": "https://doi.org/10.1016/0034-4257(79)90013-0",
            "short_name": "NGRDI",
            "type": "vegetation"
        },
        "NHFD": {
            "bands": [
                "RE1",
                "A"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-17",
            "formula": "(RE1 - A) / (RE1 + A)",
            "long_name": "Non-Homogeneous Feature Difference",
            "reference": "https://www.semanticscholar.org/paper/Using-WorldView-2-Vis-NIR-MSI-Imagery-to-Support-Wolf/5e5063ccc4ee76b56b721c866e871d47a77f9fb4",
            "short_name": "NHFD",
            "type": "urban"
        },
        "NIRv": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-16",
            "formula": "((N - R) / (N + R)) * N",
            "long_name": "Near-Infrared Reflectance of Vegetation",
            "reference": "https://doi.org/10.1126/sciadv.1602244",
            "short_name": "NIRv",
            "type": "vegetation"
        },
        "NIRvH2": {
            "bands": [
                "N",
                "R",
                "k",
                "lambdaN",
                "lambdaR"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "N - R - k * (lambdaN - lambdaR)",
            "long_name": "Hyperspectral Near-Infrared Reflectance of Vegetation",
            "reference": "https://doi.org/10.1016/j.rse.2021.112723",
            "short_name": "NIRvH2",
            "type": "vegetation"
        },
        "NIRvP": {
            "bands": [
                "N",
                "R",
                "PAR"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-18",
            "formula": "((N - R) / (N + R)) * N * PAR",
            "long_name": "Near-Infrared Reflectance of Vegetation and Incoming PAR",
            "reference": "https://doi.org/10.1016/j.rse.2021.112763",
            "short_name": "NIRvP",
            "type": "vegetation"
        },
        "NLI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "((N ** 2) - R)/((N ** 2) + R)",
            "long_name": "Non-Linear Vegetation Index",
            "reference": "https://doi.org/10.1080/02757259409532252",
            "short_name": "NLI",
            "type": "vegetation"
        },
        "NMDI": {
            "bands": [
                "N",
                "S1",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(N - (S1 - S2))/(N + (S1 - S2))",
            "long_name": "Normalized Multi-band Drought Index",
            "reference": "https://doi.org/10.1029/2007GL031021",
            "short_name": "NMDI",
            "type": "drought"
        },
        "NRFIg": {
            "bands": [
                "G",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(G - S2) / (G + S2)",
            "long_name": "Normalized Rapeseed Flowering Index Green",
            "reference": "https://doi.org/10.3390/rs13010105",
            "short_name": "NRFIg",
            "type": "vegetation"
        },
        "NRFIr": {
            "bands": [
                "R",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(R - S2) / (R + S2)",
            "long_name": "Normalized Rapeseed Flowering Index Red",
            "reference": "https://doi.org/10.3390/rs13010105",
            "short_name": "NRFIr",
            "type": "vegetation"
        },
        "NWI": {
            "bands": [
                "B",
                "N",
                "S1",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "(B - (N + S1 + S2))/(B + (N + S1 + S2))",
            "long_name": "New Water Index",
            "reference": "https://doi.org/10.11873/j.issn.1004-0323.2009.2.167",
            "short_name": "NWI",
            "type": "water"
        },
        "OCVI": {
            "bands": [
                "N",
                "G",
                "R",
                "cexp"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "(N / G) * (R / G) ** cexp",
            "long_name": "Optimized Chlorophyll Vegetation Index",
            "reference": "http://dx.doi.org/10.1007/s11119-008-9075-z",
            "short_name": "OCVI",
            "type": "vegetation"
        },
        "OSAVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(N - R) / (N + R + 0.16)",
            "long_name": "Optimized Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(95)00186-7",
            "short_name": "OSAVI",
            "type": "vegetation"
        },
        "QpRVI": {
            "bands": [
                "HV",
                "HH",
                "VV"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-12-24",
            "formula": "(8.0 * HV)/(HH + VV + 2.0 * HV)",
            "long_name": "Quad-Polarized Radar Vegetation Index",
            "reference": "https://doi.org/10.1109/IGARSS.2001.976856",
            "short_name": "QpRVI",
            "type": "radar"
        },
        "RCC": {
            "bands": [
                "R",
                "G",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "R / (R + G + B)",
            "long_name": "Red Chromatic Coordinate",
            "reference": "https://doi.org/10.1016/0034-4257(87)90088-5",
            "short_name": "RCC",
            "type": "vegetation"
        },
        "RDVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(N - R) / ((N + R) ** 0.5)",
            "long_name": "Renormalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(94)00114-3",
            "short_name": "RDVI",
            "type": "vegetation"
        },
        "REDSI": {
            "bands": [
                "RE3",
                "R",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "((705.0 - 665.0) * (RE3 - R) - (783.0 - 665.0) * (RE1 - R)) / (2.0 * R)",
            "long_name": "Red-Edge Disease Stress Index",
            "reference": "https://doi.org/10.3390/s18030868",
            "short_name": "REDSI",
            "type": "vegetation"
        },
        "RFDI": {
            "bands": [
                "HH",
                "HV"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-12-25",
            "formula": "(HH - HV)/(HH + HV)",
            "long_name": "Radar Forest Degradation Index",
            "reference": "https://doi.org/10.5194/bg-9-179-2012",
            "short_name": "RFDI",
            "type": "radar"
        },
        "RVI": {
            "bands": [
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "N / R",
            "long_name": "Ratio Vegetation Index",
            "reference": "https://doi.org/10.2134/agronj1968.00021962006000060016x",
            "short_name": "RVI",
            "type": "vegetation"
        },
        "S2REP": {
            "bands": [
                "RE3",
                "R",
                "RE1",
                "RE2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-17",
            "formula": "705.0 + 35.0 * ((((RE3 + R) / 2.0) - RE1) / (RE2 - RE1))",
            "long_name": "Sentinel-2 Red-Edge Position",
            "reference": "https://doi.org/10.1016/j.isprsjprs.2013.04.007",
            "short_name": "S2REP",
            "type": "vegetation"
        },
        "S2WI": {
            "bands": [
                "RE1",
                "S2"
            ],
            "contributor": "https://github.com/MATRIX4284",
            "date_of_addition": "2022-03-06",
            "formula": "(RE1 - S2)/(RE1 + S2)",
            "long_name": "Sentinel-2 Water Index",
            "reference": "https://doi.org/10.3390/w13121647",
            "short_name": "S2WI",
            "type": "water"
        },
        "S3": {
            "bands": [
                "N",
                "R",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(N * (R - S1)) / ((N + R) * (N + S1))",
            "long_name": "S3 Snow Index",
            "reference": "https://doi.org/10.3178/jjshwr.12.28",
            "short_name": "S3",
            "type": "snow"
        },
        "SARVI": {
            "bands": [
                "L",
                "N",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-11",
            "formula": "(1 + L)*(N - (R - (R - B))) / (N + (R - (R - B)) + L)",
            "long_name": "Soil Adjusted and Atmospherically Resistant Vegetation Index",
            "reference": "https://doi.org/10.1109/36.134076",
            "short_name": "SARVI",
            "type": "vegetation"
        },
        "SAVI": {
            "bands": [
                "L",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(1.0 + L) * (N - R) / (N + R + L)",
            "long_name": "Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(88)90106-X",
            "short_name": "SAVI",
            "type": "vegetation"
        },
        "SAVI2": {
            "bands": [
                "N",
                "R",
                "slb",
                "sla"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "N / (R + (slb / sla))",
            "long_name": "Soil-Adjusted Vegetation Index 2",
            "reference": "https://doi.org/10.1080/01431169008955053",
            "short_name": "SAVI2",
            "type": "vegetation"
        },
        "SAVIT": {
            "bands": [
                "L",
                "N",
                "R",
                "T1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(1.0 + L) * (N - (R * T1 / 10000.0)) / (N + (R * T1 / 10000.0) + L)",
            "long_name": "Soil-Adjusted Vegetation Index Thermal",
            "reference": "https://doi.org/10.1080/01431160600954704",
            "short_name": "SAVIT",
            "type": "burn"
        },
        "SIPI": {
            "bands": [
                "N",
                "A",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-17",
            "formula": "(N - A) / (N - R)",
            "long_name": "Structure Insensitive Pigment Index",
            "reference": "https://eurekamag.com/research/009/395/009395053.php",
            "short_name": "SIPI",
            "type": "vegetation"
        },
        "SR555": {
            "bands": [
                "RE2",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "RE2 / G",
            "long_name": "Simple Ratio (555 and 750 nm)",
            "reference": "https://doi.org/10.1016/S0176-1617(11)81633-0",
            "short_name": "SR555",
            "type": "vegetation"
        },
        "SR705": {
            "bands": [
                "RE2",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "RE2 / RE1",
            "long_name": "Simple Ratio (705 and 750 nm)",
            "reference": "https://doi.org/10.1016/S0176-1617(11)81633-0",
            "short_name": "SR705",
            "type": "vegetation"
        },
        "SWI": {
            "bands": [
                "G",
                "N",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(G * (N - S1)) / ((G + N) * (N + S1))",
            "long_name": "Snow Water Index",
            "reference": "https://doi.org/10.3390/rs11232774",
            "short_name": "SWI",
            "type": "snow"
        },
        "SeLI": {
            "bands": [
                "RE4",
                "RE1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-08",
            "formula": "(RE4 - RE1) / (RE4 + RE1)",
            "long_name": "Sentinel-2 LAI Green Index",
            "reference": "https://doi.org/10.3390/s19040904",
            "short_name": "SeLI",
            "type": "vegetation"
        },
        "TCARI": {
            "bands": [
                "RE1",
                "R",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-13",
            "formula": "3 * ((RE1 - R) - 0.2 * (RE1 - G) * (RE1 / R))",
            "long_name": "Transformed Chlorophyll Absorption in Reflectance Index",
            "reference": "https://doi.org/10.1016/S0034-4257(02)00018-4",
            "short_name": "TCARI",
            "type": "vegetation"
        },
        "TCARIOSAVI": {
            "bands": [
                "RE1",
                "R",
                "G",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "(3 * ((RE1 - R) - 0.2 * (RE1 - G) * (RE1 / R))) / (1.16 * (N - R) / (N + R + 0.16))",
            "long_name": "TCARI/OSAVI Ratio",
            "reference": "https://doi.org/10.1016/S0034-4257(02)00018-4",
            "short_name": "TCARIOSAVI",
            "type": "vegetation"
        },
        "TCARIOSAVI705": {
            "bands": [
                "RE2",
                "RE1",
                "G"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-11-06",
            "formula": "(3 * ((RE2 - RE1) - 0.2 * (RE2 - G) * (RE2 / RE1))) / (1.16 * (RE2 - RE1) / (RE2 + RE1 + 0.16))",
            "long_name": "TCARI/OSAVI Ratio (705 and 750 nm)",
            "reference": "https://doi.org/10.1016/j.agrformet.2008.03.005",
            "short_name": "TCARIOSAVI705",
            "type": "vegetation"
        },
        "TCI": {
            "bands": [
                "RE1",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "1.2 * (RE1 - G) - 1.5 * (R - G) * (RE1 / R) ** 0.5",
            "long_name": "Triangular Chlorophyll Index",
            "reference": "http://dx.doi.org/10.1109/TGRS.2007.904836",
            "short_name": "TCI",
            "type": "vegetation"
        },
        "TGI": {
            "bands": [
                "R",
                "G",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "- 0.5 * (190 * (R - G) - 120 * (R - B))",
            "long_name": "Triangular Greenness Index",
            "reference": "http://dx.doi.org/10.1016/j.jag.2012.07.020",
            "short_name": "TGI",
            "type": "vegetation"
        },
        "TRRVI": {
            "bands": [
                "RE2",
                "R",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "((RE2 - R) / (RE2 + R)) / (((N - R) / (N + R)) + 1.0)",
            "long_name": "Transformed Red Range Vegetation Index",
            "reference": "https://doi.org/10.3390/rs12152359",
            "short_name": "TRRVI",
            "type": "vegetation"
        },
        "TSAVI": {
            "bands": [
                "sla",
                "N",
                "R",
                "slb"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "sla * (N - sla * R - slb) / (sla * N + R - sla * slb)",
            "long_name": "Transformed Soil-Adjusted Vegetation Index",
            "reference": "https://doi.org/10.1109/IGARSS.1989.576128",
            "short_name": "TSAVI",
            "type": "vegetation"
        },
        "TTVI": {
            "bands": [
                "RE3",
                "RE2",
                "RE4"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "0.5 * ((865.0 - 740.0) * (RE3 - RE2) - (RE4 - RE2) * (783.0 - 740))",
            "long_name": "Transformed Triangular Vegetation Index",
            "reference": "https://doi.org/10.3390/rs12010016",
            "short_name": "TTVI",
            "type": "vegetation"
        },
        "TVI": {
            "bands": [
                "N",
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "0.5 * (120 * (N - G) - 200 * (R - G))",
            "long_name": "Triangular Vegetation Index",
            "reference": "http://dx.doi.org/10.1016/S0034-4257(00)00197-8",
            "short_name": "TVI",
            "type": "vegetation"
        },
        "UI": {
            "bands": [
                "S2",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-02-07",
            "formula": "(S2 - N)/(S2 + N)",
            "long_name": "Urban Index",
            "reference": "https://www.isprs.org/proceedings/XXXI/congress/part7/321_XXXI-part7.pdf",
            "short_name": "UI",
            "type": "urban"
        },
        "VARI": {
            "bands": [
                "G",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(G - R) / (G + R - B)",
            "long_name": "Visible Atmospherically Resistant Index",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00289-9",
            "short_name": "VARI",
            "type": "vegetation"
        },
        "VARI700": {
            "bands": [
                "RE1",
                "R",
                "B"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-20",
            "formula": "(RE1 - 1.7 * R + 0.7 * B) / (RE1 + 1.3 * R - 1.3 * B)",
            "long_name": "Visible Atmospherically Resistant Index (700 nm)",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00289-9",
            "short_name": "VARI700",
            "type": "vegetation"
        },
        "VI700": {
            "bands": [
                "RE1",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-20",
            "formula": "(RE1 - R) / (RE1 + R)",
            "long_name": "Vegetation Index (700 nm)",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00289-9",
            "short_name": "VI700",
            "type": "vegetation"
        },
        "VIG": {
            "bands": [
                "G",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-20",
            "formula": "(G - R) / (G + R)",
            "long_name": "Vegetation Index Green",
            "reference": "https://doi.org/10.1016/S0034-4257(01)00289-9",
            "short_name": "VIG",
            "type": "vegetation"
        },
        "VgNIRBI": {
            "bands": [
                "G",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-02-09",
            "formula": "(G - N)/(G + N)",
            "long_name": "Visible Green-Based Built-Up Index",
            "reference": "https://doi.org/10.1016/j.ecolind.2015.03.037",
            "short_name": "VgNIRBI",
            "type": "urban"
        },
        "VrNIRBI": {
            "bands": [
                "R",
                "N"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-02-09",
            "formula": "(R - N)/(R + N)",
            "long_name": "Visible Red-Based Built-Up Index",
            "reference": "https://doi.org/10.1016/j.ecolind.2015.03.037",
            "short_name": "VrNIRBI",
            "type": "urban"
        },
        "WDRVI": {
            "bands": [
                "alpha",
                "N",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "(alpha * N - R) / (alpha * N + R)",
            "long_name": "Wide Dynamic Range Vegetation Index",
            "reference": "https://doi.org/10.1078/0176-1617-01176",
            "short_name": "WDRVI",
            "type": "vegetation"
        },
        "WDVI": {
            "bands": [
                "N",
                "sla",
                "R"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-14",
            "formula": "N - sla * R",
            "long_name": "Weighted Difference Vegetation Index",
            "reference": "https://doi.org/10.1016/0034-4257(89)90076-X",
            "short_name": "WDVI",
            "type": "vegetation"
        },
        "WI1": {
            "bands": [
                "G",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(G - S2) / (G + S2)",
            "long_name": "Water Index 1",
            "reference": "https://doi.org/10.3390/rs11182186",
            "short_name": "WI1",
            "type": "water"
        },
        "WI2": {
            "bands": [
                "B",
                "S2"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-09-18",
            "formula": "(B - S2) / (B + S2)",
            "long_name": "Water Index 2",
            "reference": "https://doi.org/10.3390/rs11182186",
            "short_name": "WI2",
            "type": "water"
        },
        "WRI": {
            "bands": [
                "G",
                "R",
                "N",
                "S1"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2022-01-17",
            "formula": "(G + R)/(N + S1)",
            "long_name": "Water Ratio Index",
            "reference": "https://doi.org/10.1109/GEOINFORMATICS.2010.5567762",
            "short_name": "WRI",
            "type": "water"
        },
        "kEVI": {
            "bands": [
                "g",
                "kNN",
                "kNR",
                "C1",
                "C2",
                "kNB",
                "kNL"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-10",
            "formula": "g * (kNN - kNR) / (kNN + C1 * kNR - C2 * kNB + kNL)",
            "long_name": "Kernel Enhanced Vegetation Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kEVI",
            "type": "kernel"
        },
        "kNDVI": {
            "bands": [
                "kNN",
                "kNR"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "(kNN - kNR)/(kNN + kNR)",
            "long_name": "Kernel Normalized Difference Vegetation Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kNDVI",
            "type": "kernel"
        },
        "kRVI": {
            "bands": [
                "kNN",
                "kNR"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-04-07",
            "formula": "kNN / kNR",
            "long_name": "Kernel Ratio Vegetation Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kRVI",
            "type": "kernel"
        },
        "kVARI": {
            "bands": [
                "kGG",
                "kGR",
                "kGB"
            ],
            "contributor": "https://github.com/davemlz",
            "date_of_addition": "2021-05-10",
            "formula": "(kGG - kGR) / (kGG + kGR - kGB)",
            "long_name": "Kernel Visible Atmospherically Resistant Index",
            "reference": "https://doi.org/10.1126/sciadv.abc7447",
            "short_name": "kVARI",
            "type": "kernel"
        }
    }
};

/*
=======
Exports
=======
*/

exports.indices = spectralIndices.SpectralIndices;