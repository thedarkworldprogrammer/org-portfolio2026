import {
  GITHUB_API_BASE,
  GITHUB_USERNAME,
} from "../utils/constants";

export const getGitHubProfile = async () => {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub profile.");
  }

  return response.json();
};

export const getGitHubRepositories = async () => {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub repositories.");
  }

  return response.json();
};