from subprocess import check_output

firstline = check_output("git remote -v", shell=True, encoding="utf-8").split("\n")[0]


# print(firstline)
url = firstline.split()[1]
# print(url)

username = url.partition(":")[-1].split("/")[0]
reponame = url.partition("/")[-1].replace(".git", "")

# print(username, reponame)

url = f"https://{username}.github.io/{reponame}"

print(url)
