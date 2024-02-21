var qt = Object.defineProperty
var $t = (o, e, t) =>
  e in o
    ? qt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (o[e] = t)
var k = (o, e, t) => ($t(o, typeof e != 'symbol' ? e + '' : e, t), t)
import {
  d as L,
  r as es,
  o as l,
  c as d,
  a as j,
  u as w,
  X as ts,
  F as G,
  A as ss,
  b as xe,
  e as W,
  f as oe,
  v as Ye,
  g as ke,
  h as I,
  i as Y,
  w as se,
  j as c,
  t as v,
  D as Ce,
  k as ue,
  l as ie,
  U as ye,
  m as ae,
  n as $,
  p as J,
  q as b,
  s as q,
  x as pe,
  y as K,
  z as h,
  B as nt,
  C as yt,
  E as os,
  G as Le,
  V as Xe,
  H as We,
  I as rt,
  J as Ae,
  K as he,
  L as be,
  M as kt,
  _ as ut,
  T as Ve,
  N as Ke,
  O as ze,
  P as as,
  Q as ns,
  R as Je,
  S as wt,
  W as bt,
  Y as rs,
  Z as ot,
  $ as is,
  a0 as ls,
  a1 as cs,
  a2 as ds,
  a3 as us,
  a4 as ms,
  a5 as gs,
  a6 as ps,
  a7 as As,
  a8 as hs,
  a9 as fs,
  aa as mt,
  ab as vs,
  ac as ys,
  ad as ks,
  ae as ws,
  af as bs,
  ag as xs,
  ah as Cs,
  ai as Is,
  aj as Rs,
  ak as Es
} from './vendor-e71ad9e8.js'
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a)
  new MutationObserver((a) => {
    for (const n of a)
      if (n.type === 'childList')
        for (const r of n.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && s(r)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(a) {
    const n = {}
    return (
      a.integrity && (n.integrity = a.integrity),
      a.referrerPolicy && (n.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (n.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (n.credentials = 'omit')
          : (n.credentials = 'same-origin'),
      n
    )
  }
  function s(a) {
    if (a.ep) return
    a.ep = !0
    const n = t(a)
    fetch(a.href, n)
  }
})()
const Ss = L({
  __name: 'App',
  setup(o) {
    return (e, t) => {
      const s = es('router-view')
      return l(), d(G, null, [j(s), j(w(ts))], 64)
    }
  }
})
const He =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExElEQVR4nO2bS4hcRRSGa4yOGkUMKKKiID6yUbIRH7iI7hSiQWV0IwYXtn2rbj9OtaMBF/+5PTPEGNQZIQufCxUkAQVFRIwustfBx8ZkY1ATVCRO8DE+xiinOyNOcuvenqT71u2Z+uBup/7+63XqnDNKBQKBQCAQCAQCPqjVpi6MbTKmCc9py3uM5a8M4bCxOGos/6otftCEWW35DU08bpq4fmxs9xq1kgEwGhMeEEM08d/G8j/L+3BIE+8wFteolQSA041lYwhfL9+UE79j5u6qNtrr1bCjW8mNhvizfhiTYtQfhniqVps5Uw0hI8Zyo/MjBmDOEqMsf6IJV6lhYWxs9xpD/PKgjVnyEQ7HzeQWVXYqlefP0MRv97hFvjGWd8aW7zfUvi7aum2drLxKBWvNOC6JKLlNbjBN+MBYLOT/PfwSUbJRlZgRQ3g1f7Z5b9xK7gBwWq9/uNKcvFjOG0OYy1lJczG1N6gyEls8ln1W4LuohXtOZYx6feoiiY1yTDpwbDWW7Lay+DNj+c9GduKyfo1nLGzWttMWb6kyxTna4tOMGX231dpxTr/H1YTbDfG8e9zkblUGIoLOWjmDMGcRicyztppE78onAEZdEbKcOfU6Lh+0Bk28PeOmfFj5JM6cweTe4kIL7E/XgS/ldlW+0N2XeOpVXqQOyQw4J6qR3Kx8pSy041UucU7BckbkyZG+1flZ5QPdxH2OZf2tj9yNthw5zsLPi9bSQZJdjmW9U3mgE213E27HT9hRL4Gjdpw/8rYqXMyiJuJ9pTmHjKRJU8RUW7hWeUIi6DRNEeFBD2L4pzQxjQbOV54wlmcc275RuBhN/FeaGHl6FC7mP02YdBj0RPFiLH5LE0P09NnKE8biKUdc9njxYoi/TxPzCE1eqjyhLV5yxEJR8WIIs6mz1cKtyhMSwTtis02Fi9GOxJUkzgoX03mTYa1r29fH21cXLkhLxTN9Oe/xknZpJnem6iE+6EOPknKwYzkvSFRbuB5XJYXwuvJW3rE45Lg1porUIulcZ3aR+CHlC92plafO2pwk2IvSYSxecGz3I7UazlO+qDba610pDznEi9AQE25wFgwIzyjfGMu7HNGrnEd2kGNXLC5wN0VgIW5NXKF8U+2uIkcNHgtSfRjEuNK0YAgfuieHZ1RZMFL1dAklnpfc9QCymR+5x8QBrXGuKgu17mx+nDGbEo9slwR7f1pqsnuNdDPZrMpG7dGJK7XFj9kmYb8k2E+m0iAlJE38oiuLcNw475Wyb6hKuEm6LHrq6bEc5QWUnU4Pi7skCNQWv+f93aEwKaJkY24XxtKtt88Qv6kJ09riSfk6UTHxXtfbauhNiqm9QQ7KU/lx/fpKa1K0dds6V464b5/cVs1ks5gwlCYJ0mXR/9XUaX2ZWbzK5ccPtUkARqWRwFmW6XW7WD4iz4e0CHnoTVpEalRSDjbEX6QX+k44xA9qy6/Jqzzv4bliTPr/OSWGmSZvkdKMJNfl65aRselk2ntXnEkD61uyeCfHpPe3AGep1QqCSfkEk3ogmNQD4eDun0nTajVTyzfpZ69Nn6U3iXh+Of9DsupM0hav+NZWNpOmZVvJyhFzSpXHLhFy5qzucycQCAQCgUBA9ca/01SgfkYyM0gAAAAASUVORK5CYII=',
  Ze =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFSElEQVR4nO1azW9bRRBfia8jggKlfPSAACFF4f8AKkQ/0lYFxAFw6lnHeMYNCRdmbJqkEtAol6KKK4iqd+DAAYFEKyq+BEJUcKINLVAqoCQF0jageXYav33P4a3f87Mj/JNWSuzd2R3v7MxvdtaYAQYYYIAB/qew43wHVOVJIJkFlPct8Ukg+dWS/KMNSH4HlG+A5D2LfLBEsqtQ2b/JrCdYO73BEpNF/sQSL68ol7QByhWL8pElea4wceBG068Yxf13WuRDFuVPXyXXaH9YkrlyeWqj6Rcw8/UWWYD4YoaKhhvyBSCeLBQOX9dTZS3Wh4H4y/aL5ctAfMyiTBWrvA0q9aHi5MxNunBt+nfwWZW3aR8gOR6YdHvFT1ji+3uibIlkFyAvtFnYKYsyoWbuK3fseb5LdxNQTrc3c95i8gQgl+McEhD/bKtcUDPP5KhUeK9FORdnOfqdyQMWuRLrXUneROSbM5/PTm8AkrdilF4uoTxtugmo8o7oGeMlS/xM961KRhtzhXe6RPxYNx3UReeXXixVaw+ZnADID+ucjr/4rTxevy/TicbG5m6IemNeylPZFRSrtUfcnQbkz5j52swmAZJazBnquhm3Q+DMogytmonwcpk3R0wZ+Q3TYwDyETdcwT6+PQPB8roberrhjX1RIL4FiH9xdvnlVEL3Vvm2CDeucsH0CYrI4JzlBWVvHQu0KBMug8qCVGTqTB1GBiTFjgVaks/DCstE4rFY2wrEP1rieYu17Qn6b7fEZ7SpJ046j9JQR+HjphMUK3yPG+R9uLFF+SlEBZH3tO/Le4I+q2fxh8TrpJfuDpMhXh4bm7o16firsBV5ynFWx4wHwgpfVXp3tB/vblW22XfeZy4g+bh1fIlqIz7jAwDKYcecp4wHdFJXEUC5pFlWOOOSS9Ef5r+PQCssyozjaw76jA9gUT4IC6ltNZ6ACu+MUwhIHm/y8sh3JeQnvOep8g4nJr/tK8MAyfeh3anUh7yFNE3WVUz/j/sszuSTzVEfdsLTtx0IkVD8TUM24k23val3QkKc43fOW4h1Evy08bdhdm56t2riaeOx42D/8hIwMnL0GndhqRWOPc9N867wzp4qrHDvq9KZdG1kLZPu1Flla9LIp9ar07Ik33kLAeIPexGWtDSTNiwB8jud7Mwh51xM+40PuHEuxAOID4TXKrM+4wPojWAaUm5Rzqaglmf85tIL+tbj14ETLJd5s7M7V/SSPPEigsyns+TBR+HgRsZJHjSPTzo+BIvylWPWkyYhtDqwku75poc+lQWL8kIaSwwBUMadXT7dbxcAQb7dska9BelYYLk8tRFQ/g6dr7xKHAkAyCXHOy9opSKdUJLXHJM5r4He9EPhPVJ34ldSCy6r83ISCa31mB4DiI+GeQJfyOSaVmGRX4zhwKOmR7AktmsX8S23g1875rOktR6TM9SDR2gpyaeZvw6ASn0opgC+mKfSjVAXLqY1XgLxvV2ZsNSggtFyaQ6eW804loYSP5prKLCrIeFIN7y3XrlGHFSTUQHKsyavJw8Q8/hEaz0a+PXMZ+M3uKRhMEbZy7kpu4JGetfmUQvxvNJQvSQ3ntAxDboYZlCtZ7brZtwOJeIHgPiLeKUbCUdwSY4yE+SsWB/WmxOlp9r07+I+fjD48TTFQz6x1rMl9cZdc1BJoeFAnwlq4G+30Azaoj5+6yceb4KnhyRzkTcYKZoeGUB5NTMG1bVCtTo1p96TvPGypngahvqh8O6dbQWxm2TWkrzbfD58XjOwoAUemE/qd9pH+3acvA8wwAADDGDWP/4FAPVu0JK6ZhcAAAAASUVORK5CYII=',
  Us =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGklEQVR4nO2ca4hbVRDHz64rWuoLfNTWZCZd496ZVHbRbGZuVksQQRfEgh+sIvWTVPCLYhE/rfih+KIIVkRRKmgtgoqKVqwfRBRFxEJ9oKJQtfVVrM8WrA9cV84mWeM2ySYn99zN5uYPh4Vlyf753Zk5jzk3xvTVV19NlM1OHoe5wpnGmMFmf5dEDQDLrcByGFlnkHX3itHR5YttqmuEpNsqYGqG3L3YvrpCSHLz0XBmAX2T+FTLrJExIP2zPiCdQSoUTZILMrB80BAO60ya9SaTVCHpPc3glCNIt5kkKs2yFln+bgHQuyZpGh4tnmEL8IJwWGeA9ZBJlq48BklfbQVOdZyeK51gEqKB+uud5iOVC7MmCULSLe3CKc9kstb0flrJVhc4ZUDhetOrCoKJE5H1JVc4lUJ9o+lFIUmIpB91AmcWEOltppc0PJw/uZxSLaxzWho9smldMTq63G48gfRANGDmxgNmKQsoPB9J7keSnyIGU61Bj5mlpFQuzGJQuAZIHwLS/T6g/G+QPhOV9wH7NDOsVwHp9S4DuXhe9cPSQXg5kN4BJA8Cy7NA+l7NiV9sA0h2dQpmEFlvQNKvIwjnqeqHIsmOuGHUjyB505lMKhUuQ9adEeb7VNcBYt3tDAhYn4w0nLn7ANnUdoKDuXAycjPcfYCQ5UM3QB0u4XGpACL92IXPALIcSQIgYP2stua21OlYOZI/zZOZqW4DhCR7q55gJLwASPbYn00BnZWVVFIAAcuX/3kqFCu/+yMTFC7tA+LZWeyrKogMq9Y8zEPpYGJV4iMIWb+rQlidC2VedN2beEBA8n0VQjoojM9Lwc/7gFgOzhVp0vw8QP+YUmko2UWa9ECjFEPWaXvmnWhAWL7lcVSRLsOTT+qmGI6NnZLEWQwr03wNoNsbTvU+TvCgy9dBEBQnauDsy2blpMaAWB9P2ko6ndMLK1G1H84ZHzbNlKLxc6PrHOiS2IvNFmnSLauocGpTOHMhxzrV84CoQSFuUQO2UNn1APYoINt8NJ3KrjCB9PlOj0C6EZC9pmeivPeXXjNxtl1xuo38ytoal87pOmC5Fkk32Qae7TB4aAz6O5NeLA3n8gCsG5DkKbur9hpBpG+YpaxUKlxmowxY3/aTYvpKpIYzJJcgyc8uo+nKtAUBFy4GknciBvRcdHRMpVdG+puTIZKtEVgYBNKNwPprJJBIdpiohSQvOBp6ODIPgWaiiSZ5xEQtYLnO7Wnp9ih9lDu/8mKHEXSf8THLoBugpyM3UyoNAemjHdSgO40PAck+B0M7PV4B3u740DZ5cYQkTzjk+1tezBhj8vn8scD6mkMEbfBiCEg3Opj51HiU3YUj6xdt+cqFk17M4EiRHEL6R+NZtivazjGN3QL58jLosBaZtqlgPAtJNrfqyU443oyAQ86vpsKI8a3yzPZ+C9Hzl9cHhg7vR9i7iSYGVc6Xp30eli0oJL26/ULdoJ3rQfaCaKz7sLpXdtsH9DsGcpGJ61Y+y7cN/ZBs9u1hAEh/cYB0OBOMByYGAclljY6MY3kVCtt8w68m//fE9d663U7UeUgH67aVF+XtYm5QsHO6zsSjwYrPuaJtN9yx/Oc0h+tdAcX9WnaGi4hUuML24GP7pxhoxhUQsLxukiAk2etYh142yf4CEV0ogu4ySVDeHjWQ7GoT0A8NL0n2pEqlIWC5xV4GaA5GjtgubSx7sm4VYul4O2PYKyS1o/z1WDGsPfrqy3Sj/gV9hWpJG54kuwAAAABJRU5ErkJggg==',
  xt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2bS4wbRRCGew3hJSQEKELZeKqdxcFVYyKQBldNlpX2BlwCOYQrF5QDSsIjVxRtlAiExOPChTPixhkkOAQukAVlw0uC5cBTKDxyIomWiEeM2rEQbNzttteemV76l/rmnun+XF011dWtVFRUVFRUVFRUVFRUVFTl1Gw+cC2k+SFAXtYoFzRJdwPtL038g0Z5tdHmu1Toqu/MtwPKxxuEYmn8p0Y5rIK2HJwWnP+0oypEAcnjBcAJFxIgf1AgoC4Qv6jUw1epUKSRzxcJqA/pkwT5ke1NrlceVtFwdFEN5QKQnATkg2maXhMBkcNikU8nrfnZaEHksipeGcuSSl8KVKDvQz4QAZEDEMnJCIhcjpvPR0DkXmYREEVA3Y046mhBFAF1owXR9L6F4hKjCKgbLYjiEuuWlY9FH0QRUDdaELkycr4IJCcA5Ygm3qvbQrBr4eYsy7aYCk2zubA1oU4bUt6niY9p4vd6paf/wRI7BSj75+aym0ad4yx2bu0XRT/fhIB4pYF8n5qMZjYRIF4zNbvSqx7lg5ArGpCs1lv5LlUFlQ1Dr28oHxpHq6qiSlkO8vLWdPFGr3Gnnbs1ydOA/AagfKRJzgDKj6YoCchvAvISoGRj+Z0qAgKSVRNtnINdXLwaiB/VJF/7Q5fvNclj5jMgYEC8NsznNFqd+w3EDbznq6SV7wkSEPSilVUzGvm4Jrk0gXddAuIXlFK1gADxiiOUzwDKKxN/J/Jr3pDKBtRwfAT2LWdaVvtSCIBOuXyO17JC/sPkZeYoDWC2zRz3A+LfPK13b6UBAcp+e7SSL8c9tZaQPOFnRfyNSXArCQiIL9oSTwPO9zlJe/729f3raX6Lr1MfEiDKBCQnLEOaAeRvfZ9Tr+fXD54Xr3k+44wz3ysNEMoRi/VkozxnAoC60No9XzlASSoPWsZztHBAKM9YAQHxuVIgtYUGj0feGhatrJOxzXFIdAPidxydebkMQLa8SxN/Oq0z1rboZiKmC9DBMgDZzgsC8S++0WpU2aIbkPxq7WQGCsiniwa0LctuGDQeTXJ24L+885656QHic86OSWt+tmhIc2kGFkCfDQSEvDStaxfOJbbOkg4AyftFnL7vb2YNAMRvW37/u9kgMzeTRgWz4065TSM/5XDS76pQpHu1rILDPMmzKhTtSHMuHNAd+b0qINV6txULAgTIP5VeWhpVxhd6//sDotsoyapGflKFpizLtpg9ZE8LWBr3kiCgfKf14nUqRCWtfI+PFfw7ug2LVlf0TXmfClka5flRHPaI7WW1CVQzV8snDgfl9eAcs0M1U6qZUNmnbzmbB84/ahA/ZPaQxwVjKqzB+xyvdCjND5ltUn8w/LNx3MFGKzWeaho7u02KYDa7gPiL3sbf5Yu8qya30sTPJaks+C6nvwHqSkKcY2gfKAAAAABJRU5ErkJggg==',
  Bs =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsBAMAAAB9SEr+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTP///////////////////////////////xb9HQ4AAAAIdFJOUwCAvz5nE+qvkBVomAAAAT1JREFUWMPtl70LwjAQxatWXP0aHHUQOlZxcFRcHIuIriIOHV0ER6ui+bMl2ErvcmlCEKQxb+tLf5RqLu/V85yc7NKkBRS+3docuB1MrRjUM+JuPUD2CWFntM763G1g9wqpGl5nN25PBTsEWEVYv3O7J9gzBZbQWLOk2CD7V4M8ds3ctgT7WL08ltD3OMxhDvsFZjjdlh54Po0tFZhh4ng4/9iRu1XsPlEsbnH+vdMUp+UQp/AIhHQ3y26Y6AvXcayuaqnW3Yim6KqWzUfMDjRGV7VUU3HrFw5Objz6FCapaqn49U4PSxB2KTcmHuZamBgdVmPjGJ6eoRbmF205ObbB2CPSwZY6Xx105Ctj8WtPM3w3w1/SG0NqH/7ZVjacbksPPL8Qi2WYYeJIqpoq3yRVTZmmkqqmym4np5LrBeYgWB5+6q94AAAAAElFTkSuQmCC'
class ve {
  constructor(e) {
    k(this, 'id')
    k(this, 'nickname')
    k(this, 'avatarUrl')
    k(this, 'country')
    k(this, 'city')
    k(this, 'clientType')
    k(this, 'memberIds')
    const {
      _id: t,
      nickname: s,
      avatarUrl: a,
      country: n,
      city: r,
      clientType: i,
      members: u
    } = e
    ;(this.id = t),
      (this.nickname = s ?? t),
      (this.avatarUrl = a),
      (this.country = n ?? null),
      (this.city = r ?? null),
      (this.clientType = i ?? null),
      (this.memberIds = {}),
      u == null ||
        u.forEach((m) => {
          this.memberIds[m._id] = !0
        })
  }
}
var O = ((o) => (
  (o.Text = 'text'),
  (o.Image = 'image'),
  (o.Sticker = 'sticker'),
  (o.Video = 'video'),
  (o.File = 'file'),
  (o.Template = 'template'),
  (o.Flex = 'flex'),
  (o.Location = 'location'),
  (o.Audio = 'audio'),
  (o.Recall = 'recall'),
  (o.JoinRoom = 'joinRoom'),
  (o.LeaveRoom = 'leaveRoom'),
  (o.AddMember = 'addMember'),
  (o.DeleteMember = 'deleteMember'),
  (o.AddMembers = 'addMembers'),
  (o.Announcement = 'announcement'),
  o
))(O || {})
class Z {
  constructor(e) {
    k(this, 'id')
    k(this, 'roomId')
    k(this, 'senderId')
    k(this, 'type')
    k(this, 'createdAt')
    k(this, 'updatedAt')
    k(this, 'groupId')
    k(this, 'prev', null)
    k(this, 'next', null)
    const {
      _id: t,
      room: s,
      sender: a,
      messageType: n,
      createdAtMS: r,
      updatedAtMS: i,
      extra: u
    } = e
    ;(this.id = t),
      (this.roomId = s),
      (this.senderId = (a == null ? void 0 : a._id) || ''),
      n === 'line' ? (this.type = u.type) : (this.type = n),
      (this.createdAt = r),
      (this.updatedAt = i),
      (this.groupId = `${oe(r).startOf('minute').unix()}-${this.senderId}`)
  }
  _string(e, t) {
    var n
    const { t: s } = xe()
    let a = s('message')
    switch (this.type) {
      case 'image':
        a = s('image')
        break
      case 'sticker':
        a = s('sticker')
        break
      case 'video':
        a = s('video')
        break
      case 'file':
        a = s('file')
        break
      case 'location':
        a = s('location')
        break
      case 'audio':
        a = s('audio')
        break
    }
    return this.senderId === e
      ? s('youSent', [a])
      : s('someoneSent', [
          ((n = t[this.senderId]) == null ? void 0 : n.nickname) ?? '',
          a
        ])
  }
  get string() {
    const {
      state: {
        imkit: { uid: e, users: t }
      }
    } = W()
    return this._string(e, t)
  }
  get isIncoming() {
    return !this.isOutgoing
  }
  get isOutgoing() {
    var s
    const {
      state: {
        imkit: { rooms: e, uid: t }
      }
    } = W()
    return (
      this.senderId === t ||
      ((s = e[this.roomId]) == null
        ? void 0
        : s.isOutgoingGroupSender[this.senderId])
    )
  }
  get isSystem() {
    return new Set([
      'recall',
      'joinRoom',
      'leaveRoom',
      'addMember',
      'deleteMember',
      'addMembers',
      'announcement'
    ]).has(this.type)
  }
  static fromRaw(e) {
    if (!e) return null
    switch (e.messageType) {
      case 'text':
        return new Qe(e)
      case 'image':
        return new Fs(e)
      case 'sticker':
        return new gt(e)
      case 'video':
        return new Ms(e)
      case 'file':
        return new _s(e)
      case 'template':
        return new Ts(e)
      case 'flex':
        return new Os(e)
      case 'location':
        return new Ls(e)
      case 'audio':
        return new Vs(e)
      case 'announcement':
        return new Qe(e)
      case 'addMember':
        return new tt(e)
      case 'deleteMember':
        return new tt(e)
      case 'addMembers':
        return new tt(e)
      case 'line':
        switch (
          (e.extra !== 'object' && (e.extra = JSON.parse(e.extra)),
          e.extra.type)
        ) {
          case 'sticker':
            return new gt(e)
          default:
            return new Z(e)
        }
      default:
        return new Z(e)
    }
  }
  static fromPayload(e, t) {
    const s = Date.now(),
      { roomId: a } = e,
      n = {
        _id: Ye(),
        room: a,
        sender: { _id: t },
        createdAtMS: s,
        updatedAtMS: s,
        ...e
      }
    return Z.fromRaw(n)
  }
}
const Se = class Se extends Z {
  constructor(t) {
    super(t)
    k(this, 'text')
    k(this, 'translatedText')
    k(this, 'replyId')
    k(this, 'urls')
    k(this, 'html')
    const { message: s, reply: a } = t
    ;(this.text = s ?? ''),
      (this.translatedText = null),
      (this.replyId = (a == null ? void 0 : a._id) ?? null)
    try {
      ;(this.urls = Array.from(
        new Set(Se.autolinker.parse(s).map((n) => n.getUrl()))
      )),
        (this.html = Se.autolinker.link(
          s.replaceAll(
            `
`,
            '<br>'
          )
        ))
    } catch (n) {
      ;(this.urls = []), (this.html = ''), console.log(t), console.error(n)
    }
  }
  get string() {
    return this.text
  }
  static linkfy(t) {
    try {
      return Se.autolinker.link(
        t.replaceAll(
          `
`,
          '<br>'
        )
      )
    } catch (s) {
      return console.error(s), t
    }
  }
}
k(
  Se,
  'autolinker',
  new ss({
    className: 'underline',
    email: !1,
    phone: !1,
    stripPrefix: !1,
    stripTrailingSlash: !1
  })
)
let Qe = Se
class Fs extends Z {
  constructor(t) {
    super(t)
    k(this, 'images')
    const {
      images: s,
      width: a,
      height: n,
      thumbnailUrl: r,
      originalUrl: i
    } = t
    s && s.length > 0
      ? (this.images = s)
      : (this.images = [
          { id: i, width: a, height: n, thumbnailUrl: r, originalUrl: i }
        ])
  }
}
class gt extends Z {
  constructor(t) {
    super(t)
    k(this, 'stickerId')
    k(this, 'stickerUrl')
    const { sticker: s, extra: a } = t
    s
      ? ((this.stickerId = s), (this.stickerUrl = ''))
      : ((this.stickerId = ''),
        (this.stickerUrl = `https://stickershop.line-scdn.net/stickershop/v1/sticker/${a.stickerId}/ios/sticker.png`))
  }
}
class Ms extends Z {
  constructor(t) {
    super(t)
    k(this, 'video')
    const {
      id: s,
      width: a,
      height: n,
      thumbnailUrl: r,
      originalUrl: i,
      duration: u,
      thumbnailFile: m,
      video: p
    } = t
    p
      ? (this.video = p)
      : (this.video = {
          id: s || i,
          width: a,
          height: n,
          thumbnailUrl: r,
          originalUrl: i,
          duration: u,
          thumbnailFile: m
        })
  }
}
var we = ((o) => (
  (o.Buttons = 'buttons'),
  (o.Confirm = 'confirm'),
  (o.Carousel = 'carousel'),
  (o.ImageCarousel = 'image_carousel'),
  o
))(we || {})
class Ts extends Z {
  constructor(t) {
    super(t)
    k(this, 'template')
    k(this, 'templateType')
    const { template: s } = t
    try {
      this.template = typeof s == 'object' ? s : JSON.parse(s)
      const { type: a } = this.template
      this.templateType = a
    } catch (a) {
      console.log(t),
        console.error(a),
        (this.template = {}),
        (this.templateType = 'buttons')
    }
  }
}
var at = ((o) => ((o.Bubble = 'bubble'), (o.Carousel = 'carousel'), o))(
  at || {}
)
class Os extends Z {
  constructor(t) {
    super(t)
    k(this, 'contents')
    k(this, 'flexType')
    const { contents: s } = t
    try {
      this.contents = typeof s == 'object' ? s : JSON.parse(s)
      const { type: a } = this.contents
      this.flexType = a
    } catch (a) {
      console.log(t),
        console.error(a),
        (this.contents = {}),
        (this.flexType = 'bubble')
    }
  }
}
class Ls extends Z {
  constructor(t) {
    super(t)
    k(this, 'address')
    k(this, 'latitude')
    k(this, 'longitude')
    const { message: s, latitude: a, longitude: n } = t
    ;(this.address = s), (this.latitude = a), (this.longitude = n)
  }
}
class tt extends Z {
  constructor(t) {
    super(t)
    k(this, 'members')
    switch (t.messageType) {
      case 'addMember':
        this.members = [new ve(t.member)]
        break
      case 'deleteMember':
        this.members = t.extra.members.map((s) => new ve(s))
        break
      case 'addMembers':
        this.members = t.extra.invitees.map((s) => new ve(s))
        break
      default:
        this.members = []
    }
  }
}
class _s extends Z {
  constructor(t) {
    super(t)
    k(this, 'url')
    k(this, 'mimeType')
    k(this, 'fileName')
    k(this, 'bytes')
    k(this, 'fileExtension')
    const { originalUrl: s, extra: a } = t
    this.url = s
    const {
      mimeType: n,
      fileName: r,
      bytes: i,
      fileExtension: u
    } = typeof a == 'object' ? a : JSON.parse(a)
    ;(this.mimeType = n),
      (this.fileName = r),
      (this.bytes = i),
      (this.fileExtension = u)
  }
}
class Vs extends Z {
  constructor(t) {
    super(t)
    k(this, 'url')
    k(this, 'mimeType')
    k(this, 'fileName')
    k(this, 'bytes')
    k(this, 'fileExtension')
    k(this, 'duration')
    const { originalUrl: s, extra: a, duration: n } = t
    this.url = s
    const {
      mimeType: r,
      fileName: i,
      bytes: u,
      fileExtension: m
    } = typeof a == 'object' ? a : JSON.parse(a)
    ;(this.mimeType = r),
      (this.fileName = i),
      (this.bytes = u),
      (this.fileExtension = m),
      (this.duration = n)
  }
}
var je = ((o) => ((o.Direct = 'direct'), (o.Group = 'group'), o))(je || {})
class _e {
  constructor(e, t) {
    k(this, 'id')
    k(this, 'name')
    k(this, 'type')
    k(this, 'createdAt')
    k(this, 'updatedAt')
    k(this, 'memberIds')
    k(this, 'isOutgoingGroupSender')
    k(this, 'coverUrl')
    k(this, 'lastMessage')
    k(this, 'numberOfUnread')
    k(this, 'lastReadMessageId')
    k(this, 'pref')
    k(this, 'roomTags')
    k(this, 'extra')
    k(this, 'description')
    var M
    const {
      _id: s,
      name: a,
      roomType: n,
      createdTimeMS: r,
      lastMessage: i,
      members: u,
      cover: m,
      unread: p,
      memberProperties: g,
      extParams: A,
      pref: f,
      roomTags: y,
      description: S
    } = e
    if (
      ((this.id = s),
      (this.name = a),
      (this.type = n || 'direct'),
      (this.createdAt = r),
      (this.lastMessage = Z.fromRaw(i)),
      (this.updatedAt =
        ((M = this.lastMessage) == null ? void 0 : M.createdAt) ?? r),
      (this.memberIds = []),
      (this.isOutgoingGroupSender = {}),
      u.forEach((U) => {
        this.memberIds.push(U._id),
          U.clientType === 'group' &&
            U.members.some((B) => B._id === t) &&
            U.members.forEach((B) => {
              this.isOutgoingGroupSender[B._id] = !0
            })
      }),
      (this.coverUrl = m ?? ''),
      (this.numberOfUnread = p ?? 0),
      (this.lastReadMessageId = {}),
      (this.pref = f),
      (this.roomTags = y ?? []),
      (this.description = S ?? ''),
      g)
    )
      for (const { client: U, lastRead: B } of g) this.lastReadMessageId[U] = B
    try {
      this.extra = JSON.parse(A)
    } catch {
      this.extra = {}
    }
    n === 'custom' && (this.type = this.extra.roomType)
  }
  get memberIdsWithoutMeAndMyGroup() {
    const {
      state: {
        imkit: { uid: e, users: t }
      }
    } = W()
    return this.memberIds.filter((s) => s !== e && !t[s].memberIds[e])
  }
  get displayName() {
    var s
    const {
      state: {
        imkit: { uid: e, users: t }
      }
    } = W()
    if (this.memberIdsWithoutMeAndMyGroup.length === 0) {
      const { t: a } = xe()
      return a('emptyChat')
    } else {
      if (this.type == 'direct')
        return (s = this.memberIdsWithoutMeAndMyGroup.map((a) => t[a])[0]) ==
          null
          ? void 0
          : s.nickname
      if (this.type == 'group')
        return this.name
          ? this.name
          : this.memberIds
              .filter((a) => a !== e)
              .map((a) => t[a].nickname)
              .join(', ')
    }
    return ''
  }
  get avatars() {
    const {
      state: {
        imkit: { uid: e, users: t }
      }
    } = W()
    return this.memberIdsWithoutMeAndMyGroup.length === 0
      ? [{ url: t[e].avatarUrl ?? '', name: t[e].nickname ?? '' }]
      : this.type == 'direct'
        ? this.memberIdsWithoutMeAndMyGroup.map((s) => ({
            url: t[s].avatarUrl ?? '',
            name: t[s].nickname ?? ''
          }))
        : this.type == 'group'
          ? this.coverUrl && this.coverUrl.length > 0
            ? [{ url: this.coverUrl, name: this.displayName ?? '' }]
            : this.memberIds
                .map((s) => t[s])
                .sort((s, a) =>
                  s.id === e
                    ? 1
                    : a.id === e
                      ? -1
                      : (a.avatarUrl ?? '').length - (s.avatarUrl ?? '').length
                )
                .map((s) => ({
                  url: s.avatarUrl ?? '',
                  name: s.nickname ?? ''
                }))
          : [{ url: '', name: this.displayName ?? '' }]
  }
}
const Ct =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQUlEQVR4nO2bu2sUURSHz4CISlR8pNi4e24S151zx0ez2XMmD1gROxEVEcRHIYJYCPaCna9CBBULK/uUAUX0D1Ax4gpa2EUbg6CkMaiIyjWKSdjsIzs7z/vBVFvsnW9/587cc+8CWCwWi8ViscQL5cpu1PJQaZ5Ad3gk6vHEijwN7VCaZ5WWX+ZCkm/9mg9EPa54UK2uUFqe/5MzT9J3pfkgZB0kvrRYjpX0FyQpzyWlvqBMJ0mp6ipF8rqRnExLUsS3WpGTSUno8R6l5Wc7gjIjqVjkdUg81a6cBZKocgjSCmq+t1w5qZdUcP39ncpJraRcqbwZST4EJSh1khTJeJByUiUJtZzohpxUSCq4I32K+FM3BSVZkjPXwuiunPmSsOSPQlLALpdW/YsnICkMDpbXI/HTMAUh8QNIEoOhSuLZfvKrod6g646sNd29gpbzqPmq0nIbSS6i5tMDJdkVF0mo+VWr4wkCxywKleZHpv3ZJNJTqOUGUjkXjST+gVqueJ63MhQzWPJHkfhZ2wMl+aI0X8uVy2vCkoRa3iqqDIcixoAkZ5p1+JpPklLr18MKGknS8qRDOaZVcrfXq/ZAWKArhwP7ZYmnTTu1G0lCkveo/b0QAU67Xb4m8Z8Z8Hxu2BdqN0kk43nP3wgR4sRREmr+GKdlhBMnSUh8v9kTMpOSUMuMeWhAjHEik0T8eOv2oQIkAAc13wlKkiL+3PTppvmk+V5IEE6YkpKKY9ZggZUb8XRSSihCSfKy0bIkqThBlptZZEIKcYJLEs/mt/lbIG0Ui2O9ZrINJkV8HdIE7hzboLRMBjgXvYO0gAHL+XeZM4qQkq3jWt2b7LTcPDkFaU0OktT+zEkdTdx8AdKYHCSpmc87fgUgvglpTE7uv5yOXgGQ5DJkQM6yJSHxOUhpWS1FW+WGxPsgA8lZVj8JNX8NdXciJnJalpSYvXQMXk5Lksy5RciwnIaSzA5u7LuHfVTZ1OGE3CoLJu65E2HsQ8aT0yBJlbMQZ/rCS85iHLPNDXEmn/dXK80vIpCTDBTJ0aXkmGRB1kHPP27lNKDXq/YokjfzJE3a5NST5FaOocdHzL//uhpZi8VisVgsFosFYs5vllNJQwrDPNkAAAAASUVORK5CYII=',
  Qs =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nO3WPQrCMBiA4W+yh/BcniABFyNIsrsnOPRS/kz1KlJ35SsdOkhtRaGp7wOB0pZ3CGlSEQAAAAAAAAAAJsC5sjA+bU2IZxviXUd77fTZrHrr3WFpQ7zakB6vhvGp0ndm0XOuLPpi3eiQmZx6T3SZvIt1opvce2J9ugwOhnjKvScmxHpEsM69J2OCNsRb7j35uyVtQ3Tf3BSm3pP2QK8GxKrVfr/IvdfQQ7sv+smPwpR7DZ0dXRL6HehG0WwWPh313uCZy6gHAAAAAAAAAID8wBNoenSqsgBAfQAAAABJRU5ErkJggg==',
  Ks =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR4nO2bu04bQRSG13kBJJQUCDPHcgye43SYnLMFr4HyCkiAKKDlJkGTtKFIHyoq8g5AmvAAQJHkDQINIKFFayMhEDu+7FqOZ/5POt1OMZ/O/Ls7OxtFAAAAAAAAAAAA8Ihqo2kMy7ph2SfWbyNVVr8Qf1ycrEl5IHKmWFeN1VtiTUa87g3rQa02/64wORXWT//BxJIiy1j9S3WtFCKIrFwOe0I0EElyXq02x/LJqWtl2BOhQZbVw1yCjI1nhz4JHngnLecQpE3vBbHcpPOEIHYtNbnsK49C6CDKk0dBCeI+8ig4QdxjHoUmiHrNoyAFcUvSURRFJQjinHkUbAdx633tjqzEEMTOLvpdbsTj6CB2dZP8yMyjkJcYPe+kpcAEybGxstUq1pOO11u5fnU30kdBxurGiyVTSkV1MW4vAEFynJEnJcN66hYkZ94LMlY2s+5IxLrtHMtyFYKgrf4F6T//BbGeZCyxN8bKT/d4+eW9IHrqomchTaw7XYzbDUIQtTvp9PHOtd25c9q3+fJ0PBmMIOpVaHgPitpD4VUjcXQOXlYpUw62O5IOuYMNM8oShC1XdcnBpj1lLSt89tH8uRPsc5DFp+ekkNwJrYNMvuMvOEDlBEfwuoCsXHi5tGwBhzhTTEMW/JOjfwo7BtyWFK+kYTbsiRVQ92Tl+8RM821UNO8/zE1RXdeI9esI/orwOf0V4dVdQQAAAAAAAAAAAET+8gBbyTNTzlJ3OgAAAABJRU5ErkJggg==',
  Gs =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOElEQVR4nO2bz2sUSRTHe6K7/jgIiyxozFQFHZ33OojoOO+NUchRA7q7Fw9ehM0ejR7iwt7UgwcNCOqfkL/Do7/BX+BlYTHir+hZYY3rzsjrnsiYVFfPD2e6OtQXGoaZ7p6qT7/36tWr6iDw8vLy8vLy8vLy8vLyck6l0pF1KqydVkB3NfAHjdzo4fhfI73SwHOjY7QnyLtGdta2KeDHPUJJOOizBp4Jcm050C843xwXgjxKIZ8ZAJz8QlJA9wYIqKGQrgTB8TVBXqSB3g8SUBPSkyLQyW0lGnEe1qDh6EEdwB8U8h0FNB2G4Y8eEFosFuhhsTw+7C0IbVZFD7qypMxdAQcY+4BOeUBoAYR8xwNCW+Cm9x4Q2t3MA0IPqNFLoPYWhB5Qw1sQ9i8X8i6GHlDDWxB6F2tkNR/zMQg9oIa3ILSVLHhRA99QQOeL5doxPcaodh/6KZiYWDsyUtsgZVxZi9NAJzTQ1Xidj/5b9S6mgB4qpD8iGJ32MaxuUcB/KeS/Vx0gBfx4tFw9HHwfFVYNIIX0rzz1zFc9HLWaFwq4ErigrGHo5Qfw/WGobg5ckVuWQ3dLJdqU1uZKpfKDgupRDXRNId9WQO8U8Kf4oHfynQaeVbtqB4MgGFodgID+KZUO/Zy20UKX+axA6MBdF+QauTa3gBTSR40H9trbSb8poOc9WOfzUaRf8wroT0sTC7IrRCPXv8N/1SXB7Gi4zxqOBn4qMSURDvBcH/5zrm1IWQMqhvyLpW0X+ma1QOecB6SQniQ9SYk5JreSeCXTjmgPZLqlvGxOUT4afq/bHo4bgICmjW3SE+vNAZluyn7KFohTps7H39HU0nkygZVrDefNp45u2QGiz0kJoQzLpk63wmlp/2QrpObnyeXnCSSjJaVtMM0Q0M3kJHBlniOuYulDBCkJzpIU8KOV9+UFazKZoXtdNHeiejQB6KuUBz1pg9NMF94Y21I+MO4eoJCOG9sDdN1idV/jSqeSWlLifYFnndrEqSMLqu0zd4RvJ1/Di1JF7BSO1JOkfNKpu8cNkpIkDh7Q9rCiEtpjnWelxZm0IG4GT29tgKazALS1Utlobg8vplpfm5DagbN0v8SbyMZGFSVeHlCiiuXx4UFDyo2LLbOkU3Gxqf+BO6mkag3SHcJpH5IlSLsmDTyb2JGQf+/6vkhTXQ3zrkntqh3sU6IokF53nCg6qKGoTLrSJR9lMtVwURp4xhR/4reDupus7hjbXzSmEHl8G7Ikb0EizZuCaQukQrQU3Ua5Q+BopFsG93rWdTE/a0mB3VgwA16MXcUcT5YBfS3nJiSf9W6mLU7JiZKr4ypkXrTPgQqyiSF+F79nOHWNdCl3o1Y7kgK7OXC36VJI87mPOWmKlp6BZ0x5UnKs4QW5JrejVdCdhiT7jacldEsmm9HoFi8JvY1WMIAvNzPkttzpCzIGFAwMLQUoAAAAAElFTkSuQmCC',
  Be =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO3aS04CQRAGYNSLKEGNXmS0K72ZdIWlUsU95mYSjQY16BVcaOIdjIo2LgyRx4D9HOpP2LD5+6OHoemeVksikUgkEolEEjkF0qEydA+G3sDwhcb+Xqyx2G6FNLBjUUh3p93+gfMSQL4F5PHvi541cqcVOLbTdk+NxdDQdc+WQn6fBodHz8Qij+3YnJcppKu/4HDoedifGeZL54VQ9tpzCz2jF2Lt+2Wv7aW46J7tguGn2cX8qrp8FBrr/eoqAqKjY0Oik8GGQEN5vp8U1ifaYhXyS3JYH+jksS7R2WBdoLPD/gedLXYddPbYVdCNwdZZOFhoo7A1Z7pZ2NXRDcDWRzcIa7P4BuXuD0cu2HFj0FAfmz9ab9LPEtRYVMTYLvKSVVZQ2aNhjeVitmiN3Fn3e5kdWjvYcMsGrR3uLiaP1h62UpNFa4/7xsmhdYBN8mTQOuCJQHS0jnD8EQ0Nm3ZcCoaGMRf7S9A3TssQcQeQP2Nhlz7yYOijqqptp2WA/BgTuxhNI+dFJ9g7VoYfJjNt6NrbYwZ17yd2DJOrjkbRV2ASiUQikUgkku9P4AsjhYRlvSHnTwAAAABJRU5ErkJggg==',
  Ns = { class: 'relative' },
  Ps = c('img', { class: 'w-4 h-4', src: Be }, null, -1),
  Ds = [Ps],
  Ys = ['src'],
  js = {
    key: 1,
    class:
      'w-300px h-300px bg-gray-200 flex items-center justify-center text-150px font-600 text-gray-500'
  },
  Xs = L({
    __name: 'AvatarModal',
    props: { url: {}, name: {} },
    setup(o) {
      const e = ke(),
        t = o,
        s = I(!1)
      s.value = t.url.length === 0
      const a = () => {
        s.value = !0
      }
      return (n, r) => (
        l(),
        Y(
          w(Ce),
          {
            class: 'flex items-center justify-center',
            'content-class':
              'bg-white rounded-xl overflow-hidden flex flex-col gap-3 max-w-360px',
            'content-transition': 'vfm-fade',
            'overlay-transition': 'vfm-fade'
          },
          {
            default: se(() => [
              c('div', Ns, [
                c(
                  'button',
                  {
                    class:
                      'flex items-center justify-center bg-gray-200 rounded-full w-7 h-7 ml-auto absolute top-2 right-2',
                    onClick: r[0] || (r[0] = (i) => w(e).closeAll())
                  },
                  Ds
                ),
                s.value
                  ? (l(),
                    d(
                      'div',
                      js,
                      v(
                        n.name && n.name.length > 0
                          ? n.name.charAt(0).toUpperCase()
                          : ''
                      ),
                      1
                    ))
                  : (l(),
                    d(
                      'img',
                      {
                        key: 0,
                        src: n.url,
                        class: 'w-300px h-300px object-cover',
                        onError: a
                      },
                      null,
                      40,
                      Ys
                    ))
              ])
            ]),
            _: 1
          }
        )
      )
    }
  }),
  Ws = ['src', 'onClick'],
  zs = ['onClick'],
  ne = L({
    __name: 'AvatarView',
    props: { url: {}, name: {} },
    setup(o) {
      const e = o,
        t = I(!1)
      t.value = e.url.length === 0
      const s = () => {
        t.value = !0
      }
      ue(
        () => [e.url, e.name],
        () => {
          t.value = !1
        }
      )
      const a = () => {
        const { open: n } = ye({
          component: Xs,
          attrs: { url: e.url, name: e.name }
        })
        n()
      }
      return (n, r) =>
        t.value
          ? (l(),
            d(
              'div',
              {
                key: 1,
                class:
                  'w-50px h-50px rounded-2xl bg-gray-200 flex items-center justify-center text-xl font-600 text-gray-500 cursor-pointer',
                onClick: ie(a, ['stop'])
              },
              v(
                n.name && n.name.length > 0
                  ? n.name.charAt(0).toUpperCase()
                  : ''
              ),
              9,
              zs
            ))
          : (l(),
            d(
              'img',
              {
                key: 0,
                src: n.url,
                class: 'w-50px h-50px rounded-2xl object-cover cursor-pointer',
                onError: s,
                onClick: ie(a, ['stop'])
              },
              null,
              40,
              Ws
            ))
    }
  }),
  Js =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVR4nO2WQQ7CIBBFuZKa2o3deF/0ZKYmhvUzpBhbYpUZIZjIWxf+Z+ZTxphGYwVgAE7Azijxa4Gz30sjfmPiCvQK8S1wCXs44CgRdywZgU4g3oU1c1xSJZhK9ookEyviD2xq30aNiQ/iY3KegM2sfzE+E/sca7KZyC4u2biYuKCvqryI4P0py5z8CxP5xQUmyolXN0DNFlAzhNS8hiyfVO2PqC8mbp7f5jWBQDy7CWo/x/zAQDJUHck8wCEaSsV3OspE+lAaVcL6QBolIcxWPJY3/oo7tk8INpQnayAAAAAASUVORK5CYII=',
  Hs =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3UlEQVR4nO2ayW4TQRCG+0DgTiRCFHNje4tcfTGZv0aN4yoncEADAhIOIMGRBwBC3gUlyhOwRAGOSIEnACMlcSSWyEHlcSSWhGjaPZs8v1SSZc9096dud1dXlTGVKlWqVGlEZe21s0TMRLIM8BrAm0TyFeAfaoPPm/qbPhOG0tJ3TJkUBHPjAC8CvE4k+27GbwBZ0LZMUQVIDeDnRLzrDvqnAdwl4iVr56dMURRF0RiR3ANkxxfoITO+C8jjer1+KldYa+USEb9PD/QfexcEcxdzgSVqh+nO6pGzvQ0IMobl60TyM3vYg/+27AUB38oEFpCbeYEeAr6QxTLeyxv095kmagepwFrbPg/wVt6Qh0DvELUue4a1JzPejZNCv9Xj0RswkTzKG+p4aH7gBdba+anY4/E1OH4Rtyk1IlnxubQBmRwaGH130evyqx20PTPTPOd5lp8OBRsEc+M+fWO1v/vwDNwd6sIB8KLPAaUNPIC+MwzwetmAieS1I6xMEkmvhMC9RmN2IjEwxZGK/RIC60nQdACW5RIDLyUGRhxnKimwrDgAy6eyAmtg0AW44+JBJe7o+HE4eGT8xaWj764elG8l98j4W+JOMILAnaQbRRrQMSyvJhzL58QdEcnHNDaUAm9aPFrHEo2a4xGG0iorcBjK1cTAjcbsxEhdHlSaxSsfML80rgJkoWzAgNweNtfbHZkQj0p3vPIE8eSJKV6YVvoemaMH9R/jbW/lEgA/9DkT6RjfN74URdGYpjMKDLvhNdVS9GSaViKYNAQIipYuBeSKSVNEHOUNOrAeIDdShS1SyYNWIpgsRdQO9CjIHpa3Ul/GR4modSHb3Zs3dPM0eWp6evqEFqalO9txYZpWIpiiCHEu6plPr0zb0pxvoQtOg35OuX0X4FeO9+meXvE07WmtPW3KJKB9RhNb8QWEVwH+oNFQDQEPrKPfxT51/5mmvpP3uCtVqlSpkslJvwD4sB37/slROAAAAABJRU5ErkJggg==',
  Zs = {
    class:
      'text-xl font-500 text-gray-700 flex items-center justify-between mb-1'
  },
  qs = c('img', { class: 'w-4 h-4', src: Be }, null, -1),
  $s = [qs],
  eo = { key: 0, class: 'flex flex-wrap gap-2 mt-1' },
  to = ['onClick'],
  so = { class: 'overflow-ellipsis overflow-hidden whitespace-nowrap' },
  oo = ['onClick'],
  ao = { class: 'bg-gray-100 divide-y rounded' },
  no = { class: 'grid grid-cols-6 gap-3 p-3' },
  ro = ['onClick'],
  io = { class: 'flex items-center justify-center p-3 gap-3' },
  lo = ['placeholder'],
  co = ['placeholder'],
  uo = ['disabled'],
  mo = L({
    __name: 'TagsModal',
    props: { roomId: {} },
    setup(o) {
      const e = ke(),
        t = o,
        s = W(),
        a = I([]),
        n = I({}),
        r = I([]),
        i = I({}),
        u = I(''),
        m = I('#60a5fa'),
        p = [
          '#f43f5e',
          '#f97316',
          '#f59e0b',
          '#84cc16',
          '#10b981',
          '#06b6d4',
          '#0ea5e9',
          '#6366f1',
          '#8b5cf6',
          '#6b7280',
          '#64748B',
          '#78716c'
        ],
        g = (U) => {
          s.dispatch('imkit/updateRoomPrefs', {
            roomId: U,
            prefs: { tags: a.value, tagColors: n.value }
          })
        },
        A = s.state.imkit.rooms[t.roomId]
      A.pref &&
        ((a.value = [...A.pref.tags]),
        (r.value = [...A.pref.tags]),
        (n.value = { ...A.pref.tagColors }),
        (i.value = { ...A.pref.tagColors }))
      const f = () => {
          u.value &&
            (a.value.length >= 5 ||
              (a.value.includes(u.value) || a.value.push(u.value),
              m.value.startsWith('#') &&
                ((n.value[u.value] = m.value), (u.value = ''))))
        },
        y = (U) => {
          ;(a.value = a.value.filter((B) => B !== U)), delete n.value[U]
        },
        S = (U) => {
          ;(u.value = U), (m.value = n.value[U])
        },
        M = () => {
          ;(m.value = m.value.replace(/[^#0-9a-fA-F]/g, '')),
            m.value.charAt(0) !== '#' && (m.value = '#' + m.value)
        }
      return (U, B) => (
        l(),
        Y(
          w(Ce),
          {
            class: 'flex items-center justify-center',
            'content-class':
              'bg-white rounded-xl p-5 flex flex-col gap-3 max-w-360px',
            'content-transition': 'vfm-fade',
            'overlay-transition': 'vfm-fade'
          },
          {
            default: se(() => [
              c('div', Zs, [
                ae(v(U.$t('tag')) + ' ', 1),
                c(
                  'button',
                  {
                    class:
                      'flex items-center justify-center bg-gray-200 rounded-full w-7 h-7',
                    onClick: B[0] || (B[0] = (_) => w(e).closeAll())
                  },
                  $s
                )
              ]),
              a.value.length > 0
                ? (l(),
                  d('div', eo, [
                    (l(!0),
                    d(
                      G,
                      null,
                      $(
                        a.value,
                        (_) => (
                          l(),
                          d(
                            'div',
                            {
                              key: _,
                              class:
                                'bg-blue-400 text-white text-base px-2 py-1 rounded-md flex items-center justify-center gap-1 cursor-pointer overflow-hidden',
                              style: J({ backgroundColor: n.value[_] }),
                              onClick: (F) => S(_)
                            },
                            [
                              c('div', so, v(_), 1),
                              c(
                                'img',
                                {
                                  width: '16',
                                  height: '16',
                                  src: Js,
                                  onClick: ie((F) => y(_), ['stop'])
                                },
                                null,
                                8,
                                oo
                              )
                            ],
                            12,
                            to
                          )
                        )
                      ),
                      128
                    ))
                  ]))
                : b('', !0),
              c('div', ao, [
                c('div', no, [
                  (l(),
                  d(
                    G,
                    null,
                    $(p, (_) =>
                      c(
                        'div',
                        {
                          key: _,
                          class: 'w-10 h-10 rounded',
                          style: J({ backgroundColor: _ }),
                          onClick: (F) => (m.value = _)
                        },
                        null,
                        12,
                        ro
                      )
                    ),
                    64
                  ))
                ]),
                c('div', io, [
                  q(
                    c(
                      'input',
                      {
                        type: 'text',
                        class:
                          'rounded-md p-2 text-base text-white placeholder-white outline-none w-32 flex-grow',
                        style: J({ backgroundColor: m.value }),
                        placeholder: U.$t('inputTag'),
                        'onUpdate:modelValue':
                          B[1] || (B[1] = (_) => (u.value = _))
                      },
                      null,
                      12,
                      lo
                    ),
                    [[pe, u.value]]
                  ),
                  q(
                    c(
                      'input',
                      {
                        type: 'text',
                        class:
                          'rounded-md p-2 text-base outline-none w-32 flex-grow',
                        placeholder: U.$t('inputTagPlaceholder'),
                        maxlength: '7',
                        pattern: '^#[0-9a-fA-F]{6}$',
                        'onUpdate:modelValue':
                          B[2] || (B[2] = (_) => (m.value = _)),
                        onInput: M
                      },
                      null,
                      40,
                      co
                    ),
                    [[pe, m.value]]
                  ),
                  c(
                    'img',
                    {
                      class: K([
                        'cursor-pointer',
                        {
                          'opacity-20 cursor-not-allowed':
                            !u.value || a.value.length >= 5
                        }
                      ]),
                      width: '30',
                      height: '30',
                      src: Hs,
                      onClick: f
                    },
                    null,
                    2
                  )
                ])
              ]),
              c(
                'button',
                {
                  class:
                    'text-base rounded-lg flex-grow bg-blue-400 text-white h-10 disabled:bg-blue-200 disabled:cursor-not-allowed',
                  disabled:
                    JSON.stringify([...a.value].sort()) ===
                      JSON.stringify([...r.value].sort()) &&
                    JSON.stringify([...Object.values(n.value)].sort()) ===
                      JSON.stringify([...Object.values(i.value)].sort()),
                  onClick:
                    B[3] ||
                    (B[3] = () => {
                      g(U.roomId), w(e).closeAll()
                    })
                },
                v(U.$t('confirm')),
                9,
                uo
              )
            ]),
            _: 1
          }
        )
      )
    }
  }),
  It =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQElEQVR4nO2asUrEQBCGp7PxEbSx8VnEFzG7Bp05sJ05rS18jDsEX8Pn8CxV9ArbkVVEUEJyJrhZ838wXYr92ORLM0QAAAAAGBWVXOwG0evIuo5i3mUC2yqwXYag21SerD12Ff0xrLd1fbVFpRDSzf5W9vO2xZRKIW7wGjcL62t1qntUArGnbPZhXQe2m6OT8/1pCH+JP6UeTUf449NaTkzYXiYlHMUcwgCA/0U1mx9G0fvif0lsq+PZ/KBVOD2Y+7CDDetdq3D2Qw48BOFv5L4R3LDglXZ8w4JoOSrdRO6qotKCSjsqLai0o9JN5K4qKi2otKPSgko7Kt1E7qqi0oJKOyotfSrN/ZdaRjOsz63CaSEk+0GHm0WrcNp+SQshIzhsrwmiD/WZ7tAGq4fLtCNRnuj7mRedZQEAAABAf8UbgvvRyv0JTvIAAAAASUVORK5CYII=',
  go = {
    class:
      'text-xl font-500 text-gray-700 flex items-center justify-between mb-1'
  },
  po = c('img', { class: 'w-4 h-4', src: Be }, null, -1),
  Ao = [po],
  ho = ['onClick'],
  fo = c('img', { width: '30', height: '30', src: It }, null, -1),
  vo = L({
    __name: 'AddToFolderModal',
    props: { roomId: {} },
    setup(o) {
      const e = ke(),
        t = o,
        s = W(),
        a = h(() =>
          s.state.imkit.sortedFolderIds
            .map((r) => s.state.imkit.folders[r])
            .filter((r) => r)
        ),
        n = (r) => {
          t.roomId &&
            s.dispatch('imkit/addRoomToFolder', {
              roomId: t.roomId,
              folderId: r
            })
        }
      return (r, i) => (
        l(),
        Y(
          w(Ce),
          {
            class: 'flex items-center justify-center',
            'content-class':
              'bg-white rounded-xl p-5 flex flex-col gap-3 w-360px relative max-h-80vh overflow-y-auto',
            'content-transition': 'vfm-fade',
            'overlay-transition': 'vfm-fade'
          },
          {
            default: se(() => [
              c('div', go, [
                ae(v(r.$t('addToFolder')) + ' ', 1),
                c(
                  'button',
                  {
                    class:
                      'flex items-center justify-center bg-gray-200 rounded-full w-7 h-7',
                    onClick: i[0] || (i[0] = (u) => w(e).closeAll())
                  },
                  Ao
                )
              ]),
              (l(!0),
              d(
                G,
                null,
                $(
                  a.value,
                  (u) => (
                    l(),
                    d(
                      'div',
                      {
                        key: u.id,
                        class:
                          'flex items-center p-2 gap-3 cursor-pointer rounded-lg bg-slate-200 relative group',
                        onClick: () => {
                          n(u.id), w(e).closeAll()
                        }
                      },
                      [fo, ae(' ' + v(u.name), 1)],
                      8,
                      ho
                    )
                  )
                ),
                128
              ))
            ]),
            _: 1
          }
        )
      )
    }
  })
var le = ((o) => (
  (o.RoomName = 'roomName'),
  (o.RoomMember = 'roomMember'),
  (o.RoomPrefTags = 'roomPrefTags'),
  (o.RoomPrefFolder = 'roomPrefFolder'),
  (o.RoomTags = 'roomTags'),
  o
))(le || {})
const yo = { class: 'flex items-center justify-center gap-1.5' },
  ko = {
    key: 0,
    class: 'bg-slate-500 w-1 h-10 rounded-full ml-2 flex-shrink-0'
  },
  wo = { class: 'h-50px w-50px relative flex-shrink-0' },
  bo = {
    key: 2,
    class: 'absolute h-5 w-5 -right-1 -bottom-1 bg-slate-200 rounded-lg p-3px',
    src: Ct
  },
  xo = { class: 'flex flex-col flex-grow text-left w-0 min-w-0' },
  Co = { class: 'flex justify-between' },
  Io = ['innerHTML'],
  Ro = { class: 'text-xs text-gray-500 whitespace-nowrap' },
  Eo = { class: 'text-xs text-gray-500' },
  So = ['innerHTML'],
  Uo = { key: 0, class: 'flex flex-wrap gap-1 mt-1' },
  Bo = ['onClick'],
  Fo = c('img', { width: '20', height: '20', src: Qs }, null, -1),
  Mo = [Fo],
  To = {
    key: 0,
    class:
      'absolute right-3 top-[calc(50%_+_28px)] p-1.5 bg-white z-10 rounded-lg shadow-md flex flex-col items-stretch gap-1'
  },
  Oo = ['onClick'],
  Lo = c('img', { width: '24', height: '24', src: Ks }, null, -1),
  _o = ['onClick'],
  Vo = c('img', { width: '24', height: '24', src: Ct }, null, -1),
  Qo = ['onClick'],
  Ko = c('img', { width: '24', height: '24', src: Gs }, null, -1),
  Go = ['onClick'],
  No = c('img', { width: '24', height: '24', src: xt }, null, -1),
  Po = L({
    __name: 'RoomCell',
    props: { source: {} },
    setup(o) {
      oe.extend(nt), oe.extend(yt)
      const e = o,
        t = h(() => a.state.imkit.config.styles),
        s = h(() => {
          let R = oe(e.source.updatedAt)
          return R.isSame(oe(), 'day')
            ? R.format('H:mm')
            : R.isYesterday()
              ? 'Yesterday'
              : R.isSame(oe(), 'week')
                ? R.format('dddd')
                : R.isSame(oe(), 'year')
                  ? R.format('MMM D')
                  : R.format('ll')
        }),
        a = W(),
        n = h(() => a.state.imkit.rooms[e.source.id]),
        r = h(() =>
          a.state.imkit.searchKeyword.length > 0 &&
          a.state.imkit.searchType === le.RoomName
            ? n.value.displayName.replaceAll(
                a.state.imkit.searchKeyword,
                `<span class="text-blue-400">${a.state.imkit.searchKeyword}</span>`
              )
            : n.value.displayName
        ),
        i = h(() => {
          var R
          return a.state.imkit.searchKeyword.length > 0 &&
            a.state.imkit.searchType === le.RoomMember
            ? [
                `<span class="text-blue-400">${a.state.imkit.searchKeyword}</span>`,
                ...n.value.memberIds
                  .map((D) => a.state.imkit.users[D])
                  .filter((D) => D)
                  .map((D) => D.nickname || D.id)
                  .filter((D) => D !== a.state.imkit.searchKeyword)
              ].join(', ')
            : (R = n.value.lastMessage) == null
              ? void 0
              : R.string
        }),
        u = h(() => a.state.imkit.selectedRoomId === e.source.id),
        m = h(() => !!a.state.imkit.roomIdsInFolders[e.source.id]),
        p = h(() => a.state.imkit.actionMenuRoomId),
        g = h(() => a.state.imkit.searchKeyword),
        A = h(() => {
          var R
          return ((R = n.value.pref) == null ? void 0 : R.sticky) ?? !1
        }),
        f = h(() => a.state.imkit.sortedFolderIds),
        y = () => {
          const { open: R } = ye({
            component: mo,
            attrs: { roomId: e.source.id }
          })
          R(), a.commit('imkit/setState', { actionMenuRoomId: '' })
        },
        S = () => {
          p.value === e.source.id
            ? a.commit('imkit/setState', { actionMenuRoomId: '' })
            : a.commit('imkit/setState', { actionMenuRoomId: e.source.id })
        },
        M = () => {
          a.commit('imkit/setState', {
            selectedRoomId: e.source.id,
            actionMenuRoomId: ''
          })
        },
        U = async () => {
          await a.dispatch('imkit/updateRoomPrefs', {
            roomId: e.source.id,
            prefs: { sticky: !A.value }
          })
        },
        B = async () => {
          await a.dispatch('imkit/removeRoomFromFolder', e.source.id)
        },
        _ = async () => {
          const { open: R } = ye({
            component: vo,
            attrs: { roomId: e.source.id }
          })
          R()
        },
        F = I(null)
      return (
        os(
          F,
          () => {
            S()
          },
          { modifiers: { prevent: !0 } }
        ),
        (R, D) => {
          var X, P
          return (
            l(),
            d('div', yo, [
              m.value && !g.value ? (l(), d('div', ko)) : b('', !0),
              c(
                'div',
                {
                  ref_key: 'roomCellRef',
                  ref: F,
                  class: K([
                    'select-none flex items-center p-2 gap-3 cursor-pointer rounded-lg min-h-66px flex-grow sm:hover:bg-gray-100 group relative',
                    { 'bg-gray-100': u.value }
                  ]),
                  onClick: M
                },
                [
                  c('div', wo, [
                    n.value.avatars.length === 1
                      ? (l(),
                        Y(
                          ne,
                          {
                            key: 0,
                            url: n.value.avatars[0].url,
                            name: n.value.avatars[0].name,
                            class: 'relative'
                          },
                          null,
                          8,
                          ['url', 'name']
                        ))
                      : (l(),
                        d(
                          G,
                          { key: 1 },
                          [
                            j(
                              ne,
                              {
                                url: n.value.avatars[1].url,
                                name: n.value.avatars[1].name,
                                class:
                                  'h-36px w-36px text-16px absolute top-0 right-0'
                              },
                              null,
                              8,
                              ['url', 'name']
                            ),
                            j(
                              ne,
                              {
                                url: n.value.avatars[0].url,
                                name: n.value.avatars[0].name,
                                class: K([
                                  'h-38px w-38px text-16px absolute bottom-0 left-0 border-2 border-white group-hover:border-gray-100',
                                  { 'border-gray-100': u.value }
                                ])
                              },
                              null,
                              8,
                              ['url', 'name', 'class']
                            )
                          ],
                          64
                        )),
                    A.value ? (l(), d('img', bo)) : b('', !0)
                  ]),
                  c('div', xo, [
                    c('div', Co, [
                      c(
                        'div',
                        {
                          class:
                            'text-base text-gray-700 font-500 overflow-ellipsis overflow-hidden whitespace-nowrap',
                          innerHTML: r.value
                        },
                        null,
                        8,
                        Io
                      ),
                      c('div', Ro, v(s.value), 1)
                    ]),
                    c('div', Eo, v(n.value.description), 1),
                    c(
                      'div',
                      {
                        class: K([
                          'flex items-center justify-between pt-1',
                          { 'text-gray-800': n.value.numberOfUnread > 0 }
                        ])
                      },
                      [
                        c(
                          'div',
                          {
                            class:
                              'text-sm text-gray-500 overflow-ellipsis overflow-hidden whitespace-nowrap',
                            innerHTML: i.value
                          },
                          null,
                          8,
                          So
                        ),
                        n.value.numberOfUnread > 0 && !u.value
                          ? (l(),
                            d(
                              'div',
                              {
                                key: 0,
                                class:
                                  'text-xs font-600 bg-blue-400 text-white rounded-full px-1.5 h-5 min-w-5 text-center leading-none flex items-center justify-center',
                                style: J(t.value.roomListUnreadBadge)
                              },
                              v(
                                n.value.numberOfUnread > 99
                                  ? '99+'
                                  : n.value.numberOfUnread
                              ),
                              5
                            ))
                          : b('', !0)
                      ],
                      2
                    ),
                    (X = n.value.pref) != null && X.tags
                      ? (l(),
                        d('div', Uo, [
                          (l(!0),
                          d(
                            G,
                            null,
                            $(
                              ((P = n.value.pref) == null ? void 0 : P.tags) ??
                                [],
                              (Q) => {
                                var H
                                return (
                                  l(),
                                  d(
                                    'div',
                                    {
                                      key: Q,
                                      class:
                                        'bg-blue-400 text-white text-xs px-1 py-0.5 rounded-md overflow-ellipsis overflow-hidden whitespace-nowrap',
                                      style: J({
                                        backgroundColor: (((H = n.value.pref) ==
                                        null
                                          ? void 0
                                          : H.tagColors) || {})[Q]
                                      })
                                    },
                                    v(Q),
                                    5
                                  )
                                )
                              }
                            ),
                            128
                          ))
                        ]))
                      : b('', !0)
                  ]),
                  c(
                    'div',
                    {
                      class: K([
                        'absolute right-4 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hidden sm:group-hover:flex hover:scale-110 hover:transform hover:transition',
                        { '!flex': p.value == R.source.id }
                      ]),
                      onClick: ie(S, ['stop'])
                    },
                    Mo,
                    10,
                    Bo
                  ),
                  p.value == R.source.id
                    ? q(
                        (l(),
                        d('div', To, [
                          c(
                            'div',
                            {
                              class:
                                'flex gap-2 text-gray-800 text-base cursor-pointer hover:bg-gray-100 p-2 rounded',
                              onClick: ie(y, ['stop'])
                            },
                            [Lo, ae(' ' + v(R.$t('tag')), 1)],
                            8,
                            Oo
                          ),
                          c(
                            'div',
                            {
                              class:
                                'flex gap-2 text-gray-800 text-base cursor-pointer hover:bg-gray-100 p-2 rounded',
                              onClick: ie(U, ['stop'])
                            },
                            [
                              Vo,
                              ae(
                                ' ' + v(A.value ? R.$t('unpin') : R.$t('pin')),
                                1
                              )
                            ],
                            8,
                            _o
                          ),
                          m.value
                            ? (l(),
                              d(
                                'div',
                                {
                                  key: 0,
                                  class:
                                    'flex gap-2 text-gray-800 text-base cursor-pointer hover:bg-gray-100 p-2 rounded',
                                  onClick: ie(B, ['stop'])
                                },
                                [Ko, ae(' ' + v(R.$t('removeFromFolder')), 1)],
                                8,
                                Qo
                              ))
                            : f.value.length > 0
                              ? (l(),
                                d(
                                  'div',
                                  {
                                    key: 1,
                                    class:
                                      'flex gap-2 text-gray-800 text-base cursor-pointer hover:bg-gray-100 p-2 rounded',
                                    onClick: ie(_, ['stop'])
                                  },
                                  [No, ae(' ' + v(R.$t('addToFolder')), 1)],
                                  8,
                                  Go
                                ))
                              : b('', !0)
                        ])),
                        [
                          [
                            w(Le),
                            () => {
                              w(a).commit('imkit/setState', {
                                actionMenuRoomId: ''
                              })
                            }
                          ]
                        ]
                      )
                    : b('', !0)
                ],
                2
              )
            ])
          )
        }
      )
    }
  }),
  Do =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVR4nO2Zzy4EQRCH2wUHJ3F1IeLIwZ9n4B1wE9u9i6rhXLWLo+DGKwiReAESBw/AGxAnJEhcSFZmiUhmd3uYpvVMfcnvXl9qZnp+M0oJgiAIgvAvKeFav0Y6MECPBrmeJhr4SgNvak09KjxZvksrmhBHPq9UdrpUKOh4sz+U/SJNKhTMNy7j1sL0XFqmARUCJqPsnwfoUQMfLSzVhoshjJ/i9/HzpzjC2LiV9gsmzA+FEjbIdRG24XtDsmGUS7ou9zBmeGgJghAWRNRpkHfil2/fZ6izAN1roO3YLSHckPU94C9FI28lhfO02YQw3RZMmO+aCPNhjjd8kBAuAc3mVjjimYQwAPVq4Bffw7kPvc4j9TU9mgzSae62C3zS8iw2SJg74YihpXBlZW3Q94Cus7haG2op/LHlS99DOgvwRVvZhjDwhvdBHUUDrVuFdVSd9D2oq5SBJqzCSqkOg3Tte9jsoZvYJY2w0sB7ORDeTSX7LkzT/gfOlnJUnUotHP/IdvG71GOe5oi61XcIuUw0LQs2Qi4TTcuCjXDLRJuyYCPEMtG2LNgIsUy0LQs2QiwT1rJgwwCf+ZZIHeAzlZVSVB2PzzXvMvY8mWUaUy7QSzRqkI7/5ZfNxkx0XIbaiBNZQRAEQRDUb/EGC4sae12sFiYAAAAASUVORK5CYII=',
  Yo =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3UQU7CUBSF4bcQGbsVYeAajO90A9wHa5B32YhO3BEkRgYkxggbgDTRxBGa0Nse5XzJnXXQk79pSiIicsGa6fIW5hsUP5w88037bPrrcqnbH8d+XvtsYpFni0k2X//25fu69p0a83Hng1Hqy9DjTnwZrxp8rsZ8nEtdEdZd5VJvzh4oIv8TCH5U30+DuwaCqiocCQRVVTgSCKqqcCQQVFXhSCCoqsKRQFBVhSOBoKoKRwJBVRWOBIKqKhwJBFVVOBIIqqpwJBBUVeFIIKiqwpFAUFWFI4GgqgpHgvl+6Kpfl80/4geX+kwzuNTH8MH3s8V1Nn8feizM3zB/uEp9uJsuRzB/Qqm7/sfWXVu2t7EiIiKSunIEhOq3p0W+CNEAAAAASUVORK5CYII=',
  jo =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaUlEQVR4nO2aS2gTURSG4/sBilZxI1grghtBaF0VxKXgq6uKgiiIpJ17k2bOGUVX/neS4mPhQtSFuhUXxZVEW3HlxlU3uqgKrlTEF/jAR+ujlZvpxFaCySQzmUkyB84mZM78H+e/987cuYlEHHHE0TJxGFicsnIdhpXtikJqLVqT76DCtHsEYUSQmpCspqKUgjEuWQ0bpr2nZlApT68SrO6FDVUxPGGECG3Vw5J6GjaEd2j1uCpo0UCdLZHD3mBNuycComtKT2NasrobtuBaUxDuVASrp/kozsaegRnjABaWBTZMbAhbrF/Zl8H68nY20Rm2UN/SRGf5DlvZrtCF+pSGle2Kgf+NuMMcvjVjS3MLjGHBeG+QvV0SRpseWDDGU6a9Tes7cvzcMsl41dTABuGQq08STjV1hwVh0NWWYrtXMiabFlgwbgKYW+isia2S1VdPzrAaCZgwmkxiqdYkrFy7YLz2WsNoHGC87KPBtcVJitTDauoYDQFM+Jyi7Batpbd3aJ5k3Kq2lhF1YEHqt2TsdbVIVhdrqWcEBSxYffIJOuPqEIRUrfWMIIAF421/JrtJkjrhZcko0d1rfztr7xCkfkYUWB0oCjXR79jSKyxGAMzXNfotbPbLMUZAwB8MRncRmrBfMn5UXgNjmQxW6GuTjNWC8MwP2MCApdOhL9qGbg1B2CkY38peS+qdIGwsbh4yHvgFGyiwdMbghH70c+voh31J+Pgf2O8znDFHEq77CRs4sHTs+Usyjs7aECT1psT/JlOEg0VHsLL9hq0TsCrASMYxt54zg+P57O5CFWFN7Ktldo8AsHIszjjr1hwYwDrJeDL9+5C2cOFejG5t7SBg6w4sncnskvu2029hjWRcdT9g64/Zeg0PCjYUYOnY90YyeWXBzHuk01guGI+ChA0PmAvQeaLzS4ovBIR80LDhAnNhGbqvOytZXa4HbPjAXFirX9QLNhLAss5pxMAlIu4wN7mlZat9EE9ZuY7QhfqUwsq1lwVOpy8smj7ON9XQSep7RYdaCrZmNdz4wMgnKg19qCt0wTWmYdm7El5Cb6y1RHfd0Ac09UHN0MV7TowZJ8+sTFQTRGhrqPFMyFcNOzMkY7c+uxjJ2dvZMbntecxWEnrJ0sf5wj7676bWojVVJD6OOOJINEP8AR99+lKlJ3IWAAAAAElFTkSuQmCC',
  Xo =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+0lEQVR4nO2aTU4CQRCFm5W6N7jSiEeAgxjkAO6UmQakaw5QPRCXLlzCRVRAEzd6CfUSSoIrTfET40wbZpA4hdSX1LI7703PvCbhKSUIwtpgzMWW18QDL2iVOEwtaBdI07J95rQJK77Bnm/suwb7wWmmmm60Ccuk9VdOG43zHW3sfdamkg/eVQPML2zWN/iSvYnU87yI6dxqnWz8pFO93tqEFddGvsE3H2xfA3Z9YztZzlgD2D5pcpqefNPJoICKmQV88KC9q5hBmkib43CuE21wjLjpSONXjmZnNBq4Fz1p8lCvX27MXUz3rONp9RRztMFBVHctaBfmL2xi0RECXcUc0hjT3cTi3IX0CyZ+wrajmDMJsu+6vaBVmrtQDIOcMEvklQb5ht1IaIGEFksktEBCy42EFkhosURCCyS03EhogYQWSyS0QELLjYQWSGixREILJLTcSGiBhBZLJLRAQsvN2oWWXrc/xGtBuxAvtNi+Yo5v7G1U9+kZ7q9PqQVwlKjUQoy7i47aEm2sOJoF++joal0l3sQL8OiHlttw0pbhUUybNneGzhJdMzxM8+ByVN9bfiXwj8bgIPWrUg0wT0XNzMWnHN/g0wngdmrDX6ZX6KQNDhY2GymIl6m7yLIgDjiigEr7zSaCriy627Ku/s+GtCS+egRBUP+BT4sLtV3SLOLeAAAAAElFTkSuQmCC',
  Wo = { key: 1, class: 'h-34px w-34px relative flex-shrink-0' },
  zo = { class: 'flex flex-col flex-grow text-left w-0 min-w-0' },
  Jo = {
    class:
      'text-sm text-gray-900 overflow-ellipsis overflow-hidden whitespace-nowrap'
  },
  Ho = { key: 2, width: '20', height: '20', src: jo },
  Zo = { key: 3, width: '20', height: '20', src: Xo },
  Rt = L({
    __name: 'RoomCell',
    props: { source: {} },
    setup(o) {
      oe.extend(nt), oe.extend(yt)
      const e = o,
        t = W(),
        s = h(
          () => !!t.state.imkit.selectedRoomIdsForCreateFolder[e.source.id]
        ),
        a = (n) => {
          const r = new Date()
          t.commit('imkit/updateField', {
            key: 'selectedRoomIdsForCreateFolder',
            value: { [e.source.id]: n ? r : void 0 }
          })
        }
      return (n, r) => (
        l(),
        d(
          'div',
          {
            class: K([
              'flex items-center p-1 px-2 gap-3 rounded-md cursor-pointer min-h-44px w-full group sm:hover:bg-gray-100 relative',
              { 'bg-gray-100': s.value }
            ]),
            onClick: r[0] || (r[0] = (i) => a(!s.value))
          },
          [
            n.source.avatars.length === 1
              ? (l(),
                Y(
                  ne,
                  {
                    key: 0,
                    url: n.source.avatars[0].url,
                    name: n.source.avatars[0].name,
                    class: 'h-34px w-34px rounded-12px text-base flex-shrink-0'
                  },
                  null,
                  8,
                  ['url', 'name']
                ))
              : (l(),
                d('div', Wo, [
                  j(
                    ne,
                    {
                      url: n.source.avatars[1].url,
                      name: n.source.avatars[1].name,
                      class:
                        'h-26px w-26px text-16px absolute top-0 right-0 rounded-10px'
                    },
                    null,
                    8,
                    ['url', 'name']
                  ),
                  j(
                    ne,
                    {
                      url: n.source.avatars[0].url,
                      name: n.source.avatars[0].name,
                      class: K([
                        'h-28px w-28px text-xs absolute bottom-0 left-0 border-2 border-white group-hover:border-gray-100 rounded-10px',
                        { 'border-gray-100': s.value }
                      ])
                    },
                    null,
                    8,
                    ['url', 'name', 'class']
                  )
                ])),
            c('div', zo, [c('div', Jo, v(n.source.displayName), 1)]),
            s.value ? (l(), d('img', Ho)) : (l(), d('img', Zo))
          ],
          2
        )
      )
    }
  }),
  qo = {
    class:
      'text-xl font-500 text-gray-700 flex items-center justify-between mb-1'
  },
  $o = c('img', { class: 'w-4 h-4', src: Be }, null, -1),
  ea = [$o],
  ta = ['placeholder'],
  sa = ['disabled'],
  Et = L({
    __name: 'UpdateFolderModal',
    props: { folderId: {} },
    setup(o) {
      const e = ke(),
        t = o,
        s = W(),
        a = I(),
        n = I(''),
        r = h(() =>
          a.value
            ? a.value.roomIds
                .map((m) => s.state.imkit.rooms[m])
                .concat(s.state.imkit.sortedRooms)
                .sort((m, p) => {
                  var g, A, f
                  return ((g = m.pref) == null ? void 0 : g.sticky) ===
                    ((A = p.pref) == null ? void 0 : A.sticky)
                    ? p.updatedAt - m.updatedAt
                    : (f = m.pref) != null && f.sticky
                      ? -1
                      : 1
                })
            : s.state.imkit.sortedRooms
        ),
        i = h(
          () =>
            n.value.length > 0 &&
            Object.keys(s.state.imkit.selectedRoomIdsForCreateFolder).length > 0
        ),
        u = () => {
          var m
          s.dispatch('imkit/updateFolder', {
            folderKey:
              ((m = a.value) == null ? void 0 : m.id) || `folder_${Date.now()}`,
            name: n.value
          })
        }
      return (
        (a.value = s.state.imkit.folders[t.folderId]),
        a.value &&
          ((n.value = a.value.name),
          s.commit('imkit/setState', {
            selectedRoomIdsForCreateFolder: a.value.roomIds.reduce(
              (m, p) => ((m[p] = !0), m),
              {}
            )
          })),
        (m, p) => (
          l(),
          Y(
            w(Ce),
            {
              class: 'flex items-center justify-center',
              'content-class':
                'bg-white rounded-xl p-5 flex flex-col gap-3 w-360px',
              'content-transition': 'vfm-fade',
              'overlay-transition': 'vfm-fade'
            },
            {
              default: se(() => [
                c('div', qo, [
                  ae(
                    v(a.value ? m.$t('editFolder') : m.$t('createFolder')) +
                      ' ',
                    1
                  ),
                  c(
                    'button',
                    {
                      class:
                        'flex items-center justify-center bg-gray-200 rounded-full w-7 h-7',
                      onClick: p[0] || (p[0] = (g) => w(e).closeAll())
                    },
                    ea
                  )
                ]),
                q(
                  c(
                    'input',
                    {
                      type: 'text',
                      class:
                        'bg-gray-100 flex-grow outline-none p-2 rounded-md',
                      placeholder: m.$t('folderName'),
                      'onUpdate:modelValue':
                        p[1] || (p[1] = (g) => (n.value = g))
                    },
                    null,
                    8,
                    ta
                  ),
                  [[pe, n.value]]
                ),
                j(
                  w(Xe),
                  {
                    class: 'h-50vh overflow-auto',
                    'data-key': 'id',
                    'data-sources': r.value,
                    'data-component': Rt,
                    'wrap-class': 'flex flex-col gap-1.5',
                    'estimated-size': 44
                  },
                  null,
                  8,
                  ['data-sources']
                ),
                c(
                  'button',
                  {
                    class: K([
                      'h-10 text-base rounded-lg flex-grow bg-blue-400 text-white',
                      { '!bg-gray-400 cursor-not-allowed': !i.value }
                    ]),
                    disabled: !i.value,
                    onClick:
                      p[2] ||
                      (p[2] = () => {
                        u(), w(e).closeAll()
                      })
                  },
                  v(m.$t('confirm')),
                  11,
                  sa
                )
              ]),
              _: 1
            }
          )
        )
      )
    }
  }),
  oa = { key: 0, width: '30', height: '30', src: Do },
  aa = { key: 1, width: '30', height: '30', src: It },
  na = { class: 'flex flex-col overflow-hidden' },
  ra = ['innerHTML'],
  ia = {
    class:
      'text-sm text-gray-500 overflow-ellipsis overflow-hidden whitespace-nowrap'
  },
  la = {
    key: 2,
    class:
      'ml-auto text-xs font-600 bg-blue-400 text-white rounded-full h-5 min-w-5 text-center leading-none flex items-center justify-center'
  },
  ca = ['onClick'],
  da = c(
    'img',
    {
      width: '20',
      height: '20',
      src: 'https://img.icons8.com/ios-glyphs/30/637289/pencil--v1.png'
    },
    null,
    -1
  ),
  ua = [da],
  ma = ['onClick'],
  ga = c('img', { width: '20', height: '20', src: Yo }, null, -1),
  pa = [ga],
  Aa = L({
    __name: 'FolderCell',
    props: { source: {} },
    setup(o) {
      const e = o,
        t = W(),
        s = h(() =>
          t.state.imkit.searchKeyword.length > 0 &&
          t.state.imkit.searchType === le.RoomPrefFolder
            ? e.source.name.replaceAll(
                t.state.imkit.searchKeyword,
                `<span class="text-blue-400">${t.state.imkit.searchKeyword}</span>`
              )
            : e.source.name
        ),
        a = h(() => t.state.imkit.selectedFolderId),
        n = h(() =>
          e.source.roomIds
            .filter((g) => t.state.imkit.selectedRoomId !== g)
            .reduce((g, A) => {
              const f = t.state.imkit.rooms[A]
              return f ? g + f.numberOfUnread : g
            }, 0)
        ),
        r = h(() => t.state.imkit.roomTag),
        i = h(
          () =>
            e.source.roomIds
              .map((g) => t.state.imkit.rooms[g])
              .filter((g) => (r.value ? g && g.roomTags.includes(r.value) : g))
              .length
        ),
        u = () => {
          t.state.imkit.selectedFolderId === e.source.id
            ? t.commit('imkit/setState', { selectedFolderId: '' })
            : t.commit('imkit/setState', { selectedFolderId: e.source.id })
        },
        m = () => {
          t.dispatch('imkit/removeFolder', e.source.id)
        },
        p = () => {
          const { open: g } = ye({
            component: Et,
            attrs: { folderId: e.source.id }
          })
          g()
        }
      return (g, A) => (
        l(),
        d(
          'div',
          {
            class:
              'flex items-center p-2 gap-3 cursor-pointer rounded-lg min-h-66px bg-slate-200 relative group',
            onClick: u
          },
          [
            a.value === g.source.id ? (l(), d('img', oa)) : (l(), d('img', aa)),
            c('div', na, [
              c(
                'div',
                {
                  class:
                    'text-basse text-gray-900 overflow-ellipsis overflow-hidden whitespace-nowrap',
                  innerHTML: s.value
                },
                null,
                8,
                ra
              ),
              c('div', ia, v(g.$t('numberOfChatroom', i.value)), 1)
            ]),
            n.value > 0 ? (l(), d('div', la, v(n.value), 1)) : b('', !0),
            c(
              'div',
              {
                class:
                  'absolute right-14 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center hidden group-hover:flex hover:scale-110 hover:transform hover:transition !hover:flex',
                onClick: ie(p, ['stop'])
              },
              ua,
              8,
              ca
            ),
            c(
              'div',
              {
                class:
                  'absolute right-4 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center hidden group-hover:flex hover:scale-110 hover:transform hover:transition !hover:flex',
                onClick: ie(m, ['stop'])
              },
              pa,
              8,
              ma
            )
          ]
        )
      )
    }
  }),
  ha = L({
    __name: 'RoomListWrapperCell',
    props: { source: {} },
    setup(o) {
      return (e, t) =>
        e.source instanceof w(_e)
          ? (l(), Y(Po, { key: 0, source: e.source }, null, 8, ['source']))
          : (l(), Y(Aa, { key: 1, source: e.source }, null, 8, ['source']))
    }
  })
var me = ((o) => (
  (o.FetchRooms = '/rooms'),
  (o.Search = '/search'),
  (o.Subscribe = '/me/subscribe'),
  (o.Unsubscribe = '/me/unsubscribe'),
  o
))(me || {})
const qe = (o) => (Ae('data-v-b41cd63e'), (o = o()), he(), o),
  fa = {
    class:
      'text-xl font-500 text-gray-700 flex items-center justify-between mb-1'
  },
  va = qe(() => c('img', { class: 'w-4 h-4', src: Be }, null, -1)),
  ya = [va],
  ka = ['placeholder'],
  wa = {
    class: 'flex items-center bg-gray-100 rounded-lg h-12 mb-2 p-3 gap-2'
  },
  ba = qe(() =>
    c('img', { class: 'w-6 h-6 cursor-pointer', src: He }, null, -1)
  ),
  xa = { class: 'flex-grow overflow-hidden' },
  Ca = ['placeholder'],
  Ia = { key: 0, slot: 'header', class: 'flex flex-col gap-1' },
  Ra = qe(() =>
    c('div', { class: 'loading rounded-12px w-34px h-34px' }, null, -1)
  ),
  Ea = qe(() =>
    c(
      'div',
      { class: 'flex-grow flex flex-col justify-center gap-2' },
      [
        c('div', { class: 'loading h-3 rounded-md w-full' }),
        c('div', { class: 'loading h-3 rounded-md w-4/5' })
      ],
      -1
    )
  ),
  Sa = [Ra, Ea],
  Ua = ['disabled'],
  Ba = L({
    __name: 'MassTextingModal',
    setup(o) {
      const e = ke(),
        t = W(),
        s = I(''),
        a = h(() =>
          t.state.imkit.searchKeyword
            ? t.state.imkit.searchRooms[le.RoomName] || []
            : Object.values(t.state.imkit.rooms).sort((f, y) => {
                const S = !!t.state.imkit.selectedRoomIdsForCreateFolder[f.id],
                  M = !!t.state.imkit.selectedRoomIdsForCreateFolder[y.id]
                return S && !M
                  ? -1
                  : !S && M
                    ? 1
                    : S && M
                      ? t.state.imkit.selectedRoomIdsForCreateFolder[f.id] -
                        t.state.imkit.selectedRoomIdsForCreateFolder[y.id]
                      : 0
              })
        ),
        n = h(() => s.value.length > 0),
        r = I(''),
        i = I(!1),
        m = We(1e3, async () => {
          r.value !== t.state.imkit.searchKeyword &&
            (r.value
              ? t.dispatch('imkit/searchRooms', r.value)
              : t.commit('imkit/setState', { searchKeyword: '' }))
        }),
        p = rt(500, m, { atBegin: !1 })
      ue(r, p)
      const g = h(() => !!t.state.imkit.isRequesting[me.Search]),
        A = async () => {
          await t.dispatch('imkit/batchSendMessage', {
            message: s.value,
            messageType: 'text',
            paras: Object.keys(
              t.state.imkit.selectedRoomIdsForCreateFolder
            ).map((f) => ({ room: f }))
          }),
            t.commit('imkit/setState', {
              selectedRoomIdsForCreateFolder: {},
              searchKeyword: ''
            })
        }
      return (f, y) => (
        l(),
        Y(
          w(Ce),
          {
            class: 'flex items-center justify-center',
            'content-class':
              'bg-white rounded-xl p-5 flex flex-col gap-3 w-360px',
            'content-transition': 'vfm-fade',
            'overlay-transition': 'vfm-fade'
          },
          {
            default: se(() => [
              c('div', fa, [
                ae(v(f.$t('massTexting')) + ' ', 1),
                c(
                  'button',
                  {
                    class:
                      'flex items-center justify-center bg-gray-200 rounded-full w-7 h-7',
                    onClick: y[0] || (y[0] = (S) => w(e).closeAll())
                  },
                  ya
                )
              ]),
              q(
                c(
                  'textarea',
                  {
                    rows: '3',
                    class: 'bg-gray-100 flex-grow outline-none p-2 rounded-md',
                    placeholder: f.$t('inputMessage'),
                    'onUpdate:modelValue': y[1] || (y[1] = (S) => (s.value = S))
                  },
                  null,
                  8,
                  ka
                ),
                [[pe, s.value]]
              ),
              j(
                w(Xe),
                {
                  class: 'h-50vh overflow-auto',
                  'data-key': 'id',
                  'data-sources': a.value,
                  'data-component': Rt,
                  'wrap-class': 'flex flex-col gap-1.5',
                  'estimated-size': 44
                },
                {
                  header: se(() => [
                    c('div', wa, [
                      ba,
                      c('div', xa, [
                        q(
                          c(
                            'input',
                            {
                              ref: 'searchInput',
                              class: 'bg-gray-100 outline-none',
                              'onUpdate:modelValue':
                                y[2] || (y[2] = (S) => (r.value = S)),
                              placeholder: f.$t('search'),
                              onCompositionstart:
                                y[3] || (y[3] = (S) => (i.value = !0)),
                              onCompositionend:
                                y[4] || (y[4] = (S) => (i.value = !1))
                            },
                            null,
                            40,
                            Ca
                          ),
                          [[pe, r.value]]
                        )
                      ]),
                      r.value
                        ? (l(),
                          d('img', {
                            key: 0,
                            src: Ze,
                            class: 'w-5 h-5 cursor-pointer',
                            onClick:
                              y[5] ||
                              (y[5] = () => {
                                w(p).cancel({ upcomingOnly: !0 }),
                                  (r.value = ''),
                                  w(m)()
                              })
                          }))
                        : b('', !0)
                    ]),
                    g.value
                      ? (l(),
                        d('div', Ia, [
                          (l(),
                          d(
                            G,
                            null,
                            $(10, (S) =>
                              c('div', { key: S, class: 'p-2 flex gap-3' }, Sa)
                            ),
                            64
                          ))
                        ]))
                      : b('', !0)
                  ]),
                  _: 1
                },
                8,
                ['data-sources']
              ),
              c(
                'button',
                {
                  class: K([
                    'h-10 text-base rounded-lg flex-grow bg-blue-400 text-white',
                    { '!bg-gray-400 cursor-not-allowed': !n.value }
                  ]),
                  disabled: !n.value,
                  onClick:
                    y[6] ||
                    (y[6] = () => {
                      A(), w(e).closeAll()
                    })
                },
                v(f.$t('confirm')),
                11,
                Ua
              )
            ]),
            _: 1
          }
        )
      )
    }
  })
const ce = (o, e) => {
    const t = o.__vccOpts || o
    for (const [s, a] of e) t[s] = a
    return t
  },
  Fa = ce(Ba, [['__scopeId', 'data-v-b41cd63e']])
class St {
  constructor(e = null) {
    k(this, 'head')
    k(this, 'tail')
    k(this, 'main')
    k(this, 'length')
    ;(this.head = e),
      (this.tail = e),
      (this.main = e),
      (this.length = e ? 1 : 0)
  }
  numberOfMessages() {
    let e = 0,
      t = this.head
    for (; t; ) (e += t.length), (t = t.next)
    return e
  }
  concate(e) {
    var t
    ;(t = this.main) == null || t.concate(e)
  }
  unshift(e) {
    var t
    ;(t = this.main) == null || t.unshift(e)
  }
  insert(e) {
    if (this.length === 0) {
      ;(this.head = this.tail = this.main = e), (this.length = 1)
      return
    }
    if (e.length === 0) return
    let t = this.tail
    for (; t && t.head.createdAt > e.head.createdAt; ) t = t.prev
    t
      ? (t === this.tail && (this.tail = e),
        (e.next = t.next),
        e.next && (e.next.prev = e),
        (t.next = e),
        (e.prev = t))
      : ((e.next = this.head), e.next && (e.next.prev = e), (this.head = e)),
      (this.main = e),
      this.length++
  }
  merge() {
    if (this.length <= 1) return
    let e = this.tail
    for (; e; ) {
      if (e.prev && e.canCombine(e.prev)) {
        e.combine(e.prev),
          e.prev === this.main && (this.main = e),
          (e.prev = e.prev.prev),
          e.prev ? (e.prev.next = e) : (this.head = e),
          this.length--
        break
      }
      e = e.prev
    }
    e && this.merge()
  }
  isValid() {
    if ((this.head && this.head.prev) || (this.tail && this.tail.next))
      return !1
    let e = 0,
      t = this.head
    for (; t; ) {
      if ((t.prev && t.prev.next !== t) || (t.next && t.next.prev !== t))
        return !1
      e++, (t = t.next)
    }
    return e === this.length
  }
}
const Ut = {
    count: 0,
    config: {},
    uid: '',
    axios: be,
    isRequesting: {},
    socket: kt({ autoConnect: !1 }),
    imageCache: ut(),
    translationCache: ut(),
    users: {},
    rooms: {},
    sortedRooms: [],
    numberOfFetchedRooms: 0,
    numberOfTotalRooms: 0,
    uploadProgresses: {},
    downloadProgresses: {},
    linkPreviews: {},
    actionMenuRoomId: '',
    folders: {},
    sortedFolderIds: [],
    roomIdsInFolders: {},
    selectedRoomIdsForCreateFolder: {},
    selectedFolderId: '',
    searchKeyword: '',
    searchType: le.RoomName,
    searchRooms: {},
    roomTag: '',
    deliveringMessages: new Map(),
    selectedRoomId: '',
    messageMultiList: new St(),
    numberOfTotalMessages: -1,
    replyId: '',
    navigationTargetId: '',
    isRoomInfoVisible: !1,
    isTyping: {},
    isSearchInRoomMode: !1,
    messageSearchKeyword: ''
  },
  Fe = (o) => (Ae('data-v-c9d311bb'), (o = o()), he(), o),
  Ma = { class: 'overflow-auto relative' },
  Ta = {
    class: 'flex items-center bg-gray-100 rounded-lg h-12 mb-2 p-3 gap-2'
  },
  Oa = Fe(() =>
    c('img', { class: 'w-6 h-6 cursor-pointer', src: He }, null, -1)
  ),
  La = { class: 'flex-grow overflow-hidden' },
  _a = ['placeholder'],
  Va = {
    key: 0,
    class: 'flex items-center gap-2 overflow-auto text-sm text-gray-900 mb-2'
  },
  Qa = ['onClick'],
  Ka = { key: 1, slot: 'header', class: 'flex flex-col gap-1' },
  Ga = Fe(() =>
    c('div', { class: 'loading rounded-2xl w-50px h-50px' }, null, -1)
  ),
  Na = Fe(() =>
    c(
      'div',
      { class: 'flex-grow flex flex-col justify-center gap-2' },
      [
        c('div', { class: 'loading h-5 rounded-md w-full' }),
        c('div', { class: 'loading h-4 rounded-md w-4/5' })
      ],
      -1
    )
  ),
  Pa = [Ga, Na],
  Da = { class: 'absolute right-0 bottom-0 p-3 flex flex-col items-end gap-2' },
  Ya = {
    key: 0,
    class:
      'transform-gpu flex-col items-stretch gap-1 rounded-lg p-1.5 shadow-md bg-white text-base text-gray-800'
  },
  ja = Fe(() => c('img', { width: '24', height: '24', src: Us }, null, -1)),
  Xa = Fe(() => c('img', { width: '24', height: '24', src: xt }, null, -1)),
  Wa = ['onClick'],
  za = Fe(() => c('img', { width: '30', height: '30', src: Bs }, null, -1)),
  Ja = [za],
  Ha = L({
    __name: 'RoomList',
    setup(o) {
      const e = W(),
        t = I(''),
        s = ke(),
        a = I(!1),
        n = I(),
        r = h(() => e.state.imkit.sortedRooms),
        i = h(() =>
          e.state.imkit.sortedFolderIds
            .map((P) => e.state.imkit.folders[P])
            .filter((P) => P)
        ),
        u = h(() => e.state.imkit.folders[e.state.imkit.selectedFolderId]),
        m = h(() => e.state.imkit.searchType),
        p = h(() =>
          e.state.imkit.searchKeyword
            ? Object.keys(e.state.imkit.searchRooms)
            : []
        ),
        g = h(() => e.state.imkit.roomTag),
        A = h(() => e.state.imkit.config.settings),
        f = h(() => {
          if (e.state.imkit.searchKeyword && s.modals.length === 0) {
            if (m.value === le.RoomPrefFolder && u.value) {
              const Q = [...e.state.imkit.searchRooms[m.value]],
                H = u.value.roomIds
                  .map((re) => e.state.imkit.rooms[re])
                  .filter((re) =>
                    g.value ? re && re.roomTags.includes(g.value) : re
                  ),
                ee = Q.findIndex((re) => re.id === u.value.id)
              return ee > -1 && Q.splice(ee + 1, 0, ...H), Q
            }
            return e.state.imkit.searchRooms[m.value] || []
          }
          const P = [...i.value, ...r.value]
          if (u.value) {
            const Q = u.value.roomIds
                .map((ee) => e.state.imkit.rooms[ee])
                .filter((ee) =>
                  g.value ? ee && ee.roomTags.includes(g.value) : ee
                )
                .sort((ee, re) => {
                  var Ge, Ne, Pe
                  return ((Ge = ee.pref) == null ? void 0 : Ge.sticky) ===
                    ((Ne = re.pref) == null ? void 0 : Ne.sticky)
                    ? re.updatedAt - ee.updatedAt
                    : (Pe = ee.pref) != null && Pe.sticky
                      ? -1
                      : 1
                }),
              H = i.value.findIndex((ee) => ee.id === u.value.id)
            H > -1 && P.splice(H + 1, 0, ...Q)
          }
          return P
        }),
        y = I(!1),
        S = I(!1),
        M = h(
          () =>
            s.modals.length === 0 &&
            (a.value ||
              y.value ||
              (!!e.state.imkit.isRequesting[me.Search] && t.value.length > 0))
        ),
        U = () => {
          e.dispatch('imkit/fetchRooms')
        },
        B = () => {
          S.value = !S.value
        },
        _ = () => {
          const { open: P } = ye({ component: Et })
          P()
        },
        F = () => {
          const { open: P } = ye({ component: Fa })
          P()
        },
        R = We(1e3, async () => {
          t.value !== e.state.imkit.searchKeyword &&
            (t.value
              ? e.dispatch('imkit/searchRooms', t.value)
              : (e.commit('imkit/setState', {
                  sortedRooms: [],
                  numberOfFetchedRooms: 0,
                  numberOfTotalRooms: 0,
                  folders: {},
                  sortedFolderIds: [],
                  roomIdsInFolders: {},
                  searchKeyword: ''
                }),
                X()))
        }),
        D = rt(500, R, { atBegin: !1 })
      ue(t, D),
        ue(r, (P) => {
          if (
            Ut.config.settings.autoSelectRoomWhenLoaded &&
            !e.state.imkit.selectedRoomId &&
            document.body.clientWidth > 640
          ) {
            const Q = Object.values(P).find((H) => H.numberOfUnread === 0)
            Q && e.commit('imkit/setState', { selectedRoomId: Q.id })
          }
        })
      const X = async () => {
        ;(y.value = !0),
          await e.dispatch('imkit/fetchPrefs'),
          await e.dispatch('imkit/fetchRooms'),
          (y.value = !1),
          await e.dispatch('imkit/fetchRoomsInFolders')
      }
      return (
        X(),
        (P, Q) => (
          l(),
          d('div', Ma, [
            j(
              w(Xe),
              {
                class: 'p-2 h-full overflow-auto',
                'data-key': 'id',
                'data-sources': f.value,
                'data-component': ha,
                'wrap-class': 'flex flex-col gap-1.5',
                'estimated-size': 66,
                keeps: 60,
                onTobottom: U
              },
              {
                header: se(() => [
                  c('div', Ta, [
                    Oa,
                    c('div', La, [
                      q(
                        c(
                          'input',
                          {
                            ref_key: 'searchInput',
                            ref: n,
                            class: 'bg-gray-100 outline-none',
                            'onUpdate:modelValue':
                              Q[0] || (Q[0] = (H) => (t.value = H)),
                            placeholder: P.$t('search'),
                            onCompositionstart:
                              Q[1] || (Q[1] = (H) => (a.value = !0)),
                            onCompositionend:
                              Q[2] || (Q[2] = (H) => (a.value = !1))
                          },
                          null,
                          40,
                          _a
                        ),
                        [[pe, t.value]]
                      )
                    ]),
                    t.value
                      ? (l(),
                        d('img', {
                          key: 0,
                          src: Ze,
                          class: 'w-5 h-5 cursor-pointer',
                          onClick:
                            Q[3] ||
                            (Q[3] = () => {
                              w(D).cancel({ upcomingOnly: !0 }),
                                (t.value = ''),
                                w(R)()
                            })
                        }))
                      : b('', !0)
                  ]),
                  p.value.length > 0 && w(s).modals.length === 0
                    ? (l(),
                      d('div', Va, [
                        (l(!0),
                        d(
                          G,
                          null,
                          $(
                            p.value,
                            (H) => (
                              l(),
                              d(
                                'div',
                                {
                                  key: H,
                                  class: K([
                                    'rounded-lg p-2 whitespace-nowrap cursor-pointer hover:bg-gray-100',
                                    {
                                      'bg-gray-100 text-gray-800 font-medium':
                                        H === m.value
                                    }
                                  ]),
                                  onClick: (ee) =>
                                    w(e).commit('imkit/setState', {
                                      searchType: H
                                    })
                                },
                                v(P.$t(H)),
                                11,
                                Qa
                              )
                            )
                          ),
                          128
                        ))
                      ]))
                    : b('', !0),
                  M.value
                    ? (l(),
                      d('div', Ka, [
                        (l(),
                        d(
                          G,
                          null,
                          $(20, (H) =>
                            c('div', { key: H, class: 'p-2 flex gap-3' }, Pa)
                          ),
                          64
                        ))
                      ]))
                    : b('', !0)
                ]),
                _: 1
              },
              8,
              ['data-sources']
            ),
            q(
              (l(),
              d('div', Da, [
                j(
                  Ve,
                  { name: 'slide-fade' },
                  {
                    default: se(() => [
                      S.value
                        ? (l(),
                          d('div', Ya, [
                            A.value.massTextingEnabled
                              ? (l(),
                                d(
                                  'div',
                                  {
                                    key: 0,
                                    class:
                                      'flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded',
                                    onClick: F
                                  },
                                  [ja, ae(' ' + v(P.$t('massTexting')), 1)]
                                ))
                              : b('', !0),
                            c(
                              'div',
                              {
                                class:
                                  'flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded',
                                onClick: _
                              },
                              [Xa, ae(' ' + v(P.$t('createFolder')), 1)]
                            )
                          ]))
                        : b('', !0)
                    ]),
                    _: 1
                  }
                ),
                c(
                  'button',
                  {
                    class:
                      'rounded-full bg-slate-500 shadow-md w-12 h-12 flex items-center justify-center cursor-pointer sm:group-hover:flex hover:scale-110 hover:transform hover:transition',
                    onClick: ie(B, ['stop'])
                  },
                  Ja,
                  8,
                  Wa
                )
              ])),
              [
                [
                  w(Le),
                  () => {
                    S.value = !1
                  }
                ]
              ]
            )
          ])
        )
      )
    }
  })
const Za = ce(Ha, [['__scopeId', 'data-v-c9d311bb']]),
  Bt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVR4nO3aP0oEMRSA8SfiFl7CPu1AgpV51ovmLeQK9v45gF7Aq6jXEO/gegy1WBlhQZHNvEJQNt8P0kw1fMyEhEQEAAAAAAAAALCtaq27Ue0qqT19jry4HJ/99Xv9C6HWWVK7T2qrbyOXW+ldqHUWc3n4EUdtFdXeh/l8X3oVGnHW41AXB9Kj4IgT1Z5FZEd6ExxxUi6vUe1YOp2Q7ybjHJ0W6U0gzmbEaSBOA3EaiNNAnAbiNAzD2Z5nEZjUTqRHSe2GOA0plxdWyA0xl+XmL6i8dbmF+CqpXfOLNTBJOyNN7th7/90GIk0jkgORHIjkQCQHIjkQyYFjn986OMxl2eXB4RpHzw5cXnDg+ovDeFkq5XKRcnkcR1Q75wIVAAAAAAAAAMg2+AByUSBd2KYVoQAAAABJRU5ErkJggg==',
  qa =
    'data:image/png;base64,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',
  $a =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVElEQVR4nO2azUrDUBBGhxnvS9SZuhOsBF3bufEp+py1olB/3klt3VgEJaUbqbE0LpJOvgMDWc7HnBvI5BIBAADYwTUd0YSEojNwOtXMT+byWZVmfh5cpUuKyPE4XZjL0rJ8/SiXpZapoGiY8/1W2E2p8x1Fw1ze6wJXU6ZoWF3YTVE0DIEFEw6FQWmB0qEwKC1QOhQGpQVKh8KgtEDp1rFxOtfMt5rlbZeSbVfVozrPhk6jRmG1TMWvO6iuV9MdmTo/tt5802k7P+yXdkKiWVYHGzjLar+996RvgemwlTbneX9eWlkWjRf7Q6eROt+oy0vnNV73yNOTks6oC9iOhikahsCCCYfCoLRA6VAYlBYoHQqD0gKlQ2FQWqB0KNTl9a+Pd4qGOs/qzzFPKRpDp1HNjmzR+G9B19EyFdWSXLN8rKt6jniTdotqZ9yHC+IAAED/5BvYQaHooEGgKAAAAABJRU5ErkJggg==',
  en =
    'data:image/png;base64,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',
  tn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnklEQVR4nO2a3WoUMRSAT3Nm1RfQ2t1kaqUqtChiFdvdk1mxVnwBwfcQrUUEr8SfG71U36AUFQUvqxa9EsULaX0D0dpWqVCstsppKyxuMtntj/t3Pggss0km+TY5yWYGQBAEQRCEdWIsnjaE943FD4bwOydNOGUs3jMJDkGrks3DAU1qwlj8nZpIvcgS7IdWQlNU1IRzQTlrSVuc1TZKoHVGDlYsp1RSLoF90OwYq55VK6d0ukEzYxIcWrectRQTDkKzYlZXK9f0+aFJXTR5yHKKSQ3zNU/eu9CsGF7KnaNCDZfnVZecgginoFkxhPNOQRY6/s3L19xxCOehWTGeuLJZ+RseI4LSEUEBRFAAERRABAUQQQFEUAARFEAEBRBBAURQABEUQAQFEEEBRFAAERSg5QRpi4uuDvT0wLZqjlz5oL6s7n7IeQ7tv7nq7j4D230PBKBWaIuzrkbtJthZzaE9H9CX51UjnkP7SVfdXceh3TPiZqBWaMJJV6OySTRQ7WOflacYeciujhw1Uu1jn5iigju/eg+1Qlv12NmoRJ135Y8JT/niSqUptnjS05YL7hGnHkGtMBaveho14S1Danz9gtRzX72a1CvPCLoCtSImHHR2hPBX+wDscpXhV1l8sSuQZnQRulPiz5KrXK6AJ6BW9PVBhhvu6dANXzl+laVKSTMmiayvPkN4y/NDfYEiRFBLjC/wEi5kLRhfOX6VpaI3PUiN+0YO01GAmO9VTUD/r2TzmcMpnRsDgLbQNOWOrKyIvE8inOfPfM0XkEtoM1Y98Nx/WSeZg1APGKuepki6vFX35QDsu6+26gnUCznKHOLA7GnskiZ1brPvyXX6ArMh/GkKmV6oJwzhzZRYsqwtXg9Ntwpp49dlvHJW4981qDc6i7DDWPUuEHDH0gJ3CA7IKTHn7x7sLf8vg3okttBlCKfTO4ALPNp471JpvSv7HMJbvtWqZGpNdxZhD9QzJh8d1YRfK9jbLGmrXvJfhNhGeZbApwCc+DNf4+84T9p0KhE/F9vMEWgEdBId0xY/VbER3FDShB9jyvRBIxET7NWk3my5HKte1/208sHBklcv38HaxsTgIq9WvsO5hiIm6DFWPeTlfhPkLPNKxnVCs2EKmV5t8U5opfOkz5rwdlOKKeMsYK4Q9fMporY4mjKNRjkP5+Uy0KoYj6Bat6tuMCIoHREUQAQFEEEBRFAAERRABAUQQYIgCIIgCAI0Gn8ADIaRj4Vk+wwAAAAASUVORK5CYII=',
  sn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVR4nM2ZX0hTYRTA1z8o6KEiooiiCCEqiCDqxTLopR6Dbnf3nO/u7l8XSvLBhx58UZo+JEEYmUYDzQ3MhCDC6bb2FqSNVIikt0gTaTMlMPpj+cU37/Squ/d+d5uuAwf2sLPz4/z7vu/M4ShQBEHYAADbZVneL0nSYUmSylwu115FUbY51lIkSdqJiJcB4C4ixhHxIwD8RERqpgAwAwAfEPEFANwihFwQBGFLUaBqa2vXI+IlDWjWCgY5lUEjYich5HQhETsFAMPFgkJj2OeiKO6zBQcAPgD4vdpwuKhTiHiOCw4Rr68hGNVF8ockSeVWaS1HxD+lAMR5TRNCduWEq6io2AgAIyWEo1okQ0Z1J5caDucB/yLikVy1N1BqOFyEvLcEThTFA4g4Z2VYV1dHn3Z306amJkoI4Xbodrvpo2CQPunqotXV1TyAE+yE0qdXtTIK1NfTVDpN05OTGY3H49Tlclk6U1WVDg0PL9h9Hh+nN6qqLO0IIcf16W2zMujp6VlwwgupLoPLamtrqyWgJEnX9ICDVgZt7e0rHKVNII3gmAYCAZ7SeKBP8TeeOnqTTHJBqiZwLBOctRvPwAmCsJW32D0eD33d35/TcSKRyED6/X46ODSU8zvRWIzKsszbySPZ9O7hBWTq8/kMI/kykTCOXCRiq/MRcTR7vJXZAcxGsn9gICdIoZHTRXA6A+h0Ok/YBbQDGc0DTtPZbIOczQeQBzKaP1xGFUXZzGrwTL4/4DdpCH3jFASYb4qt4NKFQ87m3SS8cOnCIKcygIqi7LZjaDaEe/v6uIe5lQLAJ9uDmkXu7eCgaUN4TBrHTiQB4L3+qJu2MvB6vdxD2GcyzGOxGNfABoCoHjBpZRAKhXI6jPT25nRoBtnQ0MATxfv620wwn+tWxADOCrKlpYUnglf1gF6e2/SXVMr22erz+WhSBzk6NkYrKyst7ZxO59EFQLbs0R4rpkY1NTU0HA7T242N3N2I8wOXNjc308cdHVy3ae2isG75o+mVHaerrHdyvequ/AdglC0ORFE8ZLTnW/VlEVpr0GEksiyfRMRfJYQbFwRhhyGgNhPdPG/kYisAzLAAmcLp6pHwbE+xeHATbB/psCOEkGNr0NlziBg23GhxRvM8ADxj+7sign1FxIdLhnGhwm49AHCRLcI14HfaZtSwqQDgOyKmtLO+EwBushu8qqqbigbGI8wh+yuCEHKQ7ZvZ5xUnQZ7yD8zfzl1rwXkSAAAAAElFTkSuQmCC',
  on =
    'data:image/png;base64,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',
  an =
    'data:image/png;base64,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',
  nn =
    'data:image/png;base64,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',
  Ft =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtElEQVR4nO2bsWtUQRDGV1AxWCoWWgsS7ULgbufI2RxWNlraqq34F7ybiYgaYqVFsBP/AEWFgJWQUtBCkICW0Sg2ejeTa3RlL57cJXfcnXkvu++9+cG0B/vdt9/uzts1RlEURVEURVGmYTZxh4H4rkX5DCjfLcqDBeqcnupHioxFvgMkbrD4F5A8raHUTdnpOod2CjRQb2vE1+uJO2LKyBhxXK8syRdAbs7f/nHMlIlJBYKeUMgdS/y4lnRmTRmYViDoyymL/AqQLxrnDpii8v8CSZ+r5F1hcyoNgaBXKJs+p+rJz+OmKKQqEBUwp7IQCP45in/nPqcyFYh251Rl2c2YPLFfAkFec2rfBaLBnAJqnTUxE0ogyEtOBReI+lxFvA7EN6LKqdCiwPD66rsMNuGTofWJVSDXn1PVpHVOBaKx028tSE6FdgnEnlN+FYEIBj51oWxakqSatE5kLdDH4IPdm6O2AOVRZvsp22xfCz3IdBzVnQmrVWxfSD2ngPgSkLwA4g8WuR18sHt1Fcp7S+2rmfWnKstuxu9BasRzfuXwh0x/frIkKxbluSV5M0GzP3hZlG9+P1W5xadMCBpL7mg16ZypLsqCbcoVS3wTUO4D8RNAfh2LI//up5bmVtwhEyONSIT0Ipk808hYSD/lTJ5plFWgRiRTDJDvlXPgND6kvTj1xB1MZeAVXeYHsciXAeVlLP94VBvF7iaQwg8q2qOGJf6Ua7dkfVjVdscYcuiY9f1tmOVHmDVtudIOUbRpL6Mco599IIZ8mYTQ2QL66VmGu0UvL8jIfNHrLzTMMXqByuUuXyYhk00d6iVOV4jrdZOQjmNEL5LDLmH0KYIrfL5MwrT5Ml/C51AbY8Qp94O6kU8yUZ7B4tZ5U3b8o167LdJG91EvyUN91KsoiqIoiqIoZps/5GTgdqN3Zd0AAAAASUVORK5CYII=',
  Mt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVR4nO2bv4vUUBDHn6DicaViobUgnp292lnZaGmrtuJfoOV5B1ZaiJ34BygqCFaC5YEWCyIoy2XfzOzOxEIQ3MYbye3q/Yomuyb3XpL5wLQL893J900mb5wzDMMwDMMwjFno9fSwR74HKAjEKSA/GDCfmulH2oxHXgYS3R4e+adHfobIF1zXmVSO6D/iPaLc7Pf7R1wXKRBHt6pKCEjuev/tqOsSZQWCrRh74ieI6RnXBeYQSH/7FCC/8SSXVfWAayvzCgTbA+VDa32qEoHoj08NM58CgGOuLVQpELTRp2oSSKc+tdF4n6pTIMjxqSRJFlyT2DeBqKE+td8CwS6fIvq65GImoEDaCJ8KLRDsjE8w5FtR+VQEoujeqpJRNmVYFzkRWp8oBYK9PnXWBKKCqiJ5F8SnIqgSjdqnNk8RCp70XP2UR75DRMdrFQhQPodO9j/jh0d5XFs/BcA3IkiygoriDU/yGmB0qXKfQkyvAMpLT/zRo3xvgVg9GPL12uZTSZIsZD0IopzLTo7sJXNzHk3yCFBeeJK1EsP+4OFJOOunkiQ96UJARIsAchqRzwPItQHybSC574mfepK3EVXkGIhX11QPuRihaITkVddkqGYhs0fONRnqqkAUyyOGvNLNxKmESSOvqOrBShJP7JjfCeLoKpC8iugfj6dRnDaB2vSo7VXDo3wJnVzUL6s27iggggrQqAdmESSsZcJGrpQrjA3tIa9a7LOPxOEvZQjuLWifnrXAX+zyAuzyF7v+QjkVYxeopHn+UoaazHdslzipBdfrylBJxaBdJNccf7FVBGi7v5RhVn/xnVuHQoYCcbq9UPe3lUxAfj4guei6znSpd3lSSZwC8UNb6jUMwzAMwzAMN+EXe4XJ/lKRL1IAAAAASUVORK5CYII=',
  rn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRUlEQVR4nO2YzUrEMBSFsxp9CX0SYTazGJKCm5yZ5dhcEBRci4hjl/NO7sadvoH6Fu6GghKoNNZfMkkpw/ngQgmX5J6b00KvUoQQslMUKMcG8mis2xjI25ewbqOte/B5amgUOD3UcK/fFt4Jn3c8PzlQQ0Jbd/6f4oM4U0PCQKqguCo2JwsFyiMDd/lrWLlrve6fI3PQhj83iYBO5/qMigI8ZlZOjJXV50+irJIHOvvPyolKSXhA0o172p8C/sLwBiI7lHs9GRTQwBuIhRZqoIVioYUaaKFYaKEGWigWWqiBForlx84FP+ZbrYP/xDs+ldCQ+uMAAKOUe0+nF3vt9FpqlQNj3UsweLpKJQLASEOuAwFPKgfautueZqI3WQSMF4t9DbnPWbyGW3s7ZREQiFhquOfwndiuaKm9bXznsxZPCCEqJe/j5Sspw8QNvwAAAABJRU5ErkJggg==',
  pt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6UlEQVR4nO2ZS0oDQRCGBwT1AD5AfN1E0KhJV1QSuzSuYqqCiOBar6AHiBHBA3gLieglfIsLcRPduFBQesKYjijCTLckWB/MIh3yd1X13wn8CQJBEP4vs8vFcUDaB6Q7hfwGyO9xHxV+nu4AqaryNOa9+OwizSjk5yRFw0+P5idYKqW8Tt5b8dhsIotro14aaNgmOnq6zGB5EhG7k2giYnd2kaZA89Wntua9wAcNrzY2McW71M6aJprDuXEjurLWB8hH0Wv7wiad/FeMnn2xg6TMFXgQkC+MYLRmezXwALjUV0iHX8U6qwFNjx3dAHwjJg38AsgJWIiFYgBiIQuxUAxALGQhFooBiIUsxEIxALGQhVgoBiAW+mUaHZVKqNZiu8I1zbe+ciFYKqWsoV0nFlSa7yPB+QINhZsgVa0I8Mps6iKZyyBPtyRzSJXkDSDXmsVSIVzL01gYwPrMRpHqTrJRhbxtebLWctTemqC6iRgDFywsr46A5pdm4Eob0XtmQuaYTYbp4v8BFepQxXkqDci71nRe7SY6golisRc0nbVMTdOJwvJKOlcejr6d2prp3PqAQj71eHGPvDeRTm/2KKQd+044eTSdmwg/+CvCi420BZqPze9E/AtMD4B0kMZS/58VLwhC0FZ8ALiaxMwFZ/dcAAAAAElFTkSuQmCC',
  At =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO2Xu4sUQRCHC8HHJYqgiAgmXqKpkQgqIjjTtRss9m/v9MBzqpbB9TA08MUECv4DcslhaCSYGZkoCAZiYCCoaGRwoKKooIi6K+OB2w4LB+exsyX9wUQzDPV1PbqbKBKpj2RmZqOD3GpCJ8li8OzlIUP7DF1MkO0ho8H3GdpzkFNkNfgUnTmyQBKDr4kkrnxNJP/ZyveHPl7eM+Q1Qx8x5KaDXuRjeujg7OyGWgUcZL4SbG9Zmb/E9Kvzcoe9TAOYGN8MYPnHQT8w9ErjeL6lbokeQ7vhN3yiu5lxckfa1v0OmbKX6wx9OlxEPjP0cpKcXT9WEsNoIN/JkAsMfTYkIy9cWw7QuEuUFEWxhpG1nNfHFYkfzsul8v3YS5SUgaZeOw76riJye2QT618lSprTuo293q1MrPtHkG8iKxJLZSVXK5m4V2smVnIfSNGZc15+huVUV08suindvZL/NCCnK+V0nqzdiRlybSAh38s9hSxRlD0RNraX5yPd7FaDo618+9LBsIZSWi0Y2g0EPpbHFLJWSg7y5M9U8lKQNRyydiDw1lwvFL8bWl4OplLWIms4L0W4uZE1mtDJQODT3jxfS9bgoIwakH1kDYYsBDe5c2QN5+XMYBrpDbJGis7h4GjxgKyRTOW7glPqK7JGgmxrIPCGrAFgIhilX8gaANYFAt/IGogCkUgkQiPgF1+GFsoZdsMBAAAAAElFTkSuQmCC',
  ln = (o) => (Ae('data-v-4d9f50b6'), (o = o()), he(), o),
  cn = { class: 'flex gap-3' },
  dn = { class: 'flex flex-col gap-1' },
  un = { key: 0, class: 'w-10 h-10 rounded object-cover ml-auto' },
  mn = ['innerHTML'],
  gn = ['innerHTML'],
  pn = ['innerHTML'],
  An = { key: 3, class: 'flex flex-col gap-3 my-1' },
  hn = ['onClick'],
  fn = ln(() =>
    c(
      'div',
      { class: 'my-0.5 w-2px rounded-full bg-blue-300 flex-shrink-0' },
      null,
      -1
    )
  ),
  vn = {
    class:
      'flex flex-col gap-0.5 flex-grow overflow-hidden align-center justify-center'
  },
  yn = { class: 'text-sm font-bold ellipsis' },
  kn = { class: 'text-xs multiline-ellipsis' },
  wn = ['src'],
  bn = L({
    __name: 'TextMessageContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = W(),
        s = h(() => {
          var A
          return (A = t.state.imkit.messageMultiList.main) == null
            ? void 0
            : A.map.get(e.message.replyId)
        }),
        a = h(() => {
          const A = s.value
          return A ? t.state.imkit.users[A.senderId] : null
        }),
        n = h(() => e.message.isIncoming),
        r = h(() => {
          const { urls: A } = e.message
          return A
            ? A.map((f) => t.state.imkit.linkPreviews[f]).filter((f) => f)
            : []
        }),
        i = h(() => {
          if (s.value.type === O.Text) return s.value.text
          if (s.value.type === O.Image) {
            const { t: A } = xe()
            return {
              [O.Text]: A('text'),
              [O.Image]: A('image'),
              [O.Video]: A('video'),
              [O.Sticker]: A('sticker')
            }[s.value.type]
          }
          return ''
        }),
        u = h(() => {
          if (s.value.type === O.Image) return s.value.images[0]
        }),
        m = h(() =>
          t.state.imkit.messageSearchKeyword
            ? e.message.html.replace(
                new RegExp(t.state.imkit.messageSearchKeyword, 'ig'),
                (A) => `<span class="bg-amber-400 text-white">${A}</span>`
              )
            : e.message.html
        ),
        p = (A) => {
          window.open(A, '_blank')
        },
        g = () => {
          t.dispatch('imkit/navigateToMessage', e.message.replyId)
        }
      return (A, f) => {
        const y = Ke('src')
        return (
          l(),
          d(
            G,
            null,
            [
              s.value
                ? (l(),
                  d(
                    'div',
                    {
                      key: 0,
                      class: 'flex flex-col gap-2 cursor-pointer',
                      onClick: g
                    },
                    [
                      c('div', cn, [
                        j(
                          ne,
                          {
                            class:
                              'row-span-2 h-24px w-24px rounded-lg text-sm flex-shrink-0',
                            url: a.value.avatarUrl ?? '',
                            name: a.value.nickname ?? ''
                          },
                          null,
                          8,
                          ['url', 'name']
                        ),
                        c('div', dn, [
                          c(
                            'div',
                            {
                              class: K([
                                'text-sm font-bold',
                                [n.value ? 'text-gray-600' : 'text-white']
                              ])
                            },
                            v(a.value.nickname),
                            3
                          ),
                          c(
                            'div',
                            {
                              class: K([
                                'text-xs multiline-ellipsis',
                                [n.value ? 'text-gray-500' : 'text-gray-200']
                              ])
                            },
                            v(i.value),
                            3
                          )
                        ]),
                        u.value
                          ? q((l(), d('img', un, null, 512)), [
                              [y, u.value.thumbnailUrl]
                            ])
                          : b('', !0)
                      ]),
                      c(
                        'div',
                        {
                          class: K([
                            'h-1px -mx-2',
                            [n.value ? 'bg-gray-200' : ' bg-blue-300']
                          ])
                        },
                        null,
                        2
                      ),
                      c(
                        'div',
                        { class: 'break-all', innerHTML: m.value },
                        null,
                        8,
                        mn
                      )
                    ]
                  ))
                : (l(),
                  d(
                    'div',
                    { key: 1, class: 'break-all', innerHTML: m.value },
                    null,
                    8,
                    gn
                  )),
              n.value && A.message.translatedText
                ? (l(),
                  d(
                    'div',
                    {
                      key: 2,
                      class: 'break-all text-gray-400',
                      innerHTML:
                        A.$t('translation') + ': ' + A.message.translatedText
                    },
                    null,
                    8,
                    pn
                  ))
                : b('', !0),
              r.value.length > 0
                ? (l(),
                  d('div', An, [
                    (l(!0),
                    d(
                      G,
                      null,
                      $(
                        r.value,
                        (S) => (
                          l(),
                          d(
                            'div',
                            {
                              key: S.url,
                              class:
                                'flex items-stretch justify-center gap-2 cursor-pointer',
                              onClick: (M) => p(S.url)
                            },
                            [
                              fn,
                              c('div', vn, [
                                c('div', yn, v(S.title), 1),
                                c(
                                  'div',
                                  kn,
                                  v(S.description || A.$t('tapOpen')),
                                  1
                                )
                              ]),
                              S.images.length > 0
                                ? (l(),
                                  d(
                                    'img',
                                    {
                                      key: 0,
                                      src: S.images[0],
                                      class:
                                        'h-12 w-12 my-auto rounded flex-shrink-0 object-cover'
                                    },
                                    null,
                                    8,
                                    wn
                                  ))
                                : b('', !0)
                            ],
                            8,
                            hn
                          )
                        )
                      ),
                      128
                    ))
                  ]))
                : b('', !0)
            ],
            64
          )
        )
      }
    }
  })
const fe = ce(bn, [['__scopeId', 'data-v-4d9f50b6']]),
  xn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNklEQVR4nO2Z20sVURTGd9r9IlLmDYxuBEmBURBSkQWF2EsvUUT17EOFb9ZbFIRBQdEfYIUUBNlDd6KgIqOrhWU3MQiiIior7QLlL9Y5a07b0eM5xzPjmYnzgXj2ntnfWt+stfdes8eYLLLIIuMARgILgU3AdmArsBZYBOSaoANYDBwBvhEfH4BGoNIEDUAJcBLotRx+ChwHDgGHgWbgiUtUMzDLBAFAFfBOHfsE7AbKBrl/NrAL+KJjPgPVw+t1f6dWAz/UoRNAYQpjp2rEBL+BLf56G9+RcqBbHdk5RI4RMlZT8hew1HtPo4bG60qzUlLC6h8FPFYRezyws1e5JEXz03bcIp4JNAHfXZOzHVgH1Gn7GpDjgb0c4IpyNnglotqaiJK7rcBV4JUlSFLhDzDXE6MmYrdCOeXhFXlB1qPOylpf4rpeqcIiS2e6zrsBnFbuWpMOgJtKtC/BvKlN+6kNzL1Z7V9Ih2SBkryUyeyph8n7UKg+fEyHpM6rVSgd8G+BGTeUwcuAe0qQmY1JAXSqHzNMspA8tyaYU9DF9otMAHijvhwA1gCjEw2YYy2pnTrRUg+nxwDaXHvXe6B+wHkLTAE69MZTwEQTEAB5wBJgo27KUroI7vSr5YBjevFSplaoFKuMW1ZlkWcXe726e5eaEAAYq+WQoMnp3K8dB02IABQDXzUIFdJxX4UsNyED0BALgr6RCSb7ZExS4K6PZwKCNmn8jPyEMT4Zi8An7nyl75LGa22UhVDIBKXvlsZlbawPoZB5Sv9CGtu0cSaEQuqVvlEaBdYbYFVYhBB9D3LqsBqnc4d2vAWmh0TIUaVukdMXpzMXOG+JWRFUIUQj4YiQTCp33zAJOOcYBs4CG4BpCUtnn4UQdX6+zgknnWRXXxVvQK7e3EXquJGqEBnD0NDSLxJxDBTo0f9F3Wec0nkwXPdRSA/wXE9yamJzYjgxmJBQgayQgCGUEQEeAA/lpSeeEH0hegTcNkEFUQedz2zFbiEqQq4JWk1QQfSI0/lOIstlqbWEFlnXngX+fIC+T935b/+ORSvwoG9kbAQ/EkmICZ8IV5q161840ilBZJL+TJ2F+U/wF9Y5UmVGwaQRAAAAAElFTkSuQmCC',
  Cn = { key: 0, class: 'relative flex items-center justify-center' },
  In = { class: 'max-w-80vw max-h-80vh', alt: '' },
  Rn = { key: 0, class: 'absolute max-w-80vw max-h-80vh', alt: '' },
  En = c(
    'div',
    { class: 'absolute inset-0 bg-gray-800 bg-opacity-50 fill-blue-300' },
    null,
    -1
  ),
  Sn = { key: 1, class: 'mt-4 flex gap-4' },
  Un = c('img', { class: 'w-5 h-5', src: xn }, null, -1),
  Bn = L({
    __name: 'ImageModal',
    props: { image: {} },
    setup(o) {
      const e = ke(),
        t = W(),
        s = h(() => t.state.imkit.downloadProgresses),
        a = h(() => t.state.imkit.imageCache),
        n = (r) => {
          const i = document.createElement('a'),
            u = a.value.get(r.originalUrl)
          i.href = u
          const m = u.split(';')[0].replace('data:', '').split('/')[1]
          ;(i.download = `download.${m}`), i.click()
        }
      return (r, i) => {
        const u = Ke('src')
        return (
          l(),
          Y(
            w(Ce),
            {
              class: 'flex items-center justify-center',
              'content-transition': 'vfm-fade',
              'overlay-transition': 'vfm-fade'
            },
            {
              default: se(() => [
                r.image
                  ? (l(),
                    d('div', Cn, [
                      q(c('img', In, null, 512), [[u, r.image.thumbnailUrl]]),
                      r.image.thumbnailUrl !== r.image.originalUrl
                        ? q((l(), d('img', Rn, null, 512)), [
                            [u, r.image.originalUrl]
                          ])
                        : b('', !0),
                      (!s.value[r.image.originalUrl] ||
                        s.value[r.image.originalUrl] < 1) &&
                      r.image.thumbnailUrl !== r.image.originalUrl
                        ? (l(),
                          d(
                            G,
                            { key: 1 },
                            [
                              En,
                              j(
                                w(ze),
                                {
                                  class: '!absolute',
                                  diameter: 40,
                                  'completed-steps':
                                    s.value[r.image.originalUrl] * 100,
                                  'total-steps': 100,
                                  'start-color': '#60a5fa',
                                  'stop-color': '#60a5fa',
                                  'stroke-width': 4,
                                  'inner-stroke-width': 4
                                },
                                null,
                                8,
                                ['completed-steps']
                              )
                            ],
                            64
                          ))
                        : b('', !0)
                    ]))
                  : b('', !0),
                r.image
                  ? (l(),
                    d('div', Sn, [
                      c(
                        'button',
                        {
                          class:
                            'text-base border rounded-lg flex-grow text-white gap-1.5 font-400 px-3 py-2 flex items-center justify-center',
                          onClick: i[0] || (i[0] = (m) => n(r.image))
                        },
                        [Un, ae(' ' + v(r.$t('download')), 1)]
                      ),
                      c(
                        'button',
                        {
                          class:
                            'text-base border rounded-lg flex-grow text-white gap-1.5 font-400 px-3 py-2 flex items-center justify-center',
                          onClick: i[1] || (i[1] = (m) => w(e).closeAll())
                        },
                        v(r.$t('close')),
                        1
                      )
                    ]))
                  : b('', !0)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }),
  Fn = ['onClick'],
  Mn = c(
    'div',
    { class: 'absolute inset-0 bg-gray-800 bg-opacity-50 fill-blue-300' },
    null,
    -1
  ),
  Tn = L({
    __name: 'ImageMessageContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = W(),
        s = h(() => t.state.imkit.uploadProgresses),
        a = (r, i) => {
          if (e.message.images.length === 1) {
            const { width: m, height: p } = i
            return m < p
              ? { width: '200px', height: `${(200 * p) / m}px` }
              : { width: `${(200 * m) / p}px`, height: '200px' }
          } else
            return r === e.message.images.length - 1 && r % 2 === 0
              ? { width: `${200 * 2 + 1}px`, height: '200px' }
              : { width: '200px', height: '200px' }
        },
        n = (r) => {
          const { open: i } = ye({ component: Bn, attrs: { image: r } })
          i()
        }
      return (r, i) => {
        const u = Ke('src')
        return (
          l(),
          d(
            'div',
            {
              class: K([
                '-m-2 grid gap-1px',
                [r.message.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1']
              ])
            },
            [
              (l(!0),
              d(
                G,
                null,
                $(
                  r.message.images,
                  (m, p) => (
                    l(),
                    d(
                      'div',
                      {
                        key: m.thumbnailUrl,
                        class: K([
                          'relative flex items-center justify-center',
                          {
                            'col-span-2':
                              r.message.images.length > 1 &&
                              p === r.message.images.length - 1 &&
                              p % 2 === 0
                          }
                        ]),
                        onClick: (g) => n(m)
                      },
                      [
                        q(
                          c(
                            'img',
                            {
                              src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                              class: 'border-0 object-cover transition',
                              style: J(a(p, m))
                            },
                            null,
                            4
                          ),
                          [[u, m.thumbnailUrl]]
                        ),
                        m.thumbnailUrl.startsWith('data')
                          ? (l(),
                            d(
                              G,
                              { key: 0 },
                              [
                                Mn,
                                j(
                                  w(ze),
                                  {
                                    class: '!absolute',
                                    diameter: 40,
                                    'completed-steps':
                                      s.value[`${m.id}-original`] === void 0
                                        ? ((s.value[`${m.id}-original`] +
                                            s.value[`${m.id}-thumbnail`]) /
                                            2) *
                                          100
                                        : s.value[`${m.id}-original`] * 100,
                                    'total-steps': 100,
                                    'start-color': '#60a5fa',
                                    'stop-color': '#60a5fa',
                                    'stroke-width': 4,
                                    'inner-stroke-width': 4
                                  },
                                  null,
                                  8,
                                  ['completed-steps']
                                )
                              ],
                              64
                            ))
                          : b('', !0)
                      ],
                      10,
                      Fn
                    )
                  )
                ),
                128
              ))
            ],
            2
          )
        )
      }
    }
  }),
  On = ['src'],
  Ln = L({
    __name: 'StickerMessageContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = h(() =>
          e.message.stickerUrl
            ? e.message.stickerUrl
            : `/sticker/${e.message.stickerId.split('-')[0]}/${
                e.message.stickerId
              }.png`
        )
      return (s, a) => (
        l(),
        d(
          'img',
          { src: t.value, class: 'border-0 object-contain w-30 h-30' },
          null,
          8,
          On
        )
      )
    }
  }),
  Tt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVR4nO3bP68MURzH4RMhNIobEhoJFaFCKRI6Ha/AW9DSKeUqVVqlmkQv8ScUOoVGgUSnQCM8MpFJZJmz17V398zO9ym32nwyO7O/M+eUEhERERERK4Z9OLDq79EcnMIjfPfLB9zA3jJ1OIMv/u41zpUpw0t13VV1B/vL1OCYrXuLS2VKcN6/uzeZGzku2J6PuFrWne0H6j3AkbKu/H+gzidcw66ybiwmUO8xjpd1YrGBOl9xE3vKOrD4QL1XOFvGzs4F6nzDrW6+K2NlZwP13uBiGSPLCdT5gbujG1csL1DvPS6XsbD8QL37OFhaZ3WBxjGuWG2g3sNmxxVtBGp3XNFOoN/HlROlFdoL1Na4os1Avac4nEB1z7E7V1DdlQSqu51AdZsJVJefWMWz3KSHPcGhPOb/lD+KFRk1BmRYrchyx4AsmFVkyXVAFu0H5LVPRV4cDsir54psXmh+TFgE2UBVly14c2QT5xzZBjxHNpLPgaO2bnpHETp4MSfMdA+zdHAanwfi5DhUBydnDtS9w/UcqJvRBcHG7OcREREREVEm5icELZJIi+Y1dAAAAABJRU5ErkJggg==',
  _n = c(
    'div',
    { class: 'absolute inset-0 bg-gray-800 bg-opacity-50 fill-blue-300' },
    null,
    -1
  ),
  Vn = c(
    'img',
    {
      class: 'absolute pointer-events-none',
      src: Tt,
      width: '24',
      height: '24'
    },
    null,
    -1
  ),
  Qn = {
    class:
      'absolute right-2 bottom-2 text-white font-bold bg-black bg-opacity-30 rounded-full text-xs py-1 px-2'
  },
  Kn = L({
    __name: 'VideoMessageContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = `vp-${Math.random()}`,
        s = I(),
        a = I(),
        n = I(!1),
        r = () => {
          const { width: g, height: A } = e.message.video
          return g < A
            ? { width: '200px', height: `${(200 * A) / g}px` }
            : { width: `${(200 * g) / A}px`, height: '200px' }
        },
        i = W(),
        u = async () => {
          if (n.value) return
          n.value = !0
          const p = await i.dispatch(
            'imkit/fetchVideoBlob',
            e.message.video.originalUrl
          )
          s.value && (s.value.src = URL.createObjectURL(p)), (a.value = ns(t))
        },
        m = h(() => i.state.imkit.uploadProgresses)
      return (p, g) => {
        const A = Ke('src')
        return (
          l(),
          d(
            'div',
            {
              class:
                '-m-2 relative flex items-center justify-center cursor-pointer',
              style: J(r()),
              onClick: u
            },
            [
              q(
                c(
                  'video',
                  {
                    ref_key: 'videoPlayer',
                    ref: s,
                    id: t,
                    class:
                      'video-js vjs-default-skin absolute inset-0 w-full h-full',
                    controls: '',
                    preload: 'auto',
                    autoplay: ''
                  },
                  null,
                  512
                ),
                [[as, n.value]]
              ),
              n.value
                ? b('', !0)
                : (l(),
                  d(
                    G,
                    { key: 0 },
                    [
                      q(
                        c(
                          'img',
                          {
                            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                            class: 'border-0 object-cover transition',
                            style: J(r())
                          },
                          null,
                          4
                        ),
                        [[A, p.message.video.thumbnailUrl]]
                      ),
                      p.message.video.thumbnailUrl.startsWith('data')
                        ? (l(),
                          d(
                            G,
                            { key: 0 },
                            [
                              _n,
                              j(
                                w(ze),
                                {
                                  class: '!absolute',
                                  diameter: 40,
                                  'completed-steps':
                                    m.value[p.message.video.id] * 100,
                                  'total-steps': 100,
                                  'start-color': '#60a5fa',
                                  'stop-color': '#60a5fa',
                                  'stroke-width': 4,
                                  'inner-stroke-width': 4
                                },
                                null,
                                8,
                                ['completed-steps']
                              )
                            ],
                            64
                          ))
                        : (l(),
                          d(
                            G,
                            { key: 1 },
                            [
                              Vn,
                              c(
                                'div',
                                Qn,
                                v(Math.floor(p.message.video.duration / 60)) +
                                  ':' +
                                  v(
                                    `${Math.floor(
                                      p.message.video.duration % 60
                                    )}`.padStart(2, '0')
                                  ),
                                1
                              )
                            ],
                            64
                          ))
                    ],
                    64
                  ))
            ],
            4
          )
        )
      }
    }
  }),
  Gn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABV0lEQVR4nO3aMUpDQRSF4VmI1m5HtLCxkMxxA86JazAz2Ygi2LkgbVWMpQpKFCyihSZ33r0x58As4GP+F17gpaRp2sbs6GS6nUu7RGlPYHuzPrm029HJdDdFwYL1vgd0Af2Sx5MDb2/6uNnO2FBodMr4C8n6HAqN/re6t4gG62tmPfyX4PT52MRBYwBwKDQGAodBY0BwCDQGBruj4QB2RcMJ7IaGI9gFDWfwfMes+z+9kXX5w4HOYJyebS2LBuvN2oEz6/Uq6LUDY4BH4k/zBglM3bDtECBbPcPUj5bdECBbJU0lbTcEyFZJU0nbDQGyVdJU0nZDgGyVNJW03RAgWyVNJW03BMhWSVNJ2w0BslXSVNJ2Q4BslTSVtN2wcUmXvh+XrnJyaY/2YNarsGDWc3PwaDzZyaU9eOO+ndLufvupxHJfxZd2AdaZO5R1Nr/ZblhN01LEvQM/68r6Ex4bqgAAAABJRU5ErkJggg==',
  Ot = (o) => (Ae('data-v-dcb5aa19'), (o = o()), he(), o),
  Nn = Ot(() => c('img', { class: 'w-8 object-contain', src: Gn }, null, -1)),
  Pn = { class: 'flex flex-col gap-0.5 font-400' },
  Dn = { class: 'text-base break-all' },
  Yn = Ot(() =>
    c(
      'div',
      {
        class: 'absolute -m-2 inset-0 bg-gray-800 bg-opacity-50 fill-blue-300'
      },
      null,
      -1
    )
  ),
  jn = L({
    __name: 'FileMessageContent',
    props: { message: {} },
    setup(o) {
      const e = W(),
        t = o,
        s = h(() => t.message.isIncoming),
        a = h(() => e.state.imkit.uploadProgresses),
        n = h(() => {
          const i = t.message.bytes
          return i < 1e3
            ? i + 'B'
            : i < 1e3 * 1e3
              ? (i / 1e3).toFixed(1) + 'KB'
              : i < 1e3 * 1e3 * 1e3
                ? (i / 1e3 / 1e3).toFixed(1) + 'MB'
                : (i / 1e3 / 1e3 / 1e3).toFixed(1) + 'GB'
        }),
        r = async () => {
          try {
            const { url: i, fileName: u, fileExtension: m } = t.message,
              p = await e.state.imkit.axios.get(i, {
                responseType: 'arraybuffer',
                onDownloadProgress: (f) => {
                  const { total: y } = f
                  y &&
                    e.commit('imkit/updateField', {
                      key: 'downloadProgresses',
                      value: { [i]: f.loaded / y }
                    })
                }
              }),
              g = btoa(
                new Uint8Array(p.data).reduce(
                  (f, y) => f + String.fromCharCode(y),
                  ''
                )
              ),
              A = document.createElement('a')
            ;(A.href = `data:${p.headers['content-type']};base64,${g}`),
              (A.download = `${u}.${m}`),
              A.click()
          } catch (i) {
            console.error(i)
          }
        }
      return (i, u) => (
        l(),
        d(
          'div',
          {
            class:
              'flex items-center justify-center gap-2 cursor-pointer relative',
            onClick: r
          },
          [
            Nn,
            c('div', Pn, [
              c(
                'div',
                Dn,
                v(i.message.fileName) + '.' + v(i.message.fileExtension),
                1
              ),
              c(
                'div',
                { class: K(['text-sm', { 'text-gray-500': s.value }]) },
                v(i.$t('fileSize')) + ': ' + v(n.value),
                3
              )
            ]),
            i.message.url === ''
              ? (l(),
                d(
                  G,
                  { key: 0 },
                  [
                    Yn,
                    j(
                      w(ze),
                      {
                        class: '!absolute',
                        diameter: 40,
                        'completed-steps': a.value[i.message.id] * 100,
                        'total-steps': 100,
                        'start-color': '#60a5fa',
                        'stop-color': '#60a5fa',
                        'stroke-width': 4,
                        'inner-stroke-width': 4
                      },
                      null,
                      8,
                      ['completed-steps']
                    )
                  ],
                  64
                ))
              : b('', !0)
          ]
        )
      )
    }
  })
const Xn = ce(jn, [['__scopeId', 'data-v-dcb5aa19']]),
  ge = (o) => {
    o.type === 'uri' && window.open(o.uri, '_blank')
  },
  Wn = { class: 'w-250px text-base overflow-hidden cursor-pointer' },
  zn = ['src'],
  Jn = { key: 1, class: 'py-3 flex flex-col gap-2 border-t' },
  Hn = ['onClick'],
  Zn = L({
    __name: 'TemplateMessageButtonsContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = h(() => e.message.isIncoming),
        s = h(() => !t.value)
      return (a, n) => {
        var r
        return (
          l(),
          d('div', Wn, [
            a.message.template.thumbnailImageUrl
              ? (l(),
                d(
                  'img',
                  {
                    key: 0,
                    class: K([
                      'object-cover',
                      {
                        'object-contain':
                          a.message.template.imageSize === 'contain'
                      }
                    ]),
                    style: J({
                      'background-color':
                        a.message.template.imageBackgroundColor ?? '#ffffff',
                      height: `${
                        a.message.template.imageAspectRatio === 'square'
                          ? 250
                          : 250 / 1.51
                      }px`
                    }),
                    src: a.message.template.thumbnailImageUrl,
                    onClick:
                      n[0] ||
                      (n[0] = (i) => w(ge)(a.message.template.defaultAction))
                  },
                  null,
                  14,
                  zn
                ))
              : b('', !0),
            c(
              'div',
              {
                class: 'p-3 flex flex-col gap-1',
                onClick:
                  n[1] ||
                  (n[1] = (i) => w(ge)(a.message.template.defaultAction))
              },
              [
                c(
                  'div',
                  null,
                  v(
                    (r = a.message.template.title) == null
                      ? void 0
                      : r.substring(0, 40)
                  ),
                  1
                ),
                a.message.template.text
                  ? (l(),
                    d(
                      'div',
                      {
                        key: 0,
                        class: K([
                          'text-sm',
                          { 'text-gray-500': t.value, 'text-gray-100': s.value }
                        ])
                      },
                      v(
                        !a.message.template.thumbnailImageUrl &&
                          !a.message.template.title
                          ? a.message.template.text.substring(0, 160)
                          : a.message.template.text.substring(0, 60)
                      ),
                      3
                    ))
                  : b('', !0)
              ]
            ),
            a.message.template.actions.length > 0
              ? (l(),
                d('div', Jn, [
                  (l(!0),
                  d(
                    G,
                    null,
                    $(
                      a.message.template.actions,
                      (i) => (
                        l(),
                        d(
                          'div',
                          {
                            key: i.label,
                            class: K([
                              'flex items-center justify-center text-sm p-0.5',
                              {
                                'text-slate-500': t.value,
                                'text-slate-100': s.value
                              }
                            ]),
                            onClick: (u) => w(ge)(i)
                          },
                          v(i.label),
                          11,
                          Hn
                        )
                      )
                    ),
                    128
                  ))
                ]))
              : b('', !0)
          ])
        )
      }
    }
  }),
  qn = { class: 'w-250px text-base overflow-hidden' },
  $n = { class: 'p-3' },
  er = { class: 'flex border-t divide-x' },
  tr = ['onClick'],
  sr = L({
    __name: 'TemplateMessageConfirmContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = h(() => e.message.isIncoming),
        s = h(() => !t.value)
      return (a, n) => (
        l(),
        d('div', qn, [
          c('div', $n, v(a.message.template.text.substring(0, 240)), 1),
          c('div', er, [
            (l(!0),
            d(
              G,
              null,
              $(
                a.message.template.actions.slice(0, 2),
                (r) => (
                  l(),
                  d(
                    'div',
                    {
                      key: r.label,
                      class: K([
                        'flex-grow flex items-center justify-center p-2 cursor-pointer',
                        { 'text-slate-500': t.value, 'text-slate-100': s.value }
                      ]),
                      onClick: (i) => w(ge)(r)
                    },
                    v(r.label),
                    11,
                    tr
                  )
                )
              ),
              128
            ))
          ])
        ])
      )
    }
  }),
  or = { class: 'text-base overflow-auto cursor-pointer flex gap-2' },
  ar = ['src', 'onClick'],
  nr = ['onClick'],
  rr = { key: 1, class: 'py-3 flex flex-col gap-2 border-t' },
  ir = ['onClick'],
  lr = L({
    __name: 'TemplateMessageCarouselContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = h(() => e.message.isIncoming),
        s = h(() => !t.value)
      return (a, n) => (
        l(),
        d('div', or, [
          (l(!0),
          d(
            G,
            null,
            $(a.message.template.columns, (r, i) => {
              var u
              return (
                l(),
                d(
                  'div',
                  {
                    key: i,
                    class: K([
                      'w-250px text-base overflow-hidden cursor-pointer rounded-xl',
                      [
                        t.value
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-blue-400 text-white '
                      ]
                    ])
                  },
                  [
                    r.thumbnailImageUrl
                      ? (l(),
                        d(
                          'img',
                          {
                            key: 0,
                            class: K([
                              'object-cover',
                              {
                                'object-contain':
                                  a.message.template.imageSize === 'contain'
                              }
                            ]),
                            style: J({
                              'background-color':
                                r.imageBackgroundColor ?? '#ffffff',
                              height: `${
                                a.message.template.imageAspectRatio === 'square'
                                  ? 250
                                  : 250 / 1.51
                              }px`
                            }),
                            src: r.thumbnailImageUrl,
                            onClick: (m) => w(ge)(r.defaultAction)
                          },
                          null,
                          14,
                          ar
                        ))
                      : b('', !0),
                    c(
                      'div',
                      {
                        class: 'p-3 flex flex-col gap-1',
                        onClick: (m) => w(ge)(r.defaultAction)
                      },
                      [
                        c(
                          'div',
                          null,
                          v(
                            (u = r.title) == null ? void 0 : u.substring(0, 40)
                          ),
                          1
                        ),
                        r.text
                          ? (l(),
                            d(
                              'div',
                              {
                                key: 0,
                                class: K([
                                  'text-sm',
                                  {
                                    'text-gray-500': t.value,
                                    'text-gray-100': s.value
                                  }
                                ])
                              },
                              v(
                                !r.thumbnailImageUrl && !r.title
                                  ? r.text.substring(0, 160)
                                  : r.text.substring(0, 60)
                              ),
                              3
                            ))
                          : b('', !0)
                      ],
                      8,
                      nr
                    ),
                    r.actions.length > 0
                      ? (l(),
                        d('div', rr, [
                          (l(!0),
                          d(
                            G,
                            null,
                            $(
                              r.actions,
                              (m) => (
                                l(),
                                d(
                                  'div',
                                  {
                                    key: m.label,
                                    class: K([
                                      'flex items-center justify-center text-sm p-0.5',
                                      {
                                        'text-slate-500': t.value,
                                        'text-slate-100': s.value
                                      }
                                    ]),
                                    onClick: (p) => w(ge)(m)
                                  },
                                  v(m.label),
                                  11,
                                  ir
                                )
                              )
                            ),
                            128
                          ))
                        ]))
                      : b('', !0)
                  ],
                  2
                )
              )
            }),
            128
          ))
        ])
      )
    }
  }),
  cr = { class: 'text-base overflow-auto cursor-pointer flex gap-2' },
  dr = ['src', 'onClick'],
  ur = L({
    __name: 'TemplateMessageImageCarouselContent',
    props: { message: {} },
    setup(o) {
      return (e, t) => (
        l(),
        d('div', cr, [
          (l(!0),
          d(
            G,
            null,
            $(
              e.message.template.columns,
              (s, a) => (
                l(),
                d(
                  'img',
                  {
                    key: a,
                    src: s.imageUrl,
                    class: 'w-250px h-250px object-cover rounded-xl',
                    onClick: (n) => w(ge)(s.action)
                  },
                  null,
                  8,
                  dr
                )
              )
            ),
            128
          ))
        ])
      )
    }
  }),
  mr = L({
    __name: 'TemplateMessageContent',
    props: { message: {} },
    setup(o) {
      const e = {
        [we.Buttons]: Zn,
        [we.Confirm]: sr,
        [we.Carousel]: lr,
        [we.ImageCarousel]: ur
      }
      return (t, s) => (
        l(),
        Y(Je(e[t.message.templateType]), { message: t.message }, null, 8, [
          'message'
        ])
      )
    }
  }),
  gr = L({
    __name: 'FlexMessageBoxComponent',
    props: { content: {} },
    setup(o) {
      const e = (t) =>
        ({
          none: '0',
          xs: '2px',
          sm: '4px',
          md: '8px',
          lg: '12px',
          xl: '16px',
          xxl: '20px'
        })[t] ?? t
      return (t, s) => (
        l(),
        d(
          'div',
          {
            class: K([
              'flex',
              {
                'flex-col': t.content.layout === 'vertical',
                'flex-row': t.content.layout === 'horizontal',
                'flex-row items-baseline': t.content.layout === 'baseline'
              }
            ]),
            style: J({
              backgroundColor: t.content.backgroundColor ?? '#00000000',
              borderColor: t.content.borderColor,
              borderWidth: t.content.borderWidth,
              borderRadius: t.content.cornerRadius,
              width: t.content.width,
              maxWidth: t.content.maxWidth,
              height: t.content.height,
              maxHeight: t.content.maxHeight
            })
          },
          [
            (l(!0),
            d(
              G,
              null,
              $(
                t.content.contents,
                (a, n) => (
                  l(),
                  Y(
                    Oe,
                    {
                      key: n,
                      content: a,
                      style: J(
                        t.content.layout === 'vertical'
                          ? {
                              marginTop: a.margin
                                ? e(a.margin)
                                : n === 0
                                  ? 0
                                  : e(t.content.spacing)
                            }
                          : {
                              marginLeft: a.margin
                                ? e(a.margin)
                                : n === 0
                                  ? 0
                                  : e(t.content.spacing)
                            }
                      )
                    },
                    null,
                    8,
                    ['content', 'style']
                  )
                )
              ),
              128
            ))
          ],
          6
        )
      )
    }
  }),
  pr = L({
    __name: 'FlexMessageButtonComponent',
    props: { content: {} },
    setup(o) {
      const e = o,
        t = h(() =>
          e.content.style === 'primary'
            ? '#ffffff'
            : e.content.style === 'secondary'
              ? '#000000'
              : e.content.color || '#42659a'
        ),
        s = h(() =>
          e.content.style === 'primary'
            ? e.content.color || '#17c950'
            : e.content.style === 'secondary'
              ? e.content.color || '#dcdfe5'
              : ''
        )
      return (a, n) => (
        l(),
        d(
          'button',
          {
            class: K([
              [a.content.size === 'md' ? 'h-52px' : 'h-40px'],
              'rounded-lg'
            ]),
            style: J({ color: t.value, backgroundColor: s.value }),
            onClick: n[0] || (n[0] = (r) => w(ge)(a.content.action))
          },
          v(a.content.action.label),
          7
        )
      )
    }
  }),
  Ar = ['src'],
  hr = L({
    __name: 'FlexMessageImageComponent',
    props: { content: {} },
    setup(o) {
      const e = o,
        t = h(() =>
          e.content.aspectRatio
            ? e.content.aspectRatio.replace(':', '/')
            : '1/1'
        )
      return (s, a) => (
        l(),
        d(
          'div',
          {
            class: K([
              'w-full bg-gray-300 overflow-hidden',
              [
                s.content.aspectMode === 'cover'
                  ? 'object-cover'
                  : 'object-contain'
              ]
            ]),
            style: J({ 'aspect-ratio': t.value })
          },
          [
            c(
              'img',
              { class: 'w-full h-full', src: s.content.url },
              null,
              8,
              Ar
            )
          ],
          6
        )
      )
    }
  }),
  fr = ['src'],
  vr = L({
    __name: 'FlexMessageVideoComponent',
    props: { content: {} },
    setup(o) {
      return (e, t) => (l(), d('video', { src: e.content.url }, null, 8, fr))
    }
  }),
  yr = L({
    __name: 'FlexMessageIconComponent',
    props: { content: {} },
    setup(o) {
      const e = o,
        t = h(() => {
          const s = e.content.size
          return (
            {
              xxs: '12px',
              xs: '13px',
              sm: '14px',
              md: '16px',
              lg: '19px',
              xl: '22px',
              xxl: '29px',
              '3xl': '35px',
              '4xl': '48px',
              '5xl': '74px'
            }[s] ?? '16px'
          )
        })
      return (s, a) => (
        l(),
        d(
          'span',
          {
            style: J({
              overflow: 'hidden',
              background: 'no-repeat center',
              backgroundSize: 'contain',
              backgroundImage: 'url(' + s.content.url + ')',
              width: t.value,
              height: t.value
            })
          },
          null,
          4
        )
      )
    }
  }),
  kr = L({
    __name: 'FlexMessageTextComponent',
    props: { content: {} },
    setup(o) {
      const e = o,
        t = h(() => {
          const s = e.content.size
          return (
            {
              xxs: '12px',
              xs: '13px',
              sm: '14px',
              md: '16px',
              lg: '19px',
              xl: '22px',
              xxl: '29px',
              '3xl': '35px',
              '4xl': '48px',
              '5xl': '74px'
            }[s] ?? '16px'
          )
        })
      return (s, a) => (
        l(),
        d(
          'div',
          { class: 'basis-0', style: J({ flexGrow: s.content.flex ?? 0 }) },
          [
            c(
              'p',
              {
                class: K([
                  s.content.weight === 'bold' ? 'font-700' : 'font-400',
                  s.content.wrap
                    ? 'overflow-clip whitespace-normal break-words overflow-hidden'
                    : 'truncate whitespace-nowrap overflow-hidden'
                ]),
                style: J({
                  fontSize: t.value,
                  color: s.content.color,
                  'text-size-adjust': '100%'
                })
              },
              v(s.content.text),
              7
            )
          ],
          4
        )
      )
    }
  }),
  wr = L({
    __name: 'FlexMessageSpanComponent',
    props: { content: {} },
    setup(o) {
      return (e, t) => (l(), d('span', null, v(e.content.text), 1))
    }
  }),
  br = L({
    __name: 'FlexMessageSeparatorComponent',
    props: { content: {} },
    setup(o) {
      return (e, t) => (l(), d('div'))
    }
  }),
  Oe = L({
    __name: 'FlexMessageComponent',
    props: { content: {} },
    setup(o) {
      const e = {
          box: gr,
          button: pr,
          image: hr,
          video: vr,
          icon: yr,
          text: kr,
          span: wr,
          separator: br
        },
        t = o,
        s = h(() => t.content.type)
      return (a, n) => (
        l(), Y(Je(e[s.value]), { content: a.content }, null, 8, ['content'])
      )
    }
  }),
  Lt = L({
    __name: 'FlexMessageBubbleComponent',
    props: { content: {} },
    setup(o) {
      const e = o,
        t = h(() => e.content.header),
        s = h(() => e.content.hero),
        a = h(() => e.content.body),
        n = h(() => e.content.footer),
        r = h(() => {
          var g
          return (g = e.content.styles) == null ? void 0 : g.header
        }),
        i = h(() => {
          var g
          return (g = e.content.styles) == null ? void 0 : g.hero
        }),
        u = h(() => {
          var g
          return (g = e.content.styles) == null ? void 0 : g.body
        }),
        m = h(() => {
          var g
          return (g = e.content.styles) == null ? void 0 : g.footer
        }),
        p = h(() => {
          switch (e.content.size) {
            case 'nano':
              return '10px'
            case 'micro':
              return '13px'
            case 'kilo':
              return n.value ? '13px 13px 17px 13px' : '13px'
            case 'mega':
              return n.value ? '19px 20px 10px 20px' : '20px'
            case 'giga':
              return n.value ? '19px 20px 10px 20px' : '20px'
            default:
              return '20px'
          }
        })
      return (g, A) => {
        var f, y, S, M, U, B, _, F, T, R, D, X
        return (
          l(),
          d(
            'div',
            {
              class: K([
                'bg-gray-100 text-hex-444444 rounded-xl overflow-hidden',
                {
                  'w-120px': g.content.size === 'nano',
                  'w-160px': g.content.size === 'micro',
                  'w-260px': g.content.size === 'kilo',
                  'w-300px': g.content.size === 'mega' || !g.content.size,
                  'w-386px': g.content.size === 'giga'
                }
              ])
            },
            [
              t.value
                ? (l(),
                  Y(
                    Oe,
                    {
                      key: 0,
                      content: t.value,
                      style: J({
                        backgroundColor:
                          (f = r.value) == null ? void 0 : f.backgroundColor,
                        borderBottom:
                          (y = r.value) != null && y.separator
                            ? `1px solid ${
                                (S = r.value) == null
                                  ? void 0
                                  : S.separatorColor
                              }`
                            : 'none'
                      })
                    },
                    null,
                    8,
                    ['content', 'style']
                  ))
                : b('', !0),
              s.value
                ? (l(),
                  Y(
                    Oe,
                    {
                      key: 1,
                      content: s.value,
                      style: J({
                        backgroundColor:
                          (M = i.value) == null ? void 0 : M.backgroundColor,
                        borderBottom:
                          (U = i.value) != null && U.separator
                            ? `1px solid ${
                                (B = i.value) == null
                                  ? void 0
                                  : B.separatorColor
                              }`
                            : 'none'
                      })
                    },
                    null,
                    8,
                    ['content', 'style']
                  ))
                : b('', !0),
              a.value
                ? (l(),
                  Y(
                    Oe,
                    {
                      key: 2,
                      content: a.value,
                      style: J({
                        backgroundColor:
                          (_ = u.value) == null ? void 0 : _.backgroundColor,
                        borderBottom:
                          (F = u.value) != null && F.separator
                            ? `1px solid ${
                                (T = u.value) == null
                                  ? void 0
                                  : T.separatorColor
                              }`
                            : 'none',
                        padding: p.value
                      })
                    },
                    null,
                    8,
                    ['content', 'style']
                  ))
                : b('', !0),
              n.value
                ? (l(),
                  Y(
                    Oe,
                    {
                      key: 3,
                      content: n.value,
                      class: 'p-2.5',
                      style: J({
                        backgroundColor:
                          (R = m.value) == null ? void 0 : R.backgroundColor,
                        borderBottom:
                          (D = m.value) != null && D.separator
                            ? `1px solid ${
                                (X = m.value) == null
                                  ? void 0
                                  : X.separatorColor
                              }`
                            : 'none'
                      })
                    },
                    null,
                    8,
                    ['content', 'style']
                  ))
                : b('', !0)
            ],
            2
          )
        )
      }
    }
  }),
  xr = L({
    __name: 'FlexMessageBubbleContent',
    props: { message: {} },
    setup(o) {
      return (e, t) => (
        l(), Y(Lt, { content: e.message.contents }, null, 8, ['content'])
      )
    }
  }),
  Cr = { class: 'flex items-start gap-2 overflow-auto' },
  Ir = L({
    __name: 'FlexMessageCarouselContent',
    props: { message: {} },
    setup(o) {
      return (e, t) => (
        l(),
        d('div', Cr, [
          (l(!0),
          d(
            G,
            null,
            $(
              e.message.contents.contents,
              (s, a) => (
                l(), Y(Lt, { key: a, content: s }, null, 8, ['content'])
              )
            ),
            128
          ))
        ])
      )
    }
  }),
  Rr = L({
    __name: 'FlexMessageContent',
    props: { message: {} },
    setup(o) {
      const e = { [at.Bubble]: xr, [at.Carousel]: Ir }
      return (t, s) => (
        l(),
        Y(Je(e[t.message.flexType]), { message: t.message }, null, 8, [
          'message'
        ])
      )
    }
  }),
  Er = (o) => (Ae('data-v-a18b9666'), (o = o()), he(), o),
  Sr = { class: 'p-2 w-300px <sm:w-250px underline' },
  Ur = Er(() => c('div', { class: 'absolute inset-0' }, null, -1)),
  Br = L({
    __name: 'LocationMessageContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        s = W().state.imkit.config.mapApiKey,
        a = h(() => ({ lat: e.message.latitude, lng: e.message.longitude })),
        n = () => {
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${e.message.address}`,
            '_blank'
          )
        }
      return (r, i) => (
        l(),
        d(
          'div',
          { class: 'flex flex-col -m-2 cursor-pointer relative', onClick: n },
          [
            j(
              w(bt),
              {
                'api-key': w(s),
                center: a.value,
                zoom: 15,
                disableDefaultUi: !0,
                class: 'w-300px h-200px <sm:w-250px <sm:h-150px'
              },
              {
                default: se(() => [
                  j(w(wt), { options: { position: a.value } }, null, 8, [
                    'options'
                  ])
                ]),
                _: 1
              },
              8,
              ['api-key', 'center']
            ),
            c('div', Sr, v(r.message.address), 1),
            Ur
          ]
        )
      )
    }
  })
const Fr = ce(Br, [['__scopeId', 'data-v-a18b9666']]),
  Mr =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACS0lEQVR4nO2bPYsUQRCGG1E0MRAFTQSNTjRSQxE0M9NfoGCwOv3O3k7XKpxR9e7hdyRGlxoan2B+4AcamBmYGKhgZqAmoitzB87eMh93595uz877QCcbLQ9dNV3V1cYQQgghhBBCpswV1T3Anf3T/h/BYZP+Cev0uXX+N8QPIPoFzt9qtx/tNk0HiZ6C+B9rYtYv6/z7OOmdMU0GTt/myRmSlO6qx1dv3t9rmkbcXTxaJmfdcvrROr1gmkSc9M5uWFAm6kljEjm6em7TglYl+a+R08tm1sFWBWW7aTmSxcNmVsH/ClqT9A3iO6q6w8waGIegLOxWrnf6c2aWwDgFpUcC0Z9w6lutpV1mFsCYBQ2Jehd1+6dN3cE2CVqV5PwvK3ovre9MXcE2ChpaHyLXO2/qCCYjKC1+/1jnl2pXrmBigv6F3Web9C6auoAJCxpK4k9bogdM6GBKgmpTrmCagrL1LNhyBWEICrdcQSiCsrBbiUWPmVBAaIJCK1cQoKBMlH9pb+ghCpJSSa9VdSd3kBRLikUvUZCU7CLnH1KQlOUjfUBBwhAbbO1cpK+YpKXwPPRifv72QX7mhQfFwcZDiqXGoCDXsFhF8c5huwP54cSGGYq/UGy5Ir9sYNMe+eUCr31QnIR5cYj8cOLVM4qTMIcXEHo/eRyAA1TlcASvAg5xVsAx4Ao4SF7BtY4e2UT7s3lPEVKs+DcV1y7NfcyS0pb+Sev0e4EcPodKaXf1+MiDuk9WdIEP6kZIhUQLd/eN/k4IIYQQQggxDeMvr6MHGaopSLgAAAAASUVORK5CYII=',
  Tr =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4klEQVR4nO2bzy5DQRTGJ8GaDQ+ANZ4FXbDxZ9HoGTc1p01scA5SGmshfQLBAu+gkYgXYqEyjUhEae/0Ti/y/ZJZ3vnO/e733d0xBgAAAAAAgFhsVGSCKrJoK1L8cpwsJ9XDqaw1ycm0v7uz5v5CktTGTd6IyLBlObEsL5a19f2RV8t6WS7LWL+a/g7r9PpnPW2R02fr9NjPaPKCnDa6DfrpOG32M3Cx2Bgh1od0mnJm8oDKMveejN6H9V+WZTVYk2U9rZ6fsVSVGTNorJO99MO2B74N1SSndyGaxLqb7dv3MizreZBBTh5DNf2zgQadm1///+EPg55CNf2zQQY5bZhBQzAIBiFBMSFUDAYhQTEhVAwGIUExIVQMBiFBMSFUDAYhQTEhVAwGIUExIVQMBiFBMSFUDAYhQTEhVAwGIUExIVQMBiFBMSFUDAYhQTEhVAwGIUExIVQMBiFBMSFUDAb1lyDGKkKUZRZyemMGvcziZMcMmk13MBuyDmW3dCVU0zpd+zPrUCE1I5b7fhbq2huOTpsp03Nq8kJEhoml3l5/7PIVifWiuF0fzWIlk1iueqjyM7EcFQpXQyZvkqQ2XqrIfKcFW2JdKm3JZNaa/k5/dydNP8uvWOoFAAAAAADm3/IGGLsxyp+ApQ8AAAAASUVORK5CYII=',
  Or =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO3bTy5DYRSG8ZuosU5qAWWMtZQJE38GVkGHiHGj6QoEA+yBSJpuiIFXGtesvPee77sp+vwS057zPcXsFAUAAADQFEmrknYkHc/42ZO01sDM9fKzZ83cltTJPTOyZEvSpaQ3/exd0o2kdoaZbUl38l4lnU93zPPa2LIj1fOcsrCkZUkvNWde5X119WW3yt+Mug4SZh4F5k133Mj7+mrL9hXzkDDzMTjzNO/rqy07DC47Tpg5Ds4c5n19M/9/vkwSZk4UM8r7+mrLjoLLEsggkEEgg0AGgQwCGQQyCGQQyCCQQSCDQAaBDAIZBDIIZBDIIJBBIINABoEMAhkEMghkEMggkEEgg0AGgQwCGQQyCGQQyCCQQSCDQAaBDAIZBDIIZCxMoGFw2YU5RegHl72fwzHLSd7XV1t2M3gOtZ8w8/DPnEMF/8yeEg/qWuVRXh2DYl70ufBFef7ovsVrSSuZTjJvK4SZ7nQmaSnPa9OW7kjqfXNguyup28DMbvnZs2b2fsVRLwAAAIp/6wPxkEFCV8mUxgAAAABJRU5ErkJggg==',
  Lr = ['onClick'],
  _r = { key: 0, src: Mr, width: '24', height: '24' },
  Vr = { key: 1, src: Tt, width: '24', height: '24' },
  Qr = { key: 1, class: 'h-5 flex items-center justify-center' },
  Kr = c(
    'path',
    {
      d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  Gr = c(
    'path',
    {
      d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
      fill: 'currentFill'
    },
    null,
    -1
  ),
  Nr = [Kr, Gr],
  Pr = { key: 0, src: Tr, width: '24', height: '24' },
  Dr = { key: 1, src: Or, width: '24', height: '24' },
  Yr = {
    class:
      'text-white font-bold bg-black bg-opacity-30 rounded-full text-xs py-1 px-2'
  },
  jr = L({
    __name: 'AudioMessageContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = W(),
        s = I(0),
        a = I(),
        n = I(0),
        r = I(),
        i = h(() => e.message.isIncoming),
        u = () => {
          a.value &&
            ((n.value = (a.value.seek() / a.value.duration()) * 100),
            a.value.playing() && requestAnimationFrame(u))
        },
        m = async () => {
          var g, A
          switch (s.value) {
            case 0: {
              const f = new rs.Howl({
                src: e.message.url,
                format: ['m4a', 'mp3', 'wav', 'aac', 'webm'],
                onload: () => {
                  f.play(), (s.value = 3)
                },
                onplay: () => {
                  requestAnimationFrame(u)
                },
                onend: () => {
                  s.value = 2
                },
                onloaderror: (y, S) => console.log(2, y, S),
                xhr: {
                  headers: {
                    'IM-Authorization': t.state.imkit.config.token,
                    'IM-Client-Key': t.state.imkit.config.clientKey
                  }
                }
              })
              ;(a.value = f), (s.value = 1)
              break
            }
            case 2:
            case 4:
              ;(g = a.value) == null || g.play(), (s.value = 3)
              break
            case 3:
              ;(A = a.value) == null || A.pause(), (s.value = 4)
              break
          }
        },
        p = async (g) => {
          if (!a.value || !r.value) return
          const { x: A, width: f } = r.value.getBoundingClientRect()
          ;(n.value = ((g.clientX - A) / f) * 100),
            a.value.seek((a.value.duration() * n.value) / 100)
        }
      return (g, A) => (
        l(),
        d(
          G,
          null,
          [
            c(
              'div',
              {
                class: K([
                  'absolute top-0 bottom-0 left-0 pointer-events-none',
                  [i.value ? 'bg-gray-300' : 'bg-blue-300']
                ]),
                style: J({ width: `${n.value}%` })
              },
              null,
              6
            ),
            c(
              'div',
              {
                ref_key: 'container',
                ref: r,
                class:
                  'flex items-center justify-between w-250px p-3 relative -m-2',
                onClick: p
              },
              [
                c(
                  'button',
                  { onClick: ie(m, ['stop']) },
                  [
                    new Set([0, 2, 4]).has(s.value)
                      ? (l(),
                        d(
                          G,
                          { key: 0 },
                          [i.value ? (l(), d('img', _r)) : (l(), d('img', Vr))],
                          64
                        ))
                      : s.value === 1
                        ? (l(),
                          d('div', Qr, [
                            (l(),
                            d(
                              'svg',
                              {
                                class: K([
                                  'w-5 h-5 animate-spin',
                                  [
                                    i.value
                                      ? 'text-gray-400 fill-gray-100'
                                      : 'text-gray-200 fill-blue-400'
                                  ]
                                ]),
                                viewBox: '0 0 100 101',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg'
                              },
                              Nr,
                              2
                            ))
                          ]))
                        : s.value === 3
                          ? (l(),
                            d(
                              G,
                              { key: 2 },
                              [
                                i.value
                                  ? (l(), d('img', Pr))
                                  : (l(), d('img', Dr))
                              ],
                              64
                            ))
                          : b('', !0)
                  ],
                  8,
                  Lr
                ),
                c(
                  'div',
                  Yr,
                  v(Math.floor(g.message.duration / 60)) +
                    ':' +
                    v(
                      `${Math.floor(g.message.duration % 60)}`.padStart(2, '0')
                    ),
                  1
                )
              ],
              512
            )
          ],
          64
        )
      )
    }
  }),
  Xr = { class: 'flex items-center justify-center' },
  Wr = {
    class: 'bg-gray-100 rounded-lg py-1.5 px-2 my-3 text-sm text-gray-700'
  },
  zr = L({
    __name: 'SystemMessageContent',
    props: { message: {} },
    setup(o) {
      const e = o,
        t = W(),
        s = h(() => t.state.imkit.users),
        a = h(() => {
          const { t: n } = xe(),
            r = s.value[e.message.senderId].nickname
          switch (e.message.type) {
            case O.Recall:
              return e.message.senderId === t.state.imkit.uid
                ? n('youUnsentMessage')
                : n('someoneUnsentMessage', [r])
            case O.JoinRoom:
              return n('someoneJoinedTheChat', [r])
            case O.LeaveRoom:
              return n('someoneLeftTheChat', [r])
            case O.AddMember:
              return n('someoneInvited', [
                r,
                e.message.members.map((i) => i.nickname).join(', ')
              ])
            case O.DeleteMember:
              return n('someoneKicked', [
                r,
                e.message.members.map((i) => i.nickname).join(', ')
              ])
            case O.AddMembers:
              return n('someoneInvited', [
                r,
                e.message.members.map((i) => i.nickname).join(', ')
              ])
            case O.Announcement:
              return e.message.text
            default:
              return ''
          }
        })
      return (n, r) => (l(), d('div', Xr, [c('div', Wr, v(a.value), 1)]))
    }
  }),
  Jr = {
    key: 3,
    class: 'text-gray-500 text-xs self-end flex flex-col items-end'
  },
  Hr = { key: 0 },
  Zr = { key: 5, class: 'w-30px' },
  qr = { class: 'flex flex-col items-start max-w-3/5 <sm:max-w-3/4' },
  $r = { key: 0, class: 'text-xs font-500 text-gray-500 ml-1 mb-1' },
  ei = { key: 6, class: 'text-gray-500 text-xs self-end' },
  ti = L({
    __name: 'MessageCell',
    props: { source: {} },
    setup(o) {
      const e = o,
        t = e.source,
        s = {
          [O.Text]: fe,
          [O.Image]: Tn,
          [O.Sticker]: Ln,
          [O.Video]: Kn,
          [O.File]: Xn,
          [O.Template]: mr,
          [O.Flex]: Rr,
          [O.Location]: Fr,
          [O.Audio]: jr,
          [O.Recall]: fe,
          [O.JoinRoom]: fe,
          [O.LeaveRoom]: fe,
          [O.AddMember]: fe,
          [O.DeleteMember]: fe,
          [O.AddMembers]: fe,
          [O.Announcement]: fe
        },
        a = W(),
        n = h(() => {
          if (a.state.imkit.uid !== e.source.senderId) return 0
          const { rooms: F, uid: T, messageMultiList: R } = a.state.imkit,
            D = F[e.source.roomId]
          return D
            ? Object.keys(D.lastReadMessageId)
                .filter((X) => X !== T)
                .map((X) => {
                  var Q
                  const P = D.lastReadMessageId[X]
                  return (Q = R.main) == null ? void 0 : Q.finds(P)
                })
                .reduce(
                  (X, P) =>
                    P && P.createdAt >= e.source.createdAt ? X + 1 : X,
                  0
                )
            : 0
        }),
        r = h(() => e.source.isIncoming),
        i = h(() => !r.value),
        u = h(() => {
          var R
          const T = (
            ((R = a.state.imkit.messageMultiList.main) == null
              ? void 0
              : R.messageGroups) ?? new Map()
          ).get(t.groupId)
          return T ? T[0].id === t.id : !1
        }),
        m = h(() => {
          var R
          const T = (
            ((R = a.state.imkit.messageMultiList.main) == null
              ? void 0
              : R.messageGroups) ?? new Map()
          ).get(t.groupId)
          return T ? T[T.length - 1].id === t.id : !1
        }),
        p = I(!1),
        g = (F) => {
          ;(p.value = !0), F.preventDefault()
        },
        A = () => {
          a.commit('imkit/setState', { replyId: e.source.id })
        },
        f = () => {
          let F = ''
          switch (e.source.type) {
            case O.Text:
              F = e.source.text
              break
            case O.Location:
              F = e.source.address
              break
          }
          navigator.clipboard.writeText(F)
        },
        y = () => {
          a.dispatch('imkit/recallMessage', {
            roomId: e.source.roomId,
            _id: e.source.id,
            messageType: 'recall'
          })
        },
        S = h(() => {
          const F =
            /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
          if (e.source.type === O.Text) {
            const T = e.source.text
            for (let R = 0; R < T.length; R++) if (!F.test(T[R])) return !1
            return !0
          }
          return !1
        }),
        M = h(() => e.source),
        U = h(() => e.source.isSystem),
        B = h(() => a.state.imkit.config.styles),
        _ = h(() => a.state.imkit.users[e.source.senderId])
      return (F, T) => {
        var R, D, X
        return U.value
          ? (l(), Y(zr, { key: 0, message: F.source }, null, 8, ['message']))
          : (l(),
            d(
              'div',
              {
                key: 1,
                class: K([
                  'flex gap-2',
                  [
                    r.value ? 'justify-start' : 'justify-end',
                    u.value ? 'mt-1' : 'mt-0.25',
                    m.value ? 'mb-1' : 'mb-0.25'
                  ]
                ]),
                onMouseleave: T[1] || (T[1] = (P) => (p.value = !1)),
                onClick: T[2] || (T[2] = (P) => (p.value = !1))
              },
              [
                i.value && p.value
                  ? (l(),
                    d('img', {
                      key: 0,
                      src: rn,
                      class: 'w-5 h-5 my-auto cursor-pointer',
                      onClick: y
                    }))
                  : b('', !0),
                i.value && p.value
                  ? (l(),
                    d('img', {
                      key: 1,
                      src: pt,
                      class: 'w-5 h-5 my-auto cursor-pointer',
                      onClick: f
                    }))
                  : b('', !0),
                i.value && p.value
                  ? (l(),
                    d('img', {
                      key: 2,
                      src: At,
                      class: 'w-5 h-5 my-auto cursor-pointer',
                      onClick: A
                    }))
                  : b('', !0),
                i.value && m.value && !p.value
                  ? (l(),
                    d('div', Jr, [
                      n.value > 0
                        ? (l(),
                          d('div', Hr, v(F.$t('read')) + ' ' + v(n.value), 1))
                        : b('', !0),
                      c(
                        'div',
                        null,
                        v(w(oe)(F.source.createdAt).format('H:mm')),
                        1
                      )
                    ]))
                  : b('', !0),
                r.value && u.value
                  ? (l(),
                    Y(
                      ne,
                      {
                        key: 4,
                        url:
                          ((R = _.value) == null ? void 0 : R.avatarUrl) ?? '',
                        name:
                          ((D = _.value) == null ? void 0 : D.nickname) ?? '',
                        class: 'h-30px w-30px rounded-full text-xs'
                      },
                      null,
                      8,
                      ['url', 'name']
                    ))
                  : r.value
                    ? (l(), d('div', Zr))
                    : b('', !0),
                c('div', qr, [
                  r.value && u.value
                    ? (l(),
                      d(
                        'div',
                        $r,
                        v(((X = _.value) == null ? void 0 : X.nickname) ?? ''),
                        1
                      ))
                    : b('', !0),
                  c(
                    'div',
                    {
                      class: K([
                        'rounded overflow-hidden relative',
                        [
                          r.value
                            ? 'bg-gray-100 text-gray-900 rounded-r-xl'
                            : 'bg-gray-100 text-gray-900 rounded-l-xl',
                          i.value && u.value ? 'rounded-tr-xl' : '',
                          i.value && m.value ? 'rounded-br-xl' : '',
                          r.value && u.value ? 'rounded-tl-xl' : '',
                          r.value && m.value ? 'rounded-bl-xl' : '',
                          [w(O).Sticker, w(O).Image].includes(F.source.type)
                            ? '!bg-white'
                            : '',
                          S.value ? '!bg-white !text-3xl' : '',
                          [w(O).Template, w(O).Flex].includes(F.source.type)
                            ? '!bg-white !rounded-none'
                            : 'px-3 py-2',
                          [w(we).ImageCarousel, w(we).Carousel].includes(
                            M.value.templateType
                          )
                            ? '!bg-white !rounded-none'
                            : ''
                        ]
                      ]),
                      style: J([
                        r.value
                          ? B.value.incomingMessageCell
                          : B.value.outgoingMessageCell
                      ]),
                      onContextmenu: g,
                      onMouseenter: T[0] || (T[0] = (P) => (p.value = !0))
                    },
                    [
                      (l(),
                      Y(Je(s[F.source.type]), { message: w(t) }, null, 8, [
                        'message'
                      ]))
                    ],
                    38
                  )
                ]),
                r.value && m.value && !p.value
                  ? (l(),
                    d(
                      'div',
                      ei,
                      v(w(oe)(F.source.createdAt).format('H:mm')),
                      1
                    ))
                  : b('', !0),
                r.value && p.value
                  ? (l(),
                    d('img', {
                      key: 7,
                      src: At,
                      class: 'w-5 h-5 my-auto cursor-pointer',
                      onClick: A
                    }))
                  : b('', !0),
                r.value && p.value
                  ? (l(),
                    d('img', {
                      key: 8,
                      src: pt,
                      class: 'w-5 h-5 my-auto cursor-pointer',
                      onClick: f
                    }))
                  : b('', !0)
              ],
              34
            ))
      }
    }
  })
const si = ce(ti, [['__scopeId', 'data-v-98964aed']]),
  oi = {
    class:
      'overflow-auto absolute right-0 bottom-[110%] rounded-xl h-80 w-80 max-w-full bg-white border flex flex-col divide-y'
  },
  ai = {
    class:
      'flex-grow grid grid-cols-4 p-4 gap-4 items-center justify-center overflow-y-auto <sm:grid-cols-3'
  },
  ni = ['src', 'onClick'],
  ri = {
    key: 0,
    class: 'flex flex-shrink-0 h-14 w-full overflow-x-auto p-3 gap-4'
  },
  ii = ['src', 'onClick'],
  li = L({
    __name: 'StickerPanel',
    emits: ['close'],
    setup(o, { emit: e }) {
      const t = W(),
        s = [{ name: 'FunFunFamily', number: 40 }],
        a = I(s[0]),
        n = h(() => t.state.imkit.rooms[t.state.imkit.selectedRoomId]),
        r = e,
        i = async (u) => {
          const m = { roomId: n.value.id, messageType: 'sticker', sticker: u }
          await t.dispatch('imkit/sendMessage', m), r('close')
        }
      return (u, m) => (
        l(),
        d('div', oi, [
          c('div', ai, [
            (l(!0),
            d(
              G,
              null,
              $(
                a.value.number,
                (p) => (
                  l(),
                  d(
                    'img',
                    {
                      src: `/sticker/${a.value.name}/${a.value.name}-${p}.png`,
                      key: p,
                      class: 'border-0 cursor-pointer object-contain',
                      onClick: (g) => i(`${a.value.name}-${p}`)
                    },
                    null,
                    8,
                    ni
                  )
                )
              ),
              128
            ))
          ]),
          s.length > 1
            ? (l(),
              d('div', ri, [
                (l(),
                d(
                  G,
                  null,
                  $(s, (p) =>
                    c(
                      'img',
                      {
                        src: `/sticker/${p.name}/${p.name}-1.png`,
                        key: p.name,
                        class: 'border-0 cursor-pointer object-contain h-full',
                        onClick: (g) => (a.value = p)
                      },
                      null,
                      8,
                      ii
                    )
                  ),
                  64
                ))
              ]))
            : b('', !0)
        ])
      )
    }
  }),
  st = (o) =>
    new Promise((e, t) => {
      const s = new FileReader()
      ;(s.onload = () => {
        const a = new Image()
        ;(a.src = s.result),
          (a.onload = async () => {
            e({
              id: await ot(a.src),
              width: a.width,
              height: a.height,
              thumbnailUrl: a.src,
              originalUrl: a.src
            })
          }),
          (a.onerror = () => t)
      }),
        (s.onerror = () => {
          t(s.error)
        }),
        s.readAsDataURL(o)
    }),
  ci = (o) =>
    new Promise((e, t) => {
      const s = document.createElement('canvas'),
        a = s.getContext('2d')
      if (!a) {
        t(new Error('Could not get canvas context'))
        return
      }
      const n = document.createElement('video')
      ;(n.src = URL.createObjectURL(o)),
        (n.autoplay = !0),
        (n.onloadedmetadata = () => {
          ;(s.width = n.videoWidth), (s.height = n.videoHeight)
        }),
        (n.onloadeddata = () => {
          a.drawImage(n, 0, 0, s.width, s.height),
            s.toBlob(async (r) => {
              if (!r) {
                t(new Error('Could not create blob'))
                return
              }
              const i = new File([r], 'snapshot.jpg', { type: 'image/jpeg' }),
                u = new FileReader()
              u.readAsDataURL(r),
                (u.onloadend = async () => {
                  e({
                    id: await ot(n.src),
                    width: s.width,
                    height: s.height,
                    duration: n.duration,
                    thumbnailUrl: u.result,
                    originalUrl: '',
                    thumbnailFile: { id: await ot(s.toDataURL()), file: i }
                  })
                })
            }, 'image/jpeg')
        }),
        (n.onerror = () => t)
    }),
  di = { key: 0, class: 'bg-gray-200 rounded-lg mb-3 flex gap-2 p-2' },
  ui = { class: 'flex flex-col gap-1' },
  mi = { class: 'text-sm font-bold text-gray-600' },
  gi = { class: 'text-xs text-gray-500 multiline-ellipsis' },
  pi = { class: 'flex gap-2 ml-auto flex-shrink-0' },
  Ai = { key: 0, class: 'w-10 h-10 rounded object-cover' },
  hi = L({
    __name: 'ReplyMessagePreview',
    setup(o) {
      const e = W(),
        t = h(() => {
          var u
          const { replyId: i } = e.state.imkit
          return (u = e.state.imkit.messageMultiList.main) == null
            ? void 0
            : u.map.get(i)
        }),
        s = h(() => {
          const i = t.value
          if (i) return e.state.imkit.users[i.senderId]
        }),
        a = h(() => {
          if (t.value.type === O.Text) return t.value.text
          if (t.value.type === O.Image) {
            const { t: i } = xe()
            return {
              [O.Text]: i('text'),
              [O.Image]: i('image'),
              [O.Video]: i('video'),
              [O.Sticker]: i('sticker')
            }[t.value.type]
          }
          return ''
        }),
        n = h(() => {
          if (t.value.type === O.Image) return t.value.images[0]
        }),
        r = () => {
          e.commit('imkit/setState', { replyId: '' })
        }
      return (i, u) => {
        var p, g, A
        const m = Ke('src')
        return t.value
          ? (l(),
            d('div', di, [
              j(
                ne,
                {
                  class:
                    'bg-gray-300 row-span-2 h-24px w-24px rounded-lg text-sm flex-shrink-0',
                  url: ((p = s.value) == null ? void 0 : p.avatarUrl) ?? '',
                  name: ((g = s.value) == null ? void 0 : g.nickname) ?? ''
                },
                null,
                8,
                ['url', 'name']
              ),
              c('div', ui, [
                c('div', mi, v((A = s.value) == null ? void 0 : A.nickname), 1),
                c('div', gi, v(a.value), 1)
              ]),
              c('div', pi, [
                n.value
                  ? q((l(), d('img', Ai, null, 512)), [
                      [m, n.value.thumbnailUrl]
                    ])
                  : b('', !0),
                c('img', {
                  src: Ze,
                  class: 'w-5 h-5 cursor-pointer text-gray-400',
                  onClick: r
                })
              ])
            ]))
          : b('', !0)
      }
    }
  })
const fi = ce(hi, [['__scopeId', 'data-v-2fb9954c']]),
  vi =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXElEQVR4nO2Zv2sUQRTHH4qKhYWFiljYSqLVFbl9M3aiQbAzWFgGrA0Wlrvz7oKKRLAMWomN9w8o2AdLG7EJgj8awUKy995GRFcWklxiSLxzf8zMMh/49vtlZt/37XcBAoFAIBAIBAL7oyidVsRGGXnUpfQCtBF8kB9TSTaviFcUSb4lwxLF6XloC2gkQuKnSJzuMLpNSPwQfEYvrp1A4gUkfreXyb9OOQHviPMDupddQuJnxTUdy+iW0mnwhW6fz2iSu2j4w2QmN8Ur4DpTcX5YGb6GJAMk/vl/RjeUZPPgKlG8fg4N31ckX0uZHA2rtJje4BLdpfyoNjKHhl8rw7+rMDoaVvIEXEETd5BkWRleq9TkdvW5a9fkve/HNfEtNPK2NpOjYfXewziRMu/vgmdxImVO90exnPgVJ1TmdGXgVZyokorM8EotRjGRG7u+TiwLiT8Wc6N6szS8attcox8KiuSOdXO7xL+inpytxfDF/vC0Mrxq3+QOvYK6p7LeXAvtm82LZ4GmV0UkzqwYNvJt9nF+BJpmZjE9VSwciuRzw+/vEthkqvHr7lCroWu/7o62GjN1XXeXW42qr7uTrcZ+IMmb1rQa44CJ3PS61ZiUznJ+SBn54lerUZJi4fei1aiKKE5PouF1J1uNulDEzyc6XcMvwGc0cWciw73sMvgOjhlRaPjT3CA/CL6DY0YUksTQBjpjRVSNrYaLEYVGXkKbiP4RURHxdWgbaq+IstVq2Isoy61G8xHlUKtRf0Q52mpU/GNu1UoFa4uNsv+27g1nrT1EIBAIBAJghT+Mm9s2KhDbfwAAAABJRU5ErkJggg==',
  _t =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO1Zu24TQRRdAaGg5FHx+AsQfIgFgj5NZOeeSQGi2Y7QWiQKiCaW0iFCAaHhD1JEAoUPIKQiMRKR7Jld4wy66weOsbUzuzO7RvKRrmTJo/U5O/feOXMdBHPMMUdu6ErlfHt5+Z4ieiqBt5LoqyT6KYE4id7nff6O17SAuzoMzwVloy3ETUn0XBEdKkBbxncJrLaq1RuFEz+pVq8p4JUkijIQPxOy94yNEyGuFkI+Ah5KomZe4hPiOAIeeCOuFxcXFPDaA3F9Johe8m+5Jn9JAh+9k8cwrXb4N12RXyiSvPobn3QYXswtoJC0wdTYyEW+TfSoRPKaIxLifibyv5aWriiio7IFSKJmphbLfb5s8moQROtW5Pl0tDqkhNBxvW5MKFkrhM0uRO1a7ZaxgMQeWJD/vburdberO1tb6eQ3N5O13b09rVZWzEUAq0bk2WSxT7EiP0CKiAH54fI9CxFEh2waUwUkrtIiFUYJDUTEjca/axuNyWvrFqkH3EkVwHbXpsDG3+qknZi2JjZIubFdeGKS/9tWD00R4Yw8kjp4ky4A2Ld98FQRp6e9cEBe9brRF5MdyGyVJ4pwRF71UujIRECuS0oiYvyt93cjF3kkKaRKFdApSEDTZwp1vKcQ/Bdxx3MRbzsh3y9Yk3NCuWyjrg6y0YJ1KOJxqgAeOs2slajVbpuZOaKDrGYu9mXmgG/G0zy2rlnsdOzTThM9MyI/kxcaQLWA64ENeCJgWWD+guhFYAsNXJ6FS70CjjPPTXlWWbaASIhKkAc8qyxRwFqQF3wPlcC7oslL4IMOwwu5BQyHu0Q7hZEneu9suDs2Xi+iM605e/OTwLNKT93pR+6CtZybrvMB4yDXFfd5bttB0eDTMbEdpt5pNIgO2B5Yn7A+wCaLh048t2HPzhcPvtmxHelHUwKf+Tu2xOwqZ+Jv1jnmCP5//AFGuxmMzLZJIgAAAABJRU5ErkJggg==',
  it = (o) => (Ae('data-v-21b242a4'), (o = o()), he(), o),
  yi = { class: 'relative flex justify-center' },
  ki = it(() => c('img', { class: 'w-4 h-4', src: Be }, null, -1)),
  wi = [ki],
  bi = {
    key: 0,
    class:
      'transition duration-150 ease-in-out absolute flex items-center gap-1 bottom-2 bg-white bg-opacity-85 rounded-full shadow-lg p-2 text-xs'
  },
  xi = it(() => c('img', { class: 'w-4 h-4', src: _t }, null, -1)),
  Ci = ['disabled'],
  Ii = { key: 0, class: 'w-full h-10.5 flex items-center justify-center' },
  Ri = it(() =>
    c(
      'svg',
      {
        class: 'w-6 h-6 text-gray-200 animate-spin fill-blue-300',
        viewBox: '0 0 100 101',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      [
        c('path', {
          d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
          fill: 'currentColor'
        }),
        c('path', {
          d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
          fill: 'currentFill'
        })
      ],
      -1
    )
  ),
  Ei = [Ri],
  Si = { class: 'text-base font-600' },
  Ui = { class: 'text-xs' },
  Bi = L({
    __name: 'LocationModal',
    setup(o) {
      class e {
        constructor(F, T, R = null) {
          k(this, 'lat')
          k(this, 'lng')
          k(this, 'address')
          ;(this.lat = F), (this.lng = T), (this.address = R)
        }
        get isValid() {
          return this.address !== null
        }
      }
      const t = ke(),
        { t: s } = xe(),
        a = W(),
        n = a.state.imkit.config.mapApiKey,
        r = I(),
        i = I(new e(21.30895, -157.826182)),
        u = I({ lat: i.value.lat, lng: i.value.lng }),
        m = h(() => ({ position: { lat: i.value.lat, lng: i.value.lng } })),
        p = I(''),
        g = I(!1),
        A = I(10),
        f = I(!1),
        y = I(''),
        S = () =>
          new Promise((_, F) => {
            ;(g.value = !0),
              navigator.geolocation.getCurrentPosition(
                (T) => {
                  let { latitude: R, longitude: D } = T.coords
                  ;(y.value = ''), (g.value = !1), _({ lat: R, lng: D })
                },
                (T) => {
                  switch (((g.value = !1), T.code)) {
                    case T.PERMISSION_DENIED:
                      y.value = s('noAccessLocationPermission')
                      break
                    case T.POSITION_UNAVAILABLE:
                      y.value = s('locationInfoUnavailable')
                      break
                    case T.TIMEOUT:
                      y.value = s('requestLocationTimeout')
                      break
                  }
                  F(T)
                },
                { enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0 }
              )
          }),
        M = async (_, F) => {
          try {
            const { data: T } = await be.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${_},${F}&key=${n}`
            )
            if (T.error_message) throw new Error(T.error_message)
            return T.results[0].formatted_address
          } catch (T) {
            throw ((y.value = s('addressUnavailable')), T)
          }
        },
        U = We(
          700,
          async (_) => {
            var F, T
            try {
              if (_ === 0) {
                const X = (F = r.value) == null ? void 0 : F.map.getCenter()
                if (X) {
                  const { lat: P, lng: Q } = X
                  i.value = new e(P(), Q())
                }
              } else if (_ === 1) {
                const { lat: X, lng: P } = await S()
                ;(i.value = new e(X, P)),
                  (A.value = 17),
                  (T = r.value) == null || T.map.panTo({ lat: X, lng: P })
              }
              let { lat: R, lng: D } = i.value
              ;(D = ((((D + 180) % 360) + 360) % 360) - 180),
                (R = Math.max(Math.min(R, 90), -90)),
                (p.value = await M(R, D)),
                (i.value = new e(R, D, p.value))
            } catch (R) {
              console.error(R)
            }
          },
          { noLeading: !1, noTrailing: !1 }
        ),
        B = async () => {
          f.value = !0
          const _ = {
            roomId: a.state.imkit.selectedRoomId,
            messageType: 'location',
            message: p.value,
            latitude: m.value.position.lat,
            longitude: m.value.position.lng
          }
          t.closeAll(), await a.dispatch('imkit/sendMessage', _), (f.value = !1)
        }
      return (
        U(1),
        (_, F) => (
          l(),
          Y(
            w(Ce),
            {
              class: 'flex items-center justify-center',
              'content-class':
                'flex flex-col bg-white rounded-lg overflow-hidden w-450px <sm:w-350px',
              'content-transition': 'vfm-fade',
              'overlay-transition': 'vfm-fade'
            },
            {
              default: se(() => [
                c('div', yi, [
                  j(
                    w(bt),
                    {
                      ref_key: 'mapRef',
                      ref: r,
                      'api-key': w(n),
                      center: u.value,
                      zoom: A.value,
                      disableDefaultUi: !0,
                      onCenter_changed: F[0] || (F[0] = (T) => w(U)(0)),
                      class: 'w-450px h-350px <sm:w-350px <sm:h-250px'
                    },
                    {
                      default: se(() => [
                        j(w(wt), { options: m.value }, null, 8, ['options'])
                      ]),
                      _: 1
                    },
                    8,
                    ['api-key', 'center', 'zoom']
                  ),
                  c(
                    'button',
                    {
                      class:
                        'absolute top-2 right-2 flex items-center justify-center bg-white rounded-full shadow-lg w-9 h-9',
                      onClick: F[1] || (F[1] = (T) => w(t).closeAll())
                    },
                    wi
                  ),
                  c(
                    'button',
                    {
                      class:
                        'absolute bottom-2 right-2 flex items-center justify-center bg-white rounded-full shadow-lg w-9 h-9',
                      onClick: F[2] || (F[2] = (T) => w(U)(1))
                    },
                    [
                      c(
                        'img',
                        {
                          class: K(['w-5 h-5', { 'animate-pulse': g.value }]),
                          src: vi
                        },
                        null,
                        2
                      )
                    ]
                  ),
                  j(Ve, null, {
                    default: se(() => [
                      y.value
                        ? (l(), d('div', bi, [xi, ae(' ' + v(y.value), 1)]))
                        : b('', !0)
                    ]),
                    _: 1
                  })
                ]),
                c(
                  'button',
                  {
                    class:
                      'flex flex-col items-center gap-0.5 bg-blue-400 disabled:cursor-not-allowed text-white rounded-lg m-2 p-2',
                    disabled: g.value || f.value || !i.value.isValid,
                    onClick: B
                  },
                  [
                    f.value
                      ? (l(), d('div', Ii, Ei))
                      : (l(),
                        d(
                          G,
                          { key: 1 },
                          [
                            c('div', Si, v(_.$t('sendCurrentLocation')), 1),
                            c('div', Ui, v(p.value), 1)
                          ],
                          64
                        ))
                  ],
                  8,
                  Ci
                )
              ]),
              _: 1
            }
          )
        )
      )
    }
  })
const Fi = ce(Bi, [['__scopeId', 'data-v-21b242a4']]),
  Mi = (o) => (Ae('data-v-2d2cfa64'), (o = o()), he(), o),
  Ti = { class: 'flex items-center gap-1 flex-grow' },
  Oi = {
    class:
      'h-12 bg-gray-100 px-3 rounded-xl w-0 min-w-0 flex-grow flex items-center gap-3 relative'
  },
  Li = {
    key: 0,
    class:
      'transition duration-150 ease-in-out flex items-center gap-1 bg-white rounded-xl p-2 text-xs text-gray-600'
  },
  _i = Mi(() => c('img', { class: 'w-4 h-4', src: _t }, null, -1)),
  Vi = { class: 'volumes' },
  Qi = {
    class:
      'text-white font-bold bg-black bg-opacity-30 rounded-full text-xs py-1 px-2 ml-auto'
  },
  Ki = { key: 1, class: 'cursor-not-allowed ml-2 mr-1 w-6 h-6', src: Mt },
  ht = 'audio/webm',
  Gi = 180,
  Ni = L({
    __name: 'AudioInput',
    setup(o) {
      const { t: e } = xe(),
        t = W(),
        s = I(3),
        a = I(),
        n = I(),
        r = I(0),
        i = I(0),
        u = I(),
        m = I(),
        p = is([]),
        g = I(''),
        A = h(() => r.value > 1),
        f = async () => {
          var S, M
          try {
            switch (s.value) {
              case 3: {
                ;(s.value = 0),
                  p.splice(0),
                  (r.value = 0),
                  (i.value = 0),
                  (a.value = await navigator.mediaDevices.getUserMedia({
                    video: !1,
                    audio: !0
                  })),
                  (n.value = new cs.RecordRTCPromisesHandler(a.value, {
                    type: 'audio',
                    mimeType: ht
                  }))
                let U = new AudioContext(),
                  B = U.createAnalyser()
                ;(B.fftSize = 64),
                  (B.smoothingTimeConstant = 0),
                  U.createMediaStreamSource(a.value).connect(B),
                  (m.value = window.setInterval(() => {
                    let F = new Uint8Array(B.frequencyBinCount)
                    B.getByteFrequencyData(F)
                    let T = F.reduce((D, X) => D + X) / F.length
                    const R = Math.min(1, T / 128)
                    p.unshift(R)
                  }, 100)),
                  await n.value.startRecording(),
                  (i.value = Date.now()),
                  (u.value = window.setInterval(() => {
                    ;(r.value = (Date.now() - i.value) / 1e3),
                      r.value >= Gi && f()
                  }, 1e3)),
                  (s.value = 1)
                break
              }
              case 1:
                ;(s.value = 2),
                  await ((S = n.value) == null ? void 0 : S.stopRecording()),
                  (M = a.value) == null ||
                    M.getTracks().forEach((U) => U.stop()),
                  clearInterval(u.value),
                  clearInterval(m.value),
                  (s.value = 3)
                break
              default:
                break
            }
          } catch (U) {
            console.error(U), (g.value = e('noAccessMicrophonePermission'))
          }
        },
        y = async () => {
          var M
          s.value !== 3 && (await f()),
            p.splice(0),
            (r.value = 0),
            (i.value = 0)
          let S = await ((M = n.value) == null ? void 0 : M.getBlob())
          if (S) {
            const U = await ds(S),
              B = new File([S], `${Ye()}.webm`),
              _ = {
                roomId: t.state.imkit.selectedRoomId,
                messageType: 'audio',
                file: B,
                duration: U,
                originalUrl: '',
                extra: {
                  mimeType: ht,
                  fileName: B.name.split('.').slice(0, -1).join('.'),
                  bytes: B.size,
                  fileExtension: B.name.split('.').pop()
                }
              }
            await t.dispatch('imkit/sendMessage', _)
          }
        }
      return (
        ls(() => {
          clearInterval(u.value), clearInterval(m.value)
        }),
        (S, M) => (
          l(),
          d('div', Ti, [
            c('div', Oi, [
              c(
                'div',
                {
                  class:
                    'w-8 h-8 border border-2px border-gray-300 rounded-full flex items-center justify-center flex-shrink-0',
                  onClick: f
                },
                [
                  c(
                    'div',
                    {
                      class: K([
                        'bg-red-500 rounded-full w-6 h-6 transition-all ease-in duration-200',
                        {
                          'w-3.5 h-3.5 rounded': s.value == 1,
                          'bg-red-300 cursor-not-allowed': g.value
                        }
                      ])
                    },
                    null,
                    2
                  )
                ]
              ),
              j(Ve, null, {
                default: se(() => [
                  g.value
                    ? (l(), d('div', Li, [_i, ae(' ' + v(g.value), 1)]))
                    : b('', !0)
                ]),
                _: 1
              }),
              c('div', Vi, [
                (l(!0),
                d(
                  G,
                  null,
                  $(
                    p,
                    (U, B) => (
                      l(),
                      d(
                        'div',
                        {
                          key: B,
                          class:
                            'w-0.5 bg-gray-400 rounded flex-shrink-0 !min-h-0.5',
                          style: J({ height: `${U * 28}px` })
                        },
                        null,
                        4
                      )
                    )
                  ),
                  128
                ))
              ]),
              c(
                'div',
                Qi,
                v(Math.floor(r.value / 60)) +
                  ':' +
                  v(`${Math.floor(r.value % 60)}`.padStart(2, '0')),
                1
              )
            ]),
            A.value
              ? (l(),
                d('img', {
                  key: 0,
                  class: 'cursor-pointer ml-2 mr-1 w-6 h-6',
                  src: Ft,
                  onClick: y
                }))
              : (l(), d('img', Ki))
          ])
        )
      )
    }
  })
const Pi = ce(Ni, [['__scopeId', 'data-v-2d2cfa64']]),
  lt = () => {
    const o = window.location.href,
      e = o.substring(o.indexOf('?'))
    return new URLSearchParams(
      e.lastIndexOf('#/') == -1 ? e : e.substring(0, e.lastIndexOf('#/'))
    )
  },
  Di =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3UMU7DQBCF4ZEo4Aq0nICCKg03oMJpOIOVN1Nlx4UPAJcDypwgdInoiAJaCB3YG7IQ1nmftJJlWWP9XnlFiIiIiIiIiIhoR8D0DPA71XAbr2XIzJqRalio+uvHCot4Tw4j1t8X4M+q4VIOIVaHGG09sYOKtsTYQUSbNSPAl1+HhZe4voleFneQWffOroDmBgjXHdHl7LQlxH4+W3y0bRFbfLT9ILbYaNshtrhowC96TuNx+qww7jq947t+tyYB4I85YtOiw4PsU9u2JzljE6LXdV0f563YUvzqOWN7ou9l3yYTPwd8tomdm02vcs2Os1T9afMPz+K75L8A/LSqqqPcc+PMODv3XCIiIiIiIiIiIiIi+QNvk5r+mltEG0oAAAAASUVORK5CYII=',
  Yi =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO3UMU7DMBiGYUsMcAVWTsDA1IUbdEIsHIlejrKlQ5r8H07SjYqtiCCrRUxNU2ooTt9HsmQp0W+9iWTnAAAAAAAAcKCiqK/MqolZ9Rj2bsikZmTmX6WqDWu9b0buFGL1Hf1Wlv7WnUKshhitHbGDilbP2EFEax273BK2CmvLs2VyF5k6/qyZfy/Llwczf9cRnc6fVo/Yr3eTj9YesclH6wexyUbrgNjkoovC33TdxlJ133dWeLfr9g5n/W5ND5J/jhHbJ1ryU3dMeZ5fxIzdFW3mP7IsO49bsafw1WPGdkf7J3dskq4lP9vENlI9jje7HptVi03sLJzl/ov5fHHZtu1Z7LlhZpgdey4AAAAAAAAAAO4PfAKuTjfhZH9KRQAAAABJRU5ErkJggg==',
  ji =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLElEQVR4nO3UMU7DMBTGcSMGOAMbnICBBRZuwES6cIbIn1NFynOG7NwOWOECMBWxgQA91EqA2iRtLCW2vp/k0c/5x5KNISIiIiIiIiIiIiKKz15ZlkdZlu2HHqwzdbaeYabAWn/qnH9yzn8555+LoroKNVtnAfKiswF51LPM2AD/sIz9WYC8AzIbPldmOuvf7HszpqZpDn9/UKjodbHL9Znn+UHYii3pXw8Z3RKr686MDfBngH8NEd0Wq2foWWYKrK3OnZPFhlv5AOqbrhmAXLfEvjknl2ZK7IDo6GKHREcbu0t09LHbRCcTu1IU9UXH673xNda9Jka2/abTuNldo5OI7RudVGxXdJKxK/oY/Y2WRbQPVF9AdQLIra75vD7uvZGIiIiIiIiIiMx632C5/lbO/M2+AAAAAElFTkSuQmCC',
  Xi =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVR4nO3UMU7DMBTGcVcd4AxscAIGFli4QSfUhRtxO2CLQJHzPp5TOoHYQBiZhEqgNk0To8bR95MiZcmz/7FkY4iIiIiIiIiIiIiIEuO9n1i7PPLeT/9h9rSePTFDAOAU0EfAeRH3DJSzeLPLmYhbhtmAPoS1Ys3uDND7akPVI6LvgJv3n+vm9azVbEDvzD7leX74e0NxotfHfs/9zLLsIG7FjsJfjxm9KbY+4Vuzb9bqmYi+xohuig1rhLXMEADluYi+bNjoR1E8XW+bIaJXDbFvRaGXZkjQIzq52D7RycZ2iU4+dpfo0cT+ABYXTbd3020cvjUpQsNJj+Zku0aPIrZt9Khit0WPMvbPRbaKrt4TvaDasrY8EdGb8Djnjlt/SEREREREREREZr0vWIQ93o81LZQAAAAASUVORK5CYII=',
  Wi = {
    class: 'h-65px flex items-center p-2 justify-center border-b border-solid'
  },
  zi = {
    class: 'flex items-center flex-grow bg-gray-100 rounded-lg p-3 gap-2'
  },
  Ji = { key: 0, class: 'w-6 h-6 flex items-center justify-center' },
  Hi = c(
    'svg',
    {
      class: 'w-5 h-5 text-gray-200 animate-spin fill-blue-400',
      viewBox: '0 0 100 101',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      c('path', {
        d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
        fill: 'currentColor'
      }),
      c('path', {
        d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
        fill: 'currentFill'
      })
    ],
    -1
  ),
  Zi = [Hi],
  qi = { key: 1, class: 'w-6 h-6 cursor-pointer', src: He },
  $i = ['placeholder'],
  el = { class: 'font-500 text-sm pb-0.5 text-gray-500' },
  tl = { key: 1, width: '20', height: '20', src: Yi, alt: 'collapse-arrow' },
  sl = { key: 3, width: '20', height: '20', src: Xi, alt: 'expand-arrow' },
  ol = L({
    __name: 'SearchPanel',
    setup(o) {
      const e = W(),
        t = I(''),
        s = I(0),
        a = I([]),
        n = I(!1),
        r = I(!1),
        i = async () => {
          var A
          if (!n.value && t.value) {
            r.value = !0
            const {
              data: { result: f }
            } = await e.state.imkit.axios.post(me.Search, {
              type: ['messages'],
              room: e.state.imkit.selectedRoomId,
              keyword: t.value
            })
            ;(a.value =
              ((A = f.messages[0]) == null ? void 0 : A.messages) ?? []),
              (r.value = !1),
              a.value.length > 0
                ? ((s.value = a.value.length),
                  await e.commit('imkit/setState', {
                    messageSearchKeyword: t.value
                  }),
                  await e.dispatch(
                    'imkit/navigateToMessage',
                    a.value[s.value - 1]
                  ))
                : (s.value = 0)
          }
        },
        u = (A) => {
          A > 0 &&
            A <= a.value.length &&
            ((s.value = A),
            e.dispatch('imkit/navigateToMessage', a.value[A - 1]))
        },
        m = We(1e3, i),
        p = rt(500, m, { atBegin: !1 })
      ue(t, p)
      const g = () => {
        e.commit('imkit/setState', { isSearchInRoomMode: !1 })
      }
      return (A, f) => (
        l(),
        d('div', Wi, [
          c('div', zi, [
            r.value ? (l(), d('div', Ji, Zi)) : (l(), d('img', qi)),
            q(
              c(
                'input',
                {
                  class: 'bg-gray-100 outline-none flex-grow',
                  'onUpdate:modelValue': f[0] || (f[0] = (y) => (t.value = y)),
                  placeholder: A.$t('searchInConversation'),
                  onCompositionstart: f[1] || (f[1] = (y) => (n.value = !0)),
                  onCompositionend: f[2] || (f[2] = (y) => (n.value = !1))
                },
                null,
                40,
                $i
              ),
              [[pe, t.value]]
            ),
            !r.value && t.value.length > 0
              ? (l(),
                d(
                  G,
                  { key: 2 },
                  [
                    c('div', el, v(s.value) + '/' + v(a.value.length), 1),
                    s.value > 1
                      ? (l(),
                        d('img', {
                          key: 0,
                          class: 'cursor-pointer',
                          width: '20',
                          height: '20',
                          src: Di,
                          alt: 'collapse-arrow',
                          onClick: f[3] || (f[3] = (y) => u(s.value - 1))
                        }))
                      : (l(), d('img', tl)),
                    s.value < a.value.length
                      ? (l(),
                        d('img', {
                          key: 2,
                          class: 'cursor-pointer',
                          width: '20',
                          height: '20',
                          src: ji,
                          alt: 'expand-arrow',
                          onClick: f[4] || (f[4] = (y) => u(s.value + 1))
                        }))
                      : (l(), d('img', sl))
                  ],
                  64
                ))
              : b('', !0),
            c('img', {
              src: Ze,
              class: 'w-5 h-5 cursor-pointer',
              onClick:
                f[5] ||
                (f[5] = () => {
                  w(p).cancel({ upcomingOnly: !0 }), (t.value = ''), w(m)(), g()
                })
            })
          ])
        ])
      )
    }
  }),
  Me = (o) => (Ae('data-v-8b3ed018'), (o = o()), he(), o),
  al = ['onDrop'],
  nl = { key: 1, class: 'flex items-center p-3 gap-3 border-b border-solid' },
  rl = { key: 2, class: 'h-40px w-40px relative' },
  il = {
    class:
      'text-base text-gray-900 overflow-ellipsis overflow-hidden whitespace-nowrap'
  },
  ll = {
    key: 0,
    slot: 'header',
    class: 'w-full h-12 flex items-center justify-center'
  },
  cl = Me(() =>
    c(
      'svg',
      {
        class: 'w-6 h-6 text-gray-200 animate-spin fill-blue-400',
        viewBox: '0 0 100 101',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      [
        c('path', {
          d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
          fill: 'currentColor'
        }),
        c('path', {
          d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
          fill: 'currentFill'
        })
      ],
      -1
    )
  ),
  dl = [cl],
  ul = { key: 0, class: 'text-sm text-gray-900 px-2' },
  ml = { class: 'flex items-end justify-center p-2 relative gap-3 pl-3' },
  gl = {
    key: 2,
    class:
      'absolute left-2 bottom-64px p-1.5 bg-white z-10 rounded-lg shadow-md flex items-stretch gap-1 text-gray-900'
  },
  pl = Me(() => c('img', { class: 'w-6 h-6', src: en }, null, -1)),
  Al = { class: 'text-xs' },
  hl = Me(() => c('img', { class: 'w-6 h-6', src: tn }, null, -1)),
  fl = { class: 'text-xs whitespace-nowrap' },
  vl = {
    key: 4,
    class:
      'bg-gray-100 p-3 rounded-lg flex flex-grow flex-col items-stretch relative'
  },
  yl = { class: 'flex items-center bg-gray-100 gap-3' },
  kl = {
    class:
      'flex flex-col flex-grow justify-center items-stretch gap-3 w-0 min-w-0'
  },
  wl = ['placeholder', 'onKeydown'],
  bl = { key: 0, class: 'flex gap-3' },
  xl = ['src'],
  Cl = ['onClick'],
  Il = Me(() => c('img', { src: on, width: '24', height: '24' }, null, -1)),
  Rl = [Il],
  El = Me(() => c('img', { src: an, width: '24', height: '24' }, null, -1)),
  Sl = [El],
  Ul = Me(() => c('img', { src: nn, width: '24', height: '24' }, null, -1)),
  Bl = L({
    __name: 'ChatRoom',
    setup(o) {
      const e = W(),
        { open: t } = ye({ component: Fi }),
        s = h(() => e.state.imkit.rooms[e.state.imkit.selectedRoomId]),
        a = h(() => e.state.imkit.selectedRoomId),
        n = h(
          () =>
            !!e.state.imkit.isRequesting[
              `/rooms/${e.state.imkit.selectedRoomId}/messages`
            ]
        ),
        r = h(() => {
          var E
          return (
            ((E = e.state.imkit.messageMultiList.main) == null
              ? void 0
              : E.array()) ?? []
          )
        }),
        i = h(() => lt().has('roomId')),
        u = h(() => r.value.at(-1)),
        m = h(() => e.state.imkit.isRoomInfoVisible),
        p = h(() => e.state.imkit.navigationTargetId),
        g = I(null),
        A = I(''),
        f = I(!1),
        y = I(!1),
        S = I(!1),
        M = I(!1),
        U = I(),
        B = I([]),
        _ = I([]),
        F = I(!1),
        T = I(!1),
        R = I(),
        D = I(oe().subtract(5, 'second')),
        X = I(!1),
        P = h(() => e.state.imkit.replyId),
        Q = h(() => e.state.imkit.config.settings),
        H = h(() => e.state.imkit.isSearchInRoomMode),
        ee = h(() => {
          const E = Object.keys(e.state.imkit.isTyping)
          return E.length > 0
            ? E.map((V) => {
                var N
                return (
                  ((N = e.state.imkit.users[V]) == null
                    ? void 0
                    : N.nickname) ?? ''
                )
              }).join(', ')
            : ''
        }),
        re = async () => {
          const E = async () => {
              if (A.value) {
                const { replyId: N } = e.state.imkit,
                  z = {
                    roomId: s.value.id,
                    messageType: 'text',
                    message: A.value.trim(),
                    reply: N || null
                  }
                ;(A.value = ''),
                  await e.dispatch('imkit/sendMessage', z),
                  e.commit('imkit/setState', { replyId: null })
              }
            },
            V = async () => {
              if (B.value.length > 0) {
                const N = {
                  roomId: s.value.id,
                  messageType: 'image',
                  images: B.value,
                  files: _.value
                }
                ;(B.value = []),
                  (_.value = []),
                  await e.dispatch('imkit/sendMessage', N)
              }
            }
          await Promise.all([V(), E()])
        },
        Ge = async () => {
          var V, N
          if (r.value.length >= e.state.imkit.numberOfTotalMessages) return
          const E = await e.dispatch('imkit/loadMessages', {
            roomId: s.value.id,
            beforeMessageId: (V = r.value[0]) == null ? void 0 : V.id
          })
          E &&
            E.length > 0 &&
            ((N = g.value) == null || N.scrollToIndex(E.length))
        },
        Ne = async () => {
          var E
          ;(T.value = !1),
            e.state.imkit.messageMultiList.main !=
              e.state.imkit.messageMultiList.tail &&
              (await e.dispatch('imkit/loadMessages', {
                roomId: s.value.id,
                afterMessageId:
                  (E = r.value[r.value.length - 1]) == null ? void 0 : E.id
              }))
        },
        Pe = (E) => {
          ;(A.value += E.i), (S.value = !1)
        },
        Kt = () => {
          var E
          ;(E = U.value) == null || E.click()
        },
        Gt = async (E) => {
          var Te
          const N = Array.from(
            ((Te = E == null ? void 0 : E.target) == null
              ? void 0
              : Te.files) || []
          ).filter((te) => te.size < 2e7)
          if (N.length === 0 || N.length > 10) return
          const z = N.filter((te) => te.type.startsWith('image')),
            de = N.filter((te) => te.type.startsWith('video')),
            Ie = N.filter(
              (te) =>
                !te.type.startsWith('image') && !te.type.startsWith('video')
            )
          if (z.length > 0) {
            const te = await Promise.all(z.map(st)),
              Re = {
                roomId: s.value.id,
                messageType: 'image',
                images: te,
                files: Array.from(N)
              }
            await e.dispatch('imkit/sendMessage', Re)
          }
          if (de.length > 0)
            for (const te of de) {
              const Re = await ci(te),
                { width: zt, height: Jt, duration: Ht } = Re,
                Zt = {
                  roomId: s.value.id,
                  messageType: 'video',
                  video: Re,
                  file: te,
                  width: zt,
                  height: Jt,
                  duration: Ht
                }
              await e.dispatch('imkit/sendMessage', Zt)
            }
          if (Ie.length > 0)
            for (const te of Ie) {
              const Re = {
                roomId: s.value.id,
                messageType: 'file',
                file: te,
                originalUrl: '',
                extra: {
                  mimeType: te.type,
                  fileName: te.name.split('.').slice(0, -1).join('.'),
                  bytes: te.size,
                  fileExtension: te.name.split('.').pop()
                }
              }
              await e.dispatch('imkit/sendMessage', Re)
            }
          U.value && (U.value.value = '')
        },
        Nt = async (E) => {
          const V = ((E == null ? void 0 : E.dataTransfer) || {}).files || []
          if (V.length === 0 || V.length > 10) return
          const N = await Promise.all(Array.from(V).map(st)),
            z = {
              roomId: s.value.id,
              messageType: 'image',
              images: N,
              files: Array.from(V)
            }
          await e.dispatch('imkit/sendMessage', z)
        },
        dt = (E) => {
          E.preventDefault()
        },
        Pt = async (E) => {
          const N = (E.clipboardData || {}).files
          N.length === 0 ||
            N.length > 10 ||
            (E.preventDefault(),
            (B.value = B.value.concat(
              await Promise.all(Array.from(N).map(st))
            )),
            (_.value = _.value.concat(Array.from(N))))
        },
        Dt = () => {
          e.commit('imkit/setState', { selectedRoomId: '' })
        },
        Yt = (E) => {
          B.value.splice(E, 1), _.value.splice(E, 1)
        }
      ue(
        a,
        async (E, V) => {
          E !== V &&
            ((F.value = !1),
            e.commit('imkit/clearChatRoom'),
            Promise.all([
              e.dispatch('imkit/loadMessages', { roomId: E }),
              e.dispatch('imkit/fetchRoom', E)
            ]).finally(() => {
              var N, z
              ;(((N = s.value) == null ? void 0 : N.numberOfUnread) ?? 0) > 0 &&
                (e.dispatch('imkit/updateLastRead', E),
                e.dispatch('imkit/insertUnreadMessage'))
              for (const de of e.state.imkit.deliveringMessages.values())
                de.roomId === E && e.commit('imkit/pushMessage', de)
              ;(z = g.value) == null || z.scrollToBottom(), (F.value = !0)
            }))
        },
        { immediate: !0 }
      ),
        ue([() => r.value.length, () => u.value], ([E], [V]) => {
          var N, z, de, Ie, Te
          E - V > 1 ||
            (((N = g.value) == null ? void 0 : N.getOffset()) +
              ((z = g.value) == null ? void 0 : z.getClientSize()) ==
              ((de = g.value) == null ? void 0 : de.getScrollSize()) ||
            ((Ie = r.value[r.value.length - 1]) == null
              ? void 0
              : Ie.senderId) === e.state.imkit.uid
              ? ((T.value = !1), (Te = g.value) == null || Te.scrollToBottom())
              : (T.value = !0))
        }),
        ue(p, (E) => {
          var N
          if (!E) return
          const V = r.value.findIndex((z) => z.id === E)
          V !== -1 && ((N = g.value) == null || N.scrollToIndex(V)),
            e.commit('imkit/setState', { navigationTargetId: '' })
        }),
        ue(P, () => {
          P.value &&
            ((M.value = !1),
            setTimeout(() => {
              var E
              ;(E = R.value) == null || E.focus()
            }, 0))
        }),
        ue(A, () => {
          if (D.value.add(5, 'second') > oe()) return
          D.value = oe()
          const { socket: E, selectedRoomId: V } = e.state.imkit
          E.emit('typing', V)
        })
      const jt = () => {
          setTimeout(() => {
            f.value = !1
          }, 0)
        },
        Xt = (E) => {
          !f.value &&
            E.keyCode == 13 &&
            !E.shiftKey &&
            !Q.value.sendButtonEnabled &&
            (E.preventDefault(), re())
        }
      ue(ee, () => {
        var E, V, N, z
        ee.value &&
          ((E = g.value) == null ? void 0 : E.getOffset()) +
            ((V = g.value) == null ? void 0 : V.getClientSize()) +
            100 >=
            ((N = g.value) == null ? void 0 : N.getScrollSize()) &&
          ((z = g.value) == null || z.scrollToBottom())
      })
      const Wt = () => {
        e.commit('imkit/setState', { isSearchInRoomMode: !0 })
      }
      return (E, V) => {
        var N
        return s.value
          ? (l(),
            d(
              'div',
              {
                key: 0,
                class: 'flex flex-col h-full bg-white',
                onDrop: ie(Nt, ['prevent']),
                onDragenter: dt,
                onDragover: dt
              },
              [
                H.value
                  ? (l(), Y(ol, { key: 0 }))
                  : (l(),
                    d('div', nl, [
                      i.value
                        ? b('', !0)
                        : (l(),
                          d('img', {
                            key: 0,
                            src: Bt,
                            class: 'cursor-pointer sm:hidden',
                            width: '36',
                            height: '36',
                            onClick: Dt
                          })),
                      s.value.avatars.length === 1
                        ? (l(),
                          Y(
                            ne,
                            {
                              key: 1,
                              url: s.value.avatars[0].url,
                              name: s.value.avatars[0].name,
                              class: 'h-40px w-40px text-lg'
                            },
                            null,
                            8,
                            ['url', 'name']
                          ))
                        : (l(),
                          d('div', rl, [
                            j(
                              ne,
                              {
                                url: s.value.avatars[1].url,
                                name: s.value.avatars[1].name,
                                class:
                                  'h-28px w-28px text-sm rounded-xl absolute top-0 right-0'
                              },
                              null,
                              8,
                              ['url', 'name']
                            ),
                            j(
                              ne,
                              {
                                url: s.value.avatars[0].url,
                                name: s.value.avatars[0].name,
                                class:
                                  'h-30px w-30px text-sm rounded-xl absolute bottom-0 left-0 border-2 border-white group-hover:border-gray-100'
                              },
                              null,
                              8,
                              ['url', 'name']
                            )
                          ])),
                      c('div', il, v(s.value.displayName), 1),
                      c('img', {
                        class: 'w-6 h-6 cursor-pointer ml-auto',
                        src: He,
                        onClick: Wt
                      }),
                      (s.value.type === w(je).Group &&
                        Q.value.showGroupChatRoomInfoButton) ||
                      (s.value.type === w(je).Direct &&
                        Q.value.showDirectChatRoomInfoButton)
                        ? (l(),
                          d('img', {
                            key: 3,
                            src: qa,
                            class: 'w-6 h-6 cursor-pointer',
                            onClick:
                              V[0] ||
                              (V[0] = (z) =>
                                w(e).commit('imkit/setState', {
                                  isRoomInfoVisible: !m.value
                                }))
                          }))
                        : b('', !0)
                    ])),
                j(
                  w(Xe),
                  {
                    class: K([
                      'p-2 h-100vh overflow-auto',
                      { 'opacity-0': !F.value && !n.value }
                    ]),
                    ref_key: 'vl',
                    ref: g,
                    'data-key': 'id',
                    'data-sources': r.value,
                    'data-component': si,
                    'wrap-class': 'flex flex-col',
                    'estimated-size': 66,
                    keeps: 50,
                    onTotop: Ge,
                    onTobottom: Ne
                  },
                  {
                    header: se(() => [
                      n.value ? (l(), d('div', ll, dl)) : b('', !0)
                    ]),
                    footer: se(() => [
                      ee.value
                        ? (l(),
                          d('div', ul, v(ee.value) + v(E.$t('isTyping')), 1))
                        : b('', !0)
                    ]),
                    _: 1
                  },
                  8,
                  ['class', 'data-sources']
                ),
                c('div', ml, [
                  T.value
                    ? (l(),
                      d(
                        'div',
                        {
                          key: 0,
                          class:
                            'absolute -top-10 h-10 bg-gray-200 bg-opacity-90 w-full flex items-center px-3 cursor-pointer',
                          onClick:
                            V[1] ||
                            (V[1] = (...z) =>
                              g.value.scrollToBottom &&
                              g.value.scrollToBottom(...z))
                        },
                        v(
                          (N = s.value.lastMessage) == null ? void 0 : N.string
                        ),
                        1
                      ))
                    : b('', !0),
                  Q.value.locationInputEnabled || Q.value.audioInputEnabled
                    ? (l(),
                      d(
                        'img',
                        {
                          key: 1,
                          src: $a,
                          class: K([
                            'w-5 h-12 cursor-pointer object-contain transform transition flex-shrink-0',
                            { 'rotate-45': M.value }
                          ]),
                          onClick:
                            V[2] ||
                            (V[2] = () => {
                              M.value ? (M.value = !1) : (X.value = !0)
                            })
                        },
                        null,
                        2
                      ))
                    : b('', !0),
                  X.value
                    ? q(
                        (l(),
                        d('div', gl, [
                          Q.value.locationInputEnabled
                            ? (l(),
                              d(
                                'div',
                                {
                                  key: 0,
                                  class:
                                    'flex flex-col items-center justify-center gap-1 p-2 min-w-16 cursor-pointer',
                                  onClick:
                                    V[3] ||
                                    (V[3] = (...z) => w(t) && w(t)(...z))
                                },
                                [pl, c('div', Al, v(E.$t('location')), 1)]
                              ))
                            : b('', !0),
                          Q.value.audioInputEnabled
                            ? (l(),
                              d(
                                'div',
                                {
                                  key: 1,
                                  class:
                                    'flex flex-col items-center justify-center gap-1 p-2 min-w-16 cursor-pointer',
                                  onClick:
                                    V[4] ||
                                    (V[4] = () => {
                                      ;(X.value = !1), (M.value = !0)
                                    })
                                },
                                [hl, c('div', fl, v(E.$t('audio')), 1)]
                              ))
                            : b('', !0)
                        ])),
                        [
                          [
                            w(Le),
                            () => {
                              X.value = !1
                            }
                          ]
                        ]
                      )
                    : b('', !0),
                  Q.value.audioInputEnabled && M.value
                    ? (l(), Y(Pi, { key: 3 }))
                    : (l(),
                      d('div', vl, [
                        j(fi),
                        c('div', yl, [
                          c('div', kl, [
                            q(
                              c(
                                'textarea',
                                {
                                  ref_key: 'input',
                                  ref: R,
                                  type: 'text',
                                  class: K([
                                    'bg-gray-100 outline-none h-6 resize-none flex-grow',
                                    {
                                      '!h-12':
                                        A.value.split(`
`).length === 2,
                                      '!h-18':
                                        A.value.split(`
`).length > 2
                                    }
                                  ]),
                                  placeholder: E.$t('TypeMessage'),
                                  'onUpdate:modelValue':
                                    V[5] || (V[5] = (z) => (A.value = z)),
                                  onCompositionstart:
                                    V[6] || (V[6] = (z) => (f.value = !0)),
                                  onCompositionend: jt,
                                  onKeydown: us(Xt, ['enter']),
                                  onPaste: Pt
                                },
                                null,
                                42,
                                wl
                              ),
                              [[pe, A.value]]
                            ),
                            B.value.length > 0
                              ? (l(),
                                d('div', bl, [
                                  (l(!0),
                                  d(
                                    G,
                                    null,
                                    $(
                                      B.value,
                                      (z, de) => (
                                        l(),
                                        d(
                                          'div',
                                          {
                                            key: `${z.id}-${de}`,
                                            class: 'relative w-12 h-12 group'
                                          },
                                          [
                                            c(
                                              'img',
                                              {
                                                src: z.thumbnailUrl,
                                                class:
                                                  'w-full h-full absolute left-0 bottom-0 rounded-lg object-cover bg-gray-200'
                                              },
                                              null,
                                              8,
                                              xl
                                            ),
                                            c(
                                              'img',
                                              {
                                                src: sn,
                                                class:
                                                  'w-5 h-5 absolute -right-2 -top-2 cursor-pointer hidden group-hover:block',
                                                onClick: (Ie) => Yt(de)
                                              },
                                              null,
                                              8,
                                              Cl
                                            )
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]))
                              : b('', !0)
                          ]),
                          Q.value.stickerInputEnabled
                            ? (l(),
                              d(
                                'button',
                                {
                                  key: 0,
                                  class: 'flex-shrink-0',
                                  onClick:
                                    V[7] || (V[7] = (z) => (y.value = !0))
                                },
                                Rl
                              ))
                            : b('', !0),
                          Q.value.emojiInputEnabled
                            ? (l(),
                              d(
                                'button',
                                {
                                  key: 1,
                                  class: 'flex-shrink-0',
                                  onClick:
                                    V[8] || (V[8] = (z) => (S.value = !0))
                                },
                                Sl
                              ))
                            : b('', !0),
                          Q.value.fileInputEnabled
                            ? (l(),
                              d(
                                'button',
                                { key: 2, class: 'flex-shrink-0', onClick: Kt },
                                [
                                  Ul,
                                  c(
                                    'input',
                                    {
                                      ref_key: 'fileInput',
                                      ref: U,
                                      type: 'file',
                                      multiple: 'true',
                                      onChange: Gt,
                                      class: 'hidden'
                                    },
                                    null,
                                    544
                                  )
                                ]
                              ))
                            : b('', !0)
                        ]),
                        Q.value.stickerInputEnabled && y.value
                          ? q(
                              (l(),
                              Y(
                                li,
                                {
                                  key: 0,
                                  onClose:
                                    V[9] ||
                                    (V[9] = () => {
                                      y.value = !1
                                    })
                                },
                                null,
                                512
                              )),
                              [
                                [
                                  w(Le),
                                  () => {
                                    y.value = !1
                                  }
                                ]
                              ]
                            )
                          : b('', !0)
                      ])),
                  Q.value.emojiInputEnabled && S.value
                    ? q(
                        (l(),
                        Y(
                          w(ms),
                          {
                            key: 5,
                            class: 'overflow-auto absolute right-2.5 bottom-16',
                            native: !0,
                            onSelect: Pe
                          },
                          null,
                          512
                        )),
                        [
                          [
                            w(Le),
                            () => {
                              S.value = !1
                            }
                          ]
                        ]
                      )
                    : b('', !0),
                  M.value
                    ? b('', !0)
                    : (l(),
                      d(
                        G,
                        { key: 6 },
                        [
                          A.value.length > 0
                            ? (l(),
                              d(
                                'img',
                                {
                                  key: 0,
                                  class: K([
                                    'cursor-pointer my-auto ml-0.5 mr-1 w-6 h-6',
                                    { 'sm:hidden': !Q.value.sendButtonEnabled }
                                  ]),
                                  src: Ft,
                                  onClick: re
                                },
                                null,
                                2
                              ))
                            : (l(),
                              d(
                                'img',
                                {
                                  key: 1,
                                  class: K([
                                    'cursor-not-allowed my-auto ml-0.5 mr-1 w-6 h-6',
                                    { 'sm:hidden': !Q.value.sendButtonEnabled }
                                  ]),
                                  src: Mt
                                },
                                null,
                                2
                              ))
                        ],
                        64
                      ))
                ])
              ],
              40,
              al
            ))
          : b('', !0)
      }
    }
  })
const ft = ce(Bl, [['__scopeId', 'data-v-8b3ed018']])
var C = ((o) => (
    (o.increment = 'increment'),
    (o.fetchRooms = 'fetchRooms'),
    (o.fetchRoom = 'fetchRoom'),
    (o.loadMessages = 'loadMessages'),
    (o.updateLastRead = 'updateLastRead'),
    (o.handleMessageFromSocket = 'handleMessageFromSocket'),
    (o.handleRoomFromSocket = 'handleRoomFromSocket'),
    (o.handleLastReadFromSocket = 'handleLastReadFromSocket'),
    (o.sendMessage = 'sendMessage'),
    (o.recallMessage = 'recallMessage'),
    (o.uploadMedia = 'uploadMedia'),
    (o.fetchLinkPreview = 'fetchLinkPreview'),
    (o.handleLinkPreviews = 'handleLinkPreviews'),
    (o.fetchVideoBlob = 'fetchVideoBlob'),
    (o.navigateToMessage = 'navigateToMessage'),
    (o.uploadImage = 'uploadImage'),
    (o.updateRoomPrefs = 'updateRoomPrefs'),
    (o.fetchPrefs = 'fetchPrefs'),
    (o.updatePref = 'updatePref'),
    (o.deletePref = 'deletePref'),
    (o.updateFolder = 'updateFolder'),
    (o.removeFolder = 'removeFolder'),
    (o.handlePrefChangeFromSocket = 'handlePrefChangeFromSocket'),
    (o.handlePrefDeleteFromSocket = 'handlePrefDeleteFromSocket'),
    (o.aggregateRoomsAndFolders = 'aggregateRoomsAndFolders'),
    (o.removeMembers = 'removeMembers'),
    (o.handleTypingFromSocket = 'handleTypingFromSocket'),
    (o.insertUnreadMessage = 'insertUnreadMessage'),
    (o.translate = 'translate'),
    (o.searchRooms = 'searchRooms'),
    (o.subscribe = 'subscribe'),
    (o.unsubscribe = 'unsubscribe'),
    (o.removeRoomFromFolder = 'removeRoomFromFolder'),
    (o.addRoomToFolder = 'addRoomToFolder'),
    (o.fetchRoomsInFolders = 'fetchRoomsInFolders'),
    (o.batchSendMessage = 'batchSendMessage'),
    o
  ))(C || {}),
  x = ((o) => (
    (o.increment = 'increment'),
    (o.setState = 'setState'),
    (o.updateField = 'updateField'),
    (o.deleteField = 'deleteField'),
    (o.updateRoom = 'updateRoom'),
    (o.updateLastRead = 'updateLastRead'),
    (o.pushMessage = 'pushMessage'),
    (o.replaceMessage = 'replaceMessage'),
    (o.clearChatRoom = 'clearChatRoom'),
    (o.deleteRoom = 'deleteRoom'),
    (o.setMap = 'setMap'),
    (o.deleteMap = 'deleteMap'),
    (o.insertMessageLinkedList = 'insertMessageLinkedList'),
    (o.concateMessageLinkedList = 'concateMessageLinkedList'),
    (o.unshiftMessageLinkedList = 'unshiftMessageLinkedList'),
    o
  ))(x || {})
class Fl {
  constructor(e) {
    k(this, 'head')
    k(this, 'tail')
    k(this, 'length')
    k(this, 'map')
    k(this, 'messageGroups')
    k(this, 'prev', null)
    k(this, 'next', null)
    ;(this.head = null),
      (this.tail = null),
      (this.length = 0),
      (this.map = new Map()),
      (this.messageGroups = new Map())
    const t = (s) => {
      const a = Z.fromRaw(s)
      return a ? [a].concat(t(s.reply)) : []
    }
    for (const s of e.reverse()) {
      const a = Z.fromRaw(s)
      a && this.append(a)
      for (const n of t(s.reply)) this.map.set(n.id, n)
    }
  }
  append(e) {
    if (!this.contains(e.id)) {
      if (this.tail) {
        let t = this.tail
        for (; t && t.createdAt > e.createdAt; ) t = t.prev
        t
          ? (t === this.tail && (this.tail = e),
            (e.next = t.next),
            (t.next = e),
            (e.prev = t))
          : ((e.next = this.head), (this.head = e)),
          e.next && (e.next.prev = e)
      } else this.head = this.tail = e
      this.map.set(e.id, e), this.length++, this.insertMessageToGroup(e)
    }
  }
  insertMessageToGroup(e) {
    if (!e.isSystem)
      if (this.messageGroups.has(e.groupId)) {
        const t = this.messageGroups.get(e.groupId)
        if (t) {
          let s = !1
          for (let a = t.length - 1; a >= 0; a--)
            if (t[a].createdAt < e.createdAt) {
              a == t.length - 1 ? t.push(e) : t.splice(a + 1, 0, e), (s = !0)
              break
            }
          s || t.unshift(e)
        }
      } else this.messageGroups.set(e.groupId, [e])
  }
  replace(e, t) {
    const s = this.finds(e)
    if (s) {
      s.prev ? (s.prev.next = t) : (this.head = t),
        s.next ? (s.next.prev = t) : (this.tail = t),
        (t.prev = s.prev),
        (t.next = s.next),
        this.map.delete(e),
        this.map.set(t.id, t)
      const a = this.messageGroups.get(s.groupId)
      if (a) {
        const n = a.indexOf(s)
        n >= 0 && (t.isSystem ? a.splice(n, 1) : (a[n] = t))
      }
    }
  }
  concate(e) {
    if (e.length !== 0) {
      this.tail
        ? ((this.tail.next = e.head),
          e.head && (e.head.prev = this.tail),
          (this.tail = e.tail))
        : ((this.head = e.head), (this.tail = e.tail))
      for (const [t, s] of e.map) this.map.set(t, s)
      this.length += e.length
      for (const [t, s] of e.messageGroups)
        if (this.messageGroups.has(t)) {
          if (this.messageGroups.get(t))
            for (const n of s) this.insertMessageToGroup(n)
        } else this.messageGroups.set(t, s)
    }
  }
  unshift(e) {
    if (e.length !== 0) {
      this.head
        ? ((this.head.prev = e.tail),
          e.tail && (e.tail.next = this.head),
          (this.head = e.head))
        : ((this.head = e.head), (this.tail = e.tail))
      for (const [t, s] of e.map) this.map.set(t, s)
      this.length += e.length
      for (const [t, s] of e.messageGroups)
        if (this.messageGroups.has(t)) {
          if (this.messageGroups.get(t))
            for (const n of s) this.insertMessageToGroup(n)
        } else this.messageGroups.set(t, s)
    }
  }
  resetHead(e) {
    if (this.head && this.head.id === e) return
    const t = this.finds(e)
    if (t) {
      ;(this.head = t), (t.prev = null)
      let s = 0,
        a = t
      for (; a; ) s++, (a = a.next)
      this.length = s
    }
  }
  resetTail(e) {
    if (this.tail && this.tail.id === e) return
    const t = this.finds(e)
    if (t) {
      ;(this.tail = t), (t.next = null)
      let s = 0,
        a = t
      for (; a; ) s++, (a = a.prev)
      this.length = s
    }
  }
  canCombine(e) {
    var t, s
    return e.length === 0 || !e.head || !e.tail
      ? !1
      : this.contains(e.tail.id) ||
          this.contains(e.head.id) ||
          (e.contains(((t = this.head) == null ? void 0 : t.id) ?? '') &&
            e.contains(((s = this.tail) == null ? void 0 : s.id) ?? ''))
  }
  combine(e) {
    var a, n, r, i
    if (e.length === 0 || !e.head || !e.tail) return
    const t = this.contains(e.head.id),
      s = this.contains(e.tail.id)
    if (!(t && s)) {
      if (!t && !s)
        e.contains(((a = this.head) == null ? void 0 : a.id) ?? '') &&
          e.contains(((n = this.tail) == null ? void 0 : n.id) ?? '') &&
          ((this.head = e.head),
          (this.tail = e.tail),
          (this.length = e.length),
          (this.map = e.map))
      else if (s) {
        const u = (r = this.finds(e.tail.id)) == null ? void 0 : r.next
        u
          ? this.resetHead(u.id)
          : ((this.head = null), (this.tail = null), (this.length = 0)),
          this.unshift(e)
      } else if (t) {
        const u = (i = this.finds(e.head.id)) == null ? void 0 : i.prev
        u
          ? this.resetTail(u.id)
          : ((this.head = null), (this.tail = null), (this.length = 0)),
          this.concate(e)
      }
    }
  }
  array() {
    const e = []
    let t = this.head
    for (; t; ) e.push(t), (t = t.next)
    return e
  }
  finds(e) {
    const t = this.map.get(e)
    if (t)
      return t.next || t.prev || (this.head === t && this.tail === t)
        ? t
        : void 0
  }
  contains(e) {
    return this.finds(e) !== void 0
  }
  isValid() {
    if ((this.head && this.head.prev) || (this.tail && this.tail.next))
      return !1
    let e = 0,
      t = this.head
    for (; t; ) {
      if ((t.prev && t.prev.next !== t) || (t.next && t.next.prev !== t))
        return !1
      e++, (t = t.next)
    }
    return e === this.length
  }
}
class Ee {
  constructor(e, t, s) {
    k(this, 'id')
    k(this, 'name')
    k(this, 'roomIds')
    ;(this.id = e), (this.name = t), (this.roomIds = s)
  }
  get payload() {
    return { children: this.roomIds.map((e) => ({ id: e, type: 'room' })) }
  }
}
const Ml = {
    [C.increment]({ commit: o }) {
      o(x.increment)
    },
    async [C.fetchRooms](
      { state: o, commit: e, dispatch: t },
      { pageSize: s } = { pageSize: void 0 }
    ) {
      if (o.isRequesting[me.FetchRooms]) return
      const { numberOfFetchedRooms: a, uid: n } = o
      if (a === o.numberOfTotalRooms && a > 0) return
      const r = s !== void 0 ? s : Math.min(Math.max(30, a), 120),
        {
          data: { result: i }
        } = await o.axios.get(me.FetchRooms, {
          params: {
            skip: a,
            limit: r,
            q: o.roomTag
              ? `{ "members": "${n}", "roomTags": "${o.roomTag}" }`
              : `{ "members": "${n}" }`
          }
        }),
        { data: u, totalCount: m } = i,
        p = {},
        g = {}
      for (const A of u) {
        p[A._id] = new _e(A, o.uid)
        for (const f of A.members) g[f.id] || (g[f.id] = new ve(f))
      }
      e(x.updateField, { key: 'rooms', value: p }),
        e(x.updateField, { key: 'users', value: g }),
        e(x.setState, { numberOfTotalRooms: m, numberOfFetchedRooms: a + r }),
        t(C.aggregateRoomsAndFolders)
    },
    async [C.handleMessageFromSocket]({ state: o, commit: e, dispatch: t }, s) {
      let a = o.rooms[s.roomId]
      if (a) {
        const { id: n, numberOfUnread: r } = a
        if (s.roomId === o.selectedRoomId) {
          if (
            (await t(C.handleLinkPreviews, [s]),
            o.config.translationApiKey &&
              s.type === O.Text &&
              s.senderId !== o.uid)
          ) {
            const i = s.text
            try {
              const u = await t(C.translate, i)
              s.translatedText = u !== i ? u : null
            } catch (u) {
              console.error(u)
            }
          }
          e(x.pushMessage, s),
            e(x.updateRoom, {
              id: n,
              updatedAt: s.createdAt,
              lastMessage: s,
              numberOfUnread: 0
            }),
            t(C.updateLastRead, n),
            e(x.setState, {
              numberOfTotalMessages: o.numberOfTotalMessages + 1
            })
        } else
          e(x.updateRoom, {
            id: n,
            updatedAt: s.createdAt,
            lastMessage: s,
            numberOfUnread: s.senderId !== o.uid ? r + 1 : r
          })
        t(C.aggregateRoomsAndFolders)
      } else await t(C.fetchRoom, s.roomId), (a = o.rooms[s.roomId])
    },
    async [C.loadMessages](
      { state: o, commit: e, dispatch: t },
      { roomId: s, beforeMessageId: a, afterMessageId: n, targetMessageId: r }
    ) {
      const i = r
        ? `/rooms/${s}/messages/${r}`
        : n
          ? `/rooms/${s}/messages/${n}`
          : `/rooms/${s}/messages`
      if (
        o.isRequesting[i] ||
        (o.messageMultiList.numberOfMessages() >= o.numberOfTotalMessages &&
          o.numberOfTotalMessages !== -1)
      )
        return
      const {
          data: { result: u }
        } = await o.axios.get(i, {
          params: r
            ? { before: 15, after: 15 }
            : a
              ? { limit: 30, beforeMessage: a }
              : n
                ? { after: 30 }
                : { limit: 30 }
        }),
        m = {}
      for (const y of u.data)
        m[y.sender.id] || (m[y.sender.id] = new ve(y.sender))
      e(x.updateField, { key: 'users', value: m })
      const { data: p, totalCount: g } = u
      n && p.shift()
      const A = new Fl(p),
        f = A.array()
      if ((await t(C.handleLinkPreviews, f), o.config.translationApiKey)) {
        const y = f.filter((M) => M.type === O.Text && M.senderId !== o.uid),
          S = await Promise.allSettled(y.map((M) => t(C.translate, M.text)))
        for (let M = 0; M < y.length; M++) {
          const U = S[M]
          U.status === 'fulfilled' &&
            U.value !== y[M].text &&
            (y[M].translatedText = Qe.linkfy(U.value))
        }
      }
      return (
        e(
          a
            ? x.unshiftMessageLinkedList
            : n
              ? x.concateMessageLinkedList
              : x.insertMessageLinkedList,
          A
        ),
        g > o.numberOfTotalMessages &&
          e(x.setState, { numberOfTotalMessages: g }),
        p
      )
    },
    async [C.fetchRoom]({ state: o, commit: e }, t) {
      const {
          data: { result: s }
        } = await o.axios.get(`/rooms/${t}`),
        a = new _e(s, o.uid),
        n = {}
      ;(n[a.id] = a), e(x.updateField, { key: 'rooms', value: n })
      const r = {}
      s.members
        .flatMap((i) => (Array.isArray(i.members) ? [...i.members, i] : [i]))
        .forEach((i) => {
          r[i.id] || (r[i.id] = new ve(i))
        }),
        e(x.updateField, { key: 'users', value: r })
    },
    async [C.updateLastRead]({ state: o, commit: e }, t) {
      var r
      const s = `/rooms/${t}/lastRead`
      if (o.isRequesting[s]) return
      const a = o.rooms[t],
        {
          data: { result: n }
        } = await o.axios.put(s, {
          message: (r = a.lastMessage) == null ? void 0 : r.id
        })
      n && e(x.updateRoom, { id: t, numberOfUnread: 0 })
    },
    async [C.handleRoomFromSocket]({ commit: o, dispatch: e }, t) {
      const s = {}
      ;(s[t.id] = t),
        await o(x.updateField, { key: 'rooms', value: s }),
        e(C.aggregateRoomsAndFolders)
    },
    async [C.handleLastReadFromSocket]({ commit: o }, e) {
      o(x.updateLastRead, e)
    },
    async [C.sendMessage]({ state: o, commit: e, dispatch: t }, s) {
      const { roomId: a } = s
      if (!a) return
      const n = Z.fromPayload(s, o.uid)
      if (!n) return
      if (
        (e(x.setMap, { mapName: 'deliveringMessages', key: n.id, value: n }),
        e(x.pushMessage, n),
        s.messageType === O.Image)
      ) {
        const { files: u } = s,
          m = await Promise.all(
            s.images.map((g, A) => t(C.uploadImage, { image: g, file: u[A] }))
          ),
          p = []
        s.images.forEach((g, A) => {
          o.imageCache.set(m[A].thumbnailUrl, g.thumbnailUrl)
          const { id: f, width: y, height: S } = g
          p.push({
            originalUrl: m[A].originalUrl,
            thumbnailUrl: m[A].thumbnailUrl,
            width: y,
            height: S
          }),
            e(x.deleteField, {
              key: 'uploadProgresses',
              value: `${f}-original`
            }),
            e(x.deleteField, {
              key: 'uploadProgresses',
              value: `${f}-thumbnail`
            })
        }),
          (s.images = p),
          delete s.files
      } else if (s.messageType === O.Video) {
        const { file: u, video: m } = s,
          p = m.thumbnailFile
        if (!p) return
        const g = await Promise.all([
          t(C.uploadMedia, { id: p.id, file: p.file }),
          t(C.uploadMedia, { id: m.id, file: u })
        ])
        ;(s.width = m.width),
          (s.height = m.height),
          (s.duration = m.duration),
          (s.thumbnailUrl = g[0]),
          (s.originalUrl = g[1]),
          o.imageCache.set(g[0], m.thumbnailUrl),
          delete s.file,
          e(x.deleteField, { key: 'uploadProgresses', value: m.id })
      } else if (s.messageType === O.File) {
        const { file: u } = s,
          m = await t(C.uploadMedia, { id: n.id, file: u })
        ;(s.originalUrl = m),
          delete s.file,
          e(x.deleteField, { key: 'uploadProgresses', value: n.id })
      } else if (s.messageType === O.Audio) {
        const { file: u } = s,
          m = await t(C.uploadMedia, { id: n.id, file: u })
        ;(s.originalUrl = m),
          delete s.file,
          e(x.deleteField, { key: 'uploadProgresses', value: n.id })
      }
      const {
          data: { result: r }
        } = await o.axios.post(`/rooms/${a}/message`, s),
        i = Z.fromRaw(r)
      if (i)
        return (
          e(x.deleteMap, { mapName: 'deliveringMessages', key: n.id }),
          await t(C.handleLinkPreviews, [i]),
          i.roomId === o.selectedRoomId
            ? e(x.replaceMessage, { message: i, targetMessageId: n.id })
            : e(x.updateRoom, {
                id: i.roomId,
                updatedAt: i.createdAt,
                lastMessage: i
              }),
          i
        )
    },
    async [C.batchSendMessage]({ state: o }, e) {
      await o.axios.post('/messages/batch', e)
    },
    async [C.recallMessage]({ state: o, commit: e }, t) {
      const { roomId: s } = t
      if (!s) return
      const {
          data: { result: a }
        } = await o.axios.post(`/rooms/${s}/message`, t),
        n = Z.fromRaw(a)
      n && e(x.replaceMessage, { targetMessageId: n.id, message: n })
    },
    async [C.uploadMedia]({ state: o, commit: e }, { id: t, file: s }) {
      const a = new FormData()
      a.append('file', s)
      const {
        data: {
          result: { _id: n }
        }
      } = await o.axios.post('/files/chatserver-upload', a, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (r) => {
          const { total: i } = r
          i &&
            e(x.updateField, {
              key: 'uploadProgresses',
              value: { [t]: r.loaded / i }
            })
        }
      })
      return `${o.config.domain}/files/chatserver-upload/${n}`
    },
    async [C.uploadImage]({ dispatch: o }, { image: e, file: t }) {
      if (t.size > 1024 * 1024)
        try {
          const a = await gs(t, {
              maxSizeMB: 1,
              maxWidthOrHeight: 1920,
              useWebWorker: !0
            }),
            n = await Promise.all([
              o(C.uploadMedia, { id: `${e.id}-original`, file: t }),
              o(C.uploadMedia, { id: `${e.id}-thumbnail`, file: a })
            ])
          return { originalUrl: n[0], thumbnailUrl: n[1] }
        } catch (a) {
          console.error(a)
        }
      const s = await o(C.uploadMedia, { id: `${e.id}-original`, file: t })
      return { originalUrl: s, thumbnailUrl: s }
    },
    async [C.fetchLinkPreview](o, e) {
      const { data: t } = await be.get(
        encodeURI(`https://url.imkit.io/?url=${e}`)
      )
      return t
    },
    async [C.handleLinkPreviews]({ state: o, commit: e, dispatch: t }, s) {
      const a = Array.from(
        new Set(
          s
            .flatMap((i) => (i == null ? void 0 : i.urls) || [])
            .filter((i) => !o.linkPreviews[i])
        )
      )
      if (a.length === 0) return
      const n = {}
      ;(
        await Promise.allSettled(a.map((i) => t(C.fetchLinkPreview, i)))
      ).forEach((i, u) => {
        i.status === 'fulfilled' && (n[a[u]] = i.value)
      }),
        e(x.updateField, { key: 'linkPreviews', value: n })
    },
    async [C.fetchVideoBlob]({ state: o }, e) {
      const { data: t } = await o.axios.get(e, { responseType: 'blob' })
      return t
    },
    async [C.navigateToMessage]({ state: o, commit: e, dispatch: t }, s) {
      var a
      ;(a = o.messageMultiList.main) != null && a.contains(s)
        ? e(x.setState, { navigationTargetId: s })
        : (await t(C.loadMessages, {
            roomId: o.selectedRoomId,
            targetMessageId: s
          }),
          await e(x.setState, { navigationTargetId: s }))
    },
    async [C.updateRoomPrefs](
      { state: o, commit: e, dispatch: t },
      { roomId: s, prefs: a }
    ) {
      await o.axios.post(`/roomPrefs/${s}`, a)
      const n = o.rooms[s]
      n &&
        (e(x.updateRoom, { id: s, pref: { ...n.pref, ...a } }),
        t(C.aggregateRoomsAndFolders))
    },
    async [C.fetchPrefs]({ state: o, commit: e }) {
      const {
          data: { result: t }
        } = await o.axios.get('/me/pref'),
        s = {},
        a = [],
        n = {},
        r = {},
        i = {}
      for (const u of t)
        if (u.key === 'folders-meta')
          for (const m of u.data) (n[m.key] = m.name), a.push(m.key)
        else {
          if (u.key === 'blackList') continue
          r[u.key] = u.data.children.map((m) => m.id)
        }
      for (const u of a) {
        s[u] = new Ee(u, n[u], r[u] || [])
        for (const m of r[u] || []) i[m] = !0
      }
      e(x.setState, { folders: s, sortedFolderIds: a, roomIdsInFolders: i })
    },
    async [C.fetchRoomsInFolders]({ state: o, dispatch: e }) {
      const t = Object.keys(o.roomIdsInFolders).length
      for (; o.numberOfFetchedRooms < t; )
        await e(C.fetchRooms, { pageSize: 200 })
      const s = ps(6),
        a = Object.keys(o.roomIdsInFolders)
          .filter((n) => !o.rooms[n])
          .map((n) => s(() => e(C.fetchRoom, n)))
      await Promise.allSettled(a)
    },
    async [C.updatePref]({ state: o }, { key: e, value: t }) {
      return await o.axios.post(`/me/pref/${e}`, t)
    },
    async [C.deletePref]({ state: o }, e) {
      return await o.axios.delete(`/me/pref/${e}`)
    },
    async [C.updateFolder](
      { state: o, dispatch: e, commit: t },
      { folderKey: s, name: a }
    ) {
      const n = Object.keys(o.selectedRoomIdsForCreateFolder).filter(
        (i) => o.selectedRoomIdsForCreateFolder[i]
      )
      await e(C.updatePref, {
        key: 'folders-meta',
        value: o.sortedFolderIds
          .map((i) => o.folders[i])
          .filter((i) => !!i && i.id !== s)
          .map((i) => ({ key: i.id, name: i.name }))
          .concat([{ key: s, name: a }])
          .sort((i, u) => i.key.localeCompare(u.key))
      }),
        await e(C.updatePref, {
          key: s,
          value: { children: n.map((i) => ({ id: i, type: 'room' })) }
        }),
        o.folders[s] &&
          t(x.updateField, {
            key: 'roomIdsInFolders',
            value: o.folders[s].roomIds.reduce((i, u) => ((i[u] = !1), i), {})
          })
      const r = new Ee(s, a, n)
      t(x.updateField, { key: 'folders', value: { [s]: r } }),
        t(x.updateField, {
          key: 'roomIdsInFolders',
          value: n.reduce((i, u) => ((i[u] = !0), i), {})
        }),
        t(x.setState, {
          sortedFolderIds: [...new Set([...o.sortedFolderIds, s])],
          selectedRoomIdsForCreateFolder: {}
        }),
        e(C.aggregateRoomsAndFolders)
    },
    async [C.removeFolder]({ state: o, dispatch: e }, t) {
      await e(C.deletePref, t),
        await e(C.updatePref, {
          key: 'folders-meta',
          value: o.sortedFolderIds
            .map((s) => o.folders[s])
            .filter((s) => !!s && s.id !== t)
            .map((s) => ({ key: s.id, name: s.name }))
        }),
        e(C.handlePrefDeleteFromSocket)
    },
    async [C.handlePrefChangeFromSocket](
      { state: o, commit: e, dispatch: t },
      s
    ) {
      const { key: a, data: n } = s
      if (a === 'folders-meta') {
        const r = {},
          i = []
        for (const { key: u, name: m } of n) {
          const p = o.folders[u] || new Ee(u, m, [])
          ;(r[u] = p), i.push(u)
        }
        e(x.setState, { folders: r, sortedFolderIds: i })
      } else {
        const { id: r, name: i } = o.folders[a]
        if (r) {
          const u = n.children.map((p) => p.id),
            m = new Ee(r, i, u)
          e(x.updateField, { key: 'folders', value: { [a]: m } }),
            e(x.updateField, {
              key: 'roomIdsInFolders',
              value: u.reduce((p, g) => ((p[g] = !0), p), {})
            })
        }
      }
      t(C.aggregateRoomsAndFolders)
    },
    async [C.handlePrefDeleteFromSocket](
      { state: o, commit: e, dispatch: t },
      s
    ) {
      const a = o.folders[s]
      if (!a) return
      const n = {}
      for (const r of a.roomIds) n[r] = !1
      e(x.deleteField, { key: 'folders', value: s }),
        e(x.updateField, { key: 'roomIdsInFolders', value: n }),
        e(x.setState, {
          sortedFolderIds: o.sortedFolderIds.filter((r) => r !== s)
        }),
        t(C.aggregateRoomsAndFolders)
    },
    async [C.aggregateRoomsAndFolders]({ state: o, commit: e }) {
      const t = Object.values(o.rooms)
        .filter((s) => !o.roomIdsInFolders[s.id] && s.lastMessage !== null)
        .sort((s, a) => {
          var n, r, i
          return ((n = s.pref) == null ? void 0 : n.sticky) ===
            ((r = a.pref) == null ? void 0 : r.sticky)
            ? a.updatedAt - s.updatedAt
            : (i = s.pref) != null && i.sticky
              ? -1
              : 1
        })
      e(x.setState, { sortedRooms: t })
    },
    async [C.removeMembers]({ state: o, commit: e }, { roomId: t, uids: s }) {
      var n
      if (
        o.rooms[t] &&
        (await o.axios.post(`/rooms/${t}/delete/members`, {
          systemMessage: !0,
          members: s
        }),
        s.includes(o.uid))
      ) {
        e(x.deleteRoom, t)
        const r =
          (n = o.sortedRooms.find((i) => i.numberOfUnread === 0)) == null
            ? void 0
            : n.id
        r && e(x.setState, { selectedRoomId: r })
      }
    },
    async [C.handleTypingFromSocket]({ state: o, commit: e }, t) {
      const { room: s, sender: a } = t
      if (s !== o.selectedRoomId || a === o.uid) return
      const n = o.isTyping[a]
      n !== void 0 && clearTimeout(n)
      const r = setTimeout(() => {
        e(x.deleteField, { key: 'isTyping', value: a })
      }, 6e3)
      e(x.updateField, { key: 'isTyping', value: { [a]: r } })
    },
    async [C.insertUnreadMessage]({ state: o, commit: e }) {
      var r
      const t = o.rooms[o.selectedRoomId]
      if (!t) return
      const s = t.lastReadMessageId[o.uid]
      if (!s) return
      const a = (r = o.messageMultiList.main) == null ? void 0 : r.finds(s)
      if (!a) return
      const n = Z.fromPayload(
        {
          roomId: o.selectedRoomId,
          messageType: O.Announcement,
          message: '以下為尚未閱讀的訊息',
          createdAtMS: a.createdAt + 1
        },
        o.uid
      )
      n && e(x.pushMessage, n)
    },
    async [C.translate]({ state: o }, e) {
      if (o.translationCache.has(e)) return o.translationCache.get(e) || e
      let t = navigator.language.split('-')[0]
      const s = {
        am: 'am',
        ar: 'ar',
        eu: 'eu',
        bn: 'bn',
        'en-gb': 'en-GB',
        'pt-br': 'pt-BR',
        bg: 'bg',
        ca: 'ca',
        chr: 'chr',
        hr: 'hr',
        cs: 'cs',
        da: 'da',
        nl: 'nl',
        en: 'en',
        et: 'et',
        fil: 'fil',
        fi: 'fi',
        fr: 'fr',
        de: 'de',
        el: 'el',
        gu: 'gu',
        iw: 'iw',
        hi: 'hi',
        hu: 'hu',
        is: 'is',
        id: 'id',
        it: 'it',
        ja: 'ja',
        kn: 'kn',
        ko: 'ko',
        lv: 'lv',
        lt: 'lt',
        ms: 'ms',
        ml: 'ml',
        mr: 'mr',
        no: 'no',
        pl: 'pl',
        'pt-pt': 'pt-PT',
        ro: 'ro',
        ru: 'ru',
        sr: 'sr',
        'zh-cn': 'zh-CN',
        sk: 'sk',
        sl: 'sl',
        es: 'es',
        sw: 'sw',
        sv: 'sv',
        ta: 'ta',
        te: 'te',
        th: 'th',
        'zh-tw': 'zh-TW',
        tr: 'tr',
        ur: 'ur',
        uk: 'uk',
        vi: 'vi',
        cy: 'cy'
      }
      s[navigator.language.toLowerCase()] &&
        (t = s[navigator.language.toLowerCase()])
      const a = await fetch(
        'https://translation.googleapis.com/language/translate/v2',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
          }),
          body: new URLSearchParams({
            q: e,
            key: o.config.translationApiKey,
            target: t
          }),
          redirect: 'follow'
        }
      )
        .then((n) => n.json())
        .then((n) => {
          var r
          return (r = n.data) == null
            ? void 0
            : r.translations[0].translatedText
        })
      return o.translationCache.set(e, a), a
    },
    async [C.searchRooms]({ state: o, commit: e }, t) {
      if (o.isRequesting[me.Search]) return
      const s = Object.values(le),
        {
          data: { result: a }
        } = await o.axios.post(me.Search, { type: s, keyword: t }),
        n = {},
        r = {},
        i = {}
      for (const p of s)
        a[p].forEach((g) => {
          ;(n[g._id] = new _e(g, o.uid)),
            i[p] || (i[p] = []),
            i[p].push(n[g._id])
          for (const A of g.members) r[A.id] || (r[A.id] = new ve(A))
        })
      for (const p of Object.values(o.folders))
        p.name.includes(t) &&
          (i[le.RoomPrefFolder] || (i[le.RoomPrefFolder] = []),
          i[le.RoomPrefFolder].push(p))
      const u = Object.keys(i),
        m = u.length > 0 ? u[0] : le.RoomName
      e(x.updateField, { key: 'rooms', value: n }),
        e(x.updateField, { key: 'users', value: r }),
        e(x.setState, { searchRooms: i, searchType: m, searchKeyword: t })
    },
    async [C.subscribe]({ state: o }) {
      if (
        !o.config.firebaseConfig ||
        !o.config.firebaseVapidKey ||
        (await Notification.requestPermission()) !== 'granted'
      )
        return
      const t = As(o.config.firebaseConfig),
        s = hs(t),
        a = await fs(s, { vapidKey: o.config.firebaseVapidKey })
      if (!a) return
      let n = localStorage.getItem('imkit-deviceId')
      n || ((n = Ye()), localStorage.setItem('imkit-deviceId', n)),
        await o.axios.post(me.Subscribe, { type: 'fcm', token: a, deviceId: n })
    },
    async [C.unsubscribe]({ state: o }) {
      let e = localStorage.getItem('imkit-deviceId')
      e || ((e = Ye()), localStorage.setItem('imkit-deviceId', e)),
        await o.axios.post(me.Unsubscribe, { type: 'fcm', deviceId: e })
    },
    async [C.removeRoomFromFolder]({ state: o, commit: e, dispatch: t }, s) {
      if (!o.roomIdsInFolders[s]) return
      const a = o.folders[o.selectedFolderId]
      if (!a) return
      const n = a.id,
        r = a.roomIds.filter((u) => u !== s)
      await t(C.updatePref, {
        key: n,
        value: { children: r.map((u) => ({ id: u, type: 'room' })) }
      })
      const i = new Ee(n, a.name, r)
      e(x.updateField, { key: 'folders', value: { [n]: i } }),
        e(x.updateField, { key: 'roomIdsInFolders', value: { [s]: !1 } }),
        t(C.aggregateRoomsAndFolders)
    },
    async [C.addRoomToFolder](
      { state: o, commit: e, dispatch: t },
      { roomId: s, folderId: a }
    ) {
      const n = o.folders[a]
      if (!n) return
      const r = Array.from(new Set([...n.roomIds, s]))
      await t(C.updatePref, {
        key: a,
        value: { children: r.map((u) => ({ id: u, type: 'room' })) }
      })
      const i = new Ee(a, n.name, r)
      e(x.updateField, { key: 'folders', value: { [a]: i } }),
        e(x.updateField, { key: 'roomIdsInFolders', value: { [s]: !0 } }),
        t(C.aggregateRoomsAndFolders)
    }
  },
  Tl = { doubleCount: (o) => o.count * 2 },
  Ol = {
    [x.increment](o) {
      o.count++
    },
    [x.setState](o, e) {
      Object.assign(o, e)
    },
    [x.updateField](o, e) {
      const { key: t, value: s } = e
      Object.assign(o[t], s)
    },
    [x.deleteField](o, e) {
      const { key: t, value: s } = e
      delete o[t][s]
    },
    [x.updateRoom](o, e) {
      const { id: t } = e,
        s = o.rooms[t]
      s && Object.assign(s, e)
    },
    [x.updateLastRead](o, e) {
      const { roomId: t, uid: s, messageId: a } = e,
        n = o.rooms[t]
      n && (n.lastReadMessageId[s] = a)
    },
    [x.pushMessage](o, e) {
      var t
      e.roomId === o.selectedRoomId &&
        ((t = o.messageMultiList.main) == null || t.append(e))
    },
    [x.replaceMessage](o, e) {
      var a
      const { targetMessageId: t, message: s } = e
      ;(a = o.messageMultiList.main) == null || a.replace(t, s)
    },
    [x.clearChatRoom](o) {
      ;(o.messageMultiList = new St()),
        (o.numberOfTotalMessages = -1),
        (o.replyId = ''),
        (o.navigationTargetId = ''),
        (o.isRoomInfoVisible = !1),
        (o.isTyping = {}),
        (o.isSearchInRoomMode = !1),
        (o.messageSearchKeyword = '')
    },
    [x.deleteRoom](o, e) {
      delete o.rooms[e],
        delete o.roomIdsInFolders[e],
        delete o.selectedRoomIdsForCreateFolder[e],
        (o.sortedRooms = o.sortedRooms.filter((t) => t.id !== e))
    },
    [x.setMap](o, e) {
      const { mapName: t, key: s, value: a } = e
      o[t].set(s, a)
    },
    [x.deleteMap](o, e) {
      const { mapName: t, key: s } = e
      o[t].delete(s)
    },
    [x.insertMessageLinkedList](o, e) {
      o.messageMultiList.insert(e), o.messageMultiList.merge()
    },
    [x.concateMessageLinkedList](o, e) {
      o.messageMultiList.concate(e), o.messageMultiList.merge()
    },
    [x.unshiftMessageLinkedList](o, e) {
      o.messageMultiList.unshift(e), o.messageMultiList.merge()
    }
  },
  Vt = { state: Ut, mutations: Ol, getters: Tl, actions: Ml, namespaced: !0 }
function De(o, e, t) {
  const { url: s } = e,
    a = s == null ? void 0 : s.split('?')[0]
  if (!a) return
  const n = {}
  ;(n[a] = o == 0 ? new Date() : null),
    t.commit('imkit/updateField', { key: 'isRequesting', value: n })
}
const Ll = async (o) => {
  localStorage.getItem('imkit-token') &&
    (localStorage.removeItem('imkit-token'), window.location.reload())
}
function _l(o, e) {
  const { domain: t } = o,
    s = be.create({ baseURL: t })
  return (
    s.interceptors.request.use(
      (a) => {
        De(0, a, e)
        const n = new mt({
          'IM-Authorization': e.state.imkit.config.token,
          'IM-Client-Key': e.state.imkit.config.clientKey
        })
        return (a.headers = n), a
      },
      (a) => {
        const { config: n } = a
        return De(1, n, e), Promise.reject(a)
      }
    ),
    s.interceptors.response.use(
      (a) => {
        const { config: n } = a
        return De(1, n, e), a
      },
      async (a) => {
        const { config: n } = a
        if ((De(1, n, e), a.response.status === 401)) {
          await Ll()
          const r = new mt({
            'IM-Authorization': e.state.imkit.config.token,
            'IM-Client-Key': e.state.imkit.config.clientKey
          })
          return (n.headers = r), be.request(n)
        }
        return Promise.reject(a)
      }
    ),
    s
  )
}
function Qt(o, e) {
  const { domain: t, clientKey: s, token: a } = o,
    n = kt(t, { forceBase64: !0, transports: ['websocket'] })
  return (
    n.on('connect', () => {
      n.emit('auth2', a, { CLIENT_KEY: s, Authorization: a }, (r) => {
        console.log(r)
      })
    }),
    n.on('disconnect', (r) => {
      console.log(r)
    }),
    n.on('chat message', (r) => {
      e.dispatch('imkit/handleMessageFromSocket', Z.fromRaw(r))
    }),
    n.on('room', (r) => {
      const i = new _e(r, e.state.uid)
      if (!i.id) return
      const u = {}
      for (const m of r.members) u[m.id] || (u[m.id] = new ve(m))
      e.dispatch('imkit/handleRoomFromSocket', i),
        e.commit('imkit/updateField', { key: 'users', value: u })
    }),
    n.on('lastRead', (r) => {
      const { roomID: i, memberID: u, messageID: m } = r
      e.dispatch('imkit/handleLastReadFromSocket', {
        roomId: i,
        uid: u,
        messageId: m
      })
    }),
    n.on('roomPref', (r) => {
      const { room: i, ...u } = r
      i &&
        (e.commit('imkit/updateRoom', { id: i, pref: u }),
        u.sticky !== void 0 && e.dispatch('imkit/aggregateRoomsAndFolders'))
    }),
    n.on('myPrefChange', (r) => {
      e.dispatch('imkit/handlePrefChangeFromSocket', r)
    }),
    n.on('myPrefDelete', (r) => {
      e.dispatch('imkit/handlePrefDeleteFromSocket', r)
    }),
    n.on('typing', (r) => {
      e.dispatch('imkit/handleTypingFromSocket', r)
    }),
    n
  )
}
const Vl = 'Close',
  Ql = 'Confirm',
  Kl = 'Folder Name',
  Gl = 'Create Folder',
  Nl = 'Tag',
  Pl = 'Input Tag',
  Dl = 'Input Tag Color #C2512B',
  Yl = 'Download',
  jl = '{0} unsent a message',
  Xl = 'Read',
  Wl = 'Pin',
  zl = 'Unpin',
  Jl = 'Empty Chat',
  Hl = 'Members',
  Zl = 'Created At',
  ql = 'Updated At',
  $l = 'Leave Group',
  ec = 'Text',
  tc = 'Image',
  sc = 'Video',
  oc = 'Sticker',
  ac = 'Message',
  nc = '{0} sent',
  rc = '{0} sent a {1}',
  ic = 'Tap here to open the link.',
  lc = 'Type a message...',
  cc = '{0} is typing...',
  dc = '{0} joined the chat',
  uc = '{0} left the chat',
  mc = '{0} invited {1}',
  gc = '{0} kicked {1}',
  pc = 'You unsent a message',
  Ac = 'File size',
  hc = 'File',
  fc = 'Translation',
  vc = 'Search',
  yc = 'Location',
  kc = 'Send Current Location',
  wc = 'No access location permission.',
  bc = 'The request to get location timed out.',
  xc = 'The address is unavailable.',
  Cc = 'Audio Message',
  Ic = 'No access microphone permission.',
  Rc = 'Remove from folder',
  Ec = 'Edit Folder',
  Sc = 'Add to Folder',
  Uc = '{n} Chatrooms',
  Bc = 'Room Name',
  Fc = 'Member',
  Mc = 'Tag',
  Tc = 'Folder',
  Oc = 'Attribute',
  Lc = 'Mass Texting',
  _c = 'Input Message',
  Vc = 'Search in Conversation',
  Qc = 'Return to the Old Chat Room Interface',
  Kc =
    'You can return to the old interface from here and switch back to the new one anytime.',
  Gc = 'Proceed',
  Nc = {
    close: Vl,
    confirm: Ql,
    folderName: Kl,
    createFolder: Gl,
    tag: Nl,
    inputTag: Pl,
    inputTagPlaceholder: Dl,
    download: Yl,
    someoneUnsentMessage: jl,
    read: Xl,
    pin: Wl,
    unpin: zl,
    emptyChat: Jl,
    members: Hl,
    createdAt: Zl,
    updatedAt: ql,
    leaveGroup: $l,
    text: ec,
    image: tc,
    video: sc,
    sticker: oc,
    message: ac,
    youSent: nc,
    someoneSent: rc,
    tapOpen: ic,
    TypeMessage: lc,
    isTyping: cc,
    someoneJoinedTheChat: dc,
    someoneLeftTheChat: uc,
    someoneInvited: mc,
    someoneKicked: gc,
    youUnsentMessage: pc,
    fileSize: Ac,
    file: hc,
    translation: fc,
    search: vc,
    location: yc,
    sendCurrentLocation: kc,
    noAccessLocationPermission: wc,
    'locationInfoUnavailable.': 'Location information is unavailable.',
    requestLocationTimeout: bc,
    addressUnavailable: xc,
    audio: Cc,
    noAccessMicrophonePermission: Ic,
    removeFromFolder: Rc,
    editFolder: Ec,
    addToFolder: Sc,
    numberOfChatroom: Uc,
    roomName: Bc,
    roomMember: Fc,
    roomPrefTags: Mc,
    roomPrefFolder: Tc,
    roomTags: Oc,
    massTexting: Lc,
    inputMessage: _c,
    searchInConversation: Vc,
    tryOldSdk: Qc,
    tryOldSdkDescription: Kc,
    tryOldSdkGoTo: Gc
  },
  Pc = '關閉',
  Dc = '確認',
  Yc = '資料夾名稱',
  jc = '建立資料夾',
  Xc = '標籤',
  Wc = '輸入標籤名稱',
  zc = '請輸入自訂色彩例如 #C2512B',
  Jc = '下載',
  Hc = '{0} 已收回訊息',
  Zc = '已讀',
  qc = '置頂',
  $c = '取消置頂',
  ed = '沒有成員',
  td = '成員',
  sd = '創建時間',
  od = '更新時間',
  ad = '退出群組',
  nd = '文字',
  rd = '圖片',
  id = '影片',
  ld = '貼圖',
  cd = '訊息',
  dd = '{0}已傳送',
  ud = '{0}向您傳送了{1}',
  md = '點選此處以開啟此連結。',
  gd = '輸入訊息...',
  pd = '{0} 正在輸入...',
  Ad = '{0}加入聊天',
  hd = '{0}離開聊天',
  fd = '{0}邀請{1}加入',
  vd = '{0}將{1}踢出',
  yd = '您已收回訊息',
  kd = '檔案大小',
  wd = '檔案',
  bd = '翻譯',
  xd = '搜尋',
  Cd = '位置',
  Id = '傳送目前位置',
  Rd = '無存取位置權限',
  Ed = '請求位置逾時',
  Sd = '無法取得地址',
  Ud = '語音訊息',
  Bd = '無存取麥克風權限',
  Fd = '從資料夾中移除',
  Md = '編輯資料夾',
  Td = '新增至資料夾',
  Od = '{n} 個聊天室',
  Ld = '聊天室名稱',
  _d = '成員',
  Vd = '標籤',
  Qd = '資料夾',
  Kd = '屬性',
  Gd = '群發訊息',
  Nd = '請輸入訊息內容',
  Pd = '搜尋對話',
  Dd = '返回舊版聊天室介面',
  Yd = '您可以從這裡回到舊版介面，且隨時可以再次切到新版介面。',
  jd = '前往',
  Xd = {
    close: Pc,
    confirm: Dc,
    folderName: Yc,
    createFolder: jc,
    tag: Xc,
    inputTag: Wc,
    inputTagPlaceholder: zc,
    download: Jc,
    someoneUnsentMessage: Hc,
    read: Zc,
    pin: qc,
    unpin: $c,
    emptyChat: ed,
    members: td,
    createdAt: sd,
    updatedAt: od,
    leaveGroup: ad,
    text: nd,
    image: rd,
    video: id,
    sticker: ld,
    message: cd,
    youSent: dd,
    someoneSent: ud,
    tapOpen: md,
    TypeMessage: gd,
    isTyping: pd,
    someoneJoinedTheChat: Ad,
    someoneLeftTheChat: hd,
    someoneInvited: fd,
    someoneKicked: vd,
    youUnsentMessage: yd,
    fileSize: kd,
    file: wd,
    translation: bd,
    search: xd,
    location: Cd,
    sendCurrentLocation: Id,
    noAccessLocationPermission: Rd,
    'locationInfoUnavailable.': '無法取得位置資訊',
    requestLocationTimeout: Ed,
    addressUnavailable: Sd,
    audio: Ud,
    noAccessMicrophonePermission: Bd,
    removeFromFolder: Fd,
    editFolder: Md,
    addToFolder: Td,
    numberOfChatroom: Od,
    roomName: Ld,
    roomMember: _d,
    roomPrefTags: Vd,
    roomPrefFolder: Qd,
    roomTags: Kd,
    massTexting: Gd,
    inputMessage: Nd,
    searchInConversation: Pd,
    tryOldSdk: Dd,
    tryOldSdkDescription: Yd,
    tryOldSdkGoTo: jd
  },
  Wd = '閉じる',
  zd = '確認',
  Jd = 'フォルダ名',
  Hd = 'フォルダを作成',
  Zd = 'タグ',
  qd = 'タグを入力',
  $d = 'カスタムカラーを入力してください（例：#C2512B）',
  eu = 'ダウンロード',
  tu = '{0}がメッセージを取り消しました',
  su = '既読',
  ou = 'ピン留め',
  au = 'ピン留めを解除',
  nu = 'チャットが空です',
  ru = 'メンバー',
  iu = '作成日',
  lu = '更新日',
  cu = 'グループを退出',
  du = 'テキスト',
  uu = '画像',
  mu = 'ビデオ',
  gu = 'スティッカー',
  pu = 'メッセージ',
  Au = '{0}が送信しました',
  hu = '{0}が{1}を送信しました',
  fu = 'リンクを開くにはこちらをタップしてください。',
  vu = 'メッセージを入力...',
  yu = '{0}が入力中...',
  ku = '{0}がチャットに参加しました',
  wu = '{0}がチャットを退出しました',
  bu = '{0}が{1}を招待しました',
  xu = '{0}が{1}をキックしました',
  Cu = 'あなたはメッセージを取り消しました',
  Iu = 'ファイルサイズ',
  Ru = 'ファイル',
  Eu = '翻訳',
  Su = '検索',
  Uu = '位置',
  Bu = '現在の位置を送信',
  Fu = '位置情報のアクセス許可がありません。',
  Mu = '位置情報のリクエストがタイムアウトしました。',
  Tu = 'アドレスが利用できません。',
  Ou = 'オーディオメッセージ',
  Lu = 'マイクのアクセス許可がありません。',
  _u = 'フォルダから削除',
  Vu = 'フォルダを編集',
  Qu = 'フォルダに追加',
  Ku = '{n}のチャットルーム',
  Gu = 'チャットルーム名',
  Nu = 'メンバー',
  Pu = 'タグ',
  Du = 'フォルダ',
  Yu = '属性',
  ju = '一斉送信',
  Xu = 'メッセージを入力',
  Wu = 'チャット内を検索',
  zu = '舊版介面',
  Ju = '舊版介面をご利用いただけます。',
  Hu = '舊版介面へ',
  Zu = {
    close: Wd,
    confirm: zd,
    folderName: Jd,
    createFolder: Hd,
    tag: Zd,
    inputTag: qd,
    inputTagPlaceholder: $d,
    download: eu,
    someoneUnsentMessage: tu,
    read: su,
    pin: ou,
    unpin: au,
    emptyChat: nu,
    members: ru,
    createdAt: iu,
    updatedAt: lu,
    leaveGroup: cu,
    text: du,
    image: uu,
    video: mu,
    sticker: gu,
    message: pu,
    youSent: Au,
    someoneSent: hu,
    tapOpen: fu,
    TypeMessage: vu,
    isTyping: yu,
    someoneJoinedTheChat: ku,
    someoneLeftTheChat: wu,
    someoneInvited: bu,
    someoneKicked: xu,
    youUnsentMessage: Cu,
    fileSize: Iu,
    file: Ru,
    translation: Eu,
    search: Su,
    location: Uu,
    sendCurrentLocation: Bu,
    noAccessLocationPermission: Fu,
    'locationInfoUnavailable.': '位置情報を取得できません。',
    requestLocationTimeout: Mu,
    addressUnavailable: Tu,
    audio: Ou,
    noAccessMicrophonePermission: Lu,
    removeFromFolder: _u,
    editFolder: Vu,
    addToFolder: Qu,
    numberOfChatroom: Ku,
    roomName: Gu,
    roomMember: Nu,
    roomPrefTags: Pu,
    roomPrefFolder: Du,
    roomTags: Yu,
    massTexting: ju,
    inputMessage: Xu,
    searchInConversation: Wu,
    tryOldSdk: zu,
    tryOldSdkDescription: Ju,
    tryOldSdkGoTo: Hu
  },
  vt = { 'en-US': Nc, 'zh-TW': Xd, 'ja-JP': Zu },
  qu = vs({
    legacy: !1,
    locale: navigator.language in vt ? navigator.language : 'en-US',
    messages: vt
  }),
  $u = {
    install: async (o, e) => {
      const { store: t, config: s } = e
      t.hasModule('imkit') || t.registerModule('imkit', Vt)
      const { id: a, _id: n } = ys(s.token),
        r = a || n,
        i = _l(s, t),
        u = Qt(s, t)
      t.commit('imkit/setState', { config: s, uid: r, axios: i, socket: u }),
        o.use(ks()),
        o.use(qu),
        o.directive('src', async (m, p) => {
          const { value: g, oldValue: A } = p
          if (g.startsWith('data:')) {
            m.src = g
            return
          }
          const { imageCache: f } = t.state.imkit
          if (A === void 0 || g !== A) {
            if (f.has(g)) {
              m.src = f.get(g)
              return
            }
            try {
              m.classList.add('opacity-0')
              const y = await i.get(g, {
                  responseType: 'arraybuffer',
                  onDownloadProgress: (U) => {
                    const { total: B } = U
                    B &&
                      t.commit('imkit/updateField', {
                        key: 'downloadProgresses',
                        value: { [g]: U.loaded / B }
                      })
                  }
                }),
                S = btoa(
                  new Uint8Array(y.data).reduce(
                    (U, B) => U + String.fromCharCode(B),
                    ''
                  )
                ),
                M = `data:${y.headers['content-type']};base64,${S}`
              f.set(g, M), (m.src = M)
            } catch {
              m.src = g
            }
            m.classList.remove('opacity-0')
          }
        })
    }
  },
  em = [],
  ct = ws({ plugins: em, modules: { imkit: Vt } }),
  tm = { class: 'flex flex-col divide-y bg-white' },
  sm = { class: 'flex items-center gap-4 px-3 h-64px' },
  om = { class: 'h-50px w-50px relative' },
  am = {
    class:
      'text-base text-gray-900 overflow-ellipsis overflow-hidden whitespace-nowrap'
  },
  nm = { class: 'p-2 flex flex-col gap-4 overflow-auto' },
  rm = { class: 'text-base text-gray-500 mb-2' },
  im = { class: 'flex flex-col gap-3' },
  lm = { class: 'h-50px w-50px relative' },
  cm = {
    class:
      'flex flex-col text-base overflow-ellipsis overflow-hidden whitespace-nowrap'
  },
  dm = { class: 'text-base text-gray-900' },
  um = { key: 0, class: 'text-sm text-gray-500' },
  mm = { class: 'text-gray-500' },
  gm = { class: 'text-gray-500' },
  pm = ['src'],
  Am = L({
    __name: 'ChatRoomInfo',
    setup(o) {
      oe.extend(nt)
      const e = W(),
        t = h(() => e.state.imkit.rooms[e.state.imkit.selectedRoomId]),
        s = h(() => e.state.imkit.users),
        a = h(() => e.state.imkit.uid),
        n = h(() => e.state.imkit.config.settings),
        r = h(() => e.state.imkit.config.settings.customRoomInfoIframeUrl),
        i = h(
          () =>
            e.state.imkit.config.settings.customRoomInfoIframeUrl +
            `?roomId=${e.state.imkit.selectedRoomId}`
        ),
        u = () => {
          e.commit('imkit/setState', { isRoomInfoVisible: !1 })
        }
      return (m, p) => (
        l(),
        d('div', tm, [
          c('div', sm, [
            c('img', {
              src: Bt,
              class: 'cursor-pointer sm:hidden',
              width: '36',
              height: '36',
              onClick: u
            }),
            c('div', om, [
              t.value.avatars.length === 1
                ? (l(),
                  Y(
                    ne,
                    {
                      key: 0,
                      url: t.value.avatars[0].url,
                      name: t.value.avatars[0].name,
                      class: 'relative'
                    },
                    null,
                    8,
                    ['url', 'name']
                  ))
                : (l(),
                  d(
                    G,
                    { key: 1 },
                    [
                      j(
                        ne,
                        {
                          url: t.value.avatars[1].url,
                          name: t.value.avatars[1].name,
                          class:
                            'h-36px w-36px text-16px absolute top-0 right-0'
                        },
                        null,
                        8,
                        ['url', 'name']
                      ),
                      j(
                        ne,
                        {
                          url: t.value.avatars[0].url,
                          name: t.value.avatars[0].name,
                          class:
                            'h-38px w-38px text-16px absolute bottom-0 left-0 border-2 border-white group-hover:border-gray-100'
                        },
                        null,
                        8,
                        ['url', 'name']
                      )
                    ],
                    64
                  ))
            ]),
            c('div', am, v(t.value.displayName), 1)
          ]),
          c('div', nm, [
            c('div', null, [
              c('div', rm, v(m.$t('members')), 1),
              c('div', im, [
                (l(!0),
                d(
                  G,
                  null,
                  $(
                    t.value.memberIds,
                    (g) => (
                      l(),
                      d('div', { key: g, class: 'flex items-center gap-4' }, [
                        c('div', lm, [
                          j(
                            ne,
                            {
                              url: s.value[g].avatarUrl ?? '',
                              name: s.value[g].nickname,
                              class: 'relative h-50px w-50px text-lg'
                            },
                            null,
                            8,
                            ['url', 'name']
                          )
                        ]),
                        c('div', cm, [
                          c('div', dm, v(s.value[g].nickname), 1),
                          s.value[g].city && s.value[g].country
                            ? (l(),
                              d(
                                'div',
                                um,
                                v(s.value[g].city) +
                                  ', ' +
                                  v(s.value[g].country),
                                1
                              ))
                            : b('', !0)
                        ])
                      ])
                    )
                  ),
                  128
                ))
              ])
            ]),
            c('div', null, [
              c(
                'div',
                mm,
                v(m.$t('createdAt')) +
                  ' ' +
                  v(w(oe)(t.value.createdAt).format('lll')),
                1
              ),
              c(
                'div',
                gm,
                v(m.$t('updatedAt')) +
                  ' ' +
                  v(w(oe)(t.value.updatedAt).format('lll')),
                1
              )
            ]),
            t.value.type === w(je).Group && n.value.showLeaveRoomButton
              ? (l(),
                d(
                  'button',
                  {
                    key: 0,
                    class: 'w-full text-gray-500 border rounded-lg p-2',
                    onClick:
                      p[0] ||
                      (p[0] = (g) =>
                        w(e).dispatch('imkit/removeMembers', {
                          roomId: t.value.id,
                          uids: [a.value]
                        }))
                  },
                  v(m.$t('leaveGroup')),
                  1
                ))
              : b('', !0),
            r.value
              ? (l(),
                d(
                  'iframe',
                  { key: 1, src: i.value, frameborder: '0' },
                  null,
                  8,
                  pm
                ))
              : b('', !0)
          ])
        ])
      )
    }
  }),
  hm = { class: 'flex divide-x relative h-screen' },
  fm = L({
    __name: 'MainView',
    setup(o) {
      const e = W(),
        t = h(() => e.state.imkit.selectedRoomId),
        s = h(() => e.state.imkit.isRoomInfoVisible),
        a = h(() => lt()),
        n = h(() => a.value.has('roomId'))
      return (
        e.commit('imkit/setState', {
          roomTag: a.value.get('roomTag') ?? '',
          selectedRoomId: a.value.get('roomId') ?? ''
        }),
        (r, i) => (
          l(),
          d('div', hm, [
            n.value
              ? (l(),
                d(
                  G,
                  { key: 0 },
                  [
                    t.value
                      ? (l(),
                        Y(ft, {
                          key: 0,
                          class: 'w-full <md:w-full <md:absolute <md:inset-0'
                        }))
                      : b('', !0)
                  ],
                  64
                ))
              : (l(),
                d(
                  G,
                  { key: 1 },
                  [
                    j(Za, { class: 'w-1/4 min-w-300px <md:w-full' }),
                    j(
                      Ve,
                      { name: 'slide-fade' },
                      {
                        default: se(() => [
                          t.value
                            ? (l(),
                              Y(ft, {
                                key: 0,
                                class:
                                  'w-3/4 <md:w-full <md:absolute <md:inset-0'
                              }))
                            : b('', !0)
                        ]),
                        _: 1
                      }
                    )
                  ],
                  64
                )),
            j(
              Ve,
              { name: 'slide-fade' },
              {
                default: se(() => [
                  t.value && s.value
                    ? (l(),
                      Y(Am, {
                        key: 0,
                        class:
                          'w-1/4 min-w-300px <md:w-full <md:absolute <md:inset-0'
                      }))
                    : b('', !0)
                ]),
                _: 1
              }
            )
          ])
        )
      )
    }
  })
const vm = ce(fm, [['__scopeId', 'data-v-87d855bd']]),
  ym = '/chat/assets/pinchat_logo-a1081c5f.png',
  $e = (o) => (Ae('data-v-17cb6e7e'), (o = o()), he(), o),
  km = { class: 'bg' },
  wm = $e(() => c('img', { class: 'mb-2', src: ym, width: '200' }, null, -1)),
  bm = $e(() =>
    c('div', { class: 'text-gray-400 mb-12' }, '加入聊天室和我們互動吧', -1)
  ),
  xm = { key: 0, class: 'w-full flex items-center justify-center' },
  Cm = $e(() =>
    c(
      'svg',
      {
        class: 'w-6 h-6 text-gray-200 animate-spin fill-blue-300',
        viewBox: '0 0 100 101',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      [
        c('path', {
          d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
          fill: 'currentColor'
        }),
        c('path', {
          d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
          fill: 'currentFill'
        })
      ],
      -1
    )
  ),
  Im = [Cm],
  Rm = $e(() =>
    c(
      'a',
      { target: '_blank', href: '/', class: 'text-gray-400 text-xs' },
      [ae('Powered by '), c('strong', null, 'PinChat')],
      -1
    )
  ),
  Em = L({
    __name: 'GuestView',
    setup(o) {
      const e = W(),
        t = bs(),
        s = xs(),
        a = I(''),
        n = I(!1),
        r = h(() => t.query.roomTag ?? 'customersupport'),
        i = h(() => t.query.domain ?? 'pinchat.me'),
        u = async () => {
          var p, g, A
          n.value = !0
          try {
            const f = await be.post(
                `https://api.pinchat.me/api/zh-tw/chat/guest_${r.value}`,
                { name: a.value, domain: i.value }
              ),
              y =
                (A =
                  (g =
                    (p = f == null ? void 0 : f.data) == null
                      ? void 0
                      : p.data) == null
                    ? void 0
                    : g.data) == null
                  ? void 0
                  : A.access_token
            y && (await m(y))
          } catch (f) {
            ;(n.value = !1), console.error(f)
          }
        },
        m = async (p) => {
          var g, A
          try {
            const f = await be.post(
                `https://api.pinchat.me/api/zh-tw/chat/guest/config/${r.value}`,
                null,
                { headers: { Authorization: `Bearer ${p}` } }
              ),
              {
                chatToken: y,
                chatUserId: S,
                room_id: M
              } = ((A =
                (g = f == null ? void 0 : f.data) == null ? void 0 : g.data) ==
              null
                ? void 0
                : A.data) ?? {}
            e.commit('imkit/updateField', {
              key: 'config',
              value: { token: y }
            })
            const U = Qt(e.state.imkit.config, e)
            e.commit('imkit/setState', {
              uid: S,
              selectedRoomId: M,
              socket: U
            }),
              s.push({ path: '/', query: { roomId: M } })
          } catch (f) {
            ;(n.value = !1), console.error(f)
          }
        }
      return (p, g) => (
        l(),
        d('div', km, [
          wm,
          bm,
          q(
            c(
              'input',
              {
                'onUpdate:modelValue': g[0] || (g[0] = (A) => (a.value = A)),
                class:
                  'min-h-48px rounded-xl text-sm px-4 py-2.5 w-full border border-hex-007ABF outline-hex-007ABF',
                placeholder: '輸入您的暱稱 (選填)'
              },
              null,
              512
            ),
            [[pe, a.value]]
          ),
          c(
            'button',
            {
              class:
                'min-h-48px rounded-xl text-sm px-4 py-2.5 w-full text-white font-medium bg-hex-007ABF mb-40vh',
              onClick: u
            },
            [
              n.value
                ? (l(), d('div', xm, Im))
                : (l(), d(G, { key: 1 }, [ae('一鍵互動')], 64))
            ]
          ),
          Rm
        ])
      )
    }
  })
const Sm = ce(Em, [['__scopeId', 'data-v-17cb6e7e']]),
  et = Cs(Ss)
et.use(ct)
const Um = Is({
  history: Rs(),
  routes: [
    { path: '/chat', component: vm },
    { path: '/chat/guest', component: Sm }
  ]
})
et.use(Um)
const Ue = {
  domain: 'https://chat.pinchat.me',
  clientKey: 'pinchat_imkit_0703_2018_001_clientkey',
  token: '',
  translationApiKey: '',
  mapApiKey: 'AIzaSyC1XhSZ_MVbnZAtYNV-0PwRn7rILnOcZV4',
  firebaseConfig: {
    apiKey: 'AIzaSyCgKWEY2alGlmbbTU_zfydx-Jy-_HSMoo4',
    authDomain: 'pinchat-me.firebaseapp.com',
    databaseURL: 'https://pinchat-me.firebaseio.com',
    projectId: 'pinchat-me',
    storageBucket: 'pinchat-me.appspot.com',
    messagingSenderId: '83845336238',
    appId: '1:83845336238:web:3ff0ef49789044ae1ef13f',
    measurementId: 'G-RSX512HZZD'
  },
  firebaseVapidKey:
    'BHZZhyEFRlQYMlO5NLtGC6F5uT1QLdQ2Owvc1-GeRfeB9jY0E4pjJzO5ulNJhru7swi-V5c1vl4MfLztlq3aAyA',
  settings: {
    locationInputEnabled: !0,
    audioInputEnabled: !0,
    fileInputEnabled: !0,
    emojiInputEnabled: !0,
    stickerInputEnabled: !0,
    sendButtonEnabled: !1,
    showDirectChatRoomInfoButton: !0,
    showGroupChatRoomInfoButton: !0,
    autoSelectRoomWhenLoaded: !0,
    customRoomInfoIframeUrl: '',
    showLeaveRoomButton: !0,
    massTextingEnabled: !0
  },
  styles: {
    incomingMessageCell: '',
    outgoingMessageCell: '',
    roomListUnreadBadge: ''
  }
}
;(window.location.hostname === 'pinchat-beta.funtek.dev' ||
  window.location.hostname === 'pinchat-beta.funtek.io' ||
  window.location.hostname.match('localhost') !== null) &&
  ((Ue.domain = 'https://beta-chat.pinchat.me:1443'),
  (Ue.firebaseConfig = {
    apiKey: 'AIzaSyCB3V6jgYq2Y5r5R2WZaTz_Qz_9tY6hp0I',
    authDomain: 'pinchat-demo.firebaseapp.com',
    databaseURL: 'https://pinchat-demo.firebaseio.com',
    projectId: 'pinchat-demo',
    storageBucket: 'pinchat-demo.appspot.com',
    messagingSenderId: '241666402397',
    appId: '1:241666402397:web:9d10298bd0f070fac5c5b4',
    measurementId: 'G-JK542V2MM9'
  }),
  (Ue.firebaseVapidKey =
    'BIK2_apDVmsao3BDxK_CExcJSmmkpfVfm-4trgI0uoeTNpR-YHLsZ9c5U0BG7aZldQjguU8ERZjNfG77cICElLE'))
const Bm = lt()
if (Es('localStorage')) {
  const o = Bm.get('token')
  if (o) {
    localStorage.setItem('imkit-token', o), (Ue.token = o)
    const e = new URL(window.location.href)
    e.searchParams.delete('token'),
      window.history.replaceState(null, '', e.toString())
  } else
    localStorage.getItem('imkit-token') &&
      (Ue.token = localStorage.getItem('imkit-token') || '')
}
et.use($u, { store: ct, config: Ue })
et.mount('#app')
ct.dispatch('imkit/subscribe')
