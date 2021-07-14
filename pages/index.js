import React, { useState } from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {

  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'Gui-lfm';
  const [comunidades, setComunidades] = useState([{
    id: "123",
    title: "Eu odeio acordar cedo",
    image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    link: "https://www.uol.com.br/vivabem/noticias/bbc/2019/03/25/afinal-acordar-cedo-e-bom-ou-ruim.htm"
  }, {
    id: "1234",
    title: "Cabo USB",
    image: "https://img10.orkut.br.com/community/144f27845b2b04d7a489583b58176eef.jpg",
    link: "https://faesadigital.com/2018/04/04/as-melhores-comunidades-do-orkut-revisar/"
  }, {

    id: "12345",
    title: 'Abro a geladeira para pensar',
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRYVFhUYGBUYGRgZGBgVGhIRGhkaGBgZGRgVGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjEhIR4xMTQ0NDQxNDQ0NDE0MTE0NDQ0NDQ0NDE/Pz80NDQ0NDQxMTE/NDE0PzExMTE0MTExMf/AABEIAQEAxAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xAA7EAACAQIEBAMECAcBAAMBAAABAgADEQQFEiEGMUFRImFxEzKBsRQjQlJykaHBFSQzNGLR8AfC4fGC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIREAAgIDAQEBAAMBAAAAAAAAAAECERIhMQNBEyIyUUL/2gAMAwEAAhEDEQA/ADJzJ/OeHMH/AMvhDwy5ZsMAkSvoN9F36a/Zpq2KqHkrfnGhcGk8qUUAmr6NViwlar0LD4wpwtinqe1NQXKmwJ9RNa5F7CbcLnxVfX94AIZKii3wgnPFH0Srt9j94WflBecj+Uq/h/eEKPndyAT6yJjzlpxz9ZTrNCg2QOd5gnk9IjIVk+GHiPpL+GpEnSvTeUsKeZhrJDZ72+zEkNErUie+/KXKaETSk4LE2tufnCeHohmEVjnS+G0IpJ5iHRQmvD2W2opf7ohgYGaMWhZSTK2HpjtLqUx2myYe0lCR6EI2WDMxp7HaGGWUMXhiwImlwKOd5s6qT8hBKZdUqnZbLOjJw+l9TC7S5/DlHS3pJLzbdjZUc4HDK9pk6R9DHaeQ/mbNgbKs3p17hQQQL7yTN8wWgmsrqHK0VeHswC1GVbXIhnM39oioxG5gUm42c8ZNxL2T5ule4VSpHebZ3ifZ02fTe0FYcCjU0p9obme4+szroJ942Myk8QqTqgdgM4Ws+nTZrQrwsfHWHmfnKNXLUoujJ1G8u8Li1WuP+5zRdsaI0MPDBubj+Wq/hMJHlB2af21X8JlBz54qhrt6mUGa94ewuXPWFZr6UTUSeV4un/vhGSMYDNlmk3tCgE+HO8O5Iu7+SmAsMfEYfyNvf/CYjQy4V8IefqfnC2FqWYfCCcEjNcKN7n5xhwOFseV2+USUkh1Fs7LlOY00w9PU4vp5dZ6OJKW9zYDke85qtYIAGJZ+3O3lInru1yOnSK/UChsd8bxgQ1kAKybBcVM3vJ+USadHUA0u4ZSjDsZOXqx8EdGwWbI+17HsZeMS8PSDC/I9xCv8SdEtp1EcpSPtYkof4HHYAXJA9YFx+fIl1QF2/SVfY1KniqMQD9kfvNmwYAsoET09pcQYxX0DVc8xNzyHlaZLj4Jr8pk5v1mWwicqyrMylRGOw5E//cMZ7n5LqKZtbfVL75RhjhyPFb3hyDW9YMwGCwz8kqFeRJInWtRo4VFfCHD584dHZiVuAe024nz/AFFVpNY8yR0hDO6dGhSVHpMUPiDC1/SUsBhsPVN0ouRbc3G3rMtIyQGw2b1wyOzs6Btz0/OdF4IxYqVKrDqo+cEZ1haeHwyt7Emkeeki4PnLn/nNdHao1NCg0jZjfrGj0aKH88oNzH+2q/hP7wkeUHY8fy9T8MoMfO9XMXT2lNWsjE6h3F4N6R0xGS0TQeqbhxe1uXOBaeHwv0RnLEYgHwjpbpCmYBibCeW5TL8u8YBZwt9WwjBkIN3HW0r8HZYmIquruUstxaMdHLadByUcuLHVe8Sb0PEjwGC0C9vG3OF0cIu1tZgjB4xqjtYWVTaFVw+ohu045SZ0qOibCYUsSW587wguFAbl7wlnC0wZYFE2HrJNs1Igw2GsSOkvthLgbSYUPD5y1hiGTz6zJNmbRmBWwsZaY/7kLJbea1anhJ6iOtE3sO4Wzrfr1kjUxBOS4wE6b84TrOBLWsbEpkepe0yD6mIN5khmv8GxYDbBg4fSUNytrQJw/qpo6NQYi5t/+x6t/wB0nvradiic6SErirCVKuC0IjM4PhUkXHlKfCFOtRQLUw7eY8MdlzNNWld7dNpdR772+UOIUkLGZZbUxGGqU0TSze6G6SHgjhh8FqWo4Z3UGw6b8o6UztK9f3x5rClRiYcoPxn9Cr+GXxygzGt9RV/CZmFnJ8vxdEpiaNY6bqSh84huNvQmx+MacTlTGm+IPu8gvffneLNZdvLvGTQWtFcGegzUT0xnwQK5HimpuxU2JWMeBxBak+/i3/WK2Updz6RiygW1oftcpH0Z0QiEMgTwH1hIuy7rBuUVAgZOoMIpj1YEMALfCcri2dN6GHJ8SHQ25jnDVCxsO/ziVk2LCVhY3RzvHJtgQOY8Qi0TkW1PMdpphHs7L3O0r1MQAyv0bY+s8xLEHUOn6zAoJ1Be4g56tjvy5SwMSCquOo3gzHvvcTSZoo0wOKKVbHodo31qoK37j0iJiT4lcfGFMdnBVAu5NukRN8QWkE31X939ZkXKec1Le4ZkX82a0OHxm3x/WJTvUtYuw9dpGlOve4dyPK5np2zlQ3fQKerULA9ZbSw6j84lVNfIuwP5SP6HX6M9um8FmWzoFNhbmJBiGGsbg7RAdKo51HHxl3hio/0hwzlhp21GazUObNtBWMb6ir6H5QgzbQNjqn1NX0PymZl0T8Jh9eAZOu5HrOcVE+qfupIP5xyyLMvA1M9CYvZ3Q0B+zXMWEt7KtfxFsTF6zwT2XfCITyP329IcwzkOnleLuU1dNT12ht38ayHoi0GHKOELOXHLnB+PwDs3hNrmNORZhQSmA+7GV8YyF/B7sg3R0wVoGYXCGmgufEN474HHa0RzzFgYsVhcCEMga6Oh6biTs0oh2otwy9PeSS0H1rv0FjKoqfVq/wB02PpLGH2JPRheBk6NcBU8Loeh2kGJa4I6iaI+mqw6GR1Hs5HeJJjJGyjUnpJKO46SrSqab3leu738I2lvJE5hjSO4/SewNd5k6KRHZ5h+IfbBtYGobr6SlheKmVmCltPS1ucXXqNTcko3jXoDYSDLUcv7hvuNwfzmzOlQjsdHz8VKTORuDYk85XwfE7gEamv07CLi1XRXpmm1ySRYG28zL8NVN/A3LqDBkxo+cMWx0ON9rTV/zkvDB/mG/DAmS1HKGm6FdJNiRa8NcMC2IP4YydnNJJMbMQ1li9jqv1VX0MYMWPAYsYlfqqvoYW9CLpzjLnF+xv8AvLGeUtdIkcxKtAWK+d/nCYN1I7iJ9LpfxED5zGMmxdPS7DzkJnSnaOZqmS4U2dfWHHfxKYApcwYWxFTTpPXpEltlIMvpidFVG/MHlGSrjdVvBvzBEQmdnN+f7RsyOqWTSx8S7SHpFUW85O6CfttoQyCuPbFfvCBcQ4UbmaZHiScShHK8hi0i0pKh4wAuKtM9bgeXX9pNlL66dj7ykg/DlKVJ9OKdfslbj12lvLbLWYdH3HrFZNFXEp49XaakXIaXMXR0uZAlPYjzkpdGTB2LPMQNmmZVEZNPu6SD6wnmlTS6eYg/G0tSNtfr6S/naJz2CRmmI7zIvVsxqBiL9Z7OsidwzfKmqIERVBBvcjpLOAy4IACq3tzsIVBm14v5I2bA+a5aX0aAqlTvtzkmFy9lG9jPcRmLioUC2A694RoOSNxMvJGU2lQNxOTmoBchbdp5h8oSi6FLknmTDVOV8UPEnqY2NC5NkOJHhi5iE8FT0PyjPWHhMAV08FT0PymlwxykiyI3Y2lum/WV2W9Jv8SZthmuBItnTDgKzTAhnLQU+EYddo1YnY7yo9NT0lIzFn57sAUKYVjq5jcSbdyP0k2LwZ0l1uQNt5NlVK4uenzlJSVWSxd0TUsHpFgLk8z5y2D7NOfiklNCOvPpKuMawIHPzkf7FqxRT9szm5bbtCeU4kalKndSIDrYgKNucv5LT0I9Ru0eUP4iKdujpVapqIqLzC/nJ8PXDojr7ynfpAeQYnXQDeRBkuSVirlT7pJnFPTKrg2YqoGCt94CRlLH1lV3IUjtuJcoVNQHpFfwwj8T4jTWQDp0+MtU6g9k5PXlKfFOHBr6r6QB4vSVKeNVhoHuW8J8+k6caqhLF/EONR2E9keNp+Nt7bzJWmSo77/FaP3xM/i1L78VBSE2SkL8ochKGo5tQPNgZn8Zo/fi79GHaSU8GW5CbJmoYFzuiB78i/jNOpUREJ1b8/SBMTgwo3tK2UgfSkO3I8vSbJmQ4uNjAtRfBU9D8odcbGCXTap6H5Rvgfpx8VAEcHufnPMsa6ibIotVBHVpTySp07ExJR1ZXylbCeJS4vB+EpM7aLeEdYTrLq2Ev0KYRdufWQy+HSyticIopMgHSDsrwmhN+ZMIPULMFHWXsPhdVj2hyb0TlS2CcV4U5eI7CVlyN3Gpja8Z8XhEoKKtY/hE1oD2x1o10t7seMWicpZaFM8LXPvSDM0akgS23eOtDDOxINgOkp5xlpdCgW56H0jZO1YGkloqcGvbDVTfZXA/SHMClyT8YD4aoFMHVDbEv8uUOZCx0m/aQ9atlIcDNF7oSe1pPgXsAT90wXgqtw69paWodB8gZFdQzWhCzqsWruW3F9pTbY7flNa2K1O9/vGeoR1noxSaRy3sldlJuV3mT20yNSF2dQoUA/iRQtu8kxWOSmFXSGfraCcDnCIClybbG3eA8Ni9Veo+4UHr/qSUJUQU2Ouh6oBVQpHSZ9LNJCLA1L+7BuEzpCQFc6jtBeIxLnEm5OwBvMoyD+jGRg1cWC6XG5EG4FGTGU0fr/qWsnx4d2s242M8xwIx+GIBIN7kcuXWFRdjKVjeRtB2n3//AOvlCR6yio98evyjFDi/WqOpZoDwDaWJv1hfE10R65LDWHNhF0Psx6k3jNWgxlTG/C1Be8lr1/OLWGzZQu97iQVs3ZjtsJD8tnT+qoasB4nNukbMrpKwYnwhRYHu0Ssjb2eHNVju3K/nHTLWT2VJSwuxudx1HOBQpiSkJvGOouqu5Yj8vKBsBmFSgWNNveFje9vhOw0ctoOAHVGufeNrytjOEcMS3g8I2AHUy/wjZyRswruQvtCCTtp8501MudMOhc3YLcn4Ss3BlBKiVBfRe+nmRaXeJc1X2WhNi21j2k5vQV0AYo6MMdP2n/3LeR7K3p+0GZ85TDUgOrD5GEsjfmOumc00dEOE2Ach2MsYx9CMfImUMufxuJYzx7UGbyk4r+SHb0czrYoa2bzMspiATBWLHiM8w7G89KK0cTew79JmQZrbtMho1nfsNkNNAQACCbi43ErLwtT1s+o3bYr0tGATDBboVQiCKXD9NbkAX725TR+HAX1lzewFtrES1mS1dS6Pc6y1hdVt7zbNiihl/DaI7OGY6uY2tCdbDKoWwFwQLnyllZpivdHrMzUke/7/AGlJRu/x+UuW/wC+Epj3n9D8oox89Z9Rvia232/hKDjY7Rrx1Ie0xBtvrPyiwvuv8YYyvQ7joHySgtyB3tI5Zy8XqJ6iO+E10ac+UrQp0xyAB/SBlx7+zUAtZNr3PLtGTNnUVaWsXW6giNuaZdhlo6WpBFYCxA2363kovqKyXBCy72r0tdKudam7ISdh3ElocU4lDYVj6HpKNeilOq1C3u7qwJUsCL2MoezVmsoNlI1H47x6Js6IeJKtOjSLKru/iJb7vaAcTmBr1FJAUE8heZxBhlUUqiOSmi1m6HygzK3vUXtqvJyWho9DvFZOiig6WhTLRZh+EfKBc8rH2yJ02h6kQHHnb5Tnn8LRZVy9x9Icdpdzw/UP6QZl7fzNQeUIZrvScf4mIv7DvhynE+8TNab2O0nxdOx3keHUEmeguI5GthGnV2mSAU57NkbE7geJW+4Jg4nP3BKRy1u01bLm7GSthCI4oP3JInE1/sQWuWN2MtUMmY89ptgZfTiP/CR1uIGd0TQAGO5kWJy8IIOUfWJ+KbZqHjvKRPif4/KXX6/CDHbxP6RgHHsXXQVcQGv755ekVx7r25XMLZ3iVTEVwdyXO0C2Nie/SNFUUytFSW8qH1yfiEqS/kn9ZPWNLgkejZmNLXWRT3Eds1zFWwHs9OuqfAi828ol1WArpf71oy4el/M0XvYKwv1B2nPHpWRQxnDKvhUq4oGlUUW1eXnE3A0wawo0bshYam7idW4z4jpBjhGTUXW9+e522mnB/Ba0KZdxeo+4/wAQeVpa9EmVcbh6dakKLoBYWBHQ94njI6lCqgILJq9+PGaYIobiDMbmOoUqQH2rk/nJN9HS4KWaVP5nflcW9IyPU0+zPeKucD+bPYEWjLjdvo3naTmtIrEr5Y383U9IVzMeBvwmDMqX+ZrHsIRzZ7Ix/wASJL/pDPhzLG7vfoDNsLTF2PXtGfLeFXxNtJ0pfcnr6R6yj/zzDU93BdvPlO1y0c6Wzm6YfbkfyMydvTKKIFvZr+QmSWQ5a0eUzQOoizmucOlYqttFhYw/hsUmhGdxdh3j2iCmm6LSoOwnpMVcZnrrVZdgoPhPcRgr4xEQO7DcCZSQFJPhSzc7XgEN40/FI8z4hJdha6W8NpWSsS1NuV25QZBUrOin/UGsPG/pCR5fD/UHN77+kf4McD4lZVxVe4udRgoPtvDXE+G1Yqsf8oEK8/KMjWRMN5dyRgKyX5XlKoLGe0ahVgw5iMBOhrzXFA1NKncHaFMHiKoDM17ggLfr6RKw9ctU1N3j/hKLmmGLgtbUim24tIyjiUUrGLh7LRisUMQ4utJAoHdue86CW/79pzT/AM5z0PUenpK35+onR3axtChH0q4vDq3Mc4jcQpSXEpTT3gpZvy5RzzLGBEZj0BM45hc2NTGFzye4B9LiBxQyZUx1YNUVuusj9YyZkbjDeoii7gu/+L3+canfWmHboGH7yM9JFIm2XravVbuB8oRxGXPiClJPte+ewlLCr43PS4EfcqpLSp6j7xG58pKO5FHwtYDBU8Oi01Hujc7c/WS1ceiDdwPjOYca8ckMaNA8ti3nE+hxAw3dmZvMmdODZLJHb34go3/qLMnD/wCPD7s8m/NgyQxZ3nTPUcKCQAALQhlWbaqaFr3Q7gxdqqyaXYW5bd5o2PNWsFQBFY27bzJas5YpJthfNM41ltCMxv0jHhc5Srhk1tZ12Zeu3lFOov0d1LbqPet1lOlitbt7MWB3AgpASSsfeHK2Hd3Dldtxq2tK+YYpPbqEYFQ493kN4oaVRwXJF73t1kGWYge3AS+kuNjfuJktjxR3wHYeg/aDm99vSX0PhX8I/aDnPjPpKrg5xPiVrYuv+KBKpHSFeLWti6w7tAbtGRjSpvIpLeRsIwCbCAFlBNgSLnyvH2jRdsQmjeklMWINx53iBQG8OZfn1Sgj00sdQ5noO0WSsZaDmb5icKaYo7PfVcesdeGOJsXiTY0daqBd+kSaOVpiaaYg1N0FnQkA+sYeGuIGR6VGkVWgGu7A7nygCEuOc9VKD02UpVYWAt0nOMmQe1S3IXP5gxt/9McviFYA6QtlboYq5PVtVCsNxfeYCK1FfHWJ7xqwB10aQ52YfvFnEFSam9rmH8hP1C+Rv+Uj6LSKxYwYPCaCS3U3tJ+M83NHC6gbM40qB27xfw+bMiFz4m1WAPaAuMc1bEBGAsqjl5xPODysaUlQqVXub9TzvIjNypmukzrRzs8mQthOHsRUUOlO6nkZ7CAb8BQFamC9yQOXWBs4wYwtWm63Ck3AM6llfCtKgAFq3HnK3EPBdPFWJraSOUgluhcBHoD6U+pgdC9BbeFs4wq0aKuiBdJG/WMGQcEjDE2rhgehtLuecNNiKZQVAL2PSCUQYC3lWUJVK1HXU7cl6SzxNgBSSkfZqvjAFgL8xD2WcPVKKqFqBmUW7y6+S6xqruXK+JR0B7zKIyjQSot4EPdFP52lCo3jPpL1P3V9INqN4z6SiGOJ8Zf3lX1gJjDvG395U9YAJjxAeXnhmGY0JjfD85NUO9xIqJG8kY8r/C02jEtjbUhax5qCRMpA2uhKsOgJ/WaUKuk89pYoOtz0vNRrPMRnFdgqu5IXleEsoxaNUW/M7H8pTq4VWGxErrgWUghrEdZqCmXsdl92cqesM4PEezo6L72i6KZHOpvJ6dfaxuxiuNhUqLYrXsN7fvNKyErIUqt0W0s03MOKSMtsD1huZA58pax6lWNxYHcSkz3mNIv0s6rqNKVLKOQnkHhZkIp9NezXtM9kv3YFOen7k9/j4+6ZHIagljECoWVbkcrSvg2LbsLHtK68RJ90zYZ/T+6ZlJGoL0KIDXF5Yqnwn0gVOIKfYyPF8SLpIRSekNmoK0j4R6QZVP1nwhDDPdFPdbwZXP1nwhAca44/u3i7GLjj+7eLplIgPJgmTyYxsnMesaquRrURaiGxI5dIqqN445NjtCBG93p5RPRtLRSCT0LtfLXQ2KE+Ylf2fcER6qODyIImYejTb31EmvWulX4oRh5NJAp+/OiUMgwz80nmJ4LoWLAkQ/shH40ICUhfc3lhDaP2W8H4ZuZJhtOFMEm5APe5hXrfAOFHLEe+wBPoDC+W5DWqC+konPU20fx9Fp7UqSk9yLynjccz9bDkAtrRXNiuIo57gFbD2A8afa72iIf1nVMZhrqUtdiJzTHUCjsh5g9dpSMrAyuGmTWZHFO9Pgz2kLYM9o2GmO019mOwkMRrFM4M9pgwLHkI1+yXsJ6AB0E2JrF1crsNTQdXUb7dY3YxrqYqYo7n1mao1jVgj9Wn4RBmJb6z4QhgP6SfhgzFH6z4RkA5Dx0P5p4utGPjsfzLekXCJWPAHk1M2mWmMWMJQLsAOkLUHG63sw5yHIqGrX4tLW8N55VV0Y6ls3fvEe3Q8dF6i7Kw3uO0tVcW6jWF2gfDFtWpjtDlXEpp1AbARHFFFKR4meOtrXsZMvEzkhGPMygMYp5EehtIcYDdSNJIN+0GKM5Ma0xzAhQTZiNh5zo+LyvQlMJhva3QFizFbE9LTl2T4ty9M1dOhSCbWJ2+Ebs4z/L67h3bFoyjTpQOF26izQxjFfCcm2FMTppIXq4JVQcyHN/nF7A6MVikSmhSkSNQueU0+lZUb6lxrk/Zf2lvj4pXyWthkd3qo4pWOlULax263jNKwbHfFZStNytLBa1H22dt4JzzIMM9KpVxGBCMiE6kZtj3NvhBOIxmWNYh8cvp7Q//ACkGZ8S4ZcFXw+FWuxqCzNW1nbra5jKkA5JVA1Gw8NzbnyvtMkmjy+cyG0aj6aM1aZMiGRrNDMmQBI8T7pixiuZ9ZkyLLphkwP8AST8MGYn+p8JkyMuAOTcd/wBy3pFt5kyVjwBqZ4ORmTJjBnKua/8AdJbz7mkyZE+jIpj3TLdT+ifSZMivpRAlPeMvrymTJhWMWC5fCSNzEyZMA2T3pYb3V9TMmTfQmtHkfSUaXut6GezIRRO6n1MyZMmMf//Z",
    link: "https://revista.zapimoveis.com.br/saiba-o-que-e-mito-ou-verdade-sobre-o-uso-da-geladeira/"
  },
  {
    id: "12347",
    title: "Lênin, de três",
    image: "https://static-media.hotmart.com/ogdXLfGqA48DnW-tK6jxelneAf8=/280x280/filters:quality(100)/content.hotmedia/image/b10fbeb7-4802-461e-9cfe-ec8bf02a8153.jpg?Expires=1626313315&Signature=T4bR-jZQAT9Yp4jY327wZnJ8AEntGUegAu-Qxy0zjadNjudsHwGMmaARXZFrXCXOTW17BapYsi2q9XpOGHjkqZLSjmOp2SCWpRc6kJNN78DSywdaZhAbQWC358KtQCKjNYJhNht2r4bckVpTE3OThDbI4k48u-XVtTxXeWu7xklG-e6ZqwGrFHo3QW-J4hTzCwwFyTIhW~4P90d0hTUuWx7fIIMbWlWDRd5GkF8SCiis-zA-QKOxk3vT5H4gU8nguk2bxmf5sHK~2YqXYPltFHr1qQKomaYViBFPXyFzLMBjFTna6U-wdiBbs2jxYG3ZJmyZ9rZxesslzEtf09Hnvw__&Key-Pair-Id=APKAI5B7FH6BVZPMJLUQ",
    link: "https://www.tecmundo.com.br/orkut/58432-11-comunidades-classicas-orkut.htm"
  }, 
  {
    id: "1213124",
    title: "Imersão React 2021",
    image: "https://blog.fcamara.com.br/wp-content/uploads/2019/03/1_y6C4nSvy2Woe0m7bWEn4BA.png",
    link: "https://www.alura.com.br/imersao-react"
  },
  {
    id: "121314",
    title: "Front-end Brasil",
    image: "https://1.bp.blogspot.com/-iqeM0lNB84w/V9YGBs_HIFI/AAAAAAAAEqk/8BgZvAqMd6AddJtyWb6qvwNCpvw_87OnQCLcB/s1600/curso-completo-de-front-end-832011-MLB20455460617_102015-O.jpg",
    link: "https://www.alura.com.br/artigos/comecando-com-front-end"
  }
  ])
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'gustavoguanabara',
    'flaviohenriquealmeida'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {usuarioAleatorio}
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={(evento) => {

              evento.preventDefault();
              const dadosForm = new FormData(evento.target)

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosForm.get('title'),
                image: dadosForm.get('image')
              }

              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="text"
                />
              </div>
              <button>Criar Comunidade</button>

            </form>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.slice(0,6).map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>

            <ul>
              {comunidades.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={itemAtual.link}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}