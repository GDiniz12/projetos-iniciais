// a aplicação tem que basicamente, assim que o usuário digitar algum username, se existir, o usuário irá aparecer lá à direita. Aparecerá o: nome de usuário; A quantidade de repositórios; número de seguidores; quantos seguidores a conta segue; dia que a conta foi criada; id da conta;

interface GithubUserResponse {
    id: number;
    login: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
    repos_url: string;
    created_at: string;
    avatar_url: string;
    message?: "Not Found";
}

interface GithubRepoResponse {
    name: string;
    description: string;
    fork: boolean;
    stargazers_count: number;
}

const users: GithubUserResponse[] = []

const btnSubmit = document.getElementById('btnSubmit');
const inp = document.getElementById('username') as HTMLInputElement;
const divAnswers = document.querySelector('.container-answers');

btnSubmit.addEventListener('click', (ev) => {
    ev.preventDefault();

    const valueUsername = inp.value;
    fetchUser(valueUsername);
})

async function fetchUser(username:string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await response.json()

    if (user.message) {
        alert("Usuário não encontrado!");
    } else {
        users.push(user);
        
        divAnswers.innerHTML = '';

        const photoUser = document.createElement('img');
        photoUser.src = user.avatar_url;
        photoUser.width = 100;
        photoUser.height = 100;
        photoUser.style.borderRadius = '50%';
        const bioUser = document.createElement('p');
        if (user.bio === null) bioUser.innerText = "Não tem BIO"
        else bioUser.innerText = `${user.bio}`;
        const loginName = document.createElement("p");
        loginName.innerText = `Nome de usuário: ${username}`;
        const nameUser = document.createElement('h1');
        nameUser.innerText = `${user.name}`;
        const reposQuantity = document.createElement('p');
        reposQuantity.innerText = `Quantidade de repositórios: ${user.public_repos}`;
        const followersQuantity = document.createElement('p');
        followersQuantity.innerText = `Quantidade de seguidores de ${user.login}: ${user.followers}`;
        const followingQuantity = document.createElement('p');
        followingQuantity.innerText = `${user.login} segue um total de: ${user.following} usuários`;
        const createAccountDay = document.createElement('p');
        createAccountDay.innerText = `A conta foi criada em: ${user.created_at}`;
        const accountID = document.createElement('p');
        accountID.innerText = `O ID da conta é: ${user.id}`;
        const br = document.createElement('br');

        divAnswers.append(photoUser, nameUser, bioUser, br, loginName, accountID, reposQuantity, followersQuantity, followingQuantity, createAccountDay);
    }
}

