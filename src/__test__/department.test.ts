import { GET } from "@/app/api/department/route";
import { describe, it, expect } from '@jest/globals';

describe('GET', () => {

  it('should return status 200', async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });

  it('should return Marketing department', async () => {
    const response = await GET();
    const data = await response.json();
    expect(data.department.Marketing).toEqual({
      male: 2,
      female: 3,
      ageRange: '21-50',
      hair: {
        Black: 1,
        Blond: 2,
        Chestnut: 1,
        Brown: 1,
      },
      addressUser: {
        'Terry Medhurst': '20020',
        'Terrill Hills': '95945',
        'Eleanora Price': '85305',
        'Jeanne Halvorson': '02664',
        'Edwina Ernser': '31415',
      },
    });
  });

  it('should return Services department', async () => {
    const response = await GET();
    const data = await response.json();
    expect(data.department.Services).toEqual({
      male: 2,
      female: 0,
      ageRange: '28-29',
      hair: {
        Blond: 1,
        Chestnut: 1,
      },
      addressUser: {
        'Sheldon Quigley': '40219',
        'Ewell Mueller': '85306',
      },
    });
  });
});