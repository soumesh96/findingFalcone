import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import { DestinationWrapper, VehicleSelectionWrapper } from './skins';

const Destination = (props) => {
  const { falcone, falconeIndex, planetChange, vehicleChange } = props;
  return (
    <React.Fragment>
      <DestinationWrapper>
        <label>{falcone.label}</label>
        <Select
          value={falcone.selectedPlanet}
          placeholder={`Select ${falcone.label}`}
          onChange={(e) => planetChange(e, falconeIndex)}
          options={falcone.planets && falcone.planets.map((planet, index) => ({ value: index.toString(), label: planet.name }))}
        />
        <VehicleSelectionWrapper>
          <RadioGroup aria-label="vehicle" name="vehicle">
            {falcone.selectedPlanet && falcone.vehicles && falcone.vehicles.length > 0 && falcone.vehicles.map((vehicle, index) => (
              <FormControlLabel
                key={index.toString()}
                disabled={vehicle.disabled}
                control={
                  <Radio
                    value={vehicle.name}
                    checked={falcone.selectedVehicle === vehicle.name}
                    onChange={(e) => vehicleChange(e, falconeIndex)}
                    color="primary"
                  />
                }
                label={`${vehicle.name} (${vehicle.total_no})`}
              />
            ))}
          </RadioGroup>
        </VehicleSelectionWrapper>
      </DestinationWrapper>
    </React.Fragment>
  );
}

Destination.propTypes = {
  falcone: PropTypes.object,
  falconeIndex: PropTypes.number,
  planetChange: PropTypes.func,
  vehicleChange: PropTypes.func,
};

export default Destination;
