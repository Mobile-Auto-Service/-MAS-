import Data from "../DB.json";
import { ServiceCard } from "./cardformat";
import { Why } from "./cardformat";
import { Team } from "./cardformat";





export const Scard  = () => {
      return (
        <div className="row mx-3 g-3">
          {Data.Services.map((service) => {
            return (
              <div className="col-sm-12 col-md-4 col-lg-4">
                <ServiceCard {...service}></ServiceCard>
              </div>
            );
          })}
        </div>
      );
    };

    export const WhyCard  = () => {
        return (
          <div className="row mx-3 g-3">
            {Data.Why.map((whycard) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Why {...whycard}></Why>
                </div>
              );
            })}
          </div>
        );
      };


      export const TeamCard  = () => {
        return (
          <div className="row mx-3 g-3">
            {Data.Team.map((team) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Team {...team}></Team>
                </div>
              );
            })}
          </div>
        );
      };      


