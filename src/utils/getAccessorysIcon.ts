import SpeedSvg from '../assets/speed.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import ForceSvg from '../assets/force.svg';
import GasolineSvg from '../assets/gasoline.svg';
import HybridSvg from '../assets/hybrid.svg';
import EnergySvg from '../assets/energy.svg';
import ExchangeSvg from '../assets/exchange.svg';
import PeopleSvg from '../assets/people.svg';
import CarSvg from '../assets/car.svg';

export function getAccessorysIcon(type: string) {
  switch (type) {
    case 'Phy':
      return SpeedSvg;

    case 'Strike':
      return AccelerationSvg;

    case 'Slash':
      return ForceSvg;

    case 'Pierce':
      return GasolineSvg;

    case 'Magic':
      return EnergySvg;

    case 'Fire':
      return HybridSvg;

    case 'Ligt':
      return ExchangeSvg;

    case 'Holy':
      return PeopleSvg;

    default:
      return CarSvg;
  }
}
