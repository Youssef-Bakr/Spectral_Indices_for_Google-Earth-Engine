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

var scaleParams = {
    "AAFC/ACI": {
        "landcover": 1.0
    },
    "ACA/reef_habitat/v1_0": {
        "benthic": 1.0,
        "geomorphic": 1.0,
        "reef_mask": 1.0
    },
    "AHN/AHN2_05M_INT": {
        "elevation": 1.0
    },
    "AHN/AHN2_05M_NON": {
        "elevation": 1.0
    },
    "AHN/AHN2_05M_RUW": {
        "elevation": 1.0
    },
    "ASTER/AST_L1T_003": {
        "B01": 1.0,
        "B02": 1.0,
        "B04": 1.0,
        "B05": 1.0,
        "B06": 1.0,
        "B07": 1.0,
        "B08": 1.0,
        "B09": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B12": 1.0,
        "B13": 1.0,
        "B14": 1.0,
        "B3N": 1.0
    },
    "AU/GA/AUSTRALIA_5M_DEM": {
        "elevation": 1.0
    },
    "AU/GA/DEM_1SEC/v10/DEM-H": {
        "elevation": 1.0
    },
    "AU/GA/DEM_1SEC/v10/DEM-S": {
        "elevation": 1.0
    },
    "BIOPAMA/GlobalOilPalm/v1": {
        "classification": 1.0
    },
    "CAS/IGSNRR/PML/V2": {
        "ET_water": 1.0,
        "Ec": 1.0,
        "Ei": 1.0,
        "Es": 1.0,
        "GPP": 1.0
    },
    "CGIAR/SRTM90_V4": {
        "elevation": 1.0
    },
    "CIESIN/GPWv4/ancillary-data-grids": {
        "data-context": 1.0,
        "land-area": 1.0,
        "mean-administrative-unit-area": 1.0,
        "national-identifier": 1.0,
        "water-area": 1.0,
        "water-mask": 1.0
    },
    "CIESIN/GPWv4/population-count": {
        "population-count": 1.0
    },
    "CIESIN/GPWv4/population-density": {
        "population-density": 1.0
    },
    "CIESIN/GPWv4/unwpp-adjusted-population-count": {
        "population-count": 1.0
    },
    "CIESIN/GPWv4/unwpp-adjusted-population-density": {
        "population-density": 1.0
    },
    "CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics": {
        "basic_demographic_characteristics": 1.0
    },
    "CIESIN/GPWv411/GPW_Data_Context": {
        "data_context": 1.0
    },
    "CIESIN/GPWv411/GPW_Land_Area": {
        "land_area": 1.0
    },
    "CIESIN/GPWv411/GPW_Mean_Administrative_Unit_Area": {
        "mean_administrative_unit_area": 1.0
    },
    "CIESIN/GPWv411/GPW_National_Identifier_Grid": {
        "national_identifier_grid": 1.0
    },
    "CIESIN/GPWv411/GPW_Population_Count": {
        "population_count": 1.0
    },
    "CIESIN/GPWv411/GPW_Population_Density": {
        "population_density": 1.0
    },
    "CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count": {
        "unwpp-adjusted_population_count": 1.0
    },
    "CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Density": {
        "unwpp-adjusted_population_density": 1.0
    },
    "CIESIN/GPWv411/GPW_Water_Area": {
        "water_area": 1.0
    },
    "CIESIN/GPWv411/GPW_Water_Mask": {
        "water_mask": 1.0
    },
    "COPERNICUS/CORINE/V18_5_1/100m": {
        "landcover": 1.0
    },
    "COPERNICUS/CORINE/V20/100m": {
        "landcover": 1.0
    },
    "COPERNICUS/Landcover/100m/Proba-V-C3/Global": {
        "bare-coverfraction": 1.0,
        "change-confidence": 1.0,
        "crops-coverfraction": 1.0,
        "data-density-indicator": 1.0,
        "discrete_classification": 1.0,
        "discrete_classification-proba": 1.0,
        "forest_type": 1.0,
        "grass-coverfraction": 1.0,
        "moss-coverfraction": 1.0,
        "shrub-coverfraction": 1.0,
        "snow-coverfraction": 1.0,
        "tree-coverfraction": 1.0,
        "urban-coverfraction": 1.0,
        "water-permanent-coverfraction": 1.0,
        "water-seasonal-coverfraction": 1.0
    },
    "COPERNICUS/Landcover/100m/Proba-V/Global": {
        "bare-coverfraction": 1.0,
        "bare-coverfraction-stddev": 1.0,
        "crops-coverfraction": 1.0,
        "crops-coverfraction-stddev": 1.0,
        "data-density-indicator": 1.0,
        "discrete_classification": 1.0,
        "discrete_classification-proba": 1.0,
        "forest_type": 1.0,
        "grass-coverfraction": 1.0,
        "grass-coverfraction-stddev": 1.0,
        "moss-coverfraction": 1.0,
        "moss-coverfraction-stddev": 1.0,
        "shrub-coverfraction": 1.0,
        "shrub-coverfraction-stddev": 1.0,
        "snow-coverfraction": 1.0,
        "tree-coverfraction": 1.0,
        "tree-coverfraction-stddev": 1.0,
        "urban-coverfraction": 1.0,
        "water-permanent-coverfraction": 1.0,
        "water-seasonal-coverfraction": 1.0
    },
    "COPERNICUS/S1_GRD": {
        "HH": 1.0,
        "HV": 1.0,
        "VH": 1.0,
        "VV": 1.0,
        "angle": 1.0
    },
    "COPERNICUS/S2": {
        "B1": 0.0001,
        "B10": 0.0001,
        "B11": 0.0001,
        "B12": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.0001,
        "B7": 0.0001,
        "B8": 0.0001,
        "B8A": 0.0001,
        "B9": 0.0001,
        "QA10": 1.0,
        "QA20": 1.0,
        "QA60": 1.0
    },
    "COPERNICUS/S2_CLOUD_PROBABILITY": {
        "probability": 1.0
    },
    "COPERNICUS/S2_HARMONIZED": {
        "B1": 0.0001,
        "B10": 0.0001,
        "B11": 0.0001,
        "B12": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.0001,
        "B7": 0.0001,
        "B8": 0.0001,
        "B8A": 0.0001,
        "B9": 0.0001,
        "QA10": 1.0,
        "QA20": 1.0,
        "QA60": 1.0
    },
    "COPERNICUS/S2_SR": {
        "AOT": 0.001,
        "B1": 0.0001,
        "B11": 0.0001,
        "B12": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.0001,
        "B7": 0.0001,
        "B8": 0.0001,
        "B8A": 0.0001,
        "B9": 0.0001,
        "MSK_CLDPRB": 1.0,
        "MSK_SNWPRB": 1.0,
        "QA10": 1.0,
        "QA20": 1.0,
        "QA60": 1.0,
        "SCL": 1.0,
        "TCI_B": 1.0,
        "TCI_G": 1.0,
        "TCI_R": 1.0,
        "WVP": 0.001
    },
    "COPERNICUS/S2_SR_HARMONIZED": {
        "AOT": 0.001,
        "B1": 0.0001,
        "B11": 0.0001,
        "B12": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.0001,
        "B7": 0.0001,
        "B8": 0.0001,
        "B8A": 0.0001,
        "B9": 0.0001,
        "MSK_CLDPRB": 1.0,
        "MSK_SNWPRB": 1.0,
        "QA10": 1.0,
        "QA20": 1.0,
        "QA60": 1.0,
        "SCL": 1.0,
        "TCI_B": 1.0,
        "TCI_G": 1.0,
        "TCI_R": 1.0,
        "WVP": 0.001
    },
    "COPERNICUS/S3/OLCI": {
        "Oa01_radiance": 0.01394646,
        "Oa02_radiance": 0.01338726,
        "Oa03_radiance": 0.01214812,
        "Oa04_radiance": 0.01151982,
        "Oa05_radiance": 0.01009526,
        "Oa06_radiance": 0.0123538,
        "Oa07_radiance": 0.00879161,
        "Oa08_radiance": 0.00876539,
        "Oa09_radiance": 0.0095103,
        "Oa10_radiance": 0.00773378,
        "Oa11_radiance": 0.00675523,
        "Oa12_radiance": 0.0071996,
        "Oa13_radiance": 0.00749684,
        "Oa14_radiance": 0.0086512,
        "Oa15_radiance": 0.00526779,
        "Oa16_radiance": 0.00530267,
        "Oa17_radiance": 0.00493004,
        "Oa18_radiance": 0.00549962,
        "Oa19_radiance": 0.00502847,
        "Oa20_radiance": 0.00326378,
        "Oa21_radiance": 0.00324118,
        "quality_flags": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_AER_AI": {
        "absorbing_aerosol_index": 1.0,
        "sensor_altitude": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_AER_LH": {
        "aerosol_height": 1.0,
        "aerosol_optical_depth": 1.0,
        "aerosol_pressure": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_CLOUD": {
        "cloud_base_height": 1.0,
        "cloud_base_pressure": 1.0,
        "cloud_fraction": 1.0,
        "cloud_optical_depth": 1.0,
        "cloud_top_height": 1.0,
        "cloud_top_pressure": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0,
        "surface_albedo": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_CO": {
        "CO_column_number_density": 1.0,
        "H2O_column_number_density": 1.0,
        "cloud_height": 1.0,
        "sensor_altitude": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_HCHO": {
        "HCHO_slant_column_number_density": 1.0,
        "cloud_fraction": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0,
        "tropospheric_HCHO_column_number_density": 1.0,
        "tropospheric_HCHO_column_number_density_amf": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_NO2": {
        "NO2_column_number_density": 1.0,
        "NO2_slant_column_number_density": 1.0,
        "absorbing_aerosol_index": 1.0,
        "cloud_fraction": 1.0,
        "sensor_altitude": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0,
        "stratospheric_NO2_column_number_density": 1.0,
        "tropopause_pressure": 1.0,
        "tropospheric_NO2_column_number_density": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_O3": {
        "O3_column_number_density": 1.0,
        "O3_column_number_density_amf": 1.0,
        "O3_effective_temperature": 1.0,
        "O3_slant_column_number_density": 1.0,
        "cloud_fraction": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/NRTI/L3_SO2": {
        "SO2_column_number_density": 1.0,
        "SO2_column_number_density_15km": 1.0,
        "SO2_column_number_density_amf": 1.0,
        "SO2_slant_column_number_density": 1.0,
        "cloud_fraction": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_AER_AI": {
        "absorbing_aerosol_index": 1.0,
        "sensor_altitude": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_AER_LH": {
        "aerosol_height": 1.0,
        "aerosol_optical_depth": 1.0,
        "aerosol_pressure": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_CH4": {
        "CH4_column_volume_mixing_ratio_dry_air": 1.0,
        "aerosol_height": 1.0,
        "aerosol_optical_depth": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_CLOUD": {
        "cloud_base_height": 1.0,
        "cloud_base_pressure": 1.0,
        "cloud_fraction": 1.0,
        "cloud_optical_depth": 1.0,
        "cloud_top_height": 1.0,
        "cloud_top_pressure": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0,
        "surface_albedo": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_CO": {
        "CO_column_number_density": 1.0,
        "H2O_column_number_density": 1.0,
        "cloud_height": 1.0,
        "sensor_altitude": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_HCHO": {
        "HCHO_slant_column_number_density": 1.0,
        "cloud_fraction": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0,
        "tropospheric_HCHO_column_number_density": 1.0,
        "tropospheric_HCHO_column_number_density_amf": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_NO2": {
        "NO2_column_number_density": 1.0,
        "NO2_slant_column_number_density": 1.0,
        "absorbing_aerosol_index": 1.0,
        "cloud_fraction": 1.0,
        "sensor_altitude": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0,
        "stratospheric_NO2_column_number_density": 1.0,
        "tropopause_pressure": 1.0,
        "tropospheric_NO2_column_number_density": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_O3": {
        "O3_column_number_density": 1.0,
        "O3_effective_temperature": 1.0,
        "cloud_fraction": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_O3_TCL": {
        "ozone_tropospheric_mixing_ratio": 1.0,
        "ozone_tropospheric_mixing_ratio_precision": 1.0,
        "ozone_tropospheric_vertical_column": 1.0,
        "ozone_tropospheric_vertical_column_precision": 1.0,
        "qa_value": 1.0
    },
    "COPERNICUS/S5P/OFFL/L3_SO2": {
        "SO2_column_number_density": 1.0,
        "SO2_column_number_density_15km": 1.0,
        "SO2_column_number_density_amf": 1.0,
        "SO2_slant_column_number_density": 1.0,
        "absorbing_aerosol_index": 1.0,
        "cloud_fraction": 1.0,
        "sensor_azimuth_angle": 1.0,
        "sensor_zenith_angle": 1.0,
        "solar_azimuth_angle": 1.0,
        "solar_zenith_angle": 1.0
    },
    "CPOM/CryoSat2/ANTARCTICA_DEM": {
        "data_composition": 1.0,
        "elevation": 1.0,
        "slope": 1.0,
        "z_smoothed": 1.0,
        "z_uncertainty": 1.0
    },
    "CSIRO/SLGA": {
        "AWC_000_005_05": 1.0,
        "AWC_000_005_95": 1.0,
        "AWC_000_005_EV": 1.0,
        "AWC_005_015_05": 1.0,
        "AWC_005_015_95": 1.0,
        "AWC_005_015_EV": 1.0,
        "AWC_015_030_05": 1.0,
        "AWC_015_030_95": 1.0,
        "AWC_015_030_EV": 1.0,
        "AWC_030_060_05": 1.0,
        "AWC_030_060_95": 1.0,
        "AWC_030_060_EV": 1.0,
        "AWC_060_100_05": 1.0,
        "AWC_060_100_95": 1.0,
        "AWC_060_100_EV": 1.0,
        "AWC_100_200_05": 1.0,
        "AWC_100_200_95": 1.0,
        "AWC_100_200_EV": 1.0,
        "BDW_000_005_05": 1.0,
        "BDW_000_005_95": 1.0,
        "BDW_000_005_EV": 1.0,
        "BDW_005_015_05": 1.0,
        "BDW_005_015_95": 1.0,
        "BDW_005_015_EV": 1.0,
        "BDW_015_030_05": 1.0,
        "BDW_015_030_95": 1.0,
        "BDW_015_030_EV": 1.0,
        "BDW_030_060_05": 1.0,
        "BDW_030_060_95": 1.0,
        "BDW_030_060_EV": 1.0,
        "BDW_060_100_05": 1.0,
        "BDW_060_100_95": 1.0,
        "BDW_060_100_EV": 1.0,
        "BDW_100_200_05": 1.0,
        "BDW_100_200_95": 1.0,
        "BDW_100_200_EV": 1.0,
        "CLY_000_005_05": 1.0,
        "CLY_000_005_95": 1.0,
        "CLY_000_005_EV": 1.0,
        "CLY_005_015_05": 1.0,
        "CLY_005_015_95": 1.0,
        "CLY_005_015_EV": 1.0,
        "CLY_015_030_05": 1.0,
        "CLY_015_030_95": 1.0,
        "CLY_015_030_EV": 1.0,
        "CLY_030_060_05": 1.0,
        "CLY_030_060_95": 1.0,
        "CLY_030_060_EV": 1.0,
        "CLY_060_100_05": 1.0,
        "CLY_060_100_95": 1.0,
        "CLY_060_100_EV": 1.0,
        "CLY_100_200_05": 1.0,
        "CLY_100_200_95": 1.0,
        "CLY_100_200_EV": 1.0,
        "DER_000_200_05": 1.0,
        "DER_000_200_95": 1.0,
        "DER_000_200_EV": 1.0,
        "DES_000_200_05": 1.0,
        "DES_000_200_95": 1.0,
        "DES_000_200_EV": 1.0,
        "ECE_000_005_05": 1.0,
        "ECE_000_005_95": 1.0,
        "ECE_000_005_EV": 1.0,
        "ECE_005_015_05": 1.0,
        "ECE_005_015_95": 1.0,
        "ECE_005_015_EV": 1.0,
        "ECE_015_030_05": 1.0,
        "ECE_015_030_95": 1.0,
        "ECE_015_030_EV": 1.0,
        "ECE_030_060_05": 1.0,
        "ECE_030_060_95": 1.0,
        "ECE_030_060_EV": 1.0,
        "ECE_060_100_05": 1.0,
        "ECE_060_100_95": 1.0,
        "ECE_060_100_EV": 1.0,
        "ECE_100_200_05": 1.0,
        "ECE_100_200_95": 1.0,
        "ECE_100_200_EV": 1.0,
        "NTO_000_005_05": 1.0,
        "NTO_000_005_95": 1.0,
        "NTO_000_005_EV": 1.0,
        "NTO_005_015_05": 1.0,
        "NTO_005_015_95": 1.0,
        "NTO_005_015_EV": 1.0,
        "NTO_015_030_05": 1.0,
        "NTO_015_030_95": 1.0,
        "NTO_015_030_EV": 1.0,
        "NTO_030_060_05": 1.0,
        "NTO_030_060_95": 1.0,
        "NTO_030_060_EV": 1.0,
        "NTO_060_100_05": 1.0,
        "NTO_060_100_95": 1.0,
        "NTO_060_100_EV": 1.0,
        "NTO_100_200_05": 1.0,
        "NTO_100_200_95": 1.0,
        "NTO_100_200_EV": 1.0,
        "PTO_000_005_05": 1.0,
        "PTO_000_005_95": 1.0,
        "PTO_000_005_EV": 1.0,
        "PTO_005_015_05": 1.0,
        "PTO_005_015_95": 1.0,
        "PTO_005_015_EV": 1.0,
        "PTO_015_030_05": 1.0,
        "PTO_015_030_95": 1.0,
        "PTO_015_030_EV": 1.0,
        "PTO_030_060_05": 1.0,
        "PTO_030_060_95": 1.0,
        "PTO_030_060_EV": 1.0,
        "PTO_060_100_05": 1.0,
        "PTO_060_100_95": 1.0,
        "PTO_060_100_EV": 1.0,
        "PTO_100_200_05": 1.0,
        "PTO_100_200_95": 1.0,
        "PTO_100_200_EV": 1.0,
        "SLT_000_005_05": 1.0,
        "SLT_000_005_95": 1.0,
        "SLT_000_005_EV": 1.0,
        "SLT_005_015_05": 1.0,
        "SLT_005_015_95": 1.0,
        "SLT_005_015_EV": 1.0,
        "SLT_015_030_05": 1.0,
        "SLT_015_030_95": 1.0,
        "SLT_015_030_EV": 1.0,
        "SLT_030_060_05": 1.0,
        "SLT_030_060_95": 1.0,
        "SLT_030_060_EV": 1.0,
        "SLT_060_100_05": 1.0,
        "SLT_060_100_95": 1.0,
        "SLT_060_100_EV": 1.0,
        "SLT_100_200_05": 1.0,
        "SLT_100_200_95": 1.0,
        "SLT_100_200_EV": 1.0,
        "SND_000_005_05": 1.0,
        "SND_000_005_95": 1.0,
        "SND_000_005_EV": 1.0,
        "SND_005_015_05": 1.0,
        "SND_005_015_95": 1.0,
        "SND_005_015_EV": 1.0,
        "SND_015_030_05": 1.0,
        "SND_015_030_95": 1.0,
        "SND_015_030_EV": 1.0,
        "SND_030_060_05": 1.0,
        "SND_030_060_95": 1.0,
        "SND_030_060_EV": 1.0,
        "SND_060_100_05": 1.0,
        "SND_060_100_95": 1.0,
        "SND_060_100_EV": 1.0,
        "SND_100_200_05": 1.0,
        "SND_100_200_95": 1.0,
        "SND_100_200_EV": 1.0,
        "SOC_000_005_05": 1.0,
        "SOC_000_005_95": 1.0,
        "SOC_000_005_EV": 1.0,
        "SOC_005_015_05": 1.0,
        "SOC_005_015_95": 1.0,
        "SOC_005_015_EV": 1.0,
        "SOC_015_030_05": 1.0,
        "SOC_015_030_95": 1.0,
        "SOC_015_030_EV": 1.0,
        "SOC_030_060_05": 1.0,
        "SOC_030_060_95": 1.0,
        "SOC_030_060_EV": 1.0,
        "SOC_060_100_05": 1.0,
        "SOC_060_100_95": 1.0,
        "SOC_060_100_EV": 1.0,
        "SOC_100_200_05": 1.0,
        "SOC_100_200_95": 1.0,
        "SOC_100_200_EV": 1.0,
        "pHc_000_005_05": 1.0,
        "pHc_000_005_95": 1.0,
        "pHc_000_005_EV": 1.0,
        "pHc_005_015_05": 1.0,
        "pHc_005_015_95": 1.0,
        "pHc_005_015_EV": 1.0,
        "pHc_015_030_05": 1.0,
        "pHc_015_030_95": 1.0,
        "pHc_015_030_EV": 1.0,
        "pHc_030_060_05": 1.0,
        "pHc_030_060_95": 1.0,
        "pHc_030_060_EV": 1.0,
        "pHc_060_100_05": 1.0,
        "pHc_060_100_95": 1.0,
        "pHc_060_100_EV": 1.0,
        "pHc_100_200_05": 1.0,
        "pHc_100_200_95": 1.0,
        "pHc_100_200_EV": 1.0
    },
    "CSP/ERGo/1_0/Global/ALOS_CHILI": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/Global/ALOS_landforms": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/Global/ALOS_mTPI": {
        "AVE": 1.0
    },
    "CSP/ERGo/1_0/Global/ALOS_topoDiversity": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/Global/SRTM_CHILI": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/Global/SRTM_landforms": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/Global/SRTM_mTPI": {
        "elevation": 1.0
    },
    "CSP/ERGo/1_0/Global/SRTM_topoDiversity": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/US/CHILI": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/US/landforms": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/US/lithology": {
        "b1": 1.0
    },
    "CSP/ERGo/1_0/US/mTPI": {
        "elevation": 1.0
    },
    "CSP/ERGo/1_0/US/physioDiversity": {
        "b1": 1.0
    },
    "CSP/ERGo/1_0/US/physiography": {
        "constant": 1.0
    },
    "CSP/ERGo/1_0/US/topoDiversity": {
        "constant": 1.0
    },
    "CSP/HM/GlobalHumanModification": {
        "gHM": 1.0
    },
    "DLR/WSF/WSF2015/v1": {
        "settlement": 1.0
    },
    "DOE/ORNL/LandScan_HD/Ukraine_202201": {
        "population": 1.0
    },
    "ECMWF/CAMS/NRT": {
        "particulate_matter_d_less_than_25_um_surface": 1.0,
        "total_aerosol_optical_depth_at_550nm_surface": 1.0
    },
    "ECMWF/ERA5/DAILY": {
        "dewpoint_2m_temperature": 1.0,
        "maximum_2m_air_temperature": 1.0,
        "mean_2m_air_temperature": 1.0,
        "mean_sea_level_pressure": 1.0,
        "minimum_2m_air_temperature": 1.0,
        "surface_pressure": 1.0,
        "total_precipitation": 1.0,
        "u_component_of_wind_10m": 1.0,
        "v_component_of_wind_10m": 1.0
    },
    "ECMWF/ERA5/MONTHLY": {
        "dewpoint_2m_temperature": 1.0,
        "maximum_2m_air_temperature": 1.0,
        "mean_2m_air_temperature": 1.0,
        "mean_sea_level_pressure": 1.0,
        "minimum_2m_air_temperature": 1.0,
        "surface_pressure": 1.0,
        "total_precipitation": 1.0,
        "u_component_of_wind_10m": 1.0,
        "v_component_of_wind_10m": 1.0
    },
    "ECMWF/ERA5_LAND/HOURLY": {
        "dewpoint_temperature_2m": 1.0,
        "evaporation_from_bare_soil": 1.0,
        "evaporation_from_bare_soil_hourly": 1.0,
        "evaporation_from_open_water_surfaces_excluding_oceans": 1.0,
        "evaporation_from_open_water_surfaces_excluding_oceans_hourly": 1.0,
        "evaporation_from_the_top_of_canopy": 1.0,
        "evaporation_from_the_top_of_canopy_hourly": 1.0,
        "evaporation_from_vegetation_transpiration": 1.0,
        "evaporation_from_vegetation_transpiration_hourly": 1.0,
        "forecast_albedo": 1.0,
        "lake_bottom_temperature": 1.0,
        "lake_ice_depth": 1.0,
        "lake_ice_temperature": 1.0,
        "lake_mix_layer_depth": 1.0,
        "lake_mix_layer_temperature": 1.0,
        "lake_shape_factor": 1.0,
        "lake_total_layer_temperature": 1.0,
        "leaf_area_index_high_vegetation": 1.0,
        "leaf_area_index_low_vegetation": 1.0,
        "potential_evaporation": 1.0,
        "potential_evaporation_hourly": 1.0,
        "runoff": 1.0,
        "runoff_hourly": 1.0,
        "skin_reservoir_content": 1.0,
        "skin_temperature": 1.0,
        "snow_albedo": 1.0,
        "snow_cover": 1.0,
        "snow_density": 1.0,
        "snow_depth": 1.0,
        "snow_depth_water_equivalent": 1.0,
        "snow_evaporation": 1.0,
        "snow_evaporation_hourly": 1.0,
        "snowfall": 1.0,
        "snowfall_hourly": 1.0,
        "snowmelt": 1.0,
        "snowmelt_hourly": 1.0,
        "soil_temperature_level_1": 1.0,
        "soil_temperature_level_2": 1.0,
        "soil_temperature_level_3": 1.0,
        "soil_temperature_level_4": 1.0,
        "sub_surface_runoff": 1.0,
        "sub_surface_runoff_hourly": 1.0,
        "surface_latent_heat_flux": 1.0,
        "surface_latent_heat_flux_hourly": 1.0,
        "surface_net_solar_radiation": 1.0,
        "surface_net_solar_radiation_hourly": 1.0,
        "surface_net_thermal_radiation": 1.0,
        "surface_net_thermal_radiation_hourly": 1.0,
        "surface_pressure": 1.0,
        "surface_runoff": 1.0,
        "surface_runoff_hourly": 1.0,
        "surface_sensible_heat_flux": 1.0,
        "surface_sensible_heat_flux_hourly": 1.0,
        "surface_solar_radiation_downwards": 1.0,
        "surface_solar_radiation_downwards_hourly": 1.0,
        "surface_thermal_radiation_downwards": 1.0,
        "surface_thermal_radiation_downwards_hourly": 1.0,
        "temperature_2m": 1.0,
        "temperature_of_snow_layer": 1.0,
        "total_evaporation": 1.0,
        "total_evaporation_hourly": 1.0,
        "total_precipitation": 1.0,
        "total_precipitation_hourly": 1.0,
        "u_component_of_wind_10m": 1.0,
        "v_component_of_wind_10m": 1.0,
        "volumetric_soil_water_layer_1": 1.0,
        "volumetric_soil_water_layer_2": 1.0,
        "volumetric_soil_water_layer_3": 1.0,
        "volumetric_soil_water_layer_4": 1.0
    },
    "ECMWF/ERA5_LAND/MONTHLY": {
        "dewpoint_temperature_2m": 1.0,
        "evaporation_from_bare_soil": 1.0,
        "evaporation_from_open_water_surfaces_excluding_oceans": 1.0,
        "evaporation_from_the_top_of_canopy": 1.0,
        "evaporation_from_vegetation_transpiration": 1.0,
        "forecast_albedo": 1.0,
        "lake_bottom_temperature": 1.0,
        "lake_ice_depth": 1.0,
        "lake_ice_temperature": 1.0,
        "lake_mix_layer_depth": 1.0,
        "lake_mix_layer_temperature": 1.0,
        "lake_shape_factor": 1.0,
        "lake_total_layer_temperature": 1.0,
        "leaf_area_index_high_vegetation": 1.0,
        "leaf_area_index_low_vegetation": 1.0,
        "potential_evaporation": 1.0,
        "runoff": 1.0,
        "skin_reservoir_content": 1.0,
        "skin_temperature": 1.0,
        "snow_albedo": 1.0,
        "snow_cover": 1.0,
        "snow_density": 1.0,
        "snow_depth": 1.0,
        "snow_depth_water_equivalent": 1.0,
        "snow_evaporation": 1.0,
        "snowfall": 1.0,
        "snowmelt": 1.0,
        "soil_temperature_level_1": 1.0,
        "soil_temperature_level_2": 1.0,
        "soil_temperature_level_3": 1.0,
        "soil_temperature_level_4": 1.0,
        "sub_surface_runoff": 1.0,
        "surface_latent_heat_flux": 1.0,
        "surface_net_solar_radiation": 1.0,
        "surface_net_thermal_radiation": 1.0,
        "surface_pressure": 1.0,
        "surface_runoff": 1.0,
        "surface_sensible_heat_flux": 1.0,
        "surface_solar_radiation_downwards": 1.0,
        "surface_thermal_radiation_downwards": 1.0,
        "temperature_2m": 1.0,
        "temperature_of_snow_layer": 1.0,
        "total_evaporation": 1.0,
        "total_precipitation": 1.0,
        "u_component_of_wind_10m": 1.0,
        "v_component_of_wind_10m": 1.0,
        "volumetric_soil_water_layer_1": 1.0,
        "volumetric_soil_water_layer_2": 1.0,
        "volumetric_soil_water_layer_3": 1.0,
        "volumetric_soil_water_layer_4": 1.0
    },
    "ECMWF/ERA5_LAND/MONTHLY_BY_HOUR": {
        "dewpoint_temperature_2m": 1.0,
        "evaporation_from_bare_soil": 1.0,
        "evaporation_from_bare_soil_hourly": 1.0,
        "evaporation_from_open_water_surfaces_excluding_oceans": 1.0,
        "evaporation_from_open_water_surfaces_excluding_oceans_hourly": 1.0,
        "evaporation_from_the_top_of_canopy": 1.0,
        "evaporation_from_the_top_of_canopy_hourly": 1.0,
        "evaporation_from_vegetation_transpiration": 1.0,
        "evaporation_from_vegetation_transpiration_hourly": 1.0,
        "forecast_albedo": 1.0,
        "lake_bottom_temperature": 1.0,
        "lake_ice_depth": 1.0,
        "lake_ice_temperature": 1.0,
        "lake_mix_layer_depth": 1.0,
        "lake_mix_layer_temperature": 1.0,
        "lake_shape_factor": 1.0,
        "lake_total_layer_temperature": 1.0,
        "leaf_area_index_high_vegetation": 1.0,
        "leaf_area_index_low_vegetation": 1.0,
        "potential_evaporation": 1.0,
        "potential_evaporation_hourly": 1.0,
        "runoff": 1.0,
        "runoff_hourly": 1.0,
        "skin_reservoir_content": 1.0,
        "skin_temperature": 1.0,
        "snow_albedo": 1.0,
        "snow_cover": 1.0,
        "snow_density": 1.0,
        "snow_depth": 1.0,
        "snow_depth_water_equivalent": 1.0,
        "snow_evaporation": 1.0,
        "snow_evaporation_hourly": 1.0,
        "snowfall": 1.0,
        "snowfall_hourly": 1.0,
        "snowmelt": 1.0,
        "snowmelt_hourly": 1.0,
        "soil_temperature_level_1": 1.0,
        "soil_temperature_level_2": 1.0,
        "soil_temperature_level_3": 1.0,
        "soil_temperature_level_4": 1.0,
        "sub_surface_runoff": 1.0,
        "sub_surface_runoff_hourly": 1.0,
        "surface_latent_heat_flux": 1.0,
        "surface_latent_heat_flux_hourly": 1.0,
        "surface_net_solar_radiation": 1.0,
        "surface_net_solar_radiation_hourly": 1.0,
        "surface_net_thermal_radiation": 1.0,
        "surface_net_thermal_radiation_hourly": 1.0,
        "surface_pressure": 1.0,
        "surface_runoff": 1.0,
        "surface_runoff_hourly": 1.0,
        "surface_sensible_heat_flux": 1.0,
        "surface_sensible_heat_flux_hourly": 1.0,
        "surface_solar_radiation_downwards": 1.0,
        "surface_solar_radiation_downwards_hourly": 1.0,
        "surface_thermal_radiation_downwards": 1.0,
        "surface_thermal_radiation_downwards_hourly": 1.0,
        "temperature_2m": 1.0,
        "temperature_of_snow_layer": 1.0,
        "total_evaporation": 1.0,
        "total_evaporation_hourly": 1.0,
        "total_precipitation": 1.0,
        "total_precipitation_hourly": 1.0,
        "u_component_of_wind_10m": 1.0,
        "v_component_of_wind_10m": 1.0,
        "volumetric_soil_water_layer_1": 1.0,
        "volumetric_soil_water_layer_2": 1.0,
        "volumetric_soil_water_layer_3": 1.0,
        "volumetric_soil_water_layer_4": 1.0
    },
    "EO1/HYPERION": {
        "B008": 1.0,
        "B009": 1.0,
        "B010": 1.0,
        "B011": 1.0,
        "B012": 1.0,
        "B013": 1.0,
        "B014": 1.0,
        "B015": 1.0,
        "B016": 1.0,
        "B017": 1.0,
        "B018": 1.0,
        "B019": 1.0,
        "B020": 1.0,
        "B021": 1.0,
        "B022": 1.0,
        "B023": 1.0,
        "B024": 1.0,
        "B025": 1.0,
        "B026": 1.0,
        "B027": 1.0,
        "B028": 1.0,
        "B029": 1.0,
        "B030": 1.0,
        "B031": 1.0,
        "B032": 1.0,
        "B033": 1.0,
        "B034": 1.0,
        "B035": 1.0,
        "B036": 1.0,
        "B037": 1.0,
        "B038": 1.0,
        "B039": 1.0,
        "B040": 1.0,
        "B041": 1.0,
        "B042": 1.0,
        "B043": 1.0,
        "B044": 1.0,
        "B045": 1.0,
        "B046": 1.0,
        "B047": 1.0,
        "B048": 1.0,
        "B049": 1.0,
        "B050": 1.0,
        "B051": 1.0,
        "B052": 1.0,
        "B053": 1.0,
        "B054": 1.0,
        "B055": 1.0,
        "B056": 1.0,
        "B057": 1.0,
        "B077": 1.0,
        "B078": 1.0,
        "B079": 1.0,
        "B080": 1.0,
        "B081": 1.0,
        "B082": 1.0,
        "B083": 1.0,
        "B084": 1.0,
        "B085": 1.0,
        "B086": 1.0,
        "B087": 1.0,
        "B088": 1.0,
        "B089": 1.0,
        "B090": 1.0,
        "B091": 1.0,
        "B092": 1.0,
        "B093": 1.0,
        "B094": 1.0,
        "B095": 1.0,
        "B096": 1.0,
        "B097": 1.0,
        "B098": 1.0,
        "B099": 1.0,
        "B100": 1.0,
        "B101": 1.0,
        "B102": 1.0,
        "B103": 1.0,
        "B104": 1.0,
        "B105": 1.0,
        "B106": 1.0,
        "B107": 1.0,
        "B108": 1.0,
        "B109": 1.0,
        "B110": 1.0,
        "B111": 1.0,
        "B112": 1.0,
        "B113": 1.0,
        "B114": 1.0,
        "B115": 1.0,
        "B116": 1.0,
        "B117": 1.0,
        "B118": 1.0,
        "B119": 1.0,
        "B120": 1.0,
        "B121": 1.0,
        "B122": 1.0,
        "B123": 1.0,
        "B124": 1.0,
        "B125": 1.0,
        "B126": 1.0,
        "B127": 1.0,
        "B128": 1.0,
        "B129": 1.0,
        "B130": 1.0,
        "B131": 1.0,
        "B132": 1.0,
        "B133": 1.0,
        "B134": 1.0,
        "B135": 1.0,
        "B136": 1.0,
        "B137": 1.0,
        "B138": 1.0,
        "B139": 1.0,
        "B140": 1.0,
        "B141": 1.0,
        "B142": 1.0,
        "B143": 1.0,
        "B144": 1.0,
        "B145": 1.0,
        "B146": 1.0,
        "B147": 1.0,
        "B148": 1.0,
        "B149": 1.0,
        "B150": 1.0,
        "B151": 1.0,
        "B152": 1.0,
        "B153": 1.0,
        "B154": 1.0,
        "B155": 1.0,
        "B156": 1.0,
        "B157": 1.0,
        "B158": 1.0,
        "B159": 1.0,
        "B160": 1.0,
        "B161": 1.0,
        "B162": 1.0,
        "B163": 1.0,
        "B164": 1.0,
        "B165": 1.0,
        "B166": 1.0,
        "B167": 1.0,
        "B168": 1.0,
        "B169": 1.0,
        "B170": 1.0,
        "B171": 1.0,
        "B172": 1.0,
        "B173": 1.0,
        "B174": 1.0,
        "B175": 1.0,
        "B176": 1.0,
        "B177": 1.0,
        "B178": 1.0,
        "B179": 1.0,
        "B180": 1.0,
        "B181": 1.0,
        "B182": 1.0,
        "B183": 1.0,
        "B184": 1.0,
        "B185": 1.0,
        "B186": 1.0,
        "B187": 1.0,
        "B188": 1.0,
        "B189": 1.0,
        "B190": 1.0,
        "B191": 1.0,
        "B192": 1.0,
        "B193": 1.0,
        "B194": 1.0,
        "B195": 1.0,
        "B196": 1.0,
        "B197": 1.0,
        "B198": 1.0,
        "B199": 1.0,
        "B200": 1.0,
        "B201": 1.0,
        "B202": 1.0,
        "B203": 1.0,
        "B204": 1.0,
        "B205": 1.0,
        "B206": 1.0,
        "B207": 1.0,
        "B208": 1.0,
        "B209": 1.0,
        "B210": 1.0,
        "B211": 1.0,
        "B212": 1.0,
        "B213": 1.0,
        "B214": 1.0,
        "B215": 1.0,
        "B216": 1.0,
        "B217": 1.0,
        "B218": 1.0,
        "B219": 1.0,
        "B220": 1.0,
        "B221": 1.0,
        "B222": 1.0,
        "B223": 1.0,
        "B224": 1.0
    },
    "ESA/CCI/FireCCI/5_1": {
        "BurnDate": 1.0,
        "ConfidenceLevel": 1.0,
        "LandCover": 1.0,
        "ObservedFlag": 1.0
    },
    "ESA/GLOBCOVER_L4_200901_200912_V2_3": {
        "landcover": 1.0,
        "qa": 1.0
    },
    "ESA/WorldCover/v100": {
        "Map": 1.0
    },
    "FAO/GHG/1/DROSA_A": {
        "cropland": 1.0,
        "grassland": 1.0
    },
    "FAO/GHG/1/DROSE_A": {
        "croplandc": 1.0,
        "croplandn2o": 1.0,
        "grasslandc": 1.0,
        "grasslandn2o": 1.0
    },
    "FAO/WAPOR/2/L1_AETI_D": {
        "L1_AETI_D": 0.1
    },
    "FAO/WAPOR/2/L1_E_D": {
        "L1_E_D": 0.1
    },
    "FAO/WAPOR/2/L1_I_D": {
        "L1_I_D": 0.1
    },
    "FAO/WAPOR/2/L1_NPP_D": {
        "L1_NPP_D": 0.001
    },
    "FAO/WAPOR/2/L1_RET_D": {
        "L1_RET_D": 0.1
    },
    "FAO/WAPOR/2/L1_RET_E": {
        "L1_RET_E": 0.1
    },
    "FAO/WAPOR/2/L1_T_D": {
        "L1_T_D": 0.1
    },
    "FIRMS": {
        "T21": 1.0,
        "confidence": 1.0,
        "line_number": 1.0
    },
    "FORMA/FORMA_500m": {
        "constant": 1.0
    },
    "GFW/GFF/V1/fishing_hours": {
        "drifting_longlines": 1.0,
        "fixed_gear": 1.0,
        "other_fishing": 1.0,
        "purse_seines": 1.0,
        "squid_jigger": 1.0,
        "trawlers": 1.0
    },
    "GFW/GFF/V1/vessel_hours": {
        "drifting_longlines": 1.0,
        "fixed_gear": 1.0,
        "other_fishing": 1.0,
        "purse_seines": 1.0,
        "squid_jigger": 1.0,
        "trawlers": 1.0
    },
    "GLCF/GLS_TCC": {
        "source_index": 1.0,
        "tree_canopy_cover": 1.0,
        "uncertainty": 1.0
    },
    "GLCF/GLS_WATER": {
        "water": 1.0
    },
    "GLOBAL_FLOOD_DB/MODIS_EVENTS/V1": {
        "clear_perc": 1.0,
        "clear_views": 1.0,
        "flood_duration": 1.0,
        "flooded": 1.0,
        "jrc_perm_water": 1.0
    },
    "GRIDMET/DROUGHT": {
        "eddi14d": 1.0,
        "eddi180d": 1.0,
        "eddi1y": 1.0,
        "eddi270d": 1.0,
        "eddi2y": 1.0,
        "eddi30d": 1.0,
        "eddi5y": 1.0,
        "eddi90d": 1.0,
        "pdsi": 1.0,
        "spei14d": 1.0,
        "spei180d": 1.0,
        "spei1y": 1.0,
        "spei270d": 1.0,
        "spei2y": 1.0,
        "spei30d": 1.0,
        "spei5y": 1.0,
        "spei90d": 1.0,
        "spi14d": 1.0,
        "spi180d": 1.0,
        "spi1y": 1.0,
        "spi270d": 1.0,
        "spi2y": 1.0,
        "spi30d": 1.0,
        "spi5y": 1.0,
        "spi90d": 1.0,
        "z": 1.0
    },
    "HYCOM/GLBu0_08/sea_surface_elevation": {
        "surface_elevation": 0.001
    },
    "HYCOM/GLBu0_08/sea_temp_salinity": {
        "salinity_0": 0.001,
        "salinity_10": 0.001,
        "salinity_100": 0.001,
        "salinity_1000": 0.001,
        "salinity_12": 0.001,
        "salinity_125": 0.001,
        "salinity_1250": 0.001,
        "salinity_15": 0.001,
        "salinity_150": 0.001,
        "salinity_1500": 0.001,
        "salinity_2": 0.001,
        "salinity_20": 0.001,
        "salinity_200": 0.001,
        "salinity_2000": 0.001,
        "salinity_25": 0.001,
        "salinity_250": 0.001,
        "salinity_2500": 0.001,
        "salinity_30": 0.001,
        "salinity_300": 0.001,
        "salinity_3000": 0.001,
        "salinity_35": 0.001,
        "salinity_350": 0.001,
        "salinity_4": 0.001,
        "salinity_40": 0.001,
        "salinity_400": 0.001,
        "salinity_4000": 0.001,
        "salinity_45": 0.001,
        "salinity_50": 0.001,
        "salinity_500": 0.001,
        "salinity_5000": 0.001,
        "salinity_6": 0.001,
        "salinity_60": 0.001,
        "salinity_600": 0.001,
        "salinity_70": 0.001,
        "salinity_700": 0.001,
        "salinity_8": 0.001,
        "salinity_80": 0.001,
        "salinity_800": 0.001,
        "salinity_90": 0.001,
        "salinity_900": 0.001,
        "water_temp_0": 0.001,
        "water_temp_10": 0.001,
        "water_temp_100": 0.001,
        "water_temp_1000": 0.001,
        "water_temp_12": 0.001,
        "water_temp_125": 0.001,
        "water_temp_1250": 0.001,
        "water_temp_15": 0.001,
        "water_temp_150": 0.001,
        "water_temp_1500": 0.001,
        "water_temp_2": 0.001,
        "water_temp_20": 0.001,
        "water_temp_200": 0.001,
        "water_temp_2000": 0.001,
        "water_temp_25": 0.001,
        "water_temp_250": 0.001,
        "water_temp_2500": 0.001,
        "water_temp_30": 0.001,
        "water_temp_300": 0.001,
        "water_temp_3000": 0.001,
        "water_temp_35": 0.001,
        "water_temp_350": 0.001,
        "water_temp_4": 0.001,
        "water_temp_40": 0.001,
        "water_temp_400": 0.001,
        "water_temp_4000": 0.001,
        "water_temp_45": 0.001,
        "water_temp_50": 0.001,
        "water_temp_500": 0.001,
        "water_temp_5000": 0.001,
        "water_temp_6": 0.001,
        "water_temp_60": 0.001,
        "water_temp_600": 0.001,
        "water_temp_70": 0.001,
        "water_temp_700": 0.001,
        "water_temp_8": 0.001,
        "water_temp_80": 0.001,
        "water_temp_800": 0.001,
        "water_temp_90": 0.001,
        "water_temp_900": 0.001
    },
    "HYCOM/GLBu0_08/sea_water_velocity": {
        "velocity_u_0": 0.001,
        "velocity_u_10": 0.001,
        "velocity_u_100": 0.001,
        "velocity_u_1000": 0.001,
        "velocity_u_12": 0.001,
        "velocity_u_125": 0.001,
        "velocity_u_1250": 0.001,
        "velocity_u_15": 0.001,
        "velocity_u_150": 0.001,
        "velocity_u_1500": 0.001,
        "velocity_u_2": 0.001,
        "velocity_u_20": 0.001,
        "velocity_u_200": 0.001,
        "velocity_u_2000": 0.001,
        "velocity_u_25": 0.001,
        "velocity_u_250": 0.001,
        "velocity_u_2500": 0.001,
        "velocity_u_30": 0.001,
        "velocity_u_300": 0.001,
        "velocity_u_3000": 0.001,
        "velocity_u_35": 0.001,
        "velocity_u_350": 0.001,
        "velocity_u_4": 0.001,
        "velocity_u_40": 0.001,
        "velocity_u_400": 0.001,
        "velocity_u_4000": 0.001,
        "velocity_u_45": 0.001,
        "velocity_u_50": 0.001,
        "velocity_u_500": 0.001,
        "velocity_u_5000": 0.001,
        "velocity_u_6": 0.001,
        "velocity_u_60": 0.001,
        "velocity_u_600": 0.001,
        "velocity_u_70": 0.001,
        "velocity_u_700": 0.001,
        "velocity_u_8": 0.001,
        "velocity_u_80": 0.001,
        "velocity_u_800": 0.001,
        "velocity_u_90": 0.001,
        "velocity_u_900": 0.001,
        "velocity_v_0": 0.001,
        "velocity_v_10": 0.001,
        "velocity_v_100": 0.001,
        "velocity_v_1000": 0.001,
        "velocity_v_12": 0.001,
        "velocity_v_125": 0.001,
        "velocity_v_1250": 0.001,
        "velocity_v_15": 0.001,
        "velocity_v_150": 0.001,
        "velocity_v_1500": 0.001,
        "velocity_v_2": 0.001,
        "velocity_v_20": 0.001,
        "velocity_v_200": 0.001,
        "velocity_v_2000": 0.001,
        "velocity_v_25": 0.001,
        "velocity_v_250": 0.001,
        "velocity_v_2500": 0.001,
        "velocity_v_30": 0.001,
        "velocity_v_300": 0.001,
        "velocity_v_3000": 0.001,
        "velocity_v_35": 0.001,
        "velocity_v_350": 0.001,
        "velocity_v_4": 0.001,
        "velocity_v_40": 0.001,
        "velocity_v_400": 0.001,
        "velocity_v_4000": 0.001,
        "velocity_v_45": 0.001,
        "velocity_v_50": 0.001,
        "velocity_v_500": 0.001,
        "velocity_v_5000": 0.001,
        "velocity_v_6": 0.001,
        "velocity_v_60": 0.001,
        "velocity_v_600": 0.001,
        "velocity_v_70": 0.001,
        "velocity_v_700": 0.001,
        "velocity_v_8": 0.001,
        "velocity_v_80": 0.001,
        "velocity_v_800": 0.001,
        "velocity_v_90": 0.001,
        "velocity_v_900": 0.001
    },
    "HYCOM/sea_surface_elevation": {
        "surface_elevation": 0.001
    },
    "HYCOM/sea_temp_salinity": {
        "salinity_0": 0.001,
        "salinity_10": 0.001,
        "salinity_100": 0.001,
        "salinity_1000": 0.001,
        "salinity_12": 0.001,
        "salinity_125": 0.001,
        "salinity_1250": 0.001,
        "salinity_15": 0.001,
        "salinity_150": 0.001,
        "salinity_1500": 0.001,
        "salinity_2": 0.001,
        "salinity_20": 0.001,
        "salinity_200": 0.001,
        "salinity_2000": 0.001,
        "salinity_25": 0.001,
        "salinity_250": 0.001,
        "salinity_2500": 0.001,
        "salinity_30": 0.001,
        "salinity_300": 0.001,
        "salinity_3000": 0.001,
        "salinity_35": 0.001,
        "salinity_350": 0.001,
        "salinity_4": 0.001,
        "salinity_40": 0.001,
        "salinity_400": 0.001,
        "salinity_4000": 0.001,
        "salinity_45": 0.001,
        "salinity_50": 0.001,
        "salinity_500": 0.001,
        "salinity_5000": 0.001,
        "salinity_6": 0.001,
        "salinity_60": 0.001,
        "salinity_600": 0.001,
        "salinity_70": 0.001,
        "salinity_700": 0.001,
        "salinity_8": 0.001,
        "salinity_80": 0.001,
        "salinity_800": 0.001,
        "salinity_90": 0.001,
        "salinity_900": 0.001,
        "water_temp_0": 0.001,
        "water_temp_10": 0.001,
        "water_temp_100": 0.001,
        "water_temp_1000": 0.001,
        "water_temp_12": 0.001,
        "water_temp_125": 0.001,
        "water_temp_1250": 0.001,
        "water_temp_15": 0.001,
        "water_temp_150": 0.001,
        "water_temp_1500": 0.001,
        "water_temp_2": 0.001,
        "water_temp_20": 0.001,
        "water_temp_200": 0.001,
        "water_temp_2000": 0.001,
        "water_temp_25": 0.001,
        "water_temp_250": 0.001,
        "water_temp_2500": 0.001,
        "water_temp_30": 0.001,
        "water_temp_300": 0.001,
        "water_temp_3000": 0.001,
        "water_temp_35": 0.001,
        "water_temp_350": 0.001,
        "water_temp_4": 0.001,
        "water_temp_40": 0.001,
        "water_temp_400": 0.001,
        "water_temp_4000": 0.001,
        "water_temp_45": 0.001,
        "water_temp_50": 0.001,
        "water_temp_500": 0.001,
        "water_temp_5000": 0.001,
        "water_temp_6": 0.001,
        "water_temp_60": 0.001,
        "water_temp_600": 0.001,
        "water_temp_70": 0.001,
        "water_temp_700": 0.001,
        "water_temp_8": 0.001,
        "water_temp_80": 0.001,
        "water_temp_800": 0.001,
        "water_temp_90": 0.001,
        "water_temp_900": 0.001
    },
    "HYCOM/sea_water_velocity": {
        "velocity_u_0": 0.001,
        "velocity_u_10": 0.001,
        "velocity_u_100": 0.001,
        "velocity_u_1000": 0.001,
        "velocity_u_12": 0.001,
        "velocity_u_125": 0.001,
        "velocity_u_1250": 0.001,
        "velocity_u_15": 0.001,
        "velocity_u_150": 0.001,
        "velocity_u_1500": 0.001,
        "velocity_u_2": 0.001,
        "velocity_u_20": 0.001,
        "velocity_u_200": 0.001,
        "velocity_u_2000": 0.001,
        "velocity_u_25": 0.001,
        "velocity_u_250": 0.001,
        "velocity_u_2500": 0.001,
        "velocity_u_30": 0.001,
        "velocity_u_300": 0.001,
        "velocity_u_3000": 0.001,
        "velocity_u_35": 0.001,
        "velocity_u_350": 0.001,
        "velocity_u_4": 0.001,
        "velocity_u_40": 0.001,
        "velocity_u_400": 0.001,
        "velocity_u_4000": 0.001,
        "velocity_u_45": 0.001,
        "velocity_u_50": 0.001,
        "velocity_u_500": 0.001,
        "velocity_u_5000": 0.001,
        "velocity_u_6": 0.001,
        "velocity_u_60": 0.001,
        "velocity_u_600": 0.001,
        "velocity_u_70": 0.001,
        "velocity_u_700": 0.001,
        "velocity_u_8": 0.001,
        "velocity_u_80": 0.001,
        "velocity_u_800": 0.001,
        "velocity_u_90": 0.001,
        "velocity_u_900": 0.001,
        "velocity_v_0": 0.001,
        "velocity_v_10": 0.001,
        "velocity_v_100": 0.001,
        "velocity_v_1000": 0.001,
        "velocity_v_12": 0.001,
        "velocity_v_125": 0.001,
        "velocity_v_1250": 0.001,
        "velocity_v_15": 0.001,
        "velocity_v_150": 0.001,
        "velocity_v_1500": 0.001,
        "velocity_v_2": 0.001,
        "velocity_v_20": 0.001,
        "velocity_v_200": 0.001,
        "velocity_v_2000": 0.001,
        "velocity_v_25": 0.001,
        "velocity_v_250": 0.001,
        "velocity_v_2500": 0.001,
        "velocity_v_30": 0.001,
        "velocity_v_300": 0.001,
        "velocity_v_3000": 0.001,
        "velocity_v_35": 0.001,
        "velocity_v_350": 0.001,
        "velocity_v_4": 0.001,
        "velocity_v_40": 0.001,
        "velocity_v_400": 0.001,
        "velocity_v_4000": 0.001,
        "velocity_v_45": 0.001,
        "velocity_v_50": 0.001,
        "velocity_v_500": 0.001,
        "velocity_v_5000": 0.001,
        "velocity_v_6": 0.001,
        "velocity_v_60": 0.001,
        "velocity_v_600": 0.001,
        "velocity_v_70": 0.001,
        "velocity_v_700": 0.001,
        "velocity_v_8": 0.001,
        "velocity_v_80": 0.001,
        "velocity_v_800": 0.001,
        "velocity_v_90": 0.001,
        "velocity_v_900": 0.001
    },
    "IDAHO_EPSCOR/GRIDMET": {
        "bi": 1.0,
        "erc": 1.0,
        "eto": 1.0,
        "etr": 1.0,
        "fm100": 1.0,
        "fm1000": 1.0,
        "pr": 1.0,
        "rmax": 1.0,
        "rmin": 1.0,
        "sph": 1.0,
        "srad": 1.0,
        "th": 1.0,
        "tmmn": 1.0,
        "tmmx": 1.0,
        "vpd": 1.0,
        "vs": 1.0
    },
    "IDAHO_EPSCOR/MACAv2_METDATA": {
        "huss": 1.0,
        "pr": 1.0,
        "rhsmax": 1.0,
        "rhsmin": 1.0,
        "rsds": 1.0,
        "tasmax": 1.0,
        "tasmin": 1.0,
        "uas": 1.0,
        "vas": 1.0
    },
    "IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY": {
        "huss": 1.0,
        "pr": 1.0,
        "rsds": 1.0,
        "tasmax": 1.0,
        "tasmin": 1.0,
        "was": 1.0
    },
    "IDAHO_EPSCOR/PDSI": {
        "pdsi": 1.0
    },
    "IDAHO_EPSCOR/TERRACLIMATE": {
        "aet": 0.1,
        "def": 0.1,
        "pdsi": 0.01,
        "pet": 0.1,
        "pr": 1.0,
        "ro": 1.0,
        "soil": 0.1,
        "srad": 0.1,
        "swe": 1.0,
        "tmmn": 0.1,
        "tmmx": 0.1,
        "vap": 0.001,
        "vpd": 0.01,
        "vs": 0.01
    },
    "ISDASOIL/Africa/v1/aluminium_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/bedrock_depth": {
        "mean_0_200": 1.0,
        "stdev_0_200": 1.0
    },
    "ISDASOIL/Africa/v1/bulk_density": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/calcium_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/carbon_organic": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/carbon_total": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/cation_exchange_capacity": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/clay_content": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/fcc": {
        "fcc": 1.0
    },
    "ISDASOIL/Africa/v1/iron_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/magnesium_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/nitrogen_total": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/ph": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/phosphorus_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/potassium_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/sand_content": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/silt_content": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/stone_content": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/sulphur_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/texture_class": {
        "texture_0_20": 1.0,
        "texture_20_50": 1.0
    },
    "ISDASOIL/Africa/v1/zinc_extractable": {
        "mean_0_20": 1.0,
        "mean_20_50": 1.0,
        "stdev_0_20": 1.0,
        "stdev_20_50": 1.0
    },
    "JAXA/ALOS/AVNIR-2/ORI": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0
    },
    "JAXA/ALOS/AW3D30/V1_1": {
        "AVE": 1.0,
        "AVE_MSK": 1.0,
        "AVE_STK": 1.0,
        "MED": 1.0,
        "MED_MSK": 1.0,
        "MED_STK": 1.0
    },
    "JAXA/ALOS/AW3D30/V2_1": {
        "AVE_DSM": 1.0,
        "AVE_MSK": 1.0,
        "AVE_STK": 1.0
    },
    "JAXA/ALOS/AW3D30/V2_2": {
        "AVE_DSM": 1.0,
        "AVE_MSK": 1.0,
        "AVE_STK": 1.0
    },
    "JAXA/ALOS/AW3D30/V3_2": {
        "DSM": 1.0,
        "MSK": 1.0,
        "STK": 1.0
    },
    "JAXA/ALOS/PALSAR/YEARLY/FNF": {
        "fnf": 1.0
    },
    "JAXA/ALOS/PALSAR/YEARLY/SAR": {
        "HH": 1.0,
        "HV": 1.0,
        "angle": 1.0,
        "date": 1.0,
        "qa": 1.0
    },
    "JAXA/GCOM-C/L3/LAND/LAI/V1": {
        "LAI_AVE": 1.0,
        "LAI_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/LAND/LAI/V2": {
        "LAI_AVE": 1.0,
        "LAI_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/LAND/LAI/V3": {
        "LAI_AVE": 1.0,
        "LAI_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/LAND/LST/V1": {
        "LST_AVE": 1.0,
        "LST_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/LAND/LST/V2": {
        "LST_AVE": 1.0,
        "LST_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/LAND/LST/V3": {
        "LST_AVE": 1.0,
        "LST_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/OCEAN/CHLA/V1": {
        "CHLA_AVE": 1.0,
        "CHLA_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/OCEAN/CHLA/V2": {
        "CHLA_AVE": 1.0,
        "CHLA_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/OCEAN/CHLA/V3": {
        "CHLA_AVE": 1.0,
        "CHLA_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/OCEAN/SST/V1": {
        "SST_AVE": 1.0,
        "SST_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/OCEAN/SST/V2": {
        "SST_AVE": 1.0,
        "SST_QA_flag": 1.0
    },
    "JAXA/GCOM-C/L3/OCEAN/SST/V3": {
        "SST_AVE": 1.0,
        "SST_QA_flag": 1.0
    },
    "JAXA/GPM_L3/GSMaP/v6/operational": {
        "gaugeQualityInfo": 1.0,
        "hourlyPrecipRate": 1.0,
        "hourlyPrecipRateGC": 1.0,
        "observationTimeFlag": 1.0,
        "satelliteInfoFlag": 1.0
    },
    "JAXA/GPM_L3/GSMaP/v6/reanalysis": {
        "gaugeQualityInfo": 1.0,
        "hourlyPrecipRate": 1.0,
        "hourlyPrecipRateGC": 1.0,
        "observationTimeFlag": 1.0,
        "satelliteInfoFlag": 1.0
    },
    "JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1": {
        "built": 1.0,
        "cnfd": 1.0,
        "dm": 1.0
    },
    "JRC/GHSL/P2016/POP_GPW_GLOBE_V1": {
        "population_count": 1.0
    },
    "JRC/GHSL/P2016/SMOD_POP_GLOBE_V1": {
        "smod_code": 1.0
    },
    "JRC/GSW1_0/GlobalSurfaceWater": {
        "change_abs": 1.0,
        "change_norm": 1.0,
        "max_extent": 1.0,
        "occurrence": 1.0,
        "recurrence": 1.0,
        "seasonality": 1.0,
        "transition": 1.0
    },
    "JRC/GSW1_0/Metadata": {
        "detections": 1.0,
        "total_obs": 1.0,
        "valid_obs": 1.0
    },
    "JRC/GSW1_0/MonthlyHistory": {
        "water": 1.0
    },
    "JRC/GSW1_0/MonthlyRecurrence": {
        "has_observations": 1.0,
        "monthly_recurrence": 1.0
    },
    "JRC/GSW1_0/YearlyHistory": {
        "waterClass": 1.0
    },
    "JRC/GSW1_1/GlobalSurfaceWater": {
        "change_abs": 1.0,
        "change_norm": 1.0,
        "max_extent": 1.0,
        "occurrence": 1.0,
        "recurrence": 1.0,
        "seasonality": 1.0,
        "transition": 1.0
    },
    "JRC/GSW1_1/Metadata": {
        "detections": 1.0,
        "total_obs": 1.0,
        "valid_obs": 1.0
    },
    "JRC/GSW1_1/MonthlyHistory": {
        "water": 1.0
    },
    "JRC/GSW1_1/MonthlyRecurrence": {
        "has_observations": 1.0,
        "monthly_recurrence": 1.0
    },
    "JRC/GSW1_1/YearlyHistory": {
        "waterClass": 1.0
    },
    "JRC/GSW1_2/GlobalSurfaceWater": {
        "change_abs": 1.0,
        "change_norm": 1.0,
        "max_extent": 1.0,
        "occurrence": 1.0,
        "recurrence": 1.0,
        "seasonality": 1.0,
        "transition": 1.0
    },
    "JRC/GSW1_2/Metadata": {
        "detections": 1.0,
        "total_obs": 1.0,
        "valid_obs": 1.0
    },
    "JRC/GSW1_2/MonthlyHistory": {
        "water": 1.0
    },
    "JRC/GSW1_2/MonthlyRecurrence": {
        "has_observations": 1.0,
        "monthly_recurrence": 1.0
    },
    "JRC/GSW1_2/YearlyHistory": {
        "waterClass": 1.0
    },
    "JRC/GSW1_3/GlobalSurfaceWater": {
        "change_abs": 1.0,
        "change_norm": 1.0,
        "max_extent": 1.0,
        "occurrence": 1.0,
        "recurrence": 1.0,
        "seasonality": 1.0,
        "transition": 1.0
    },
    "JRC/GSW1_3/Metadata": {
        "detections": 1.0,
        "total_obs": 1.0,
        "valid_obs": 1.0
    },
    "JRC/GSW1_3/MonthlyHistory": {
        "water": 1.0
    },
    "JRC/GSW1_3/MonthlyRecurrence": {
        "has_observations": 1.0,
        "monthly_recurrence": 1.0
    },
    "JRC/GSW1_3/YearlyHistory": {
        "waterClass": 1.0
    },
    "KNTU/LiDARLab/IranLandCover/V1": {
        "classification": 1.0
    },
    "LANDFIRE/Fire/FRG/v1_2_0": {
        "FRG": 1.0
    },
    "LANDFIRE/Fire/MFRI/v1_2_0": {
        "MFRI": 1.0
    },
    "LANDFIRE/Fire/PLS/v1_2_0": {
        "PLS": 1.0
    },
    "LANDFIRE/Fire/PMS/v1_2_0": {
        "PMS": 1.0
    },
    "LANDFIRE/Fire/PRS/v1_2_0": {
        "PRS": 1.0
    },
    "LANDFIRE/Fire/SClass/v1_4_0": {
        "SClass": 1.0
    },
    "LANDFIRE/Fire/VCC/v1_4_0": {
        "VCC": 1.0
    },
    "LANDFIRE/Fire/VDep/v1_4_0": {
        "VDep": 1.0
    },
    "LANDFIRE/Vegetation/BPS/v1_4_0": {
        "BPS": 1.0
    },
    "LANDFIRE/Vegetation/ESP/v1_2_0/AK": {
        "ESP": 1.0
    },
    "LANDFIRE/Vegetation/ESP/v1_2_0/CONUS": {
        "ESP": 1.0
    },
    "LANDFIRE/Vegetation/ESP/v1_2_0/HI": {
        "ESP": 1.0
    },
    "LANDFIRE/Vegetation/EVC/v1_4_0": {
        "EVC": 1.0
    },
    "LANDFIRE/Vegetation/EVH/v1_4_0": {
        "EVH": 1.0
    },
    "LANDFIRE/Vegetation/EVT/v1_4_0": {
        "EVT": 1.0
    },
    "LANDSAT/GLS1975": {
        "10": 1.0,
        "20": 1.0,
        "30": 1.0,
        "40": 1.0
    },
    "LANDSAT/GLS1975_MOSAIC": {
        "10": 1.0,
        "20": 1.0,
        "30": 1.0,
        "40": 1.0
    },
    "LANDSAT/GLS2005": {
        "10": 1.0,
        "20": 1.0,
        "30": 1.0,
        "40": 1.0,
        "50": 1.0,
        "70": 1.0
    },
    "LANDSAT/GLS2005_L5": {
        "10": 1.0,
        "20": 1.0,
        "30": 1.0,
        "40": 1.0,
        "50": 1.0,
        "60": 1.0,
        "70": 1.0
    },
    "LANDSAT/GLS2005_L7": {
        "10": 1.0,
        "20": 1.0,
        "30": 1.0,
        "40": 1.0,
        "50": 1.0,
        "60": 1.0,
        "70": 1.0
    },
    "LANDSAT/LC08/C01/T1": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_RAW": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_32DAY_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_RAW": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_8DAY_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_GREENEST_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0,
        "greenness": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_RAW": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_ANNUAL_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_RT": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_RT_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T1_SR": {
        "B1": 0.0001,
        "B10": 0.1,
        "B11": 0.1,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.0001,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_aerosol": 1.0
    },
    "LANDSAT/LC08/C01/T1_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T2": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C01/T2_SR": {
        "B1": 0.0001,
        "B10": 0.1,
        "B11": 0.1,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.0001,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_aerosol": 1.0
    },
    "LANDSAT/LC08/C01/T2_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC08/C02/T1": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC08/C02/T1_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B6": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_QA_AEROSOL": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B10": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LC08/C02/T1_RT": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC08/C02/T1_RT_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC08/C02/T1_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC08/C02/T2": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC08/C02/T2_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B6": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_QA_AEROSOL": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B10": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LC08/C02/T2_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC09/C02/T1": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC09/C02/T1_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B6": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_QA_AEROSOL": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B10": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LC09/C02/T1_RT": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC09/C02/T1_RT_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC09/C02/T1_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LC09/C02/T2_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B6": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_QA_AEROSOL": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B10": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LC8": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_RAW": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T_32DAY_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_RAW": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T_8DAY_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_RAW": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T_ANNUAL_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LC8_L1T_TOA": {
        "B1": 1.0,
        "B10": 1.0,
        "B11": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_32DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_8DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_GREENEST_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0,
        "greenness": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_ANNUAL_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_RT": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_RT_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T1_SR": {
        "B1": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.1,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_atmos_opacity": 0.001,
        "sr_cloud_qa": 1.0
    },
    "LANDSAT/LE07/C01/T1_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C01/T2_SR": {
        "B1": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.1,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_atmos_opacity": 0.001,
        "sr_cloud_qa": 1.0
    },
    "LANDSAT/LE07/C01/T2_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE07/C02/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LE07/C02/T1_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_ATMOS_OPACITY": 0.001,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_CLOUD_QA": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B6": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LE07/C02/T1_RT": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LE07/C02/T1_RT_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LE07/C02/T1_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LE07/C02/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LE07/C02/T2_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_ATMOS_OPACITY": 0.001,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_CLOUD_QA": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B6": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LE07/C02/T2_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LE7": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T_32DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T_8DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T_ANNUAL_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_L1T_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_1": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LE7_TOA_1YEAR": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0
    },
    "LANDSAT/LE7_TOA_3YEAR": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0
    },
    "LANDSAT/LE7_TOA_5YEAR": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_VCID_2": 1.0,
        "B7": 1.0
    },
    "LANDSAT/LM01/C01/T1": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM01/C01/T2": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM02/C01/T1": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM02/C01/T2": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM03/C01/T1": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM03/C01/T2": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM04/C01/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM04/C01/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM05/C01/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM05/C01/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM1": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM1_L1T": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM2": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM2_L1T": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM3": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM3_L1T": {
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM4": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM4_L1T": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM5": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LM5_L1T": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LO08/C01/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LO08/C01/T1_RT": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LO08/C01/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B9": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1_32DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1_8DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_GREENEST_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0,
        "greenness": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1_ANNUAL_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T1_SR": {
        "B1": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.1,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_atmos_opacity": 0.001,
        "sr_cloud_qa": 1.0
    },
    "LANDSAT/LT04/C01/T1_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C01/T2_SR": {
        "B1": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.1,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_atmos_opacity": 0.001,
        "sr_cloud_qa": 1.0
    },
    "LANDSAT/LT04/C01/T2_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT04/C02/T1_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_ATMOS_OPACITY": 0.001,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_CLOUD_QA": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B6": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LT04/C02/T2_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_ATMOS_OPACITY": 0.001,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_CLOUD_QA": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B6": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LT05/C01/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T1_32DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T1_8DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_GREENEST_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0,
        "greenness": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T1_ANNUAL_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T1_SR": {
        "B1": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.1,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_atmos_opacity": 0.001,
        "sr_cloud_qa": 1.0
    },
    "LANDSAT/LT05/C01/T1_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C01/T2_SR": {
        "B1": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.1,
        "B7": 0.0001,
        "pixel_qa": 1.0,
        "radsat_qa": 1.0,
        "sr_atmos_opacity": 0.001,
        "sr_cloud_qa": 1.0
    },
    "LANDSAT/LT05/C01/T2_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C02/T1": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LT05/C02/T1_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_ATMOS_OPACITY": 0.001,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_CLOUD_QA": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B6": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LT05/C02/T1_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT05/C02/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SAA": 1.0,
        "SZA": 1.0,
        "VAA": 1.0,
        "VZA": 1.0
    },
    "LANDSAT/LT05/C02/T2_L2": {
        "QA_PIXEL": 1.0,
        "QA_RADSAT": 1.0,
        "SR_ATMOS_OPACITY": 0.001,
        "SR_B1": 2.75e-05,
        "SR_B2": 2.75e-05,
        "SR_B3": 2.75e-05,
        "SR_B4": 2.75e-05,
        "SR_B5": 2.75e-05,
        "SR_B7": 2.75e-05,
        "SR_CLOUD_QA": 1.0,
        "ST_ATRAN": 0.0001,
        "ST_B6": 0.00341802,
        "ST_CDIST": 0.01,
        "ST_DRAD": 0.001,
        "ST_EMIS": 0.0001,
        "ST_EMSD": 0.0001,
        "ST_QA": 0.01,
        "ST_TRAD": 0.001,
        "ST_URAD": 0.001
    },
    "LANDSAT/LT05/C02/T2_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT08/C01/T2": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T_32DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T_8DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_GREENEST_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0,
        "greenness": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T_ANNUAL_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT4_L1T_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T_32DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T_8DAY_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_BAI": {
        "BAI": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_EVI": {
        "EVI": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_GREENEST_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0,
        "greenness": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_NBRT": {
        "NBRT": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_NDSI": {
        "NDSI": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_NDVI": {
        "NDVI": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_NDWI": {
        "NDWI": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_RAW": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T_ANNUAL_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/LT5_L1T_TOA": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6": 1.0,
        "B7": 1.0,
        "BQA": 1.0
    },
    "LANDSAT/MANGROVE_FORESTS": {
        "1": 1.0
    },
    "LARSE/GEDI/GEDI02_A_002_MONTHLY": {
        "beam": 1.0,
        "degrade_flag": 1.0,
        "delta_time": 1.0,
        "digital_elevation_model": 1.0,
        "digital_elevation_model_srtm": 1.0,
        "elev_highestreturn": 1.0,
        "elev_lowestmode": 1.0,
        "elevation_bias_flag": 1.0,
        "landsat_treecover": 1.0,
        "landsat_water_persistence": 1.0,
        "lat_highestreturn": 1.0,
        "leaf_off_doy": 1.0,
        "leaf_off_flag": 1.0,
        "leaf_on_cycle": 1.0,
        "leaf_on_doy": 1.0,
        "lon_highestreturn": 1.0,
        "modis_nonvegetated": 1.0,
        "modis_nonvegetated_sd": 1.0,
        "modis_treecover": 1.0,
        "modis_treecover_sd": 1.0,
        "num_detectedmodes": 1.0,
        "pft_class": 1.0,
        "quality_flag": 1.0,
        "region_class": 1.0,
        "rh0": 1.0,
        "rh1": 1.0,
        "rh10": 1.0,
        "rh100": 1.0,
        "rh11": 1.0,
        "rh12": 1.0,
        "rh13": 1.0,
        "rh14": 1.0,
        "rh15": 1.0,
        "rh16": 1.0,
        "rh17": 1.0,
        "rh18": 1.0,
        "rh19": 1.0,
        "rh2": 1.0,
        "rh20": 1.0,
        "rh21": 1.0,
        "rh22": 1.0,
        "rh23": 1.0,
        "rh24": 1.0,
        "rh25": 1.0,
        "rh26": 1.0,
        "rh27": 1.0,
        "rh28": 1.0,
        "rh29": 1.0,
        "rh3": 1.0,
        "rh30": 1.0,
        "rh31": 1.0,
        "rh32": 1.0,
        "rh33": 1.0,
        "rh34": 1.0,
        "rh35": 1.0,
        "rh36": 1.0,
        "rh37": 1.0,
        "rh38": 1.0,
        "rh39": 1.0,
        "rh4": 1.0,
        "rh40": 1.0,
        "rh41": 1.0,
        "rh42": 1.0,
        "rh43": 1.0,
        "rh44": 1.0,
        "rh45": 1.0,
        "rh46": 1.0,
        "rh47": 1.0,
        "rh48": 1.0,
        "rh49": 1.0,
        "rh5": 1.0,
        "rh50": 1.0,
        "rh51": 1.0,
        "rh52": 1.0,
        "rh53": 1.0,
        "rh54": 1.0,
        "rh55": 1.0,
        "rh56": 1.0,
        "rh57": 1.0,
        "rh58": 1.0,
        "rh59": 1.0,
        "rh6": 1.0,
        "rh60": 1.0,
        "rh61": 1.0,
        "rh62": 1.0,
        "rh63": 1.0,
        "rh64": 1.0,
        "rh65": 1.0,
        "rh66": 1.0,
        "rh67": 1.0,
        "rh68": 1.0,
        "rh69": 1.0,
        "rh7": 1.0,
        "rh70": 1.0,
        "rh71": 1.0,
        "rh72": 1.0,
        "rh73": 1.0,
        "rh74": 1.0,
        "rh75": 1.0,
        "rh76": 1.0,
        "rh77": 1.0,
        "rh78": 1.0,
        "rh79": 1.0,
        "rh8": 1.0,
        "rh80": 1.0,
        "rh81": 1.0,
        "rh82": 1.0,
        "rh83": 1.0,
        "rh84": 1.0,
        "rh85": 1.0,
        "rh86": 1.0,
        "rh87": 1.0,
        "rh88": 1.0,
        "rh89": 1.0,
        "rh9": 1.0,
        "rh90": 1.0,
        "rh91": 1.0,
        "rh92": 1.0,
        "rh93": 1.0,
        "rh94": 1.0,
        "rh95": 1.0,
        "rh96": 1.0,
        "rh97": 1.0,
        "rh98": 1.0,
        "rh99": 1.0,
        "selected_algorithm": 1.0,
        "selected_mode": 1.0,
        "selected_mode_flag": 1.0,
        "sensitivity": 1.0,
        "shot_number": 1.0,
        "solar_azimuth": 1.0,
        "solar_elevation": 1.0,
        "surface_flag": 1.0,
        "urban_focal_window_size": 1.0,
        "urban_proportion": 1.0
    },
    "MERIT/DEM/v1_0_3": {
        "dem": 1.0
    },
    "MERIT/Hydro/v1_0_1": {
        "dir": 1.0,
        "elv": 1.0,
        "hnd": 1.0,
        "upa": 1.0,
        "upg": 1.0,
        "viswth": 1.0,
        "wat": 1.0,
        "wth": 1.0
    },
    "MERIT/Hydro_reduced/v1_0_1": {
        "upa": 1.0,
        "wth": 1.0
    },
    "MODIS/006/MCD12Q1": {
        "LC_Prop1": 1.0,
        "LC_Prop1_Assessment": 1.0,
        "LC_Prop2": 1.0,
        "LC_Prop2_Assessment": 1.0,
        "LC_Prop3": 1.0,
        "LC_Prop3_Assessment": 1.0,
        "LC_Type1": 1.0,
        "LC_Type2": 1.0,
        "LC_Type3": 1.0,
        "LC_Type4": 1.0,
        "LC_Type5": 1.0,
        "LW": 1.0,
        "QC": 1.0
    },
    "MODIS/006/MCD12Q2": {
        "Dormancy_1": 1.0,
        "Dormancy_2": 1.0,
        "EVI_Amplitude_1": 0.0001,
        "EVI_Amplitude_2": 0.0001,
        "EVI_Area_1": 0.1,
        "EVI_Area_2": 0.1,
        "EVI_Minimum_1": 0.0001,
        "EVI_Minimum_2": 0.0001,
        "Greenup_1": 1.0,
        "Greenup_2": 1.0,
        "Maturity_1": 1.0,
        "Maturity_2": 1.0,
        "MidGreendown_1": 1.0,
        "MidGreendown_2": 1.0,
        "MidGreenup_1": 1.0,
        "MidGreenup_2": 1.0,
        "NumCycles": 1.0,
        "Peak_1": 1.0,
        "Peak_2": 1.0,
        "QA_Detailed_1": 1.0,
        "QA_Detailed_2": 1.0,
        "QA_Overall_1": 1.0,
        "QA_Overall_2": 1.0,
        "Senescence_1": 1.0,
        "Senescence_2": 1.0
    },
    "MODIS/006/MCD15A3H": {
        "Fpar": 0.01,
        "FparExtra_QC": 1.0,
        "FparLai_QC": 1.0,
        "FparStdDev": 0.01,
        "Lai": 0.1,
        "LaiStdDev": 0.1
    },
    "MODIS/006/MCD19A2_GRANULES": {
        "AOD_MODEL": 1.0,
        "AOD_QA": 1.0,
        "AOD_Uncertainty": 0.0001,
        "Column_WV": 0.001,
        "FineModeFraction": 0.0001,
        "Glint_Angle": 0.01,
        "Injection_Height": 1.0,
        "Optical_Depth_047": 0.001,
        "Optical_Depth_055": 0.001,
        "RelAZ": 0.01,
        "Scattering_Angle": 0.01,
        "cosSZA": 0.0001,
        "cosVZA": 0.0001
    },
    "MODIS/006/MCD43A1": {
        "BRDF_Albedo_Band_Mandatory_Quality_Band1": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band2": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band3": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band4": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band5": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band6": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band7": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_nir": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_shortwave": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_vis": 1.0,
        "BRDF_Albedo_Parameters_Band1_geo": 0.001,
        "BRDF_Albedo_Parameters_Band1_iso": 0.001,
        "BRDF_Albedo_Parameters_Band1_vol": 0.001,
        "BRDF_Albedo_Parameters_Band2_geo": 0.001,
        "BRDF_Albedo_Parameters_Band2_iso": 0.001,
        "BRDF_Albedo_Parameters_Band2_vol": 0.001,
        "BRDF_Albedo_Parameters_Band3_geo": 0.001,
        "BRDF_Albedo_Parameters_Band3_iso": 0.001,
        "BRDF_Albedo_Parameters_Band3_vol": 0.001,
        "BRDF_Albedo_Parameters_Band4_geo": 0.001,
        "BRDF_Albedo_Parameters_Band4_iso": 0.001,
        "BRDF_Albedo_Parameters_Band4_vol": 0.001,
        "BRDF_Albedo_Parameters_Band5_geo": 0.001,
        "BRDF_Albedo_Parameters_Band5_iso": 0.001,
        "BRDF_Albedo_Parameters_Band5_vol": 0.001,
        "BRDF_Albedo_Parameters_Band6_geo": 0.001,
        "BRDF_Albedo_Parameters_Band6_iso": 0.001,
        "BRDF_Albedo_Parameters_Band6_vol": 0.001,
        "BRDF_Albedo_Parameters_Band7_geo": 0.001,
        "BRDF_Albedo_Parameters_Band7_iso": 0.001,
        "BRDF_Albedo_Parameters_Band7_vol": 0.001,
        "BRDF_Albedo_Parameters_nir_geo": 0.001,
        "BRDF_Albedo_Parameters_nir_iso": 0.001,
        "BRDF_Albedo_Parameters_nir_vol": 0.001,
        "BRDF_Albedo_Parameters_shortwave_geo": 0.001,
        "BRDF_Albedo_Parameters_shortwave_iso": 0.001,
        "BRDF_Albedo_Parameters_shortwave_vol": 0.001,
        "BRDF_Albedo_Parameters_vis_geo": 0.001,
        "BRDF_Albedo_Parameters_vis_iso": 0.001,
        "BRDF_Albedo_Parameters_vis_vol": 0.001
    },
    "MODIS/006/MCD43A2": {
        "BRDF_Albedo_Band_Quality_Band1": 1.0,
        "BRDF_Albedo_Band_Quality_Band2": 1.0,
        "BRDF_Albedo_Band_Quality_Band3": 1.0,
        "BRDF_Albedo_Band_Quality_Band4": 1.0,
        "BRDF_Albedo_Band_Quality_Band5": 1.0,
        "BRDF_Albedo_Band_Quality_Band6": 1.0,
        "BRDF_Albedo_Band_Quality_Band7": 1.0,
        "BRDF_Albedo_LandWaterType": 1.0,
        "BRDF_Albedo_LocalSolarNoon": 1.0,
        "BRDF_Albedo_Platform": 1.0,
        "BRDF_Albedo_Uncertainty": 0.001,
        "BRDF_Albedo_ValidObs_Band1": 1.0,
        "BRDF_Albedo_ValidObs_Band2": 1.0,
        "BRDF_Albedo_ValidObs_Band3": 1.0,
        "BRDF_Albedo_ValidObs_Band4": 1.0,
        "BRDF_Albedo_ValidObs_Band5": 1.0,
        "BRDF_Albedo_ValidObs_Band6": 1.0,
        "BRDF_Albedo_ValidObs_Band7": 1.0,
        "Snow_BRDF_Albedo": 1.0
    },
    "MODIS/006/MCD43A3": {
        "Albedo_BSA_Band1": 0.001,
        "Albedo_BSA_Band2": 0.001,
        "Albedo_BSA_Band3": 0.001,
        "Albedo_BSA_Band4": 0.001,
        "Albedo_BSA_Band5": 0.001,
        "Albedo_BSA_Band6": 0.001,
        "Albedo_BSA_Band7": 0.001,
        "Albedo_BSA_nir": 0.001,
        "Albedo_BSA_shortwave": 0.001,
        "Albedo_BSA_vis": 0.001,
        "Albedo_WSA_Band1": 0.001,
        "Albedo_WSA_Band2": 0.001,
        "Albedo_WSA_Band3": 0.001,
        "Albedo_WSA_Band4": 0.001,
        "Albedo_WSA_Band5": 0.001,
        "Albedo_WSA_Band6": 0.001,
        "Albedo_WSA_Band7": 0.001,
        "Albedo_WSA_nir": 0.001,
        "Albedo_WSA_shortwave": 0.001,
        "Albedo_WSA_vis": 0.001,
        "BRDF_Albedo_Band_Mandatory_Quality_Band1": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band2": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band3": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band4": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band5": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band6": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band7": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_nir": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_shortwave": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_vis": 1.0
    },
    "MODIS/006/MCD43A4": {
        "BRDF_Albedo_Band_Mandatory_Quality_Band1": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band2": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band3": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band4": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band5": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band6": 1.0,
        "BRDF_Albedo_Band_Mandatory_Quality_Band7": 1.0,
        "Nadir_Reflectance_Band1": 0.0001,
        "Nadir_Reflectance_Band2": 0.0001,
        "Nadir_Reflectance_Band3": 0.0001,
        "Nadir_Reflectance_Band4": 0.0001,
        "Nadir_Reflectance_Band5": 0.0001,
        "Nadir_Reflectance_Band6": 0.0001,
        "Nadir_Reflectance_Band7": 0.0001
    },
    "MODIS/006/MCD43C3": {
        "Albedo_BSA_Band1": 0.001,
        "Albedo_BSA_Band2": 0.001,
        "Albedo_BSA_Band3": 0.001,
        "Albedo_BSA_Band4": 0.001,
        "Albedo_BSA_Band5": 0.001,
        "Albedo_BSA_Band6": 0.001,
        "Albedo_BSA_Band7": 0.001,
        "Albedo_BSA_nir": 0.001,
        "Albedo_BSA_shortwave": 0.001,
        "Albedo_BSA_vis": 0.001,
        "Albedo_WSA_Band1": 0.001,
        "Albedo_WSA_Band2": 0.001,
        "Albedo_WSA_Band3": 0.001,
        "Albedo_WSA_Band4": 0.001,
        "Albedo_WSA_Band5": 0.001,
        "Albedo_WSA_Band6": 0.001,
        "Albedo_WSA_Band7": 0.001,
        "Albedo_WSA_nir": 0.001,
        "Albedo_WSA_shortwave": 0.001,
        "Albedo_WSA_vis": 0.001,
        "BRDF_Albedo_Uncertainty": 0.001,
        "BRDF_Quality": 1.0,
        "Local_Solar_Noon": 1.0,
        "Percent_Inputs": 1.0,
        "Percent_Snow": 1.0
    },
    "MODIS/006/MCD64A1": {
        "BurnDate": 1.0,
        "FirstDay": 1.0,
        "LastDay": 1.0,
        "QA": 1.0,
        "Uncertainty": 1.0
    },
    "MODIS/006/MOD08_M3": {
        "Aerosol_Optical_Depth_Land_Ocean_Mean_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Mean_Mean_470": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470": 0.001,
        "Cirrus_Fraction_SWIR_FMean": 0.0001,
        "Cirrus_Fraction_SWIR_FStd": 0.0001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Mean_Uncertainty": 0.01
    },
    "MODIS/006/MOD09A1": {
        "DayOfYear": 1.0,
        "QA": 1.0,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "StateQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b04": 0.0001,
        "sur_refl_b05": 0.0001,
        "sur_refl_b06": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MOD09GA": {
        "QC_500m": 1.0,
        "Range": 25,
        "SensorAzimuth": 0.01,
        "SensorZenith": 0.01,
        "SolarAzimuth": 0.01,
        "SolarZenith": 0.01,
        "gflags": 1.0,
        "granule_pnt": 1.0,
        "iobs_res": 1.0,
        "num_observations_1km": 1.0,
        "num_observations_500m": 1.0,
        "obscov_500m": 1.0,
        "orbit_pnt": 1.0,
        "q_scan": 1.0,
        "state_1km": 1.0,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b04": 0.0001,
        "sur_refl_b05": 0.0001,
        "sur_refl_b06": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MOD09GQ": {
        "QC_250m": 1.0,
        "granule_pnt": 1.0,
        "iobs_res": 1.0,
        "num_observations": 1.0,
        "obscov": 0.01,
        "orbit_pnt": 1.0,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001
    },
    "MODIS/006/MOD09Q1": {
        "QA": 1.0,
        "State": 1.0,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001
    },
    "MODIS/006/MOD10A1": {
        "NDSI": 0.0001,
        "NDSI_Snow_Cover": 1.0,
        "NDSI_Snow_Cover_Algorithm_Flags_QA": 1.0,
        "NDSI_Snow_Cover_Basic_QA": 1.0,
        "NDSI_Snow_Cover_Class": 1.0,
        "Snow_Albedo_Daily_Tile": 1.0,
        "Snow_Albedo_Daily_Tile_Class": 1.0,
        "granule_pnt": 1.0,
        "orbit_pnt": 1.0
    },
    "MODIS/006/MOD11A1": {
        "Clear_day_cov": 0.0005,
        "Clear_night_cov": 0.0005,
        "Day_view_angle": 1.0,
        "Day_view_time": 0.1,
        "Emis_31": 0.002,
        "Emis_32": 0.002,
        "LST_Day_1km": 0.02,
        "LST_Night_1km": 0.02,
        "Night_view_angle": 1.0,
        "Night_view_time": 0.1,
        "QC_Day": 1.0,
        "QC_Night": 1.0
    },
    "MODIS/006/MOD11A2": {
        "Clear_sky_days": 1.0,
        "Clear_sky_nights": 1.0,
        "Day_view_angl": 1,
        "Day_view_time": 0.1,
        "Emis_31": 0.002,
        "Emis_32": 0.002,
        "LST_Day_1km": 0.02,
        "LST_Night_1km": 0.02,
        "Night_view_angl": 1,
        "Night_view_time": 0.1,
        "QC_Day": 1.0,
        "QC_Night": 1.0
    },
    "MODIS/006/MOD13A1": {
        "DayOfYear": 1.0,
        "DetailedQA": 1.0,
        "EVI": 0.0001,
        "NDVI": 0.0001,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "SummaryQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MOD13A2": {
        "DayOfYear": 1.0,
        "DetailedQA": 1.0,
        "EVI": 0.0001,
        "NDVI": 0.0001,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "SummaryQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MOD13Q1": {
        "DayOfYear": 1.0,
        "DetailedQA": 1.0,
        "EVI": 0.0001,
        "NDVI": 0.0001,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "SummaryQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MOD14A1": {
        "FireMask": 1.0,
        "MaxFRP": 0.1,
        "QA": 1.0,
        "sample": 1.0
    },
    "MODIS/006/MOD14A2": {
        "FireMask": 1.0,
        "QA": 1.0
    },
    "MODIS/006/MOD15A2H": {
        "FparExtra_QC": 1.0,
        "FparLai_QC": 1.0,
        "FparStdDev_500m": 0.01,
        "Fpar_500m": 0.01,
        "LaiStdDev_500m": 0.1,
        "Lai_500m": 0.1
    },
    "MODIS/006/MOD16A2": {
        "ET": 0.1,
        "ET_QC": 1.0,
        "LE": 10000,
        "PET": 0.1,
        "PLE": 10000
    },
    "MODIS/006/MOD17A2H": {
        "Gpp": 0.0001,
        "PsnNet": 0.0001,
        "Psn_QC": 1.0
    },
    "MODIS/006/MOD17A3H": {
        "Npp": 0.0001,
        "Npp_QC": 1.0
    },
    "MODIS/006/MOD17A3HGF": {
        "Npp": 0.0001,
        "Npp_QC": 1.0
    },
    "MODIS/006/MOD44B": {
        "Cloud": 1.0,
        "Percent_NonTree_Vegetation": 1.0,
        "Percent_NonVegetated": 1.0,
        "Percent_NonVegetated_SD": 0.01,
        "Percent_Tree_Cover": 1.0,
        "Percent_Tree_Cover_SD": 0.01,
        "Quality": 1.0
    },
    "MODIS/006/MOD44W": {
        "water_mask": 1.0,
        "water_mask_QA": 1.0
    },
    "MODIS/006/MODOCGA": {
        "QC_b16_15_1km": 1.0,
        "QC_b8_15_1km": 1.0,
        "granule_pnt": 1.0,
        "num_observations": 1.0,
        "orbit_pnt": 1.0,
        "sur_refl_b08": 0.0001,
        "sur_refl_b09": 0.0001,
        "sur_refl_b10": 0.0001,
        "sur_refl_b11": 0.0001,
        "sur_refl_b12": 0.0001,
        "sur_refl_b13": 0.0001,
        "sur_refl_b14": 0.0001,
        "sur_refl_b15": 0.0001,
        "sur_refl_b16": 0.0001
    },
    "MODIS/006/MYD08_M3": {
        "Aerosol_Optical_Depth_Land_Ocean_Mean_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Mean_Mean_470": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470": 0.001,
        "Cirrus_Fraction_SWIR_FMean": 0.0001,
        "Cirrus_Fraction_SWIR_FStd": 0.0001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Mean_Uncertainty": 0.01
    },
    "MODIS/006/MYD09A1": {
        "DayOfYear": 1.0,
        "QA": 1.0,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "StateQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b04": 0.0001,
        "sur_refl_b05": 0.0001,
        "sur_refl_b06": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MYD09GA": {
        "QC_500m": 1.0,
        "Range": 25,
        "SensorAzimuth": 0.01,
        "SensorZenith": 0.01,
        "SolarAzimuth": 0.01,
        "SolarZenith": 0.01,
        "gflags": 1.0,
        "granule_pnt": 1.0,
        "iobs_res": 1.0,
        "num_observations_1km": 1.0,
        "num_observations_500m": 1.0,
        "obscov_500m": 1.0,
        "orbit_pnt": 1.0,
        "q_scan": 1.0,
        "state_1km": 1.0,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b04": 0.0001,
        "sur_refl_b05": 0.0001,
        "sur_refl_b06": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MYD09GQ": {
        "QC_250m": 1.0,
        "granule_pnt": 1.0,
        "iobs_res": 1.0,
        "num_observations": 1.0,
        "obscov": 0.01,
        "orbit_pnt": 1.0,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001
    },
    "MODIS/006/MYD09Q1": {
        "QA": 1.0,
        "State": 1.0,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001
    },
    "MODIS/006/MYD10A1": {
        "NDSI": 0.0001,
        "NDSI_Snow_Cover": 1.0,
        "NDSI_Snow_Cover_Algorithm_Flags_QA": 1.0,
        "NDSI_Snow_Cover_Basic_QA": 1.0,
        "NDSI_Snow_Cover_Class": 1.0,
        "Snow_Albedo_Daily_Tile": 1.0,
        "Snow_Albedo_Daily_Tile_Class": 1.0,
        "granule_pnt": 1.0,
        "orbit_pnt": 1.0
    },
    "MODIS/006/MYD11A1": {
        "Clear_day_cov": 0.0005,
        "Clear_night_cov": 0.0005,
        "Day_view_angle": 1.0,
        "Day_view_time": 0.1,
        "Emis_31": 0.002,
        "Emis_32": 0.002,
        "LST_Day_1km": 0.02,
        "LST_Night_1km": 0.02,
        "Night_view_angle": 1.0,
        "Night_view_time": 0.1,
        "QC_Day": 1.0,
        "QC_Night": 1.0
    },
    "MODIS/006/MYD11A2": {
        "Clear_sky_days": 1.0,
        "Clear_sky_nights": 1.0,
        "Day_view_angl": 1,
        "Day_view_time": 0.1,
        "Emis_31": 0.002,
        "Emis_32": 0.002,
        "LST_Day_1km": 0.02,
        "LST_Night_1km": 0.02,
        "Night_view_angl": 1,
        "Night_view_time": 0.1,
        "QC_Day": 1.0,
        "QC_Night": 1.0
    },
    "MODIS/006/MYD13A1": {
        "DayOfYear": 1.0,
        "DetailedQA": 1.0,
        "EVI": 0.0001,
        "NDVI": 0.0001,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "SummaryQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MYD13A2": {
        "DayOfYear": 1.0,
        "DetailedQA": 1.0,
        "EVI": 0.0001,
        "NDVI": 0.0001,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "SummaryQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MYD13Q1": {
        "DayOfYear": 1.0,
        "DetailedQA": 1.0,
        "EVI": 0.0001,
        "NDVI": 0.0001,
        "RelativeAzimuth": 0.01,
        "SolarZenith": 0.01,
        "SummaryQA": 1.0,
        "ViewZenith": 0.01,
        "sur_refl_b01": 0.0001,
        "sur_refl_b02": 0.0001,
        "sur_refl_b03": 0.0001,
        "sur_refl_b07": 0.0001
    },
    "MODIS/006/MYD14A1": {
        "FireMask": 1.0,
        "MaxFRP": 0.1,
        "QA": 1.0,
        "sample": 1.0
    },
    "MODIS/006/MYD14A2": {
        "FireMask": 1.0,
        "QA": 1.0
    },
    "MODIS/006/MYD15A2H": {
        "FparExtra_QC": 1.0,
        "FparLai_QC": 1.0,
        "FparStdDev_500m": 0.01,
        "Fpar_500m": 0.01,
        "LaiStdDev_500m": 0.1,
        "Lai_500m": 0.1
    },
    "MODIS/006/MYD17A2H": {
        "Gpp": 0.0001,
        "PsnNet": 0.0001,
        "Psn_QC": 1.0
    },
    "MODIS/006/MYD17A3H": {
        "Npp": 0.0001,
        "Npp_QC": 1.0
    },
    "MODIS/006/MYD17A3HGF": {
        "Npp": 0.0001,
        "Npp_QC": 1.0
    },
    "MODIS/006/MYDOCGA": {
        "QC_b16_15_1km": 1.0,
        "QC_b8_15_1km": 1.0,
        "granule_pnt": 1.0,
        "num_observations": 1.0,
        "orbit_pnt": 1.0,
        "sur_refl_b08": 0.0001,
        "sur_refl_b09": 0.0001,
        "sur_refl_b10": 0.0001,
        "sur_refl_b11": 0.0001,
        "sur_refl_b12": 0.0001,
        "sur_refl_b13": 0.0001,
        "sur_refl_b14": 0.0001,
        "sur_refl_b15": 0.0001,
        "sur_refl_b16": 0.0001
    },
    "MODIS/055/MOD17A3": {
        "Gpp": 0.0001,
        "Gpp_Npp_QC": 1.0,
        "Npp": 0.0001
    },
    "MODIS/061/MOD08_M3": {
        "Aerosol_Optical_Depth_Land_Ocean_Mean_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Mean_Mean_470": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470": 0.001,
        "Cirrus_Fraction_SWIR_FMean": 0.0001,
        "Cirrus_Fraction_SWIR_FStd": 0.0001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Mean_Uncertainty": 0.01
    },
    "MODIS/061/MYD08_M3": {
        "Aerosol_Optical_Depth_Land_Ocean_Mean_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Mean_Mean_470": 0.001,
        "Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470": 0.001,
        "Cirrus_Fraction_SWIR_FMean": 0.0001,
        "Cirrus_Fraction_SWIR_FStd": 0.0001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty": 0.001,
        "Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean": 0.001,
        "Cloud_Optical_Thickness_Liquid_Mean_Uncertainty": 0.01
    },
    "MODIS/MCD43A4_006_BAI": {
        "BAI": 1.0
    },
    "MODIS/MCD43A4_006_EVI": {
        "EVI": 1.0
    },
    "MODIS/MCD43A4_006_NDSI": {
        "NDSI": 1.0
    },
    "MODIS/MCD43A4_006_NDVI": {
        "NDVI": 1.0
    },
    "MODIS/MCD43A4_006_NDWI": {
        "NDWI": 1.0
    },
    "MODIS/MCD43A4_BAI": {
        "BAI": 1.0
    },
    "MODIS/MCD43A4_EVI": {
        "EVI": 1.0
    },
    "MODIS/MCD43A4_NDSI": {
        "NDSI": 1.0
    },
    "MODIS/MCD43A4_NDVI": {
        "NDVI": 1.0
    },
    "MODIS/MCD43A4_NDWI": {
        "NDWI": 1.0
    },
    "MODIS/MOD09GA_006_BAI": {
        "BAI": 1.0
    },
    "MODIS/MOD09GA_006_EVI": {
        "EVI": 1.0
    },
    "MODIS/MOD09GA_006_NDSI": {
        "NDSI": 1.0
    },
    "MODIS/MOD09GA_006_NDVI": {
        "NDVI": 1.0
    },
    "MODIS/MOD09GA_006_NDWI": {
        "NDWI": 1.0
    },
    "MODIS/MOD09GA_BAI": {
        "BAI": 1.0
    },
    "MODIS/MOD09GA_EVI": {
        "EVI": 1.0
    },
    "MODIS/MOD09GA_NDSI": {
        "NDSI": 1.0
    },
    "MODIS/MOD09GA_NDVI": {
        "NDVI": 1.0
    },
    "MODIS/MOD09GA_NDWI": {
        "NDWI": 1.0
    },
    "MODIS/MOD10A1": {
        "Fractional_Snow_Cover": 1.0,
        "Snow_Albedo_Daily_Tile": 1.0,
        "Snow_Cover_Daily_Tile": 1.0,
        "Snow_Spatial_QA": 1.0
    },
    "MODIS/MOD44W/MOD44W_005_2000_02_24": {
        "water_mask": 1.0,
        "water_mask_qa": 1.0
    },
    "MODIS/MYD09GA_006_BAI": {
        "BAI": 1.0
    },
    "MODIS/MYD09GA_006_EVI": {
        "EVI": 1.0
    },
    "MODIS/MYD09GA_006_NDSI": {
        "NDSI": 1.0
    },
    "MODIS/MYD09GA_006_NDVI": {
        "NDVI": 1.0
    },
    "MODIS/MYD09GA_006_NDWI": {
        "NDWI": 1.0
    },
    "MODIS/MYD09GA_BAI": {
        "BAI": 1.0
    },
    "MODIS/MYD09GA_EVI": {
        "EVI": 1.0
    },
    "MODIS/MYD09GA_NDSI": {
        "NDSI": 1.0
    },
    "MODIS/MYD09GA_NDVI": {
        "NDVI": 1.0
    },
    "MODIS/MYD09GA_NDWI": {
        "NDWI": 1.0
    },
    "MODIS/MYD10A1": {
        "Fractional_Snow_Cover": 1.0,
        "Snow_Albedo_Daily_Tile": 1.0,
        "Snow_Cover_Daily_Tile": 1.0,
        "Snow_Spatial_QA": 1.0
    },
    "MODIS/NTSG/MOD16A2/105": {
        "ET": 0.1,
        "ET_QC": 1.0,
        "LE": 0.0001,
        "PET": 0.1,
        "PLE": 0.0001
    },
    "NASA/ASTER_GED/AG100_003": {
        "elevation": 1.0,
        "emissivity_band10": 0.001,
        "emissivity_band11": 0.001,
        "emissivity_band12": 0.001,
        "emissivity_band13": 0.001,
        "emissivity_band14": 0.001,
        "emissivity_sdev_band10": 0.0001,
        "emissivity_sdev_band11": 0.0001,
        "emissivity_sdev_band12": 0.0001,
        "emissivity_sdev_band13": 0.0001,
        "emissivity_sdev_band14": 0.0001,
        "land_water_map": 1.0,
        "ndvi": 0.01,
        "ndvi_sdev": 0.01,
        "num_obs": 1.0,
        "temperature": 0.01,
        "temperature_sdev": 0.01
    },
    "NASA/FLDAS/NOAH01/C/GL/M/V001": {
        "Evap_tavg": 1.0,
        "LWdown_f_tavg": 1.0,
        "Lwnet_tavg": 1.0,
        "Psurf_f_tavg": 1.0,
        "Qair_f_tavg": 1.0,
        "Qg_tavg": 1.0,
        "Qh_tavg": 1.0,
        "Qle_tavg": 1.0,
        "Qs_tavg": 1.0,
        "Qsb_tavg": 1.0,
        "RadT_tavg": 1.0,
        "Rainf_f_tavg": 1.0,
        "SWE_inst": 1.0,
        "SWdown_f_tavg": 1.0,
        "SnowCover_inst": 1.0,
        "SnowDepth_inst": 1.0,
        "Snowf_tavg": 1.0,
        "SoilMoi00_10cm_tavg": 1.0,
        "SoilMoi100_200cm_tavg": 1.0,
        "SoilMoi10_40cm_tavg": 1.0,
        "SoilMoi40_100cm_tavg": 1.0,
        "SoilTemp00_10cm_tavg": 1.0,
        "SoilTemp100_200cm_tavg": 1.0,
        "SoilTemp10_40cm_tavg": 1.0,
        "SoilTemp40_100cm_tavg": 1.0,
        "Swnet_tavg": 1.0,
        "Tair_f_tavg": 1.0,
        "Wind_f_tavg": 1.0
    },
    "NASA/GIMMS/3GV0": {
        "ndvi": 1.0,
        "qa": 1.0
    },
    "NASA/GLDAS/V021/NOAH/G025/T3H": {
        "Albedo_inst": 1.0,
        "AvgSurfT_inst": 1.0,
        "CanopInt_inst": 1.0,
        "ECanop_tavg": 1.0,
        "ESoil_tavg": 1.0,
        "Evap_tavg": 1.0,
        "LWdown_f_tavg": 1.0,
        "Lwnet_tavg": 1.0,
        "PotEvap_tavg": 1.0,
        "Psurf_f_inst": 1.0,
        "Qair_f_inst": 1.0,
        "Qg_tavg": 1.0,
        "Qh_tavg": 1.0,
        "Qle_tavg": 1.0,
        "Qs_acc": 1.0,
        "Qsb_acc": 1.0,
        "Qsm_acc": 1.0,
        "Rainf_f_tavg": 1.0,
        "Rainf_tavg": 1.0,
        "RootMoist_inst": 1.0,
        "SWE_inst": 1.0,
        "SWdown_f_tavg": 1.0,
        "SnowDepth_inst": 1.0,
        "Snowf_tavg": 1.0,
        "SoilMoi0_10cm_inst": 1.0,
        "SoilMoi100_200cm_inst": 1.0,
        "SoilMoi10_40cm_inst": 1.0,
        "SoilMoi40_100cm_inst": 1.0,
        "SoilTMP0_10cm_inst": 1.0,
        "SoilTMP100_200cm_inst": 1.0,
        "SoilTMP10_40cm_inst": 1.0,
        "SoilTMP40_100cm_inst": 1.0,
        "Swnet_tavg": 1.0,
        "Tair_f_inst": 1.0,
        "Tveg_tavg": 1.0,
        "Wind_f_inst": 1.0
    },
    "NASA/GLDAS/V20/NOAH/G025/T3H": {
        "Albedo_inst": 1.0,
        "AvgSurfT_inst": 1.0,
        "CanopInt_inst": 1.0,
        "ECanop_tavg": 1.0,
        "ESoil_tavg": 1.0,
        "Evap_tavg": 1.0,
        "LWdown_f_tavg": 1.0,
        "Lwnet_tavg": 1.0,
        "PotEvap_tavg": 1.0,
        "Psurf_f_inst": 1.0,
        "Qair_f_inst": 1.0,
        "Qg_tavg": 1.0,
        "Qh_tavg": 1.0,
        "Qle_tavg": 1.0,
        "Qs_acc": 1.0,
        "Qsb_acc": 1.0,
        "Qsm_acc": 1.0,
        "Rainf_f_tavg": 1.0,
        "Rainf_tavg": 1.0,
        "RootMoist_inst": 1.0,
        "SWE_inst": 1.0,
        "SWdown_f_tavg": 1.0,
        "SnowDepth_inst": 1.0,
        "Snowf_tavg": 1.0,
        "SoilMoi0_10cm_inst": 1.0,
        "SoilMoi100_200cm_inst": 1.0,
        "SoilMoi10_40cm_inst": 1.0,
        "SoilMoi40_100cm_inst": 1.0,
        "SoilTMP0_10cm_inst": 1.0,
        "SoilTMP100_200cm_inst": 1.0,
        "SoilTMP10_40cm_inst": 1.0,
        "SoilTMP40_100cm_inst": 1.0,
        "Swnet_tavg": 1.0,
        "Tair_f_inst": 1.0,
        "Tveg_tavg": 1.0,
        "Wind_f_inst": 1.0
    },
    "NASA/GPM_L3/IMERG_MONTHLY_V06": {
        "gaugeRelativeWeighting": 1.0,
        "precipitation": 1.0,
        "precipitationQualityIndex": 1.0,
        "probabilityLiquidPrecipitation": 1.0,
        "randomError": 1.0
    },
    "NASA/GPM_L3/IMERG_V06": {
        "HQobservationTime": 1.0,
        "HQprecipSource": 1.0,
        "HQprecipitation": 1.0,
        "IRkalmanFilterWeight": 1.0,
        "IRprecipitation": 1.0,
        "precipitationCal": 1.0,
        "precipitationUncal": 1.0,
        "probabilityLiquidPrecipitation": 1.0,
        "randomError": 1.0
    },
    "NASA/GRACE/MASS_GRIDS/LAND": {
        "lwe_thickness_csr": 1.0,
        "lwe_thickness_gfz": 1.0,
        "lwe_thickness_jpl": 1.0
    },
    "NASA/GRACE/MASS_GRIDS/MASCON": {
        "lwe_thickness": 1.0,
        "uncertainty": 1.0
    },
    "NASA/GRACE/MASS_GRIDS/MASCON_CRI": {
        "lwe_thickness": 1.0,
        "uncertainty": 1.0
    },
    "NASA/GRACE/MASS_GRIDS/OCEAN": {
        "lwe_thickness_csr": 1.0,
        "lwe_thickness_gfz": 1.0,
        "lwe_thickness_jpl": 1.0
    },
    "NASA/GRACE/MASS_GRIDS/OCEAN_EOFR": {
        "lwe_thickness_csr": 1.0,
        "lwe_thickness_gfz": 1.0,
        "lwe_thickness_jpl": 1.0
    },
    "NASA/JPL/global_forest_canopy_height_2005": {
        "1": 1.0
    },
    "NASA/MEASURES/GFCC/TC/v3": {
        "source_index": 1.0,
        "tree_canopy_cover": 1.0,
        "uncertainty": 1.0
    },
    "NASA/NASADEM_HGT/001": {
        "elevation": 1.0,
        "num": 1.0,
        "swb": 1.0
    },
    "NASA/NEX-DCP30": {
        "pr": 1.0,
        "tasmax": 1.0,
        "tasmin": 1.0
    },
    "NASA/NEX-DCP30_ENSEMBLE_STATS": {
        "pr_mean": 1.0,
        "pr_median": 1.0,
        "pr_quartile25": 1.0,
        "pr_quartile75": 1.0,
        "tasmax_mean": 1.0,
        "tasmax_median": 1.0,
        "tasmax_quartile25": 1.0,
        "tasmax_quartile75": 1.0,
        "tasmin_mean": 1.0,
        "tasmin_median": 1.0,
        "tasmin_quartile25": 1.0,
        "tasmin_quartile75": 1.0
    },
    "NASA/NEX-GDDP": {
        "pr": 1.0,
        "tasmax": 1.0,
        "tasmin": 1.0
    },
    "NASA/NLDAS/FORA0125_H002": {
        "convective_fraction": 1.0,
        "longwave_radiation": 1.0,
        "potential_energy": 1.0,
        "potential_evaporation": 1.0,
        "pressure": 1.0,
        "shortwave_radiation": 1.0,
        "specific_humidity": 1.0,
        "temperature": 1.0,
        "total_precipitation": 1.0,
        "wind_u": 1.0,
        "wind_v": 1.0
    },
    "NASA/OCEANDATA/MODIS-Aqua/L3SMI": {
        "Rrs_412": 1.0,
        "Rrs_443": 1.0,
        "Rrs_469": 1.0,
        "Rrs_488": 1.0,
        "Rrs_531": 1.0,
        "Rrs_547": 1.0,
        "Rrs_555": 1.0,
        "Rrs_645": 1.0,
        "Rrs_667": 1.0,
        "Rrs_678": 1.0,
        "chlor_a": 1.0,
        "nflh": 1.0,
        "poc": 1.0,
        "sst": 1.0
    },
    "NASA/OCEANDATA/MODIS-Terra/L3SMI": {
        "Rrs_412": 1.0,
        "Rrs_443": 1.0,
        "Rrs_469": 1.0,
        "Rrs_488": 1.0,
        "Rrs_531": 1.0,
        "Rrs_547": 1.0,
        "Rrs_555": 1.0,
        "Rrs_645": 1.0,
        "Rrs_667": 1.0,
        "Rrs_678": 1.0,
        "chlor_a": 1.0,
        "nflh": 1.0,
        "poc": 1.0,
        "sst": 1.0
    },
    "NASA/OCEANDATA/SeaWiFS/L3SMI": {
        "Rrs_412": 1.0,
        "Rrs_443": 1.0,
        "Rrs_490": 1.0,
        "Rrs_510": 1.0,
        "Rrs_555": 1.0,
        "Rrs_670": 1.0,
        "chlor_a": 1.0,
        "poc": 1.0
    },
    "NASA/ORNL/DAYMET_V3": {
        "dayl": 1.0,
        "prcp": 1.0,
        "srad": 1.0,
        "swe": 1.0,
        "tmax": 1.0,
        "tmin": 1.0,
        "vp": 1.0
    },
    "NASA/ORNL/DAYMET_V4": {
        "dayl": 1.0,
        "prcp": 1.0,
        "srad": 1.0,
        "swe": 1.0,
        "tmax": 1.0,
        "tmin": 1.0,
        "vp": 1.0
    },
    "NASA/ORNL/biomass_carbon_density/v1": {
        "agb": 1.0,
        "agb_uncertainty": 1.0,
        "bgb": 1.0,
        "bgb_uncertainty": 1.0
    },
    "NASA_USDA/HSL/SMAP10KM_soil_moisture": {
        "smp": 1.0,
        "ssm": 1.0,
        "ssma": 1.0,
        "susm": 1.0,
        "susma": 1.0
    },
    "NASA_USDA/HSL/SMAP_soil_moisture": {
        "smp": 1.0,
        "ssm": 1.0,
        "ssma": 1.0,
        "susm": 1.0,
        "susma": 1.0
    },
    "NASA_USDA/HSL/soil_moisture": {
        "smp": 1.0,
        "ssm": 1.0,
        "ssma": 1.0,
        "susm": 1.0,
        "susma": 1.0
    },
    "NCEP_RE/sea_level_pressure": {
        "slp": 0.01
    },
    "NCEP_RE/surface_temp": {
        "air": 1.0
    },
    "NCEP_RE/surface_wv": {
        "pr_wtr": 1.0
    },
    "NOAA/CDR/ATMOS_NEAR_SURFACE/V2": {
        "air_temperature": 1.0,
        "fill_missing_qc": 1.0,
        "specific_humidity": 1.0,
        "wind_speed": 1.0
    },
    "NOAA/CDR/AVHRR/AOT/V3": {
        "aot": 1.0
    },
    "NOAA/CDR/AVHRR/LAI_FAPAR/V4": {
        "FAPAR": 0.001,
        "LAI": 0.001,
        "QA": 1.0
    },
    "NOAA/CDR/AVHRR/LAI_FAPAR/V5": {
        "FAPAR": 0.001,
        "LAI": 0.001,
        "QA": 1.0
    },
    "NOAA/CDR/AVHRR/NDVI/V4": {
        "NDVI": 0.0001,
        "QA": 1.0,
        "TIMEOFDAY": 0.01
    },
    "NOAA/CDR/AVHRR/NDVI/V5": {
        "NDVI": 0.0001,
        "QA": 1.0,
        "TIMEOFDAY": 0.01
    },
    "NOAA/CDR/AVHRR/SR/V4": {
        "BT_CH3": 0.1,
        "BT_CH4": 0.1,
        "BT_CH5": 0.1,
        "QA": 1.0,
        "RELAZ": 0.01,
        "SREFL_CH1": 0.0001,
        "SREFL_CH2": 0.0001,
        "SREFL_CH3": 0.0001,
        "SZEN": 0.01,
        "TIMEOFDAY": 0.01,
        "VZEN": 0.01
    },
    "NOAA/CDR/AVHRR/SR/V5": {
        "BT_CH3": 0.1,
        "BT_CH4": 0.1,
        "BT_CH5": 0.1,
        "QA": 1.0,
        "RELAZ": 0.01,
        "SREFL_CH1": 0.0001,
        "SREFL_CH2": 0.0001,
        "SREFL_CH3": 0.0001,
        "SZEN": 0.01,
        "TIMEOFDAY": 0.01,
        "VZEN": 0.01
    },
    "NOAA/CDR/GRIDSAT-B1/V2": {
        "irwin_2": 0.01,
        "irwin_3": 0.01,
        "irwin_cdr": 0.01,
        "irwin_vza_adj": 0.25,
        "irwvp": 0.01,
        "irwvp_2": 0.01,
        "satid_ir1": 1.0,
        "satid_ir2": 1.0,
        "satid_ir3": 1.0,
        "satid_vs1": 1.0,
        "satid_vs2": 1.0,
        "satid_wv1": 1.0,
        "satid_wv2": 1.0,
        "vschn": 4e-05,
        "vschn_2": 4e-05
    },
    "NOAA/CDR/HEAT_FLUXES/V2": {
        "fill_missing_qc": 1.0,
        "surface_upward_latent_heat_flux": 1.0,
        "surface_upward_sensible_heat_flux": 1.0
    },
    "NOAA/CDR/OISST/V2": {
        "anom": 0.01,
        "err": 0.01,
        "ice": 0.01,
        "sst": 0.01
    },
    "NOAA/CDR/OISST/V2_1": {
        "anom": 0.01,
        "err": 0.01,
        "ice": 0.01,
        "sst": 0.01
    },
    "NOAA/CDR/PATMOSX/V53": {
        "acha_info": 1.0,
        "acha_quality": 1.0,
        "bad_pixel_mask": 1.0,
        "cld_emiss_acha": 0.003937008,
        "cld_height_acha": 0.0003051851,
        "cld_height_uncer_acha": 0.03937008,
        "cld_opd_acha": 0.03228346,
        "cld_opd_dcomp": 0.002444532,
        "cld_opd_dcomp_unc": 0.002444532,
        "cld_press_acha": 0.01678518,
        "cld_reff_acha": 0.6299213,
        "cld_reff_dcomp": 0.002441481,
        "cld_reff_dcomp_unc": 0.002441481,
        "cld_temp_acha": 0.002441481,
        "cloud_fraction": 0.003937008,
        "cloud_fraction_uncertainty": 0.003937008,
        "cloud_mask": 1.0,
        "cloud_probability": 0.003937008,
        "cloud_transmission_0_65um": 0.003937008,
        "cloud_type": 1.0,
        "cloud_water_path": 4.72441,
        "dcomp_info": 1.0,
        "dcomp_quality": 1.0,
        "glint_mask": 1.0,
        "land_class": 1.0,
        "refl_0_65um": 0.001861629,
        "refl_0_65um_counts": 1.0,
        "refl_0_65um_stddev_3x3": 0.07874016,
        "refl_0_86um": 0.001861629,
        "refl_0_86um_counts": 1.0,
        "refl_1_60um": 0.001861629,
        "refl_1_60um_counts": 1.0,
        "refl_3_75um": 0.001525925,
        "relative_azimuth_angle": 0.7086614,
        "scan_element_number": 1.0,
        "scan_line_number": 1.0,
        "scan_line_time": 1.0,
        "sensor_zenith_angle": 0.3543307,
        "snow_class": 1.0,
        "solar_azimuth_angle": 1.417323,
        "solar_zenith_angle": 0.7086614,
        "surface_temperature_retrieved": 0.472441,
        "surface_type": 1.0,
        "temp_11_0um": 0.002441481,
        "temp_11_0um_clear_sky": 0.002441481,
        "temp_11_0um_stddev_3x3": 0.07874016,
        "temp_12_0um": 0.002441481,
        "temp_3_75um": 0.002441481
    },
    "NOAA/CDR/SST_PATHFINDER/V53": {
        "aerosol_dynamic_indicator": 0.01,
        "dt_analysis": 0.1,
        "l2p_flags": 1.0,
        "pathfinder_quality_level": 1.0,
        "quality_level": 1.0,
        "sea_ice_fraction": 0.01,
        "sea_surface_temperature": 0.01,
        "wind_speed": 1.0
    },
    "NOAA/CDR/SST_WHOI/V2": {
        "fill_missing_qc": 1.0,
        "sea_surface_temperature": 1.0
    },
    "NOAA/CFSR": {
        "Albedo_surface_3_Hour_Average": 1.0,
        "Canopy_water_evaporation_surface_3_Hour_Average": 1.0,
        "Categorical_Freezing_Rain_surface_3_Hour_Average": 1.0,
        "Categorical_Ice_Pellets_surface_3_Hour_Average": 1.0,
        "Categorical_Rain_surface": 1.0,
        "Categorical_Rain_surface_3_Hour_Average": 1.0,
        "Categorical_Snow_surface_3_Hour_Average": 1.0,
        "Clear_Sky_Downward_Long_Wave_Flux_surface_3_Hour_Average": 1.0,
        "Clear_Sky_Downward_Solar_Flux_surface_3_Hour_Average": 1.0,
        "Clear_Sky_Upward_Long_Wave_Flux_surface_3_Hour_Average": 1.0,
        "Clear_Sky_Upward_Solar_Flux_atmosphere_top_3_Hour_Average": 1.0,
        "Clear_sky_UV-B_Downward_Solar_Flux_surface_3_Hour_Average": 1.0,
        "Cloud_Work_Function_entire_atmosphere_single_layer_3_Hour_Average": 1.0,
        "Cloud_water_entire_atmosphere_single_layer": 1.0,
        "Convective_Precipitation_Rate_surface_3_Hour_Average": 1.0,
        "Convective_available_potential_energy_pressure_difference_layer": 1.0,
        "Convective_available_potential_energy_surface": 1.0,
        "Convective_precipitation_surface_3_Hour_Accumulation": 1.0,
        "Direct_Evaporation_from_Bare_Soil_surface_3_Hour_Average": 1.0,
        "Downward_Long-Wave_Radp_Flux_surface": 1.0,
        "Downward_Long-Wave_Radp_Flux_surface_3_Hour_Average": 1.0,
        "Downward_Short-Wave_Radiation_Flux_atmosphere_top_3_Hour_Average": 1.0,
        "Downward_Short-Wave_Radiation_Flux_surface": 1.0,
        "Downward_Short-Wave_Radiation_Flux_surface_3_Hour_Average": 1.0,
        "Exchange_Coefficient_surface": 1.0,
        "Frictional_Velocity_surface": 1.0,
        "Ground_Heat_Flux_surface": 1.0,
        "Ground_Heat_Flux_surface_3_Hour_Average": 1.0,
        "Ice_cover_surface": 1.0,
        "Ice_thickness_surface": 1.0,
        "Land_cover_0__sea_1__land_surface": 1.0,
        "Latent_heat_net_flux_surface": 1.0,
        "Latent_heat_net_flux_surface_3_Hour_Average": 1.0,
        "Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_150_cm": 1.0,
        "Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_25_cm": 1.0,
        "Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_5_cm": 1.0,
        "Liquid_Volumetric_Soil_Moisture_non_Frozen_depth_below_surface_layer_70_cm": 1.0,
        "Maximum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval": 1.0,
        "Maximum_temperature_height_above_ground_3_Hour_Interval": 1.0,
        "Minimum_specific_humidity_at_2m_height_above_ground_3_Hour_Interval": 1.0,
        "Minimum_temperature_height_above_ground_3_Hour_Interval": 1.0,
        "Momentum_flux_u-component_surface_3_Hour_Average": 1.0,
        "Momentum_flux_v-component_surface_3_Hour_Average": 1.0,
        "Planetary_Boundary_Layer_Height_surface": 1.0,
        "Plant_Canopy_Surface_Water_surface": 1.0,
        "Potential_Evaporation_Rate_surface": 1.0,
        "Potential_Evaporation_Rate_surface_3_Hour_Average": 1.0,
        "Precipitable_water_entire_atmosphere_single_layer": 1.0,
        "Precipitable_water_pressure_difference_layer": 1.0,
        "Precipitation_rate_surface_3_Hour_Average": 1.0,
        "Pressure_msl": 1.0,
        "Pressure_reduced_to_MSL_msl": 1.0,
        "Pressure_surface": 1.0,
        "Relative_humidity_entire_atmosphere_single_layer": 1.0,
        "Sensible_heat_net_flux_surface": 1.0,
        "Sensible_heat_net_flux_surface_3_Hour_Average": 1.0,
        "Snow_Cover_surface_3_Hour_Average": 1.0,
        "Snow_Phase_Change_Heat_Flux_surface_3_Hour_Average": 1.0,
        "Snow_depth_surface": 1.0,
        "Soil_moisture_content_depth_below_surface_layer": 1.0,
        "Soil_type_surface": 1.0,
        "Specific_humidity_height_above_ground": 1.0,
        "Storm_Surface_Runoff_surface_3_Hour_Accumulation": 1.0,
        "Sublimation_evaporation_from_snow_surface_3_Hour_Average": 1.0,
        "Surface_Lifted_Index_surface": 1.0,
        "Surface_Slope_Type_surface": 1.0,
        "Surface_roughness_surface": 1.0,
        "Temperature_depth_below_surface_layer_150_cm": 1.0,
        "Temperature_depth_below_surface_layer_25_cm": 1.0,
        "Temperature_depth_below_surface_layer_5_cm": 1.0,
        "Temperature_depth_below_surface_layer_70_cm": 1.0,
        "Temperature_height_above_ground": 1.0,
        "Temperature_surface": 1.0,
        "Total_cloud_cover_convective_cloud": 1.0,
        "Total_ozone_entire_atmosphere_single_layer": 1.0,
        "Total_precipitation_surface_3_Hour_Accumulation": 1.0,
        "Transpiration_surface_3_Hour_Average": 1.0,
        "UV-B_Downward_Solar_Flux_surface_3_Hour_Average": 1.0,
        "Upward_Long-Wave_Radp_Flux_atmosphere_top_3_Hour_Average": 1.0,
        "Upward_Long-Wave_Radp_Flux_surface": 1.0,
        "Upward_Long-Wave_Radp_Flux_surface_3_Hour_Average": 1.0,
        "Upward_Short-Wave_Radiation_Flux_atmosphere_top_3_Hour_Average": 1.0,
        "Upward_Short-Wave_Radiation_Flux_surface": 1.0,
        "Upward_Short-Wave_Radiation_Flux_surface_3_Hour_Average": 1.0,
        "Vegetation_Type_surface": 1.0,
        "Vegetation_surface": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_150_cm": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_25_cm": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_5_cm": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_70_cm": 1.0,
        "Water_equivalent_of_accumulated_snow_depth_surface": 1.0,
        "Water_runoff_surface_3_Hour_Accumulation": 1.0,
        "u-component_of_wind_hybrid": 1.0,
        "v-component_of_wind_hybrid": 1.0
    },
    "NOAA/CFSV2/FOR6H": {
        "Downward_Long-Wave_Radp_Flux_surface_6_Hour_Average": 1.0,
        "Downward_Short-Wave_Radiation_Flux_surface_6_Hour_Average": 1.0,
        "Geopotential_height_surface": 1.0,
        "Latent_heat_net_flux_surface_6_Hour_Average": 1.0,
        "Maximum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval": 1.0,
        "Maximum_temperature_height_above_ground_6_Hour_Interval": 1.0,
        "Minimum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval": 1.0,
        "Minimum_temperature_height_above_ground_6_Hour_Interval": 1.0,
        "Potential_Evaporation_Rate_surface_6_Hour_Average": 1.0,
        "Precipitation_rate_surface_6_Hour_Average": 1.0,
        "Pressure_surface": 1.0,
        "Sensible_heat_net_flux_surface_6_Hour_Average": 1.0,
        "Specific_humidity_height_above_ground": 1.0,
        "Temperature_height_above_ground": 1.0,
        "Upward_Long-Wave_Radp_Flux_surface_6_Hour_Average": 1.0,
        "Upward_Short-Wave_Radiation_Flux_surface_6_Hour_Average": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_150_cm": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_25_cm": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_5_cm": 1.0,
        "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_70_cm": 1.0,
        "u-component_of_wind_height_above_ground": 1.0,
        "v-component_of_wind_height_above_ground": 1.0
    },
    "NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4": {
        "avg_vis": 1.0,
        "cf_cvg": 1.0
    },
    "NOAA/DMSP-OLS/NIGHTTIME_LIGHTS": {
        "avg_lights_x_pct": 1.0,
        "avg_vis": 1.0,
        "cf_cvg": 1.0,
        "stable_lights": 1.0
    },
    "NOAA/GFS0P25": {
        "downward_shortwave_radiation_flux": 1.0,
        "precipitable_water_entire_atmosphere": 1.0,
        "relative_humidity_2m_above_ground": 1.0,
        "specific_humidity_2m_above_ground": 1.0,
        "temperature_2m_above_ground": 1.0,
        "total_cloud_cover_entire_atmosphere": 1.0,
        "total_precipitation_surface": 1.0,
        "u_component_of_wind_10m_above_ground": 1.0,
        "v_component_of_wind_10m_above_ground": 1.0
    },
    "NOAA/GOES/16/FDCC": {
        "Area": 60.98,
        "DQF": 1.0,
        "Mask": 1.0,
        "Power": 1.0,
        "Temp": 0.05493667
    },
    "NOAA/GOES/16/FDCF": {
        "Area": 60.98,
        "DQF": 1.0,
        "Mask": 1.0,
        "Power": 1.0,
        "Temp": 0.05493667
    },
    "NOAA/GOES/16/MCMIPC": {
        "CMI_C01": 1.0,
        "CMI_C02": 1.0,
        "CMI_C03": 1.0,
        "CMI_C04": 1.0,
        "CMI_C05": 1.0,
        "CMI_C06": 1.0,
        "CMI_C07": 1.0,
        "CMI_C08": 1.0,
        "CMI_C09": 1.0,
        "CMI_C10": 1.0,
        "CMI_C11": 1.0,
        "CMI_C12": 1.0,
        "CMI_C13": 1.0,
        "CMI_C14": 1.0,
        "CMI_C15": 1.0,
        "CMI_C16": 1.0,
        "DQF_C01": 1.0,
        "DQF_C02": 1.0,
        "DQF_C03": 1.0,
        "DQF_C04": 1.0,
        "DQF_C05": 1.0,
        "DQF_C06": 1.0,
        "DQF_C07": 1.0,
        "DQF_C08": 1.0,
        "DQF_C09": 1.0,
        "DQF_C10": 1.0,
        "DQF_C11": 1.0,
        "DQF_C12": 1.0,
        "DQF_C13": 1.0,
        "DQF_C14": 1.0,
        "DQF_C15": 1.0,
        "DQF_C16": 1.0
    },
    "NOAA/GOES/16/MCMIPF": {
        "CMI_C01": 1.0,
        "CMI_C02": 1.0,
        "CMI_C03": 1.0,
        "CMI_C04": 1.0,
        "CMI_C05": 1.0,
        "CMI_C06": 1.0,
        "CMI_C07": 1.0,
        "CMI_C08": 1.0,
        "CMI_C09": 1.0,
        "CMI_C10": 1.0,
        "CMI_C11": 1.0,
        "CMI_C12": 1.0,
        "CMI_C13": 1.0,
        "CMI_C14": 1.0,
        "CMI_C15": 1.0,
        "CMI_C16": 1.0,
        "DQF_C01": 1.0,
        "DQF_C02": 1.0,
        "DQF_C03": 1.0,
        "DQF_C04": 1.0,
        "DQF_C05": 1.0,
        "DQF_C06": 1.0,
        "DQF_C07": 1.0,
        "DQF_C08": 1.0,
        "DQF_C09": 1.0,
        "DQF_C10": 1.0,
        "DQF_C11": 1.0,
        "DQF_C12": 1.0,
        "DQF_C13": 1.0,
        "DQF_C14": 1.0,
        "DQF_C15": 1.0,
        "DQF_C16": 1.0
    },
    "NOAA/GOES/16/MCMIPM": {
        "CMI_C01": 1.0,
        "CMI_C02": 1.0,
        "CMI_C03": 1.0,
        "CMI_C04": 1.0,
        "CMI_C05": 1.0,
        "CMI_C06": 1.0,
        "CMI_C07": 1.0,
        "CMI_C08": 1.0,
        "CMI_C09": 1.0,
        "CMI_C10": 1.0,
        "CMI_C11": 1.0,
        "CMI_C12": 1.0,
        "CMI_C13": 1.0,
        "CMI_C14": 1.0,
        "CMI_C15": 1.0,
        "CMI_C16": 1.0,
        "DQF_C01": 1.0,
        "DQF_C02": 1.0,
        "DQF_C03": 1.0,
        "DQF_C04": 1.0,
        "DQF_C05": 1.0,
        "DQF_C06": 1.0,
        "DQF_C07": 1.0,
        "DQF_C08": 1.0,
        "DQF_C09": 1.0,
        "DQF_C10": 1.0,
        "DQF_C11": 1.0,
        "DQF_C12": 1.0,
        "DQF_C13": 1.0,
        "DQF_C14": 1.0,
        "DQF_C15": 1.0,
        "DQF_C16": 1.0
    },
    "NOAA/GOES/17/FDCC": {
        "Area": 60.98,
        "DQF": 1.0,
        "Mask": 1.0,
        "Power": 1.0,
        "Temp": 0.05493667
    },
    "NOAA/GOES/17/FDCF": {
        "Area": 60.98,
        "DQF": 1.0,
        "Mask": 1.0,
        "Power": 1.0,
        "Temp": 0.05493667
    },
    "NOAA/GOES/17/MCMIPC": {
        "CMI_C01": 1.0,
        "CMI_C02": 1.0,
        "CMI_C03": 1.0,
        "CMI_C04": 1.0,
        "CMI_C05": 1.0,
        "CMI_C06": 1.0,
        "CMI_C07": 1.0,
        "CMI_C08": 1.0,
        "CMI_C09": 1.0,
        "CMI_C10": 1.0,
        "CMI_C11": 1.0,
        "CMI_C12": 1.0,
        "CMI_C13": 1.0,
        "CMI_C14": 1.0,
        "CMI_C15": 1.0,
        "CMI_C16": 1.0,
        "DQF_C01": 1.0,
        "DQF_C02": 1.0,
        "DQF_C03": 1.0,
        "DQF_C04": 1.0,
        "DQF_C05": 1.0,
        "DQF_C06": 1.0,
        "DQF_C07": 1.0,
        "DQF_C08": 1.0,
        "DQF_C09": 1.0,
        "DQF_C10": 1.0,
        "DQF_C11": 1.0,
        "DQF_C12": 1.0,
        "DQF_C13": 1.0,
        "DQF_C14": 1.0,
        "DQF_C15": 1.0,
        "DQF_C16": 1.0
    },
    "NOAA/GOES/17/MCMIPF": {
        "CMI_C01": 1.0,
        "CMI_C02": 1.0,
        "CMI_C03": 1.0,
        "CMI_C04": 1.0,
        "CMI_C05": 1.0,
        "CMI_C06": 1.0,
        "CMI_C07": 1.0,
        "CMI_C08": 1.0,
        "CMI_C09": 1.0,
        "CMI_C10": 1.0,
        "CMI_C11": 1.0,
        "CMI_C12": 1.0,
        "CMI_C13": 1.0,
        "CMI_C14": 1.0,
        "CMI_C15": 1.0,
        "CMI_C16": 1.0,
        "DQF_C01": 1.0,
        "DQF_C02": 1.0,
        "DQF_C03": 1.0,
        "DQF_C04": 1.0,
        "DQF_C05": 1.0,
        "DQF_C06": 1.0,
        "DQF_C07": 1.0,
        "DQF_C08": 1.0,
        "DQF_C09": 1.0,
        "DQF_C10": 1.0,
        "DQF_C11": 1.0,
        "DQF_C12": 1.0,
        "DQF_C13": 1.0,
        "DQF_C14": 1.0,
        "DQF_C15": 1.0,
        "DQF_C16": 1.0
    },
    "NOAA/GOES/17/MCMIPM": {
        "CMI_C01": 1.0,
        "CMI_C02": 1.0,
        "CMI_C03": 1.0,
        "CMI_C04": 1.0,
        "CMI_C05": 1.0,
        "CMI_C06": 1.0,
        "CMI_C07": 1.0,
        "CMI_C08": 1.0,
        "CMI_C09": 1.0,
        "CMI_C10": 1.0,
        "CMI_C11": 1.0,
        "CMI_C12": 1.0,
        "CMI_C13": 1.0,
        "CMI_C14": 1.0,
        "CMI_C15": 1.0,
        "CMI_C16": 1.0,
        "DQF_C01": 1.0,
        "DQF_C02": 1.0,
        "DQF_C03": 1.0,
        "DQF_C04": 1.0,
        "DQF_C05": 1.0,
        "DQF_C06": 1.0,
        "DQF_C07": 1.0,
        "DQF_C08": 1.0,
        "DQF_C09": 1.0,
        "DQF_C10": 1.0,
        "DQF_C11": 1.0,
        "DQF_C12": 1.0,
        "DQF_C13": 1.0,
        "DQF_C14": 1.0,
        "DQF_C15": 1.0,
        "DQF_C16": 1.0
    },
    "NOAA/NCEP_DOE_RE2/total_cloud_coverage": {
        "tcdc": 1.0
    },
    "NOAA/NGDC/ETOPO1": {
        "bedrock": 1.0,
        "ice_surface": 1.0
    },
    "NOAA/NWS/RTMA": {
        "ACPC01": 1.0,
        "DPT": 1.0,
        "GUST": 1.0,
        "HGT": 1.0,
        "PRES": 1.0,
        "SPFH": 1.0,
        "TCDC": 1.0,
        "TMP": 1.0,
        "UGRD": 1.0,
        "VGRD": 1.0,
        "VIS": 1.0,
        "WDIR": 1.0,
        "WIND": 1.0
    },
    "NOAA/PERSIANN-CDR": {
        "precipitation": 1.0
    },
    "NOAA/VIIRS/001/VNP09GA": {
        "I1": 0.0001,
        "I2": 0.0001,
        "I3": 0.0001,
        "M1": 0.0001,
        "M10": 0.0001,
        "M11": 0.0001,
        "M2": 0.0001,
        "M3": 0.0001,
        "M4": 0.0001,
        "M5": 0.0001,
        "M7": 0.0001,
        "M8": 0.0001,
        "QF1": 1.0,
        "QF2": 1.0,
        "QF3": 1.0,
        "QF4": 1.0,
        "QF5": 1.0,
        "QF6": 1.0,
        "QF7": 1.0,
        "SensorAzimuth": 0.01,
        "SensorZenith": 0.01,
        "SolarAzimuth": 0.01,
        "SolarZenith": 0.01,
        "iobs_res": 1.0,
        "num_observations_1km": 1.0,
        "num_observations_500m": 1.0,
        "obscov_1km": 1.0,
        "obscov_500m": 1.0,
        "orbit_pnt": 1.0
    },
    "NOAA/VIIRS/001/VNP13A1": {
        "EVI": 0.0001,
        "EVI2": 0.0001,
        "NDVI": 0.0001,
        "NIR_reflectance": 1.0,
        "SWIR1_reflectance": 1.0,
        "SWIR2_reflectance": 1.0,
        "SWIR3_reflectance": 1.0,
        "VI_Quality": 1.0,
        "blue_reflectance": 1.0,
        "composite_day_of_the_year": 1.0,
        "green_reflectance": 1.0,
        "pixel_reliability": 1.0,
        "red_reflectance": 1.0,
        "relative_azimuth_angle": 1.0,
        "sun_zenith_angle": 1.0,
        "view_zenith_angle": 1.0
    },
    "NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG": {
        "avg_rad": 1.0,
        "cf_cvg": 1.0
    },
    "NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG": {
        "avg_rad": 1.0,
        "cf_cvg": 1.0
    },
    "NRCan/CDEM": {
        "elevation": 1.0
    },
    "OREGONSTATE/PRISM/AN81d": {
        "ppt": 1.0,
        "tdmean": 1.0,
        "tmax": 1.0,
        "tmean": 1.0,
        "tmin": 1.0,
        "vpdmax": 1.0,
        "vpdmin": 1.0
    },
    "OREGONSTATE/PRISM/AN81m": {
        "ppt": 1.0,
        "tdmean": 1.0,
        "tmax": 1.0,
        "tmean": 1.0,
        "tmin": 1.0,
        "vpdmax": 1.0,
        "vpdmin": 1.0
    },
    "OREGONSTATE/PRISM/Norm81m": {
        "ppt": 1.0,
        "tdmean": 1.0,
        "tmax": 1.0,
        "tmean": 1.0,
        "tmin": 1.0,
        "vpdmax": 1.0,
        "vpdmin": 1.0
    },
    "OSU/GIMP/2000_ICE_OCEAN_MASK": {
        "ice_mask": 1.0,
        "ocean_mask": 1.0
    },
    "OSU/GIMP/2000_IMAGERY_MOSAIC": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B6_high_gain": 1.0,
        "B6_low_gain": 1.0,
        "B7": 1.0,
        "B8": 1.0,
        "B8_radarsat": 1.0
    },
    "OSU/GIMP/DEM": {
        "elevation": 1.0
    },
    "OSU/GIMP/ICE_VELOCITY_OPT": {
        "error_x": 1.0,
        "error_y": 1.0,
        "velocity_x": 1.0,
        "velocity_y": 1.0
    },
    "OpenLandMap/CLM/CLM_LST_MOD11A2-DAYNIGHT_M/v01": {
        "apr": 0.02,
        "aug": 0.02,
        "dec": 0.02,
        "feb": 0.02,
        "jan": 0.02,
        "jul": 0.02,
        "jun": 0.02,
        "mar": 0.02,
        "may": 0.02,
        "nov": 0.02,
        "oct": 0.02,
        "sep": 0.02
    },
    "OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_M/v01": {
        "apr": 0.02,
        "aug": 0.02,
        "dec": 0.02,
        "feb": 0.02,
        "jan": 0.02,
        "jul": 0.02,
        "jun": 0.02,
        "mar": 0.02,
        "may": 0.02,
        "nov": 0.02,
        "oct": 0.02,
        "sep": 0.02
    },
    "OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_SD/v01": {
        "apr": 0.02,
        "aug": 0.02,
        "dec": 0.02,
        "feb": 0.02,
        "jan": 0.02,
        "jul": 0.02,
        "jun": 0.02,
        "mar": 0.02,
        "may": 0.02,
        "nov": 0.02,
        "oct": 0.02,
        "sep": 0.02
    },
    "OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01": {
        "apr": 1.0,
        "aug": 1.0,
        "dec": 1.0,
        "feb": 1.0,
        "jan": 1.0,
        "jul": 1.0,
        "jun": 1.0,
        "mar": 1.0,
        "may": 1.0,
        "nov": 1.0,
        "oct": 1.0,
        "sep": 1.0
    },
    "OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01": {
        "biome_type": 1.0
    },
    "OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01": {
        "annual": 1.0,
        "annualdiff": 1.0,
        "apr": 1.0,
        "aug": 1.0,
        "dec": 1.0,
        "feb": 1.0,
        "jan": 1.0,
        "jul": 1.0,
        "jun": 1.0,
        "mar": 1.0,
        "may": 1.0,
        "nov": 1.0,
        "oct": 1.0,
        "sep": 1.0
    },
    "OpenLandMap/SOL/SOL_BULKDENS-FINEEARTH_USDA-4A1H_M/v02": {
        "b0": 10,
        "b10": 10,
        "b100": 10,
        "b200": 10,
        "b30": 10,
        "b60": 10
    },
    "OpenLandMap/SOL/SOL_CLAY-WFRACTION_USDA-3A1A1A_M/v02": {
        "b0": 1.0,
        "b10": 1.0,
        "b100": 1.0,
        "b200": 1.0,
        "b30": 1.0,
        "b60": 1.0
    },
    "OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P/v01": {
        "grtgroup": 1.0
    },
    "OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX_C/v01": {
        "grtgroup": 1.0
    },
    "OpenLandMap/SOL/SOL_ORGANIC-CARBON_USDA-6A1C_M/v02": {
        "b0": 5,
        "b10": 5,
        "b100": 5,
        "b200": 5,
        "b30": 5,
        "b60": 5
    },
    "OpenLandMap/SOL/SOL_PH-H2O_USDA-4C1A2A_M/v02": {
        "b0": 10,
        "b10": 10,
        "b100": 10,
        "b200": 10,
        "b30": 10,
        "b60": 10
    },
    "OpenLandMap/SOL/SOL_SAND-WFRACTION_USDA-3A1A1A_M/v02": {
        "b0": 1.0,
        "b10": 1.0,
        "b100": 1.0,
        "b200": 1.0,
        "b30": 1.0,
        "b60": 1.0
    },
    "OpenLandMap/SOL/SOL_TEXTURE-CLASS_USDA-TT_M/v02": {
        "b0": 1.0,
        "b10": 1.0,
        "b100": 1.0,
        "b200": 1.0,
        "b30": 1.0,
        "b60": 1.0
    },
    "OpenLandMap/SOL/SOL_WATERCONTENT-33KPA_USDA-4B1C_M/v01": {
        "b0": 1.0,
        "b10": 1.0,
        "b100": 1.0,
        "b200": 1.0,
        "b30": 1.0,
        "b60": 1.0
    },
    "Oxford/MAP/EVI_5km_Monthly": {
        "FilledProportion": 1.0,
        "Mean": 1.0
    },
    "Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual": {
        "Barren_Or_Sparsely_Populated": 1.0,
        "Closed_Shrublands": 1.0,
        "Cropland_Natural_Vegetation_Mosaic": 1.0,
        "Croplands": 1.0,
        "Deciduous_Broadleaf_Forest": 1.0,
        "Deciduous_Needleleaf_Forest": 1.0,
        "Evergreen_Broadleaf_Forest": 1.0,
        "Evergreen_Needleleaf_Forest": 1.0,
        "Grasslands": 1.0,
        "Mixed_Forest": 1.0,
        "No_Data": 1.0,
        "Open_Shrublands": 1.0,
        "Overall_Class": 1.0,
        "Permanent_Wetlands": 1.0,
        "Savannas": 1.0,
        "Snow_And_Ice": 1.0,
        "Unclassified": 1.0,
        "Urban_And_Built_Up": 1.0,
        "Water": 1.0,
        "Woody_Savannas": 1.0
    },
    "Oxford/MAP/LST_Day_5km_Monthly": {
        "FilledProportion": 1.0,
        "Mean": 1.0
    },
    "Oxford/MAP/LST_Night_5km_Monthly": {
        "FilledProportion": 1.0,
        "Mean": 1.0
    },
    "Oxford/MAP/TCB_5km_Monthly": {
        "FilledProportion": 1.0,
        "Mean": 1.0
    },
    "Oxford/MAP/TCW_5km_Monthly": {
        "FilledProportion": 1.0,
        "Mean": 1.0
    },
    "Oxford/MAP/accessibility_to_cities_2015_v1_0": {
        "accessibility": 1.0
    },
    "Oxford/MAP/accessibility_to_healthcare_2019": {
        "accessibility": 1.0,
        "accessibility_walking_only": 1.0
    },
    "Oxford/MAP/friction_surface_2015_v1_0": {
        "friction": 1.0
    },
    "Oxford/MAP/friction_surface_2019": {
        "friction": 1.0,
        "friction_walking_only": 1.0
    },
    "SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL": {
        "B": 1.0,
        "G": 1.0,
        "N": 1.0,
        "P": 1.0,
        "R": 1.0
    },
    "SKYSAT/GEN-A/PUBLIC/ORTHO/RGB": {
        "B": 1.0,
        "G": 1.0,
        "R": 1.0
    },
    "SNU/ESL/BESS/Rad/v1": {
        "PAR_Daily": 1.0,
        "PARdiff_Daily": 1.0,
        "RSDN_Daily": 1.0
    },
    "TERN/AET/CMRSET_LANDSAT_V2_1": {
        "ETa": 1.0,
        "pixel_qa": 1.0
    },
    "TERN/AET/CMRSET_LANDSAT_V2_2": {
        "ETa": 1.0,
        "pixel_qa": 1.0
    },
    "TOMS/MERGED": {
        "ozone": 1.0
    },
    "TRMM/3B42": {
        "HQprecipitation": 1.0,
        "IRprecipitation": 1.0,
        "precipitation": 1.0,
        "relativeError": 1.0,
        "satObservationTime": 1.0,
        "satPrecipitationSource": 1.0
    },
    "TRMM/3B43V7": {
        "gaugeRelativeWeighting": 1.0,
        "precipitation": 1.0,
        "relativeError": 1.0
    },
    "TUBerlin/BigEarthNet/v1": {
        "B1": 0.0001,
        "B10": 0.0001,
        "B11": 0.0001,
        "B12": 0.0001,
        "B2": 0.0001,
        "B3": 0.0001,
        "B4": 0.0001,
        "B5": 0.0001,
        "B6": 0.0001,
        "B7": 0.0001,
        "B8": 0.0001,
        "B8A": 0.0001,
        "B9": 0.0001
    },
    "Tsinghua/DESS/ChinaTerraceMap/v1": {
        "terrace": 1.0
    },
    "Tsinghua/FROM-GLC/GAIA/v10": {
        "change_year_index": 1.0
    },
    "UCSB-CHG/CHIRPS/DAILY": {
        "precipitation": 1.0
    },
    "UCSB-CHG/CHIRPS/PENTAD": {
        "precipitation": 1.0
    },
    "UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1": {
        "Primary_HT_forests": 1.0
    },
    "UMD/hansen/global_forest_change_2013": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2014": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2015": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2015_v1_3": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2016_v1_4": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2017_v1_5": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2018_v1_6": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2019_v1_7": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMD/hansen/global_forest_change_2020_v1_8": {
        "datamask": 1.0,
        "first_b30": 1.0,
        "first_b40": 1.0,
        "first_b50": 1.0,
        "first_b70": 1.0,
        "gain": 1.0,
        "last_b30": 1.0,
        "last_b40": 1.0,
        "last_b50": 1.0,
        "last_b70": 1.0,
        "loss": 1.0,
        "lossyear": 1.0,
        "treecover2000": 1.0
    },
    "UMN/PGC/ArcticDEM/V2/2m": {
        "elevation": 1.0,
        "matchtag": 1.0
    },
    "UMN/PGC/ArcticDEM/V2/5m": {
        "elevation": 1.0,
        "matchtag": 1.0
    },
    "UMN/PGC/ArcticDEM/V3/2m": {
        "elevation": 1.0,
        "matchtag": 1.0
    },
    "UMN/PGC/ArcticDEM/V3/2m_mosaic": {
        "elevation": 1.0
    },
    "UMN/PGC/REMA/V1/2m": {
        "elevation": 1.0,
        "matchtag": 1.0
    },
    "UMN/PGC/REMA/V1/8m": {
        "elevation": 1.0,
        "matchtag": 1.0
    },
    "UMN/PGC/REMA/V1_1/8m": {
        "elevation": 1.0
    },
    "UMT/Climate/IrrMapper_RF/v1_0": {
        "classification": 1.0
    },
    "UMT/NTSG/v2/LANDSAT/GPP": {
        "GPP": 0.0001,
        "QC": 1.0
    },
    "UMT/NTSG/v2/LANDSAT/NPP": {
        "QC": 1.0,
        "annualNPP": 0.0001
    },
    "UMT/NTSG/v2/MODIS/GPP": {
        "GPP": 0.0001,
        "QC": 1.0
    },
    "UMT/NTSG/v2/MODIS/NPP": {
        "QC": 1.0,
        "annualNPP": 0.0001
    },
    "UQ/murray/Intertidal/v1_1/data_mask": {
        "datamask": 1.0
    },
    "UQ/murray/Intertidal/v1_1/global_intertidal": {
        "classification": 1.0
    },
    "UQ/murray/Intertidal/v1_1/qa_pixel_count": {
        "pixel_count": 1.0
    },
    "USDA/NAIP/DOQQ": {
        "B": 1.0,
        "G": 1.0,
        "N": 1.0,
        "R": 1.0
    },
    "USDA/NASS/CDL": {
        "confidence": 1.0,
        "cropland": 1.0,
        "cultivated": 1.0
    },
    "USFS/GTAC/LCMS/v2020-5": {
        "Change": 1.0,
        "Change_Raw_Probability_Fast-Loss": 1.0,
        "Change_Raw_Probability_Gain": 1.0,
        "Change_Raw_Probability_Slow-Loss": 1.0,
        "Land_Cover": 1.0,
        "Land_Cover_Raw_Probability_Barren-and-Grass-Forb-Herb-Mix": 1.0,
        "Land_Cover_Raw_Probability_Barren-and-Shrubs-Mix": 1.0,
        "Land_Cover_Raw_Probability_Barren-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Barren-or-Impervious": 1.0,
        "Land_Cover_Raw_Probability_Grass-Forb-Herb": 1.0,
        "Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Shrubs-Mix": 1.0,
        "Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Shrubs": 1.0,
        "Land_Cover_Raw_Probability_Shrubs-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Snow-or-Ice": 1.0,
        "Land_Cover_Raw_Probability_Tall-Shrubs": 1.0,
        "Land_Cover_Raw_Probability_Tall-Shrubs-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Trees": 1.0,
        "Land_Cover_Raw_Probability_Water": 1.0,
        "Land_Use": 1.0,
        "Land_Use_Raw_Probability_Agriculture": 1.0,
        "Land_Use_Raw_Probability_Developed": 1.0,
        "Land_Use_Raw_Probability_Forest": 1.0,
        "Land_Use_Raw_Probability_Non-Forest-Wetland": 1.0,
        "Land_Use_Raw_Probability_Other": 1.0,
        "Land_Use_Raw_Probability_Rangeland-or-Pasture": 1.0
    },
    "USFS/GTAC/LCMS/v2020-6": {
        "Change": 1.0,
        "Change_Raw_Probability_Fast-Loss": 1.0,
        "Change_Raw_Probability_Gain": 1.0,
        "Change_Raw_Probability_Slow-Loss": 1.0,
        "Land_Cover": 1.0,
        "Land_Cover_Raw_Probability_Barren-and-Grass-Forb-Herb-Mix": 1.0,
        "Land_Cover_Raw_Probability_Barren-and-Shrubs-Mix": 1.0,
        "Land_Cover_Raw_Probability_Barren-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Barren-or-Impervious": 1.0,
        "Land_Cover_Raw_Probability_Grass-Forb-Herb": 1.0,
        "Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Shrubs-Mix": 1.0,
        "Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Shrubs": 1.0,
        "Land_Cover_Raw_Probability_Shrubs-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Snow-or-Ice": 1.0,
        "Land_Cover_Raw_Probability_Tall-Shrubs": 1.0,
        "Land_Cover_Raw_Probability_Tall-Shrubs-and-Trees-Mix": 1.0,
        "Land_Cover_Raw_Probability_Trees": 1.0,
        "Land_Cover_Raw_Probability_Water": 1.0,
        "Land_Use": 1.0,
        "Land_Use_Raw_Probability_Agriculture": 1.0,
        "Land_Use_Raw_Probability_Developed": 1.0,
        "Land_Use_Raw_Probability_Forest": 1.0,
        "Land_Use_Raw_Probability_Non-Forest-Wetland": 1.0,
        "Land_Use_Raw_Probability_Other": 1.0,
        "Land_Use_Raw_Probability_Rangeland-or-Pasture": 1.0,
        "QA_Bits": 1.0
    },
    "USGS/3DEP/10m": {
        "elevation": 1.0
    },
    "USGS/GAP/AK/2001": {
        "landcover": 1.0
    },
    "USGS/GAP/CONUS/2011": {
        "landcover": 1.0
    },
    "USGS/GAP/HI/2001": {
        "landcover": 1.0
    },
    "USGS/GAP/PR/2001": {
        "landcover": 1.0
    },
    "USGS/GFSAD1000_V0": {
        "landcover": 1.0
    },
    "USGS/GFSAD1000_V1": {
        "landcover": 1.0
    },
    "USGS/GMTED2010": {
        "be75": 1.0
    },
    "USGS/GTOPO30": {
        "elevation": 1.0
    },
    "USGS/LIMA/MOSAIC": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0
    },
    "USGS/LIMA/SR": {
        "B1": 1.0,
        "B2": 1.0,
        "B3": 1.0,
        "B4": 1.0,
        "B5": 1.0,
        "B7": 1.0,
        "B8": 1.0
    },
    "USGS/NED": {
        "elevation": 1.0
    },
    "USGS/NLCD": {
        "impervious": 1.0,
        "impervious_descriptor": 1.0,
        "landcover": 1.0,
        "percent_tree_cover": 1.0,
        "percent_tree_error": 1.0,
        "shrubland_annual_herbaceous": 1.0,
        "shrubland_bare_ground": 1.0,
        "shrubland_big_sagebrush": 1.0,
        "shrubland_herbaceous": 1.0,
        "shrubland_litter": 1.0,
        "shrubland_sagebrush": 1.0,
        "shrubland_sagebrush_height": 1.0,
        "shrubland_shrub": 1.0,
        "shrubland_shrub_height": 1.0
    },
    "USGS/NLCD_RELEASES/2016_REL": {
        "impervious": 1.0,
        "impervious_descriptor": 1.0,
        "landcover": 1.0,
        "percent_tree_cover": 1.0,
        "rangeland_annual_herbaceous": 1.0,
        "rangeland_bare_ground": 1.0,
        "rangeland_big_sagebrush": 1.0,
        "rangeland_herbaceous": 1.0,
        "rangeland_litter": 1.0,
        "rangeland_sagebrush": 1.0,
        "rangeland_sagebrush_height": 1.0,
        "rangeland_shrub": 1.0,
        "rangeland_shrub_height": 1.0,
        "urban_descriptor": 1.0
    },
    "USGS/NLCD_RELEASES/2019_REL/NLCD": {
        "impervious": 1.0,
        "impervious_descriptor": 1.0,
        "landcover": 1.0
    },
    "USGS/SRTMGL1_003": {
        "elevation": 1.0
    },
    "UTOKYO/WTLAB/KBDI/v1": {
        "KBDI": 1.0
    },
    "VITO/PROBAV/C1/S1_TOC_100M": {
        "BLUE": 1.0,
        "NDVI": 1.0,
        "NIR": 1.0,
        "RED": 1.0,
        "SAA": 1.0,
        "SM": 1.0,
        "SWIR": 1.0,
        "SWIRVAA": 1.0,
        "SWIRVZA": 1.0,
        "SZA": 1.0,
        "TIME": 1.0,
        "VNIRVAA": 1.0,
        "VNIRVZA": 1.0
    },
    "VITO/PROBAV/C1/S1_TOC_333M": {
        "BLUE": 1.0,
        "NDVI": 1.0,
        "NIR": 1.0,
        "RED": 1.0,
        "SAA": 1.0,
        "SM": 1.0,
        "SWIR": 1.0,
        "SWIRVAA": 1.0,
        "SWIRVZA": 1.0,
        "SZA": 1.0,
        "TIME": 1.0,
        "VNIRVAA": 1.0,
        "VNIRVZA": 1.0
    },
    "VITO/PROBAV/S1_TOC_100M": {
        "BLUE": 1.0,
        "NDVI": 1.0,
        "NIR": 1.0,
        "RED": 1.0,
        "SAA": 1.0,
        "SM": 1.0,
        "SWIR": 1.0,
        "SWIRVAA": 1.0,
        "SWIRVZA": 1.0,
        "SZA": 1.0,
        "TIME": 1.0,
        "VNIRVAA": 1.0,
        "VNIRVZA": 1.0
    },
    "VITO/PROBAV/S1_TOC_333M": {
        "BLUE": 1.0,
        "NDVI": 1.0,
        "NIR": 1.0,
        "RED": 1.0,
        "SAA": 1.0,
        "SM": 1.0,
        "SWIR": 1.0,
        "SWIRVAA": 1.0,
        "SWIRVZA": 1.0,
        "SZA": 1.0,
        "TIME": 1.0,
        "VNIRVAA": 1.0,
        "VNIRVZA": 1.0
    },
    "WCMC/biomass_carbon_density/v1_0": {
        "carbon_tonnes_per_ha": 1.0
    },
    "WHBU/NBAR_1YEAR": {
        "Nadir_Reflectance_Band1": 1.0,
        "Nadir_Reflectance_Band2": 1.0,
        "Nadir_Reflectance_Band3": 1.0,
        "Nadir_Reflectance_Band4": 1.0,
        "Nadir_Reflectance_Band5": 1.0,
        "Nadir_Reflectance_Band6": 1.0,
        "Nadir_Reflectance_Band7": 1.0
    },
    "WHBU/NBAR_2YEAR": {
        "Nadir_Reflectance_Band1": 1.0,
        "Nadir_Reflectance_Band2": 1.0,
        "Nadir_Reflectance_Band3": 1.0,
        "Nadir_Reflectance_Band4": 1.0,
        "Nadir_Reflectance_Band5": 1.0,
        "Nadir_Reflectance_Band6": 1.0,
        "Nadir_Reflectance_Band7": 1.0
    },
    "WHBU/NBAR_3YEAR": {
        "Nadir_Reflectance_Band1": 1.0,
        "Nadir_Reflectance_Band2": 1.0,
        "Nadir_Reflectance_Band3": 1.0,
        "Nadir_Reflectance_Band4": 1.0,
        "Nadir_Reflectance_Band5": 1.0,
        "Nadir_Reflectance_Band6": 1.0,
        "Nadir_Reflectance_Band7": 1.0
    },
    "WHRC/biomass/tropical": {
        "Mg": 1.0
    },
    "WORLDCLIM/V1/BIO": {
        "bio01": 0.1,
        "bio02": 0.1,
        "bio03": 1.0,
        "bio04": 0.01,
        "bio05": 0.1,
        "bio06": 0.1,
        "bio07": 0.1,
        "bio08": 0.1,
        "bio09": 0.1,
        "bio10": 0.1,
        "bio11": 0.1,
        "bio12": 1.0,
        "bio13": 1.0,
        "bio14": 1.0,
        "bio15": 1.0,
        "bio16": 1.0,
        "bio17": 1.0,
        "bio18": 1.0,
        "bio19": 1.0
    },
    "WORLDCLIM/V1/MONTHLY": {
        "prec": 1.0,
        "tavg": 0.1,
        "tmax": 0.1,
        "tmin": 0.1
    },
    "WRI/GFW/FORMA/alerts": {
        "alert_date": 1.0,
        "alert_delta": 1.0
    },
    "WRI/GFW/FORMA/raw_output_firms": {
        "delta_nday": 1.0,
        "nday": 1.0,
        "near_term_delta_nday": 1.0
    },
    "WRI/GFW/FORMA/raw_output_ndvi": {
        "accuracy": 1.0,
        "clearing": 1.0,
        "delta": 1.0,
        "near_term_delta": 1.0
    },
    "WRI/GFW/FORMA/thresholds": {
        "delta_bound": 1.0
    },
    "WRI/GFW/FORMA/vegetation_tstats": {
        "tstat_r": 1.0
    },
    "WWF/HydroSHEDS/03CONDEM": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/03DIR": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/03VFDEM": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/15ACC": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/15CONDEM": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/15DIR": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/30ACC": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/30CONDEM": {
        "b1": 1.0
    },
    "WWF/HydroSHEDS/30DIR": {
        "b1": 1.0
    },
    "WorldPop/GP/100m/pop": {
        "population": 1.0
    },
    "WorldPop/GP/100m/pop_age_sex": {
        "F_0": 1.0,
        "F_1": 1.0,
        "F_10": 1.0,
        "F_15": 1.0,
        "F_20": 1.0,
        "F_25": 1.0,
        "F_30": 1.0,
        "F_35": 1.0,
        "F_40": 1.0,
        "F_45": 1.0,
        "F_5": 1.0,
        "F_50": 1.0,
        "F_55": 1.0,
        "F_60": 1.0,
        "F_65": 1.0,
        "F_70": 1.0,
        "F_75": 1.0,
        "F_80": 1.0,
        "M_0": 1.0,
        "M_1": 1.0,
        "M_10": 1.0,
        "M_15": 1.0,
        "M_20": 1.0,
        "M_25": 1.0,
        "M_30": 1.0,
        "M_35": 1.0,
        "M_40": 1.0,
        "M_45": 1.0,
        "M_5": 1.0,
        "M_50": 1.0,
        "M_55": 1.0,
        "M_60": 1.0,
        "M_65": 1.0,
        "M_70": 1.0,
        "M_75": 1.0,
        "M_80": 1.0,
        "population": 1.0
    },
    "WorldPop/GP/100m/pop_age_sex_cons_unadj": {
        "F_0": 1.0,
        "F_1": 1.0,
        "F_10": 1.0,
        "F_15": 1.0,
        "F_20": 1.0,
        "F_25": 1.0,
        "F_30": 1.0,
        "F_35": 1.0,
        "F_40": 1.0,
        "F_45": 1.0,
        "F_5": 1.0,
        "F_50": 1.0,
        "F_55": 1.0,
        "F_60": 1.0,
        "F_65": 1.0,
        "F_70": 1.0,
        "F_75": 1.0,
        "F_80": 1.0,
        "M_0": 1.0,
        "M_1": 1.0,
        "M_10": 1.0,
        "M_15": 1.0,
        "M_20": 1.0,
        "M_25": 1.0,
        "M_30": 1.0,
        "M_35": 1.0,
        "M_40": 1.0,
        "M_45": 1.0,
        "M_5": 1.0,
        "M_50": 1.0,
        "M_55": 1.0,
        "M_60": 1.0,
        "M_65": 1.0,
        "M_70": 1.0,
        "M_75": 1.0,
        "M_80": 1.0,
        "population": 1.0
    },
    "WorldPop/POP": {
        "population": 1.0
    },
    "YALE/YCEO/UHI/Summer_UHI_yearly_pixel/v4": {
        "Daytime": 1.0,
        "Nighttime": 1.0
    },
    "YALE/YCEO/UHI/UHI_all_averaged/v4": {
        "all_daytime_UHI": 1.0,
        "all_nighttime_UHI": 1.0,
        "summer_daytime_UHI": 1.0,
        "summer_nighttime_UHI": 1.0,
        "winter_daytime_UHI": 1.0,
        "winter_nighttime_UHI": 1.0
    },
    "YALE/YCEO/UHI/UHI_monthly_averaged/v4": {
        "Apr_day_UHI": 1.0,
        "Apr_night_UHI": 1.0,
        "Aug_day_UHI": 1.0,
        "Aug_night_UHI": 1.0,
        "Dec_day_UHI": 1.0,
        "Dec_night_UHI": 1.0,
        "Feb_day_UHI": 1.0,
        "Feb_night_UHI": 1.0,
        "Jan_day_UHI": 1.0,
        "Jan_night_UHI": 1.0,
        "Jul_day_UHI": 1.0,
        "Jul_night_UHI": 1.0,
        "Jun_day_UHI": 1.0,
        "Jun_night_UHI": 1.0,
        "Mar_day_UHI": 1.0,
        "Mar_night_UHI": 1.0,
        "May_day_UHI": 1.0,
        "May_night_UHI": 1.0,
        "Nov_day_UHI": 1.0,
        "Nov_night_UHI": 1.0,
        "Oct_day_UHI": 1.0,
        "Oct_night_UHI": 1.0,
        "Sep_day_UHI": 1.0,
        "Sep_night_UHI": 1.0
    },
    "YALE/YCEO/UHI/UHI_yearly_averaged/v4": {
        "Daytime": 1.0,
        "Nighttime": 1.0
    },
    "YALE/YCEO/UHI/UHI_yearly_pixel/v4": {
        "Daytime": 1.0,
        "Nighttime": 1.0
    },
    "YALE/YCEO/UHI/Winter_UHI_yearly_pixel/v4": {
        "Daytime": 1.0,
        "Nighttime": 1.0
    },
    "projects/planet-nicfi/assets/basemaps/africa": {
        "B": 0.0001,
        "G": 0.0001,
        "NIR": 0.0001,
        "R": 0.0001
    },
    "projects/planet-nicfi/assets/basemaps/americas": {
        "B": 0.0001,
        "G": 0.0001,
        "NIR": 0.0001,
        "R": 0.0001
    },
    "projects/planet-nicfi/assets/basemaps/asia": {
        "B": 0.0001,
        "G": 0.0001,
        "NIR": 0.0001,
        "R": 0.0001
    }
};

/*
=======
Exports
=======
*/

exports.scaleParams = scaleParams;