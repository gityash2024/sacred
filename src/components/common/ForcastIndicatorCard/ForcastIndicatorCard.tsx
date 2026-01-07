import "./ForcastIndicatorCard.css"
import densityIcon from '@/assets/density_update.svg'
import HeroMap1 from '@/assets/hero_section_map_1.svg'
import temp from '@/assets/temp_update.svg'
import humidityIcon from '@/assets/humidity_update.svg'
import cloudIcon from '@/assets/cloud_update.svg'
export default function ForcastIndicatorCard(props :any) {
    const data  = props.props;
    return (
        <>
            {/* Forest Indicators Card */}
            <div className="indicatorsCard">
                <h3 className="indicatorsTitle">{data.climateTitle}</h3>
                <div className="styles.mapSection">
                  <img src={HeroMap1} alt="Forest Map" className="mapImage" />
                </div>
                <h4 className="indicatorsTitle">Forest Indicators</h4>

                <div className="indicatorsGrid">
                  <div className="indicator">
                    <img src={temp} alt="Temperature" className="indicatorIcon" />
                    <div className="indicatorContent">
                      <span className="indicatorValue">
                        <span className="valueNumber">{data.temp}</span>
                        <span className="valueSymbol"> o</span>
                      </span>
                      <span className="indicatorLabel">Temperature</span>
                    </div>
                  </div>

                  <div className="indicator">
                    <img src={humidityIcon} alt="Humidity" className="indicatorIcon" />
                    <div className="indicatorContent">
                      <span className="indicatorValue">
                        <span className="valueNumber">{data.humidity}</span>
                        <span className="valueSymbol"> %</span>
                      </span>
                      <span className="indicatorLabel">Humidity</span>
                    </div>
                  </div>
                </div>

                <div className="weatherSection">
                  <img src={cloudIcon} alt="Weather" className="weatherIcon" />
                  <div className="weatherContent">
                    <span className="weatherValue">{data.weather}</span>
                    {/* <span className="weatherLabel">Weather</span> */}
                  </div>
                </div>

                <div className="densitySection">
                  <img src={densityIcon} alt="Density" className="densityIcon" />
                  <div className="densityContent">
                    <span className="densityValue">
                      <span className="valueNumber">{data.greenCover}</span>
                      {/* <span className="valueSymbol"> 1</span> */}
                    </span>
                    <span className="densityLabel">Green Cover Density</span>
                  </div>
                </div>
            </div>

            </>

    )
}