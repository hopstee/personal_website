## About project
Flexible personal resume website

### Description
I decided to do this project because I couldn't find free high-quality resume builders. A resume is essential when looking for a job.

## Getting Started

Clone the repository locally

```bash
git clone https://github.com/hopstee/personal_website.git
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can configure port in .env file

Configure enviroment variables

```bash
PORT=3000

EMAIL_ADDR='your_email'
EMAIL_PASS='email_pass'

SENDGRID_API='https://api.sendgrid.com/v3/mail/send'
SENDGRID_API_KEY='sendgrid_api_key'

ADMIN_NAME='name'
ADMIN_PASS='pass'
```

## Customization
Project has four data files:
1. [locales.json](https://github.com/hopstee/personal_website/blob/main/data/locales.json)
2. [personal_data.json](https://github.com/hopstee/personal_website/blob/main/data/personal_data.json)
3. [projects.json](https://github.com/hopstee/personal_website/blob/main/data/projects.json)
4. [translations.js](https://github.com/hopstee/personal_website/blob/main/translations/translations.js)

### locales.json
```bash
[
    {
        "abr": "ru", 
        "name": "Русский"
    }, 
    {
        ...
    },
]
```

### personal_data.json
```bash
{
    "en": {
        "personal": {
            "name": "",
            "bio": "",
            "age": 21,
            "phone": "",
            "email": "",
            "city": "",
            "country": "",
            "start_work": "Y-m-d"
        },
        "about": "",
        "experience": [
            {
                "id": "",
                "position": "",
                "company": "",
                "city": "",
                "about": "",
                "time": {
                    "from": "",
                    "to": ""
                }
            },
            {
                ...
            },
        ],
        "studies": [
            {
                "id": "",
                "grade": "",
                "university": "",
                "city": "",
                "about": "",
                "time": {
                    "from": "",
                    "to": ""
                }
            }
        ],
        "certificates": [],
        "skills": [
            {
                "id": "",
                "title": "",
                "level": ""
            },
            {
                ...
            },
        ],
        "links": [
            {
                "id": "",
                "title": "",
                "link": ""
            },
            {
                ...
            },
        ],
        "languages": [
            {
                "id": "",
                "title": "",
                "level": ""
            },
            {
                ...
            },
        ]
    },
    "ru": {
        ...
    },
}
```

### projects.json
```bash
[
    {
        "en": {
            "title": "Personal projects",
            "projects": [
                {
                    "title": "",
                    "desc": "",
                    "stack": [
                        "JavaScript",
                        "JSON",
                        ...
                    ],
                    "link": "",
                    "code": ""
                }
            ]
        },
        "ru": {
            ...
        },
    },
    {
        "en": {
            "title": "Other projects",
            "projects": [    
                {
                    "title": "",
                    "desc": "",
                    "stack": [
                        
                    ],
                    "link": "",
                    "code": ""
                },
                {
                    ...
                }
            ]
        },
        "ru": {
            ...
        },
    }
]
```

### translations.js
```bash
export const Translations = {
    en: {
        hello: "Hello",
        ...
    },
    ru: {
        hello: "Привет",
        ...
    }
}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
