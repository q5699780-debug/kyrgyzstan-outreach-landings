# Script to deploy individual standalone Vercel projects for each Kyrgyz business

$businesses = @(
    "redcar-detailing",
    "dr-atazhanov",
    "alakol-guesthouse",
    "marshal-group",
    "too-kg-expeditions",
    "mashhura-mebel",
    "grand-khan-tengri",
    "luar-hall",
    "art-garage",
    "orto-asia",
    "zeto-cottages",
    "neo-style",
    "ak-tish-dental",
    "adat-barbershop",
    "logos-education",
    "toro-auto",
    "raizein-talas",
    "baikut-batken",
    "khan-ordo-tokmok",
    "delmar-kara-balta"
)

Write-Host "?? Starting individual Vercel deployments for all businesses..." -ForegroundColor Cyan

foreach ($slug in $businesses) {
    Write-Host "`n?? Deploying: $slug..." -ForegroundColor Yellow
    vercel --name $slug --prod --yes
}

Write-Host "`n? All businesses successfully deployed to Vercel!" -ForegroundColor Green
