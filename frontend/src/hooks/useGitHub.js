import { useEffect, useState } from "react";
import {
  getGitHubProfile,
  getGitHubRepositories,
} from "../services/githubApi";

const useGitHub = () => {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError("");

        const [profileData, repositoryData] =
          await Promise.all([
            getGitHubProfile(),
            getGitHubRepositories(),
          ]);

        setProfile(profileData);

        const sortedRepositories = repositoryData
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              b.stargazers_count -
              a.stargazers_count
          );

        setRepositories(sortedRepositories);
      } catch (err) {
        console.error(err);

        setError(
          "Unable to load GitHub data right now."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return {
    profile,
    repositories,
    loading,
    error,
  };
};

export default useGitHub;