interface GithubRepo {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}


const fetchGithubRepos = async () => {    
    const response = await fetch(`https://apia.github.com/users/aldoapicella/repos`)
    const repos: GithubRepo[] = await response.json()
    let error;

    if (!response.ok) {
        error = true;
    }

    return { repos, error };
}

export default fetchGithubRepos;