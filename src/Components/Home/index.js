import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Destination from './Destination';
import { HomePageWrapper, DetailsWrapper, TextWrapper, ButtonWrapper } from './skins';


const Home = (props) => {
  const { home: { planets, vehicles, falconeData }, findFalcone, updateFalcone } = props;

  useEffect(() => {
    if (vehicles && vehicles.length > 0 && planets && planets.length > 0) {
      const modifiedFalconArray = falconeData.map((falcone) => {
        return {
          ...falcone,
          planets: [...planets],
          vehicles: JSON.parse(JSON.stringify(vehicles)),
        }
      });
      updateFalcone(modifiedFalconArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicles, planets]);

  const onPlanetsChangeHandler = (e, index) => {
    const falConeArray = [...falconeData];
    const selectedFalcone = falConeArray[index];
    const selectedVehicleIndex = vehicles.findIndex((vehicle) => vehicle.name === selectedFalcone.selectedVehicle);
    const selectedVehicle = vehicles.filter(vehicle => vehicle.name === selectedFalcone.selectedVehicle);

    falConeArray.forEach((falcone, falconeIndex) => {
      if (index === 0 && selectedFalcone.selectedPlanet !== '') {
        falcone.planets = [...planets];
      }
      if (falconeIndex > index) {
        falcone.selectedPlanet = '';
        falcone.selectedVehicle = '';
        falcone.planets = falconeIndex > 0 && JSON.parse(JSON.stringify(falConeArray[falconeIndex - 1].planets));
        falcone.vehicles = falconeIndex > 0 && JSON.parse(JSON.stringify(falConeArray[falconeIndex - 1].vehicles));
        const selectedPlanetIndex = falcone.planets.findIndex(planet => planet.name === e.label);
        if (selectedPlanetIndex >= 0) falcone.planets.splice(selectedPlanetIndex, 1);
      } else if (selectedFalcone.selectedPlanet !== '') {
        selectedFalcone.selectedVehicle = ""
        if (selectedVehicleIndex > -1) falcone.vehicles[selectedVehicleIndex].total_no = selectedVehicle.length > 0 && selectedVehicle[0].total_no;
      }
    });

    selectedFalcone.selectedPlanet = e;
    falConeArray[index] = selectedFalcone;
    updateFalcone(falConeArray);
    getDisabledVehicles(e, index);
  }

  const getDisabledVehicles = (e, index) => {
    const falConeArray = [...falconeData];
    const selectedFalcone = falConeArray[index];
    const selectedPlanet = selectedFalcone.planets.filter((planet) => planet.name === e.label)[0];
    const modifiedFalcone = selectedFalcone.vehicles.map((ele) => {
      return { ...ele, disabled: (ele.max_distance < selectedPlanet.distance || ele.total_no === 0) }
    });
    falConeArray[index].vehicles = modifiedFalcone;
    updateFalcone(falConeArray);
  }

  const onVehiclesChangeHandler = (e, index) => {
    const falConeArray = [...falconeData];
    const selectedFalcone = falConeArray[index];
    const selectedVehicleIndex = selectedFalcone.vehicles.findIndex((vehicle) => vehicle.name === e.target.value);
    const selectedVehicle = selectedFalcone.vehicles[selectedVehicleIndex];
    const updatedCount = selectedVehicle.total_no - 1;

    falConeArray.forEach((falcone, falconeIndex) => {
      if (falconeIndex > index) {
        if (falcone.vehicles[selectedVehicleIndex].total_no > 0) {
          falcone.vehicles[selectedVehicleIndex].total_no = updatedCount;
        }
        falcone.selectedPlanet = '';
        falcone.selectedVehicle = '';
        falcone.vehicles = falconeIndex > 0 && JSON.parse(JSON.stringify(falConeArray[falconeIndex - 1].vehicles));

      } else if (falconeIndex === index) {
        if (falcone.vehicles[selectedVehicleIndex].total_no > 0) {
          falcone.vehicles[selectedVehicleIndex].total_no = updatedCount;
        }
        if (selectedFalcone.selectedVehicle !== '') {
          const previousSelectedVehicleIndex = vehicles.findIndex((vehicle) => vehicle.name === selectedFalcone.selectedVehicle);
          const previousSelectedVehicle = vehicles.filter(vehicle => vehicle.name === selectedFalcone.selectedVehicle);
          falcone.vehicles[previousSelectedVehicleIndex].total_no = previousSelectedVehicle[0].total_no;
        }
      }
    });

    selectedFalcone.selectedVehicle = e.target.value;
    const calulatedTimeProps = calculateTimetaken(selectedFalcone);
    selectedFalcone['time'] = calulatedTimeProps;
    falConeArray[index] = selectedFalcone;
    updateFalcone(falConeArray);
  }

  const calculateTimetaken = (selectedFalcone) => {
    const selectedPlanet = selectedFalcone.planets.filter((planet) => planet.name === selectedFalcone.selectedPlanet.label)[0];
    const selectedVehicle = selectedFalcone.vehicles.filter((vehicle) => vehicle.name === selectedFalcone.selectedVehicle)[0];
    return (selectedPlanet.distance / selectedVehicle.speed);
  }

  const getTimetaken = () => {
    if (falconeData) {
      const timeTaken = falconeData.reduce((acc, cur) => {
        return acc + cur.time;
      }, 0)
      return timeTaken;
    }
  }


  const findFalconeHandler = () => {
    const planet_names = [];
    const vehicle_names = [];
    falconeData.forEach((falcone) => {
      planet_names.push(falcone.selectedPlanet.label);
      vehicle_names.push(falcone.selectedVehicle);
    });
    const timeTaken = getTimetaken();
    findFalcone(planet_names, vehicle_names, timeTaken);
  }

  const getButtonDisabled = () => {
    return !falconeData.every((falcone) => ((falcone.selectedPlanet !== '') && (falcone.selectedVehicle !== '')));
  }

  return (
    <div>
      <HomePageWrapper>
        {falconeData && falconeData.map((falcone, falconeIndex) => (
          <Destination
            key={falcone.label}
            falcone={falcone}
            falconeIndex={falconeIndex}
            planetChange={onPlanetsChangeHandler}
            vehicleChange={onVehiclesChangeHandler}
          />
        ))}
      </HomePageWrapper>
      <DetailsWrapper>
        <TextWrapper>Time Taken : <span>{getTimetaken()}</span></TextWrapper>
        <ButtonWrapper disabled={getButtonDisabled()} onClick={findFalconeHandler}>Find Falcone</ButtonWrapper>
      </DetailsWrapper>
    </div>
  );
};

Home.propTypes = {
  home: PropTypes.object,
  findFalcone: PropTypes.func,
  updateFalcone: PropTypes.func,
};

export default Home;