import { Destination } from './destination.model';
import { Location } from './location.model';

export interface Call {
    origin: Location;
    destinations: Destination;
}