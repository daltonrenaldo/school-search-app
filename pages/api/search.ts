// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const searchQuery = req.query.q as string;
  const buildUrl = (baseUrl: string, params: Record<string, string>): URL => {
    const url = new URL(baseUrl);
    for (let key in params) {
      url.searchParams.append(key, params[key]);
    }
    return url;
  }

  const url = buildUrl('https://api.data.gov/ed/collegescorecard/v1/schools', {
    api_key: process.env.SCHOOL_API_KEY,
    per_page: '10',
    fields: 'id,school.name,school.state,school.city,school.zip,school.school_url,location',
    'school.name': searchQuery
  });

  try {
    const response = await fetch(url.toString(), { method: "GET" });
    const result = await response.json();
    result.results = result.results.map((result) => {
      return {
        id: result.id,
        name: result['school.name'],
        state: result['school.state'],
        city: result['school.city'],
        zip: result['school.zip'],
        mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=${result['location.lat']},${result['location.lon']}&zoom=12&size=400x400&key=${process.env.MAPS_API_KEY}`,
        website: result['school.school_url']
      }      
    });
    res.status(200).json(result);
  } catch(e) {
    res.status(500).json({ error: e });
  }
}