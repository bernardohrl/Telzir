import { Call } from 'src/models/call.model';
import { Plan } from 'src/models/plan.model';
import { Destination } from 'src/models/destination.model';

export class Mocker {
    static mockCalls(): Array<Call> {
        let location011: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '011' };
        let location016: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '016' };
        let location017: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '017' };
        let location018: Location = <Location> <any> { 'name': 'São Paulo', 'ddd': '018' };
        

        // Calls From 011
        let destination011_016 = <Destination> <any> { 'location': location016, 'price': 1.90 }
        let destination011_017 = <Destination> <any> { 'location': location017, 'price': 1.70 }
        let destination011_018 = <Destination> <any> { 'location': location018, 'price': 0.90 }

        let call011 = <Call> <any> {
            'origin': location011,
            'destinations': [destination011_016, destination011_017, destination011_018]
        }


        // Call From 016
        let destination016_011 = <Destination> <any> { 'location': location011, 'price': 2.90}

        let call016 = <Call> <any> {
            'origin': location016,
            'destinations': [destination016_011]
        }


        // Call From 017
        let destination017_011 = <Destination> <any> { 'location': location011, 'price': 2.70 }

        let call017 = <Call> <any> {
            'origin': location017,
            'destinations': [destination017_011]
        }


        // Call From 018
        let destination018_011 = <Destination> <any> { 'location': location011, 'price': 1.90}

        let call018 = <Call> <any> {
            'origin': location018,
            'destinations': [destination018_011]
        }


        return [call011, call016, call017, call018];
    }


    static mockPlans(): Array<Plan> {
        let plan30 = <Plan> <any> { 'name': 'faleMais30', 'time': 30 }
        let plan60 = <Plan> <any> { 'name': 'faleMais60', 'time': 60 }
        let plan90 = <Plan> <any> { 'name': 'faleMais90', 'time': 90 }
        let plan120 = <Plan> <any> { 'name': 'faleMais120', 'time': 120 }

        return [plan30, plan60, plan90, plan120]
    }

}