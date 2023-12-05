export const ecg_api = "http://192.168.79.102:5000/api/v1/ecg";

export async function fetchEcg() {
    try {
      const res = await fetch(ecg_api, {
        next: { revalidate: 10 },
        headers: {
          "content-Type": "application/json",
        },
        body: {
          patient_id: 99,
          device_id: "cm99",
          time_start: 1700152800,
          time_end: 1700152812,
        },
      });
      return res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }