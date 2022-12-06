import { api } from "@/services/api-client";
import { IMovieDetailResponse, IMovieOverviewResponse } from "./types";

export async function getMovieOverviewData (): Promise<IMovieOverviewResponse> {
  return (await api.get<IMovieOverviewResponse>('AdvancedSearch/{apiKey}?title_type=feature,tv_movie,short&user_rating=7.0,10&role=nm0000158'));
}

export async function getMovieDetailData(id: string): Promise<IMovieDetailResponse> {
  return (await api.get<IMovieDetailResponse>(`Title/{apiKey}/${id}`));
}

