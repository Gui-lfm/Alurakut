import { SiteClient } from 'datocms-client'

export default async function RecebeRequests(request, response) {

    if (request.method === 'POST') {

        const TOKEN = "b5716a1fa2439f29f67f4a7cdef73a"
        const client = new SiteClient(TOKEN)

        const registroCriado = await client.items.create({

            itemType: "977000",
            ...request.body,
        })

        response.json({

            registroCriado: registroCriado
        })
        return;
    }

    response.status(404).json({

        message: 'O método de requisição deve ser POST'
    })
}