import axios from "axios";
import { NextResponse } from "next/server";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
}

interface DepartmentData {
  [key: string]: {
    male: number;
    female: number;
    ageRange: string;
    hair: { [key: string]: number };
    addressUser: { [key: string]: string };
  };
}

export async function GET() {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    const users: User[] = response.data.users;

    const data: DepartmentData = {};

    for (const user of users) {
      const department = user.company.department;

      if (!data[department]) {
        data[department] = {
          male: 0,
          female: 0,
          ageRange: '',
          hair: {},
          addressUser: {},
        };
      }

      if (user.gender === 'male') {
        data[department].male++;
      } else {
        data[department].female++;
      }

      if (!data[department].ageRange) {
        data[department].ageRange = `${user.age}-${user.age}`;
      } else {
        const [minAge, maxAge] = data[department].ageRange.split('-').map(Number);
        data[department].ageRange = `${Math.min(minAge, user.age)}-${Math.max(maxAge, user.age)}`;
      }

      if (user.hair && user.hair.color) {
        if (!data[department].hair[user.hair.color]) {
          data[department].hair[user.hair.color] = 1;
        } else {
          data[department].hair[user.hair.color]++;
        }
      }

      const fullName = `${user.firstName} ${user.lastName}`;

      if (user.address && user.address.postalCode) {
        data[department].addressUser[fullName] = user.address.postalCode;
      }
    };

    return NextResponse.json({department : data, status : "success", "message": null});
    
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error', status : 500 });
  }
}