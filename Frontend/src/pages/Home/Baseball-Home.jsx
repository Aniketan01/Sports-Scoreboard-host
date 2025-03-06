import React from 'react'

const Reds="https://media-hosting.imagekit.io//0f9e5039f8e54974/Reds.png?Expires=1835850539&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rEqDJ~V3P88EL~EDq8y9GlLukEfOs3VzRh~3~gd0fXI~Amsx6gpOZwXhaIpB28gfVdhrJOOER4DHUlpV~NN-i2Hz8~0gH0aiOJNiv3xUQteaTgrxBIzcaDPJnHbVfcY0uzcygAIqjSHtbGDl-19MrDZfnpz04OxLe8n6u9pIRBG9zK-S4Ju7-g3~l7fU0jbYYFxPVktuybtr8UIIGVFu3DE3VnyJeTRuTjRUasIy1qEhkiiLC3A2nzgWfsMfMn3-du6cahlMP5fKS9Dg1XGMv3Zi0Q5vGN6SAsi1GM9MN5b1vXgSpZyusUsxTKhvA~QwZ40~PvOY3Fz4bcNn18dndg__"
const Nationals="https://media-hosting.imagekit.io//8306ce9d7b604bcd/Nationals.png?Expires=1835850539&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GmBX5tUIgDHBAXVcauDq6LFE50-0DOoOJc6X7oEQOhJdOFsjPve5DoQqmRLa5zryyb7NnXoJmQRhYgJCvBtVRF4JW7FfC9iUO1aj8SMBR6BoJBnFtUGAQZjohQmUL2aDKDt-xIRDYimNZUJxNYgr2FLGiyrWN4uX~-fUwDDHa9BTGZo7k6Cxfv~sXEEb9Stnof8TNu-wv3Y0-XZAh4cwzPvp8eiTOibbVAkbq3QOx1rhjEQDi7xnLls4GQSJpeBa5GG8Tk4xy8xcXxYk4ZlMbR-XdggC6mHH886mRjZ1zlrsTWgpLsxCgM1Ma1ZHZGFk3mDHgncQxG6~~TElItrGfg__"
const Rockies="https://media-hosting.imagekit.io//6c531ee99c3949ee/Rockies.png?Expires=1835850539&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nVDL7EFg5vsZuzBxm0F3J16O6KJA~CGV-SQEysh8rO3e2UDqKe91WDM1V~exEF-gJxNVzPnGbIwOP8GRqtecJRnB2l45SCW2gEJ8dhU4U9rk-4tuX92azGLDiuLRI0dFvuW-urNqVaw2PuqynHJX1J4A9o09f-bw-qG3Uq7ZCkDgBXgX538lT6vU70oiep1QkqGqPhG0ftZFlaUR1z1J5sJyvkyKQ2rTEYy-j6~zztX1Uv--4OPI-tjw0WEPCn-3eT09bRUok6WDZEPwGB1E5sJ8G5RZngDvwjATza0d6b7nSZtYLBWmRIlkmAwRBmL27T-l~XBJ3m3oFQAQafnPGA__"
const Cardinals="https://media-hosting.imagekit.io//0a2e7a08a71946c2/Cardinals.png?Expires=1835850539&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Kwych9tYicNfxBEgKgTXIZ3U7k0agJOa7N8KskQX6ArCFGA3F2VWXTVlZfUJ37~IiDwBK1RjQ3PM-FSbnwxOYxMbCcyTKKWNfM5MZyZnwMKJWrAWaBC2ksSxWUdGiReQys3mxEjCMXZXCclRUk7~5oE6KQ~EDMMmb2nWN~z2pg6B4We~gjeygPrfKkB5JpAaXFIBequiYx-PBWZfk3ikb6Qz0spup6MCjI5CPHWpo28YRiUHJe7WQvYerr~yN-pLw6lJ4XWTt78EfesqqHQ0NuTvsU2bmm4Z30mnSsNB8QFawqTw2i0tpm-IinYXbxOHJDV0ezniDyrQXXnpN3jPEQ__"

export default function Baseball() {
  return (
    <div>
      <h5>Baseball</h5>
                        &nbsp;
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='col-lg-4 text-start'><span><img src={Rockies} alt="" />Colorado Rockies</span></div>
                            <div className='col-lg-4 text-center'><strong>9&nbsp;-&nbsp;5</strong></div>
                            <div className='col-lg-4 text-end'><span>Cincinnati Reds <img src={Reds} alt="" /></span></div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className='col-lg-4 text-start'><span><img src={Nationals} alt="" />Washington Nationals</span></div>
                            <div className='col-lg-4 text-center'><strong>4&nbsp;-&nbsp;6</strong></div>
                            <div className='col-lg-4 text-end'><span>St. Louis Cardinals <img src={Cardinals} alt="" /></span></div>
                        </div>
    </div>
  )
}

