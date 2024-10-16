import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// prisma/generate/client/runtime/library.js
var require_library = __commonJS((exports, module) => {
  function go(e) {
    return typeof e == "function" ? e : (t) => t.$extends(e);
  }
  function ho(e) {
    return e;
  }
  function yo(...e) {
    return (t) => t;
  }
  function M(e, t) {
    let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
    return function(o) {
      return !Po.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
    };
  }
  function Pu(e) {
    let t = { color: vo[xu++ % vo.length], enabled: Gt.enabled(e), namespace: e, log: Gt.log, extend: () => {
    } }, r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (n.length !== 0 && Ut.push([o, ...n]), Ut.length > wu && Ut.shift(), Gt.enabled(o) || i) {
        let l = n.map((c) => typeof c == "string" ? c : vu(c)), u = `+${Date.now() - To}ms`;
        To = Date.now(), globalThis.DEBUG_COLORS ? a(Nr[s](H(o)), ...l, Nr[s](u)) : a(o, ...l, u);
      }
    };
    return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
  }
  function vu(e, t = 2) {
    let r = new Set;
    return JSON.stringify(e, (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i))
          return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint")
        return i.toString();
      return i;
    }, t);
  }
  function Ro(e = 7500) {
    let t = Ut.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
    return t.length < e ? t : t.slice(-e);
  }
  function Co() {
    Ut.length = 0;
  }
  function Gn() {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && So.default.existsSync(e)) && process.arch === "ia32")
      throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
  }
  function $r(e, t) {
    let r = t === "url";
    return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Mr}.dylib.node` : `${Mr}-${e}.dylib.node` : r ? `${Mr}.so.node` : `${Mr}-${e}.so.node`;
  }
  function pe(e) {
    return Object.assign(e, { optional: () => Ru(e), and: (t) => j(e, t), or: (t) => Cu(e, t), select: (t) => t === undefined ? Ao(e) : Ao(t, e) });
  }
  function Ru(e) {
    return pe({ [_e]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return t === undefined ? (Ge(e).forEach((i) => n(i, undefined)), { matched: true, selections: r }) : { matched: we(e, t, n), selections: r };
    }, getSelectionKeys: () => Ge(e), matcherType: "optional" }) });
  }
  function j(...e) {
    return pe({ [_e]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return { matched: e.every((i) => we(i, t, n)), selections: r };
    }, getSelectionKeys: () => Qt(e, Ge), matcherType: "and" }) });
  }
  function Cu(...e) {
    return pe({ [_e]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return Qt(e, Ge).forEach((i) => n(i, undefined)), { matched: e.some((i) => we(i, t, n)), selections: r };
    }, getSelectionKeys: () => Qt(e, Ge), matcherType: "or" }) });
  }
  function I(e) {
    return { [_e]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
  }
  function Ao(...e) {
    let t = typeof e[0] == "string" ? e[0] : undefined, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? undefined : e[0];
    return pe({ [_e]: () => ({ match: (n) => {
      let i = { [t ?? jr]: n };
      return { matched: r === undefined || we(r, n, (o, s) => {
        i[o] = s;
      }), selections: i };
    }, getSelectionKeys: () => [t ?? jr].concat(r === undefined ? [] : Ge(r)) }) });
  }
  function be(e) {
    return typeof e == "number";
  }
  function je(e) {
    return typeof e == "string";
  }
  function Ve(e) {
    return typeof e == "bigint";
  }
  function mt(e) {
    return new Hn(e, Wn);
  }
  function Vr(e, ...t) {
    Au.warn() && console.warn(`${Su.warn} ${e}`, ...t);
  }
  async function _o() {
    let e = Ur.default.platform(), t = process.arch;
    if (e === "freebsd") {
      let s = await Gr("freebsd-version");
      if (s && s.trim().length > 0) {
        let l = /^(\d+)\.?/.exec(s);
        if (l)
          return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
      }
    }
    if (e !== "linux")
      return { platform: e, arch: t };
    let r = await Du(), n = await ju(), i = Fu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await Lu(i);
    return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
  }
  function ku(e) {
    let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = mt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: undefined, familyDistro: undefined, originalDistro: l }));
    return te(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
  }
  async function Du() {
    let e = "/etc/os-release";
    try {
      let t = await Kn.default.readFile(e, { encoding: "utf-8" });
      return ku(t);
    } catch {
      return { targetDistro: undefined, familyDistro: undefined, originalDistro: undefined };
    }
  }
  function _u(e) {
    let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (t) {
      let r = `${t[1]}.x`;
      return Fo(r);
    }
  }
  function Io(e) {
    let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (t) {
      let r = `${t[1]}${t[2] ?? ".0"}.x`;
      return Fo(r);
    }
  }
  function Fo(e) {
    let t = (() => {
      if (No(e))
        return e;
      let r = e.split(".");
      return r[1] = "0", r.join(".");
    })();
    if (Ou.includes(t))
      return t;
  }
  function Fu(e) {
    return mt(e).with({ familyDistro: "musl" }, () => (te('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (te('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (te('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (te(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
  }
  async function Lu(e) {
    let t = 'grep -v "libssl.so.0"', r = await Oo(e);
    if (r) {
      te(`Found libssl.so file using platform-specific paths: ${r}`);
      let o = Io(r);
      if (te(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "libssl-specific-path" };
    }
    te('Falling back to "ldconfig" and other generic paths');
    let n = await Gr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
    if (n || (n = await Oo(["/lib64", "/usr/lib64", "/lib"])), n) {
      te(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
      let o = Io(n);
      if (te(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "ldconfig" };
    }
    let i = await Gr("openssl version -v");
    if (i) {
      te(`Found openssl binary with version: ${i}`);
      let o = _u(i);
      if (te(`The parsed openssl version is: ${o}`), o)
        return { libssl: o, strategy: "openssl-binary" };
    }
    return te("Couldn't find any version of libssl or OpenSSL in the system"), {};
  }
  async function Oo(e) {
    for (let t of e) {
      let r = await Nu(t);
      if (r)
        return r;
    }
  }
  async function Nu(e) {
    try {
      return (await Kn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
    } catch (t) {
      if (t.code === "ENOENT")
        return;
      throw t;
    }
  }
  async function nt() {
    let { binaryTarget: e } = await Lo();
    return e;
  }
  function Mu(e) {
    return e.binaryTarget !== undefined;
  }
  async function zn() {
    let { memoized: e, ...t } = await Lo();
    return t;
  }
  async function Lo() {
    if (Mu(Br))
      return Promise.resolve({ ...Br, memoized: true });
    let e = await _o(), t = $u(e);
    return Br = { ...e, binaryTarget: t }, { ...Br, memoized: false };
  }
  function $u(e) {
    let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
    t === "linux" && !["x64", "arm64"].includes(r) && Vr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
    let l = "1.1.x";
    if (t === "linux" && i === undefined) {
      let c = mt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
      Vr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (t === "linux" && o === undefined && te(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t === "darwin" && r === "arm64")
      return "darwin-arm64";
    if (t === "darwin")
      return "darwin";
    if (t === "win32")
      return "windows";
    if (t === "freebsd")
      return o;
    if (t === "openbsd")
      return "openbsd";
    if (t === "netbsd")
      return "netbsd";
    if (t === "linux" && o === "nixos")
      return "linux-nixos";
    if (t === "linux" && r === "arm64")
      return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
    if (t === "linux" && r === "arm")
      return `linux-arm-openssl-${i || l}`;
    if (t === "linux" && o === "musl") {
      let c = "linux-musl";
      return !i || No(i) ? c : `${c}-openssl-${i}`;
    }
    return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Vr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
  }
  async function qu(e) {
    try {
      return await e();
    } catch {
      return;
    }
  }
  function Gr(e) {
    return qu(async () => {
      let t = await Iu(e);
      return te(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
    });
  }
  async function ju() {
    return typeof Ur.default.machine == "function" ? Ur.default.machine() : (await Gr("uname -m"))?.trim();
  }
  function No(e) {
    return e.startsWith("1.");
  }
  function ni(e) {
    return (0, Ho.default)(e, e, { fallback: X });
  }
  function Ko() {
    return $.default.join(__dirname, "../");
  }
  function ai(e) {
    if (process.platform === "win32")
      return;
    let t = si.default.statSync(e), r = t.mode | 64 | 8 | 1;
    if (t.mode === r) {
      zo(`Execution permissions of ${e} are fine`);
      return;
    }
    let n = r.toString(8).slice(-3);
    zo(`Have to call chmodPlusX on ${e}`), si.default.chmodSync(e, n);
  }
  function li(e) {
    let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${ni("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Oe(e.id)}\`).`, s = mt({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
      let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
      return `${r("libssl")}. Please install ${a} and try again.`;
    }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
    return `${o}
${s}

Details: ${t.message}`;
  }
  function es(e) {
    let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
      if (!a)
        return o;
      let l = a[1], u, c;
      if (l === "\\")
        c = a[0], u = c.replace("\\$", "$");
      else {
        let p = a[2];
        c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
      }
      return o.replace(c, u);
    }, n) ?? n;
    for (let n in e.parsed) {
      let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
      e.parsed[n] = r(i);
    }
    for (let n in e.parsed)
      t[n] = e.parsed[n];
    return e;
  }
  function Ht({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
    let n = ts(e);
    r.conflictCheck !== "none" && nc(n, t, r.conflictCheck);
    let i = null;
    return rs(n?.path, t) || (i = ts(t)), !n && !i && ci("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ce(H("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
  }
  function nc(e, t, r) {
    let n = e?.dotenvResult.parsed, i = !rs(e?.path, t);
    if (n && t && i && Kr.default.existsSync(t)) {
      let o = pi.default.parse(Kr.default.readFileSync(t)), s = [];
      for (let a in o)
        n[a] === o[a] && s.push(a);
      if (s.length > 0) {
        let a = ht.default.relative(process.cwd(), e.path), l = ht.default.relative(process.cwd(), t);
        if (r === "error") {
          let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${H(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
          throw new Error(u);
        } else if (r === "warn") {
          let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => H(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
          console.warn(`${ke("warn(prisma)")} ${u}`);
        }
      }
    }
  }
  function ts(e) {
    if (ic(e)) {
      ci(`Environment variables loaded from ${e}`);
      let t = pi.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : undefined });
      return { dotenvResult: es(t), message: Oe(`Environment variables loaded from ${ht.default.relative(process.cwd(), e)}`), path: e };
    } else
      ci(`Environment variables not found at ${e}`);
    return null;
  }
  function rs(e, t) {
    return e && t && ht.default.resolve(e) === ht.default.resolve(t);
  }
  function ic(e) {
    return !!(e && Kr.default.existsSync(e));
  }
  function Kt(e) {
    let t = oc();
    return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : ns);
  }
  function oc() {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : undefined;
  }
  function di(e) {
    return zt.default.sep === zt.default.posix.sep ? e : e.split(zt.default.sep).join(zt.default.posix.sep);
  }
  function gi(e) {
    return String(new fi(e));
  }
  function ac(e) {
    let t;
    if (e.length > 0) {
      let r = e.find((n) => n.fromEnvVar !== null);
      r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
    } else
      t = undefined;
    return t;
  }
  function lc(e) {
    let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
    return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${uc(n)}`).join(`
`);
  }
  function uc(e) {
    return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
  }
  function cc(...e) {
    console.log(...e);
  }
  function hi(e, ...t) {
    cs.warn() && console.warn(`${Yt.warn} ${e}`, ...t);
  }
  function pc(e, ...t) {
    console.info(`${Yt.info} ${e}`, ...t);
  }
  function dc(e, ...t) {
    console.error(`${Yt.error} ${e}`, ...t);
  }
  function mc(e, ...t) {
    console.log(`${Yt.query} ${e}`, ...t);
  }
  function zr(e, t) {
    if (!e)
      throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
  }
  function Fe(e, t) {
    throw new Error(t);
  }
  function bi(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function yt(e, t) {
    let r = {};
    for (let n of Object.keys(e))
      r[n] = t(e[n], n);
    return r;
  }
  function wi(e, t) {
    if (e.length === 0)
      return;
    let r = e[0];
    for (let n = 1;n < e.length; n++)
      t(r, e[n]) < 0 && (r = e[n]);
    return r;
  }
  function w(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  }
  function er(e) {
    let t;
    return { get() {
      return t || (t = { value: e() }), t.value;
    } };
  }
  function hs(e, t) {
    let r = er(() => gc(t));
    Object.defineProperty(e, "dmmf", { get: () => r.get() });
  }
  function gc(e) {
    return { datamodel: { models: xi(e.models), enums: xi(e.enums), types: xi(e.types) } };
  }
  function xi(e) {
    return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
  }
  function vi(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  }
  function xe(e) {
    return e instanceof or;
  }
  function bs(e) {
    return (...t) => new sr(e, t);
  }
  function Ri(e) {
    return { ok: true, value: e, map(t) {
      return Ri(t(e));
    }, flatMap(t) {
      return t(e);
    } };
  }
  function ar(e) {
    return { ok: false, error: e, map() {
      return ar(e);
    }, flatMap() {
      return ar(e);
    } };
  }
  function fe(e, t) {
    return async (...r) => {
      try {
        return await t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return ar({ kind: "GenericJs", id: i });
      }
    };
  }
  function bc(e, t) {
    return (...r) => {
      try {
        return t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return ar({ kind: "GenericJs", id: i });
      }
    };
  }
  function Es(e, t = ",", r = "", n = "") {
    if (e.length === 0)
      throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new ie([r, ...Array(e.length - 1).fill(t), n], e);
  }
  function Ai(e) {
    return new ie([e], []);
  }
  function Ii(e, ...t) {
    return new ie(e, t);
  }
  function lr(e) {
    return { getKeys() {
      return Object.keys(e);
    }, getPropertyValue(t) {
      return e[t];
    } };
  }
  function re(e, t) {
    return { getKeys() {
      return [e];
    }, getPropertyValue() {
      return t();
    } };
  }
  function it(e) {
    let t = new Pe;
    return { getKeys() {
      return e.getKeys();
    }, getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    }, getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    } };
  }
  function nn(e) {
    let t = new Set(e);
    return { getOwnPropertyDescriptor: () => rn, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
  }
  function ve(e, t) {
    let r = Ec(t), n = new Set, i = new Proxy(e, { get(o, s) {
      if (n.has(s))
        return o[s];
      let a = r.get(s);
      return a ? a.getPropertyValue(s) : o[s];
    }, has(o, s) {
      if (n.has(s))
        return true;
      let a = r.get(s);
      return a ? a.has?.(s) ?? true : Reflect.has(o, s);
    }, ownKeys(o) {
      let s = Ps(Reflect.ownKeys(o), r), a = Ps(Array.from(r.keys()), r);
      return [...new Set([...s, ...a, ...n])];
    }, set(o, s, a) {
      return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
    }, getOwnPropertyDescriptor(o, s) {
      let a = Reflect.getOwnPropertyDescriptor(o, s);
      if (a && !a.configurable)
        return a;
      let l = r.get(s);
      return l ? l.getPropertyDescriptor ? { ...rn, ...l?.getPropertyDescriptor(s) } : rn : a;
    }, defineProperty(o, s, a) {
      return n.add(s), Reflect.defineProperty(o, s, a);
    } });
    return i[xs] = function() {
      let o = { ...this };
      return delete o[xs], o;
    }, i;
  }
  function Ec(e) {
    let t = new Map;
    for (let r of e) {
      let n = r.getKeys();
      for (let i of n)
        t.set(i, r);
    }
    return t;
  }
  function Ps(e, t) {
    return e.filter((r) => t.get(r)?.has?.(r) ?? true);
  }
  function Et(e) {
    return { getKeys() {
      return e;
    }, has() {
      return false;
    }, getPropertyValue() {
    } };
  }
  function wt(e, t) {
    return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : undefined };
  }
  function vs(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  function Pt(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function on(e) {
    return e.toString() !== "Invalid Date";
  }
  function K(e) {
    var t, r, n, i = e.length - 1, o = "", s = e[0];
    if (i > 0) {
      for (o += s, t = 1;t < i; t++)
        n = e[t] + "", r = b - n.length, r && (o += We(r)), o += n;
      s = e[t], n = s + "", r = b - n.length, r && (o += We(r));
    } else if (s === 0)
      return "0";
    for (;s % 10 === 0; )
      s /= 10;
    return o + s;
  }
  function oe(e, t, r) {
    if (e !== ~~e || e < t || e > r)
      throw Error(Ke + e);
  }
  function ur(e, t, r, n) {
    var i, o, s, a;
    for (o = e[0];o >= 10; o /= 10)
      --t;
    return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = G(10, b - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 50000 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == G(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1000 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1000 | 0) == G(10, t - 3) - 1, s;
  }
  function sn(e, t, r) {
    for (var n, i = [0], o, s = 0, a = e.length;s < a; ) {
      for (o = i.length;o--; )
        i[o] *= t;
      for (i[0] += Oi.indexOf(e.charAt(s++)), n = 0;n < i.length; n++)
        i[n] > r - 1 && (i[n + 1] === undefined && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
    }
    return i.reverse();
  }
  function Rc(e, t) {
    var r, n, i;
    if (t.isZero())
      return t;
    n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / dn(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Tt(e, 1, t.times(i), new e(1));
    for (var o = r;o--; ) {
      var s = t.times(t);
      t = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= r, t;
  }
  function y(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor;
    e:
      if (t != null) {
        if (p = e.d, !p)
          return e;
        for (i = 1, a = p[0];a >= 10; a /= 10)
          i++;
        if (o = t - i, o < 0)
          o += b, s = t, c = p[d = 0], l = c / G(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / b), a = p.length, d >= a)
          if (n) {
            for (;a++ <= d; )
              p.push(0);
            c = l = 0, i = 1, o %= b, s = o - b + 1;
          } else
            break e;
        else {
          for (c = a = p[d], i = 1;a >= 10; a /= 10)
            i++;
          o %= b, s = o - b + i, l = s < 0 ? 0 : c / G(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || p[d + 1] !== undefined || (s < 0 ? c : c % G(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / G(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
          return p.length = 0, u ? (t -= e.e + 1, p[0] = G(10, (b - t % b) % b), e.e = -t || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = G(10, b - o), p[d] = s > 0 ? (c / G(10, i - s) % G(10, s) | 0) * a : 0), u)
          for (;; )
            if (d == 0) {
              for (o = 1, s = p[0];s >= 10; s /= 10)
                o++;
              for (s = p[0] += a, a = 1;s >= 10; s /= 10)
                a++;
              o != a && (e.e++, p[0] == he && (p[0] = 1));
              break;
            } else {
              if (p[d] += a, p[d] != he)
                break;
              p[d--] = 0, a = 1;
            }
        for (o = p.length;p[--o] === 0; )
          p.pop();
      }
    return x && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
  }
  function Te(e, t, r) {
    if (!e.isFinite())
      return Ls(e);
    var n, i = e.e, o = K(e.d), s = o.length;
    return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + We(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + We(-i - 1) + o, r && (n = r - s) > 0 && (o += We(n))) : i >= s ? (o += We(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + We(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += We(n))), o;
  }
  function pn(e, t) {
    var r = e[0];
    for (t *= b;r >= 10; r /= 10)
      t++;
    return t;
  }
  function un(e, t, r) {
    if (t > Tc)
      throw x = true, r && (e.precision = r), Error(As);
    return y(new e(an), t, 1, true);
  }
  function ge(e, t, r) {
    if (t > Di)
      throw Error(As);
    return y(new e(ln), t, r, true);
  }
  function Ds(e) {
    var t = e.length - 1, r = t * b + 1;
    if (t = e[t], t) {
      for (;t % 10 == 0; t /= 10)
        r--;
      for (t = e[0];t >= 10; t /= 10)
        r++;
    }
    return r;
  }
  function We(e) {
    for (var t = "";e--; )
      t += "0";
    return t;
  }
  function _s(e, t, r, n) {
    var i, o = new e(1), s = Math.ceil(n / b + 4);
    for (x = false;; ) {
      if (r % 2 && (o = o.times(t), Rs(o.d, s) && (i = true)), r = ee(r / 2), r === 0) {
        r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
        break;
      }
      t = t.times(t), Rs(t.d, s);
    }
    return x = true, o;
  }
  function Ts(e) {
    return e.d[e.d.length - 1] & 1;
  }
  function Fs(e, t, r) {
    for (var n, i = new e(t[0]), o = 0;++o < t.length; )
      if (n = new e(t[o]), n.s)
        i[r](n) && (i = n);
      else {
        i = n;
        break;
      }
    return i;
  }
  function _i(e, t) {
    var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, g = d.precision;
    if (!e.d || !e.d[0] || e.e > 17)
      return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (t == null ? (x = false, l = g) : l = t, a = new d(0.03125);e.e > -2; )
      e = e.times(a), p += 5;
    for (n = Math.log(G(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l;; ) {
      if (o = y(o.times(e), l, 1), r = r.times(++c), a = s.plus(N(o, r, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
        for (i = p;i--; )
          s = y(s.times(s), l, 1);
        if (t == null)
          if (u < 3 && ur(s.d, l - n, f, u))
            d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
          else
            return y(s, d.precision = g, f, x = true);
        else
          return d.precision = g, s;
      }
      s = a;
    }
  }
  function He(e, t) {
    var r, n, i, o, s, a, l, u, c, p, d, f = 1, g = 10, h = e, O = h.d, T = h.constructor, S = T.rounding, C = T.precision;
    if (h.s < 0 || !O || !O[0] || !h.e && O[0] == 1 && O.length == 1)
      return new T(O && !O[0] ? -1 / 0 : h.s != 1 ? NaN : O ? 0 : h);
    if (t == null ? (x = false, c = C) : c = t, T.precision = c += g, r = K(O), n = r.charAt(0), Math.abs(o = h.e) < 1500000000000000) {
      for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
        h = h.times(e), r = K(h.d), n = r.charAt(0), f++;
      o = h.e, n > 1 ? (h = new T("0." + r), o++) : h = new T(n + "." + r.slice(1));
    } else
      return u = un(T, c + 2, C).times(o + ""), h = He(new T(n + "." + r.slice(1)), c - g).plus(u), T.precision = C, t == null ? y(h, C, S, x = true) : h;
    for (p = h, l = s = h = N(h.minus(1), h.plus(1), c, 1), d = y(h.times(h), c, 1), i = 3;; ) {
      if (s = y(s.times(d), c, 1), u = l.plus(N(s, new T(i), c, 1)), K(u.d).slice(0, c) === K(l.d).slice(0, c))
        if (l = l.times(2), o !== 0 && (l = l.plus(un(T, c + 2, C).times(o + ""))), l = N(l, new T(f), c, 1), t == null)
          if (ur(l.d, c - g, S, a))
            T.precision = c += g, u = s = h = N(p.minus(1), p.plus(1), c, 1), d = y(h.times(h), c, 1), i = a = 1;
          else
            return y(l, T.precision = C, S, x = true);
        else
          return T.precision = C, l;
      l = u, i += 2;
    }
  }
  function Ls(e) {
    return String(e.s * e.s / 0);
  }
  function Fi(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0;t.charCodeAt(n) === 48; n++)
      ;
    for (i = t.length;t.charCodeAt(i - 1) === 48; --i)
      ;
    if (t = t.slice(n, i), t) {
      if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
        for (n && e.d.push(+t.slice(0, n)), i -= b;n < i; )
          e.d.push(+t.slice(n, n += b));
        t = t.slice(n), n = b - t.length;
      } else
        n -= i;
      for (;n--; )
        t += "0";
      e.d.push(+t), x && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
    } else
      e.e = 0, e.d = [0];
    return e;
  }
  function Cc(e, t) {
    var r, n, i, o, s, a, l, u, c;
    if (t.indexOf("_") > -1) {
      if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ks.test(t))
        return Fi(e, t);
    } else if (t === "Infinity" || t === "NaN")
      return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (xc.test(t))
      r = 16, t = t.toLowerCase();
    else if (wc.test(t))
      r = 2;
    else if (Pc.test(t))
      r = 8;
    else
      throw Error(Ke + t);
    for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = _s(n, new n(r), o, o * 2)), u = sn(t, r, he), c = u.length - 1, o = c;u[o] === 0; --o)
      u.pop();
    return o < 0 ? new n(e.s * 0) : (e.e = pn(u, c), e.d = u, x = false, s && (e = N(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : ot.pow(2, l))), x = true, e);
  }
  function Sc(e, t) {
    var r, n = t.d.length;
    if (n < 3)
      return t.isZero() ? t : Tt(e, 2, t, t);
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / dn(5, r)), t = Tt(e, 2, t, t);
    for (var i, o = new e(5), s = new e(16), a = new e(20);r--; )
      i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
    return t;
  }
  function Tt(e, t, r, n, i) {
    var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b);
    for (x = false, l = r.times(r), a = new e(n);; ) {
      if (s = N(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = N(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== undefined) {
        for (o = p;s.d[o] === a.d[o] && o--; )
          ;
        if (o == -1)
          break;
      }
      o = a, a = n, n = s, s = o, u++;
    }
    return x = true, s.d.length = p + 1, s;
  }
  function dn(e, t) {
    for (var r = e;--t; )
      r *= e;
    return r;
  }
  function Ns(e, t) {
    var r, n = t.s < 0, i = ge(e, e.precision, 1), o = i.times(0.5);
    if (t = t.abs(), t.lte(o))
      return Me = n ? 4 : 1, t;
    if (r = t.divToInt(i), r.isZero())
      Me = n ? 3 : 2;
    else {
      if (t = t.minus(r.times(i)), t.lte(o))
        return Me = Ts(r) ? n ? 2 : 3 : n ? 4 : 1, t;
      Me = Ts(r) ? n ? 1 : 4 : n ? 3 : 2;
    }
    return t.minus(i).abs();
  }
  function Li(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor, g = r !== undefined;
    if (g ? (oe(r, 1, ze), n === undefined ? n = f.rounding : oe(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
      c = Ls(e);
    else {
      for (c = Te(e), s = c.indexOf("."), g ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = sn(Te(d), 10, i), d.e = d.d.length), p = sn(c, 10, i), o = l = p.length;p[--l] == 0; )
        p.pop();
      if (!p[0])
        c = g ? "0p+0" : "0";
      else {
        if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = N(e, d, r, n, 0, i), p = e.d, o = e.e, u = Ss), s = p[r], a = i / 2, u = u || p[r + 1] !== undefined, u = n < 4 ? (s !== undefined || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
          for (;++p[--r] > i - 1; )
            p[r] = 0, r || (++o, p.unshift(1));
        for (l = p.length;!p[l - 1]; --l)
          ;
        for (s = 0, c = "";s < l; s++)
          c += Oi.charAt(p[s]);
        if (g) {
          if (l > 1)
            if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l;l % s; l++)
                c += "0";
              for (p = sn(c, i, t), l = p.length;!p[l - 1]; --l)
                ;
              for (s = 1, c = "1.";s < l; s++)
                c += Oi.charAt(p[s]);
            } else
              c = c.charAt(0) + "." + c.slice(1);
          c = c + (o < 0 ? "p" : "p+") + o;
        } else if (o < 0) {
          for (;++o; )
            c = "0" + c;
          c = "0." + c;
        } else if (++o > l)
          for (o -= l;o--; )
            c += "0";
        else
          o < l && (c = c.slice(0, o) + "." + c.slice(o));
      }
      c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
  }
  function Rs(e, t) {
    if (e.length > t)
      return e.length = t, true;
  }
  function Ac(e) {
    return new this(e).abs();
  }
  function Ic(e) {
    return new this(e).acos();
  }
  function Oc(e) {
    return new this(e).acosh();
  }
  function kc(e, t) {
    return new this(e).plus(t);
  }
  function Dc(e) {
    return new this(e).asin();
  }
  function _c(e) {
    return new this(e).asinh();
  }
  function Fc(e) {
    return new this(e).atan();
  }
  function Lc(e) {
    return new this(e).atanh();
  }
  function Nc(e, t) {
    e = new this(e), t = new this(t);
    var r, n = this.precision, i = this.rounding, o = n + 4;
    return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ge(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ge(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ge(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(N(e, t, o, 1)), t = ge(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(N(e, t, o, 1)), r;
  }
  function Mc(e) {
    return new this(e).cbrt();
  }
  function $c(e) {
    return y(e = new this(e), e.e + 1, 2);
  }
  function qc(e, t, r) {
    return new this(e).clamp(t, r);
  }
  function jc(e) {
    if (!e || typeof e != "object")
      throw Error(cn + "Object expected");
    var t, r, n, i = e.defaults === true, o = ["precision", 1, ze, "rounding", 0, 8, "toExpNeg", -vt, 0, "toExpPos", 0, vt, "maxE", 0, vt, "minE", -vt, 0, "modulo", 0, 9];
    for (t = 0;t < o.length; t += 3)
      if (r = o[t], i && (this[r] = ki[r]), (n = e[r]) !== undefined)
        if (ee(n) === n && n >= o[t + 1] && n <= o[t + 2])
          this[r] = n;
        else
          throw Error(Ke + r + ": " + n);
    if (r = "crypto", i && (this[r] = ki[r]), (n = e[r]) !== undefined)
      if (n === true || n === false || n === 0 || n === 1)
        if (n)
          if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
            this[r] = true;
          else
            throw Error(Is);
        else
          this[r] = false;
      else
        throw Error(Ke + r + ": " + n);
    return this;
  }
  function Vc(e) {
    return new this(e).cos();
  }
  function Bc(e) {
    return new this(e).cosh();
  }
  function Ms(e) {
    var t, r, n;
    function i(o) {
      var s, a, l, u = this;
      if (!(u instanceof i))
        return new i(o);
      if (u.constructor = i, Cs(o)) {
        u.s = o.s, x ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
        return;
      }
      if (l = typeof o, l === "number") {
        if (o === 0) {
          u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
          return;
        }
        if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
          for (s = 0, a = o;a >= 10; a /= 10)
            s++;
          x ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
          return;
        } else if (o * 0 !== 0) {
          o || (u.s = NaN), u.e = NaN, u.d = null;
          return;
        }
        return Fi(u, o.toString());
      } else if (l !== "string")
        throw Error(Ke + o);
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), ks.test(o) ? Fi(u, o) : Cc(u, o);
    }
    if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = jc, i.clone = Ms, i.isDecimal = Cs, i.abs = Ac, i.acos = Ic, i.acosh = Oc, i.add = kc, i.asin = Dc, i.asinh = _c, i.atan = Fc, i.atanh = Lc, i.atan2 = Nc, i.cbrt = Mc, i.ceil = $c, i.clamp = qc, i.cos = Vc, i.cosh = Bc, i.div = Uc, i.exp = Gc, i.floor = Qc, i.hypot = Jc, i.ln = Wc, i.log = Hc, i.log10 = zc, i.log2 = Kc, i.max = Yc, i.min = Zc, i.mod = Xc, i.mul = ep, i.pow = tp, i.random = rp, i.round = np, i.sign = ip, i.sin = op, i.sinh = sp, i.sqrt = ap, i.sub = lp, i.sum = up, i.tan = cp, i.tanh = pp, i.trunc = dp, e === undefined && (e = {}), e && e.defaults !== true)
      for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0;t < n.length; )
        e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i;
  }
  function Uc(e, t) {
    return new this(e).div(t);
  }
  function Gc(e) {
    return new this(e).exp();
  }
  function Qc(e) {
    return y(e = new this(e), e.e + 1, 3);
  }
  function Jc() {
    var e, t, r = new this(0);
    for (x = false, e = 0;e < arguments.length; )
      if (t = new this(arguments[e++]), t.d)
        r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s)
          return x = true, new this(1 / 0);
        r = t;
      }
    return x = true, r.sqrt();
  }
  function Cs(e) {
    return e instanceof ot || e && e.toStringTag === Os || false;
  }
  function Wc(e) {
    return new this(e).ln();
  }
  function Hc(e, t) {
    return new this(e).log(t);
  }
  function Kc(e) {
    return new this(e).log(2);
  }
  function zc(e) {
    return new this(e).log(10);
  }
  function Yc() {
    return Fs(this, arguments, "lt");
  }
  function Zc() {
    return Fs(this, arguments, "gt");
  }
  function Xc(e, t) {
    return new this(e).mod(t);
  }
  function ep(e, t) {
    return new this(e).mul(t);
  }
  function tp(e, t) {
    return new this(e).pow(t);
  }
  function rp(e) {
    var t, r, n, i, o = 0, s = new this(1), a = [];
    if (e === undefined ? e = this.precision : oe(e, 1, ze), n = Math.ceil(e / b), this.crypto)
      if (crypto.getRandomValues)
        for (t = crypto.getRandomValues(new Uint32Array(n));o < n; )
          i = t[o], i >= 4290000000 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4);o < n; )
          i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 2140000000 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else
        throw Error(Is);
    else
      for (;o < n; )
        a[o++] = Math.random() * 1e7 | 0;
    for (n = a[--o], e %= b, n && e && (i = G(10, b - e), a[o] = (n / i | 0) * i);a[o] === 0; o--)
      a.pop();
    if (o < 0)
      r = 0, a = [0];
    else {
      for (r = -1;a[0] === 0; r -= b)
        a.shift();
      for (n = 1, i = a[0];i >= 10; i /= 10)
        n++;
      n < b && (r -= b - n);
    }
    return s.e = r, s.d = a, s;
  }
  function np(e) {
    return y(e = new this(e), e.e + 1, this.rounding);
  }
  function ip(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
  }
  function op(e) {
    return new this(e).sin();
  }
  function sp(e) {
    return new this(e).sinh();
  }
  function ap(e) {
    return new this(e).sqrt();
  }
  function lp(e, t) {
    return new this(e).sub(t);
  }
  function up() {
    var e = 0, t = arguments, r = new this(t[e]);
    for (x = false;r.s && ++e < t.length; )
      r = r.plus(t[e]);
    return x = true, y(r, this.precision, this.rounding);
  }
  function cp(e) {
    return new this(e).tan();
  }
  function pp(e) {
    return new this(e).tanh();
  }
  function dp(e) {
    return y(e = new this(e), e.e + 1, 1);
  }
  function Rt(e) {
    return ot.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
  }
  function Ct(e) {
    return e instanceof cr;
  }
  function Ot(e) {
    return new Ni(js(e));
  }
  function js(e) {
    let t = new It;
    for (let [r, n] of Object.entries(e)) {
      let i = new hn(r, Vs(n));
      t.addField(i);
    }
    return t;
  }
  function Vs(e) {
    if (typeof e == "string")
      return new W(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean")
      return new W(String(e));
    if (typeof e == "bigint")
      return new W(`${e}n`);
    if (e === null)
      return new W("null");
    if (e === undefined)
      return new W("undefined");
    if (Rt(e))
      return new W(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array)
      return Buffer.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
      let t = on(e) ? e.toISOString() : "Invalid Date";
      return new W(`new Date("${t}")`);
    }
    return e instanceof Ne ? new W(`Prisma.${e._getName()}`) : Ct(e) ? new W(`prisma.${vs(e.modelName)}.\$fields.${e.name}`) : Array.isArray(e) ? fp(e) : typeof e == "object" ? js(e) : new W(Object.prototype.toString.call(e));
  }
  function fp(e) {
    let t = new At;
    for (let r of e)
      t.addItem(Vs(r));
    return t;
  }
  function yn(e, t) {
    let r = t === "pretty" ? $s : gn, n = e.renderAllMessages(r), i = new xt(0, { colors: r }).write(e).toString();
    return { message: n, args: i };
  }
  function Bs(e) {
    if (e === undefined)
      return "";
    let t = Ot(e);
    return new xt(0, { colors: gn }).write(t).toString();
  }
  function st({ error: e, user_facing_error: t }, r, n) {
    return t.error_code ? new V(hp(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new B(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
  }
  function hp(e, t) {
    let r = e.message;
    return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === gp && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
  }
  function Us(e) {
    var t = e.split(`
`);
    return t.reduce(function(r, n) {
      var i = Ep(n) || xp(n) || Tp(n) || Ap(n) || Cp(n);
      return i && r.push(i), r;
    }, []);
  }
  function Ep(e) {
    var t = yp.exec(e);
    if (!t)
      return null;
    var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = bp.exec(t[2]);
    return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || pr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
  }
  function xp(e) {
    var t = wp.exec(e);
    return t ? { file: t[2], methodName: t[1] || pr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  }
  function Tp(e) {
    var t = Pp.exec(e);
    if (!t)
      return null;
    var r = t[3] && t[3].indexOf(" > eval") > -1, n = vp.exec(t[3]);
    return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || pr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
  }
  function Cp(e) {
    var t = Rp.exec(e);
    return t ? { file: t[3], methodName: t[1] || pr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
  }
  function Ap(e) {
    var t = Sp.exec(e);
    return t ? { file: t[2], methodName: t[1] || pr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  }
  function Ze(e) {
    return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite : new Mi : new $i;
  }
  function kt(e = {}) {
    let t = Op(e);
    return Object.entries(t).reduce((n, [i, o]) => (Gs[i] !== undefined ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
  }
  function Op(e = {}) {
    return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
  }
  function bn(e = {}) {
    return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
  }
  function Qs(e, t) {
    let r = bn(e);
    return t({ action: "aggregate", unpacker: r, argsMapper: kt })(e);
  }
  function kp(e = {}) {
    let { select: t, ...r } = e;
    return typeof t == "object" ? kt({ ...r, _count: t }) : kt({ ...r, _count: { _all: true } });
  }
  function Dp(e = {}) {
    return typeof e.select == "object" ? (t) => bn(e)(t)._count : (t) => bn(e)(t)._count._all;
  }
  function Js(e, t) {
    return t({ action: "count", unpacker: Dp(e), argsMapper: kp })(e);
  }
  function _p(e = {}) {
    let t = kt(e);
    if (Array.isArray(t.by))
      for (let r of t.by)
        typeof r == "string" && (t.select[r] = true);
    else
      typeof t.by == "string" && (t.select[t.by] = true);
    return t;
  }
  function Fp(e = {}) {
    return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
      r._count = r._count._all;
    }), t);
  }
  function Ws(e, t) {
    return t({ action: "groupBy", unpacker: Fp(e), argsMapper: _p })(e);
  }
  function Hs(e, t, r) {
    if (t === "aggregate")
      return (n) => Qs(n, r);
    if (t === "count")
      return (n) => Js(n, r);
    if (t === "groupBy")
      return (n) => Ws(n, r);
  }
  function Ks(e, t) {
    let r = t.fields.filter((i) => !i.relationName), n = Ei(r, (i) => i.name);
    return new Proxy({}, { get(i, o) {
      if (o in i || typeof o == "symbol")
        return i[o];
      let s = n[o];
      if (s)
        return new cr(e, o, s.type, s.isList, s.kind === "enum");
    }, ...nn(Object.keys(n)) });
  }
  function Lp(e, t) {
    return e === undefined || t === undefined ? [] : [...t, "select", e];
  }
  function Np(e, t, r) {
    return t === undefined ? e ?? {} : Ys(t, r, e || true);
  }
  function ji(e, t, r, n, i, o) {
    let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
    return (l) => {
      let u = Ze(e._errorFormat), c = Lp(n, i), p = Np(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = Mp(e, t);
      return new Proxy(d, { get(g, h) {
        if (!f.includes(h))
          return g[h];
        let T = [a[h].type, r, h], S = [c, p];
        return ji(e, ...T, ...S);
      }, ...nn([...f, ...Object.getOwnPropertyNames(d)]) });
    };
  }
  function Mp(e, t) {
    return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
  }
  function ye(e, t, r, n, i) {
    this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
  }
  function jp(e) {
    return Zs[e] || $p;
  }
  function Xs(e) {
    return Vp(e, P.languages.javascript);
  }
  function Vp(e, t) {
    return P.tokenize(e, t).map((n) => ye.stringify(n)).join("");
  }
  function ta(e) {
    return (0, ea.default)(e);
  }
  function Gp({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
    return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
  }
  function Qp({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
    let s = Gp({ message: t, originalMethod: r, isPanic: n, callArguments: i });
    if (!e || typeof window < "u" || false)
      return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber)
      return s;
    let l = Math.max(1, a.lineNumber - 3), u = wn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
    if (u && c) {
      let p = Wp(c), d = Jp(c);
      if (!d)
        return s;
      s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
      let f = String(u.lastLineNumber).length;
      if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
        let g = p + f + 1;
        g += 2, s.callArguments = (0, na.default)(i, g).slice(g);
      }
    }
    return s;
  }
  function Jp(e) {
    let t = Object.keys(Je.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
    if (n) {
      let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
      return { code: e.slice(o, i), openingBraceIndex: i };
    }
    return null;
  }
  function Wp(e) {
    let t = 0;
    for (let r = 0;r < e.length; r++) {
      if (e.charAt(r) !== " ")
        return t;
      t++;
    }
    return t;
  }
  function Hp({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [""], l = t ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Kp(t))), i) {
      a.push("");
      let u = [i.toString()];
      o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    } else
      a.push(""), o && a.push(o), a.push("");
    return a.push(r), a.join(`
`);
  }
  function Kp(e) {
    let t = [e.fileName];
    return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
  }
  function Dt(e) {
    let t = e.showColors ? Bp : Up, r;
    return r = Qp(e, t), Hp(r, t);
  }
  function ia(e, t, r, n) {
    return e === Je.ModelAction.findFirstOrThrow || e === Je.ModelAction.findUniqueOrThrow ? zp(t, r, n) : n;
  }
  function zp(e, t, r) {
    return async (n) => {
      if ("rejectOnNotFound" in n.args) {
        let o = Dt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
        throw new J(o, { clientVersion: t });
      }
      return await r(n).catch((o) => {
        throw o instanceof V && o.code === "P2025" ? new Le(`No ${e} found`, t) : o;
      });
    };
  }
  function Se(e) {
    return e.replace(/^./, (t) => t.toLowerCase());
  }
  function Vi(e, t) {
    let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Xp(e, t), td(e, t), lr(r), re("name", () => t), re("$name", () => t), re("$parent", () => e._appliedParent)];
    return ve({}, n);
  }
  function Xp(e, t) {
    let r = Se(t), n = Object.keys(Je.ModelAction).concat("count");
    return { getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = i, s = (l) => e._request(l);
      s = ia(o, t, e._clientVersion, s);
      let a = (l) => (u) => {
        let c = Ze(e._errorFormat);
        return e._createPrismaPromise((p) => {
          let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
          return s({ ...d, ...l });
        });
      };
      return Yp.includes(o) ? ji(e, t, a) : ed(i) ? Hs(e, i, a) : a({});
    } };
  }
  function ed(e) {
    return Zp.includes(e);
  }
  function td(e, t) {
    return it(re("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return Ks(t, r);
    }));
  }
  function oa(e) {
    return e.replace(/^./, (t) => t.toUpperCase());
  }
  function dr(e) {
    let t = [rd(e), re(Bi, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
    return r && t.push(lr(r)), ve(e, t);
  }
  function rd(e) {
    let t = Object.keys(e._runtimeDataModel.models), r = t.map(Se), n = [...new Set(t.concat(r))];
    return it({ getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = oa(i);
      if (e._runtimeDataModel.models[o] !== undefined)
        return Vi(e, o);
      if (e._runtimeDataModel.models[i] !== undefined)
        return Vi(e, i);
    }, getPropertyDescriptor(i) {
      if (!r.includes(i))
        return { enumerable: false };
    } });
  }
  function sa(e) {
    return e[Bi] ? e[Bi] : e;
  }
  function aa(e) {
    if (typeof e == "function")
      return e(this);
    if (e.client?.__AccelerateEngine) {
      let r = e.client.__AccelerateEngine;
      this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
    }
    let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: undefined }, $on: { value: undefined } });
    return dr(t);
  }
  function la({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
    let o = i.getAllComputedFields(t);
    if (!o)
      return e;
    let s = [], a = [];
    for (let l of Object.values(o)) {
      if (n) {
        if (n[l.name])
          continue;
        let u = l.needs.filter((c) => n[c]);
        u.length > 0 && a.push(Et(u));
      } else if (r) {
        if (!r[l.name])
          continue;
        let u = l.needs.filter((c) => !r[c]);
        u.length > 0 && a.push(Et(u));
      }
      nd(e, l.needs) && s.push(id(l, ve(e, s)));
    }
    return s.length > 0 || a.length > 0 ? ve(e, [...s, ...a]) : e;
  }
  function nd(e, t) {
    return t.every((r) => bi(e, r));
  }
  function id(e, t) {
    return it(re(e.name, () => e.compute(t)));
  }
  function xn({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
    if (Array.isArray(t)) {
      for (let s = 0;s < t.length; s++)
        t[s] = xn({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
      return t;
    }
    let o = e(t, i, r) ?? t;
    return r.include && ua({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ua({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
  }
  function ua({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
    for (let [o, s] of Object.entries(e)) {
      if (!s || t[o] == null || xe(s))
        continue;
      let l = n.models[r].fields.find((c) => c.name === o);
      if (!l || l.kind !== "object" || !l.relationName)
        continue;
      let u = typeof s == "object" ? s : {};
      t[o] = xn({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
    }
  }
  function ca({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : xn({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
      let c = Se(l);
      return la({ result: a, modelName: c, select: u.select, omit: u.select ? undefined : { ...o?.[c], ...u.omit }, extensions: n });
    } });
  }
  function pa(e) {
    if (e instanceof ie)
      return od(e);
    if (Array.isArray(e)) {
      let r = [e[0]];
      for (let n = 1;n < e.length; n++)
        r[n] = mr(e[n]);
      return r;
    }
    let t = {};
    for (let r in e)
      t[r] = mr(e[r]);
    return t;
  }
  function od(e) {
    return new ie(e.strings, e.values);
  }
  function mr(e) {
    if (typeof e != "object" || e == null || e instanceof Ne || Ct(e))
      return e;
    if (Rt(e))
      return new Re(e.toFixed());
    if (Pt(e))
      return new Date(+e);
    if (ArrayBuffer.isView(e))
      return e.slice(0);
    if (Array.isArray(e)) {
      let t = e.length, r;
      for (r = Array(t);t--; )
        r[t] = mr(e[t]);
      return r;
    }
    if (typeof e == "object") {
      let t = {};
      for (let r in e)
        r === "__proto__" ? Object.defineProperty(t, r, { value: mr(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = mr(e[r]);
      return t;
    }
    Fe(e, "Unknown value");
  }
  function ma(e, t, r, n = 0) {
    return e._createPrismaPromise((i) => {
      let o = t.customDataProxyFetch;
      return "transaction" in t && i !== undefined && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: pa(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = ya(o, l), a.args = s, ma(e, a, r, n + 1);
      } });
    });
  }
  function fa(e, t) {
    let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
    if (e._extensions.isEmpty())
      return e._executeRequest(t);
    let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
    return ma(e, t, s);
  }
  function ga(e) {
    return (t) => {
      let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
      return n.length ? ha(r, n, 0, e) : e(r);
    };
  }
  function ha(e, t, r, n) {
    if (r === t.length)
      return n(e);
    let i = e.customDataProxyFetch, o = e.requests[0].transaction;
    return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : undefined } : undefined }, __internalParams: e, query(s, a = e) {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = ya(i, l), ha(a, t, r + 1, n);
    } });
  }
  function ya(e = da, t = da) {
    return (r) => e(t(r));
  }
  function Ea(e, t, r) {
    let n = Se(r);
    return !t.result || !(t.result.$allModels || t.result[n]) ? e : sd({ ...e, ...ba(t.name, e, t.result.$allModels), ...ba(t.name, e, t.result[n]) });
  }
  function sd(e) {
    let t = new Pe, r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
    return yt(e, (n) => ({ ...n, needs: r(n.name, new Set) }));
  }
  function ba(e, t, r) {
    return r ? yt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: ad(t, o, i) })) : {};
  }
  function ad(e, t, r) {
    let n = e?.[t]?.compute;
    return n ? (i) => r({ ...i, [t]: n(i) }) : r;
  }
  function wa(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (e[n.name])
        for (let i of n.needs)
          r[i] = true;
    return r;
  }
  function xa(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (!e[n.name])
        for (let i of n.needs)
          delete r[i];
    return r;
  }
  function Ta({ postinstall: e, ciName: t, clientVersion: r }) {
    if (Pa("checkPlatformCaching:postinstall", e), Pa("checkPlatformCaching:ciName", t), e === true && t && t in va) {
      let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${va[t]}-build`;
      throw console.error(n), new R(n, r);
    }
  }
  function Ra(e, t) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
  }
  function Ca() {
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === ld ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === ud ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
  }
  function Tn() {
    let e = Ca();
    return { id: e, prettyName: cd[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
  }
  function Rn(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${pd(e)}`;
  }
  function pd(e) {
    let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
    return gi({ ...t, binaryTargets: o });
  }
  function Xe(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
  }
  function et(e) {
    let { searchedLocations: t } = e;
    return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
  }
  function Sa(e) {
    let { runtimeBinaryTarget: t } = e;
    return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${Rn(e)}

${et(e)}`;
  }
  function Cn(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
  }
  function Sn(e) {
    let { errorStack: t } = e;
    return t?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
  }
  function Aa(e) {
    let { queryEngineName: t } = e;
    return `${Xe(e)}${Sn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${Cn("engine-not-found-bundler-investigation")}

${et(e)}`;
  }
  function Ia(e) {
    let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
    return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${Rn(e)}

${et(e)}`;
  }
  function Oa(e) {
    let { queryEngineName: t } = e;
    return `${Xe(e)}${Sn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${Cn("engine-not-found-tooling-investigation")}

${et(e)}`;
  }
  async function Da(e, t) {
    let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
    if (r !== undefined)
      return r;
    let { enginePath: n, searchedLocations: i } = await fd(e, t);
    if (dd("enginePath", n), n !== undefined && e === "binary" && ai(n), n !== undefined)
      return t.prismaPath = n;
    let o = await nt(), s = t.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(md()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: _a(e, o), expectedLocation: fr.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
    throw a && l ? p = Ia(c) : l ? p = Sa(c) : u ? p = Aa(c) : p = Oa(c), new R(p, t.clientVersion);
  }
  async function fd(engineType, config) {
    let binaryTarget = await nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, fr.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, fr.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
    __filename.includes("resolveEnginePath") && searchLocations.push(Ko());
    for (let e of searchLocations) {
      let t = _a(engineType, binaryTarget), r = fr.default.join(e, t);
      if (searchedLocations.push(e), ka.default.existsSync(r))
        return { enginePath: r, searchedLocations };
    }
    return { enginePath: undefined, searchedLocations };
  }
  function _a(e, t) {
    return e === "library" ? $r(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
  }
  function Fa(e) {
    return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
  }
  function La(e) {
    return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
  }
  function Ma({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
    return (0, Na.default)({ user: t, repo: r, template: n, title: e, body: i });
  }
  function $a({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
    let a = Ro(6000 - (s?.length ?? 0)), l = La((0, Ui.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Ui.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Fa(s) : ""}
\`\`\`
`), p = Ma({ title: r, body: c });
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \uD83D\uDE4F
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
  }
  function _t({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
    let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
    if (o === undefined ? i = undefined : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== undefined && i === undefined)
      throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === undefined)
      throw new R("error: Missing URL environment variable, value, or override.", n);
    return i;
  }
  function A(e, t) {
    return { ...e, isRetryable: t };
  }
  async function yd(e) {
    let t;
    try {
      t = await e.text();
    } catch {
      return { type: "EmptyError" };
    }
    try {
      let r = JSON.parse(t);
      if (typeof r == "string")
        switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
      if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
          return { type: "QueryEngineError", body: r };
        if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
          let n = Object.values(r)[0].reason;
          return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
        }
      }
      return { type: "UnknownJsonError", body: r };
    } catch {
      return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
    }
  }
  async function Rr(e, t) {
    if (e.ok)
      return;
    let r = { clientVersion: t, response: e }, n = await yd(e);
    if (n.type === "QueryEngineError")
      throw new V(n.body.message, { code: n.body.error_code, clientVersion: t });
    if (n.type === "DataProxyError") {
      if (n.body === "InternalDataProxyError")
        throw new Lt(r, "Internal Data Proxy error");
      if ("EngineNotStarted" in n.body) {
        if (n.body.EngineNotStarted.reason === "SchemaMissing")
          return new ut(r);
        if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
          throw new br(r);
        if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
          throw new yr(r, i, o);
        }
        if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
          throw new R(i, t, o);
        }
        if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
          let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
          throw new hr(r, i);
        }
      }
      if ("InteractiveTransactionMisrouted" in n.body) {
        let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
        throw new wr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
      }
      if ("InvalidRequestError" in n.body)
        throw new xr(r, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403)
      throw new vr(r, Nt(Hi, n));
    if (e.status === 404)
      return new Pr(r, Nt(Ji, n));
    if (e.status === 429)
      throw new Tr(r, Nt(Ki, n));
    if (e.status === 504)
      throw new Er(r, Nt(Qi, n));
    if (e.status >= 500)
      throw new Lt(r, Nt(Wi, n));
    if (e.status >= 400)
      throw new gr(r, Nt(Gi, n));
  }
  function Nt(e, t) {
    return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
  }
  function qa(e) {
    let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
    return new Promise((i) => setTimeout(() => i(n), n));
  }
  function ja(e) {
    let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
    for (let p = 0;p < o; p = p + 3)
      c = t[p] << 16 | t[p + 1] << 8 | t[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, r += $e[s] + $e[a] + $e[l] + $e[u];
    return i == 1 ? (c = t[o], s = (c & 252) >> 2, a = (c & 3) << 4, r += $e[s] + $e[a] + "==") : i == 2 && (c = t[o] << 8 | t[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, r += $e[s] + $e[a] + $e[l] + "="), r;
  }
  function Va(e) {
    if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
      throw new R("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
  }
  function bd(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  function Ba(e) {
    return new Date(bd(e));
  }
  async function ct(e, t, r = (n) => n) {
    let n = t.clientVersion;
    try {
      return typeof fetch == "function" ? await r(fetch)(e, t) : await r(zi)(e, t);
    } catch (i) {
      let o = i.message ?? "Unknown error";
      throw new Cr(o, { clientVersion: n });
    }
  }
  function wd(e) {
    return { ...e.headers, "Content-Type": "application/json" };
  }
  function xd(e) {
    return { method: e.method, headers: wd(e) };
  }
  function Pd(e, t) {
    return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new Yi(t.headers) };
  }
  async function zi(e, t = {}) {
    let r = vd("https"), n = xd(t), i = [], { origin: o } = new URL(e);
    return new Promise((s, a) => {
      let l = r.request(e, n, (u) => {
        let { statusCode: c, headers: { location: p } } = u;
        c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(zi(`${o}${p}`, t)) : s(zi(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(Pd(i, u))), u.on("error", a);
      });
      l.on("error", a), l.end(t.body ?? "");
    });
  }
  async function Rd(e, t) {
    let r = Ua["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
      return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
      return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === undefined && Td.test(i))
      return i;
    if (o !== undefined || n === "0.0.0" || n === "in-memory") {
      if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
      let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = Cd(`<=${a}.${l}.${u}`), p = await ct(c, { clientVersion: n });
      if (!p.ok)
        throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
      let d = await p.text();
      Ga("length of body fetched from unpkg.com", d.length);
      let f;
      try {
        f = JSON.parse(d);
      } catch (g) {
        throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), g;
      }
      return f.version;
    }
    throw new lt("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
  }
  async function Qa(e, t) {
    let r = await Rd(e, t);
    return Ga("version", r), r;
  }
  function Cd(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
  }
  function Wa(e) {
    if (e?.kind === "itx")
      return e.options.id;
  }
  function Sd() {
    let e = globalThis;
    return e[eo] === undefined && (e[eo] = {}), e[eo];
  }
  function Ad(e) {
    let t = Sd();
    if (t[e] !== undefined)
      return t[e];
    let r = Ha.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
    return process.platform !== "win32" && (i = to.default.constants.dlopen.RTLD_LAZY | to.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
  }
  function Od(e) {
    return e.item_type === "query" && "query" in e;
  }
  function kd(e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
  }
  function Dd(e) {
    return typeof e == "object" && e !== null && e.error_code !== undefined;
  }
  function no(e, t) {
    return $a({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
  }
  function Za({ copyEngine: e = true }, t) {
    let r;
    try {
      r = _t({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
    } catch {
    }
    e && r?.startsWith("prisma://") && Xt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
    let n = Kt(t.generator), i = !!(r?.startsWith("prisma://") || !e), o = !!t.adapter, s = n === "library", a = n === "binary";
    if (i && o || o && false) {
      let l;
      throw e ? r?.startsWith("prisma://") ? l = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : l = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : l = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new J(l.join(`
`), { clientVersion: t.clientVersion });
    }
    if (i)
      return new Sr(t);
    if (s)
      return new Ar(t);
    throw new J("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
  }
  function In({ generator: e }) {
    return e?.previewFeatures ?? [];
  }
  function Mt(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  function rl(e, t, r) {
    let n = nl(e), i = _d(n), o = Ld(i);
    o ? On(o, t, r) : t.addErrorMessage(() => "Unknown error");
  }
  function nl(e) {
    return e.errors.flatMap((t) => t.kind === "Union" ? nl(t) : [t]);
  }
  function _d(e) {
    let t = new Map, r = [];
    for (let n of e) {
      if (n.kind !== "InvalidArgumentType") {
        r.push(n);
        continue;
      }
      let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
      o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Fd(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
    }
    return r.push(...t.values()), r;
  }
  function Fd(e, t) {
    return [...new Set(e.concat(t))];
  }
  function Ld(e) {
    return wi(e, (t, r) => {
      let n = el(t), i = el(r);
      return n !== i ? n - i : tl(t) - tl(r);
    });
  }
  function el(e) {
    let t = 0;
    return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
  }
  function tl(e) {
    switch (e.kind) {
      case "InvalidArgumentValue":
      case "ValueTooLarge":
        return 20;
      case "InvalidArgumentType":
        return 10;
      case "RequiredArgumentMissing":
        return -10;
      default:
        return 0;
    }
  }
  function On(e, t, r) {
    switch (e.kind) {
      case "MutuallyExclusiveFields":
        Nd(e, t);
        break;
      case "IncludeOnScalar":
        Md(e, t);
        break;
      case "EmptySelection":
        $d(e, t, r);
        break;
      case "UnknownSelectionField":
        Bd(e, t);
        break;
      case "InvalidSelectionValue":
        Ud(e, t);
        break;
      case "UnknownArgument":
        Gd(e, t);
        break;
      case "UnknownInputField":
        Qd(e, t);
        break;
      case "RequiredArgumentMissing":
        Jd(e, t);
        break;
      case "InvalidArgumentType":
        Wd(e, t);
        break;
      case "InvalidArgumentValue":
        Hd(e, t);
        break;
      case "ValueTooLarge":
        Kd(e, t);
        break;
      case "SomeFieldsMissing":
        zd(e, t);
        break;
      case "TooManyFieldsGiven":
        Yd(e, t);
        break;
      case "Union":
        rl(e, t, r);
        break;
      default:
        throw new Error("not implemented: " + e.kind);
    }
  }
  function Nd(e, t) {
    let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
  }
  function Md(e, t) {
    let [r, n] = Or(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
    if (o && (o.getField(n)?.markAsError(), i))
      for (let s of i.fields)
        s.isRelation && o.addSuggestion(new ue(s.name, "true"));
    t.addErrorMessage((s) => {
      let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
      return i ? a += ` on model ${s.bold(i.name)}. ${kr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
  }
  function $d(e, t, r) {
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getField("omit")?.value.asObject();
      if (i) {
        qd(e, t, i);
        return;
      }
      if (n.hasField("select")) {
        jd(e, t);
        return;
      }
    }
    if (r?.[Mt(e.outputType.name)]) {
      Vd(e, t);
      return;
    }
    t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
  }
  function qd(e, t, r) {
    r.removeAllFields();
    for (let n of e.outputType.fields)
      r.addSuggestion(new ue(n.name, "false"));
    t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function jd(e, t) {
    let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
    n && (n.removeAllFields(), al(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${kr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
  }
  function Vd(e, t) {
    let r = new Ir;
    for (let i of e.outputType.fields)
      i.isRelation || r.addField(i.name, "false");
    let n = new ue("omit", r).makeRequired();
    if (e.selectionPath.length === 0)
      t.arguments.addSuggestion(n);
    else {
      let [i, o] = Or(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
      if (a) {
        let l = a?.value.asObject() ?? new It;
        l.addSuggestion(n), a.value = l;
      }
    }
    t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function Bd(e, t) {
    let r = ll(e.selectionPath, t);
    if (r.parentKind !== "unknown") {
      r.field.markAsError();
      let n = r.parent;
      switch (r.parentKind) {
        case "select":
          al(n, e.outputType);
          break;
        case "include":
          Zd(n, e.outputType);
          break;
        case "omit":
          Xd(n, e.outputType);
          break;
      }
    }
    t.addErrorMessage((n) => {
      let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
      return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(kr(n)), i.join(" ");
    });
  }
  function Ud(e, t) {
    let r = ll(e.selectionPath, t);
    r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
  }
  function Gd(e, t) {
    let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && (n.getField(r)?.markAsError(), em(n, e.arguments)), t.addErrorMessage((i) => ol(i, r, e.arguments.map((o) => o.name)));
  }
  function Qd(e, t) {
    let [r, n] = Or(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (i) {
      i.getDeepField(e.argumentPath)?.markAsError();
      let o = i.getDeepFieldValue(r)?.asObject();
      o && ul(o, e.inputType);
    }
    t.addErrorMessage((o) => ol(o, n, e.inputType.fields.map((s) => s.name)));
  }
  function ol(e, t, r) {
    let n = [`Unknown argument \`${e.red(t)}\`.`], i = rm(t, r);
    return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(kr(e)), n.join(" ");
  }
  function Jd(e, t) {
    let r;
    t.addErrorMessage((l) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (!n)
      return;
    let [i, o] = Or(e.argumentPath), s = new Ir, a = n.getDeepFieldValue(i)?.asObject();
    if (a)
      if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields)
          s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new ue(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(sl).join(" | ");
        a.addSuggestion(new ue(o, l).makeRequired());
      }
  }
  function sl(e) {
    return e.kind === "list" ? `${sl(e.elementType)}[]` : e.name;
  }
  function Wd(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = kn("or", e.argument.typeNames.map((s) => i.green(s)));
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
  }
  function Hd(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
        let s = kn("or", e.argument.typeNames.map((a) => i.green(a)));
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
  }
  function Kd(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
    if (n) {
      let s = n.getDeepField(e.argumentPath)?.value;
      s?.markAsError(), s instanceof W && (i = s.text);
    }
    t.addErrorMessage((o) => {
      let s = ["Unable to fit value"];
      return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
    });
  }
  function zd(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
      i && ul(i, e.inputType);
    }
    t.addErrorMessage((i) => {
      let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${kn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(kr(i)), o.join(" ");
    });
  }
  function Yd(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
    if (n) {
      let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
      o && (o.markAsError(), i = Object.keys(o.getFields()));
    }
    t.addErrorMessage((o) => {
      let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${kn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
  }
  function al(e, t) {
    for (let r of t.fields)
      e.hasField(r.name) || e.addSuggestion(new ue(r.name, "true"));
  }
  function Zd(e, t) {
    for (let r of t.fields)
      r.isRelation && !e.hasField(r.name) && e.addSuggestion(new ue(r.name, "true"));
  }
  function Xd(e, t) {
    for (let r of t.fields)
      !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new ue(r.name, "true"));
  }
  function em(e, t) {
    for (let r of t)
      e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
  }
  function ll(e, t) {
    let [r, n] = Or(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
    if (!i)
      return { parentKind: "unknown", fieldName: n };
    let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
    return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
  }
  function ul(e, t) {
    if (t.kind === "object")
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
  }
  function Or(e) {
    let t = [...e], r = t.pop();
    if (!r)
      throw new Error("unexpected empty path");
    return [t, r];
  }
  function kr({ green: e, enabled: t }) {
    return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
  }
  function kn(e, t) {
    if (t.length === 1)
      return t[0];
    let r = [...t], n = r.pop();
    return `${r.join(", ")} ${e} ${n}`;
  }
  function rm(e, t) {
    let r = 1 / 0, n;
    for (let i of t) {
      let o = (0, il.default)(e, i);
      o > tm || o < r && (r = o, n = i);
    }
    return n;
  }
  function Dn({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
    let a = Ot(e);
    for (let p of t)
      On(p, a, s);
    let { message: l, args: u } = yn(a, r), c = Dt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
    throw new J(c, { clientVersion: o });
  }
  function pl({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
    let p = new oo({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
    return { modelName: e, action: nm[t], query: Dr(r, p) };
  }
  function Dr({ select: e, include: t, ...r } = {}, n) {
    let i;
    return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: ml(r, n), selection: im(e, t, i, n) };
  }
  function im(e, t, r, n) {
    return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), lm(e, n)) : om(n, t, r);
  }
  function om(e, t, r) {
    let n = {};
    return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && sm(n, t, e), e.isPreviewFeatureOn("omitApi") && am(n, r, e), n;
  }
  function sm(e, t, r) {
    for (let [n, i] of Object.entries(t)) {
      if (xe(i))
        continue;
      let o = r.nestSelection(n);
      if (so(i, o), i === false || i === undefined) {
        e[n] = false;
        continue;
      }
      let s = r.findField(n);
      if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
        e[n] = Dr(i === true ? {} : i, o);
        continue;
      }
      if (i === true) {
        e[n] = true;
        continue;
      }
      e[n] = Dr(i, o);
    }
  }
  function am(e, t, r) {
    let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = xa(i, n);
    for (let [s, a] of Object.entries(o)) {
      if (xe(a))
        continue;
      so(a, r.nestSelection(s));
      let l = r.findField(s);
      n?.[s] && !l || (e[s] = !a);
    }
  }
  function lm(e, t) {
    let r = {}, n = t.getComputedFields(), i = wa(e, n);
    for (let [o, s] of Object.entries(i)) {
      if (xe(s))
        continue;
      let a = t.nestSelection(o);
      so(s, a);
      let l = t.findField(o);
      if (!(n?.[o] && !l)) {
        if (s === false || s === undefined || xe(s)) {
          r[o] = false;
          continue;
        }
        if (s === true) {
          l?.kind === "object" ? r[o] = Dr({}, a) : r[o] = true;
          continue;
        }
        r[o] = Dr(s, a);
      }
    }
    return r;
  }
  function dl(e, t) {
    if (e === null)
      return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
      return e;
    if (typeof e == "bigint")
      return { $type: "BigInt", value: String(e) };
    if (Pt(e)) {
      if (on(e))
        return { $type: "DateTime", value: e.toISOString() };
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
    }
    if (Ct(e))
      return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
    if (Array.isArray(e))
      return um(e, t);
    if (ArrayBuffer.isView(e))
      return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
    if (cm(e))
      return e.values;
    if (Rt(e))
      return { $type: "Decimal", value: e.toFixed() };
    if (e instanceof Ne) {
      if (e !== en.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
      return { $type: "Enum", value: e._getName() };
    }
    if (pm(e))
      return e.toJSON();
    if (typeof e == "object")
      return ml(e, t);
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
  }
  function ml(e, t) {
    if (e.$type)
      return { $type: "Raw", value: e };
    let r = {};
    for (let n in e) {
      let i = e[n], o = t.nestArgument(n);
      xe(i) || (i !== undefined ? r[n] = dl(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: cl }));
    }
    return r;
  }
  function um(e, t) {
    let r = [];
    for (let n = 0;n < e.length; n++) {
      let i = t.nestArgument(String(n)), o = e[n];
      if (o === undefined || xe(o)) {
        let s = o === undefined ? "undefined" : "Prisma.skip";
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
      }
      r.push(dl(o, i));
    }
    return r;
  }
  function cm(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
  }
  function pm(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
  }
  function so(e, t) {
    e === undefined && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: cl });
  }
  function $t(e) {
    try {
      return hl(e, "fast");
    } catch {
      return hl(e, "slow");
    }
  }
  function hl(e, t) {
    return JSON.stringify(e.map((r) => bl(r, t)));
  }
  function bl(e, t) {
    return Array.isArray(e) ? e.map((r) => bl(r, t)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Pt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Re.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : dm(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? El(e) : e;
  }
  function dm(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
  }
  function El(e) {
    if (typeof e != "object" || e === null)
      return e;
    if (typeof e.toJSON == "function")
      return e.toJSON();
    if (Array.isArray(e))
      return e.map(yl);
    let t = {};
    for (let r of Object.keys(e))
      t[r] = yl(e[r]);
    return t;
  }
  function yl(e) {
    return typeof e == "bigint" ? e.toString() : El(e);
  }
  function ao(e, t, r, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && fm.exec(t))
      throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
  function uo(e) {
    return function(r) {
      let n, i = (o = e) => {
        try {
          return o === undefined || o?.kind === "itx" ? n ??= Tl(r(o)) : Tl(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
      return { then(o, s) {
        return i().then(o, s);
      }, catch(o) {
        return i().catch(o);
      }, finally(o) {
        return i().finally(o);
      }, requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      }, [Symbol.toStringTag]: "PrismaPromise" };
    };
  }
  function Tl(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
  }
  function Cl(e) {
    return e.includes("tracing") ? new co : Rl;
  }
  function Sl(e, t = () => {
  }) {
    let r, n = new Promise((i) => r = i);
    return { then(i) {
      return --e === 0 && r(t()), i?.(n);
    } };
  }
  function Al(e) {
    return typeof e == "string" ? e : e.reduce((t, r) => {
      let n = typeof r == "string" ? r : r.level;
      return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
    }, undefined);
  }
  function Fn(e) {
    return typeof e.batchRequestIdx == "number";
  }
  function Ln(e) {
    return e === null ? e : Array.isArray(e) ? e.map(Ln) : typeof e == "object" ? gm(e) ? hm(e) : yt(e, Ln) : e;
  }
  function gm(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
  }
  function hm({ $type: e, value: t }) {
    switch (e) {
      case "BigInt":
        return BigInt(t);
      case "Bytes":
        return Buffer.from(t, "base64");
      case "DateTime":
        return new Date(t);
      case "Decimal":
        return new Re(t);
      case "Json":
        return JSON.parse(t);
      default:
        Fe(t, "Unknown tagged value");
    }
  }
  function Il(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
      return;
    let t = [];
    return e.modelName && t.push(e.modelName), e.query.arguments && t.push(po(e.query.arguments)), t.push(po(e.query.selection)), t.join("");
  }
  function po(e) {
    return `(${Object.keys(e).sort().map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${po(n)})` : r;
    }).join(" ")})`;
  }
  function mo(e) {
    return ym[e];
  }
  function pt(e, t) {
    if (t === null)
      return t;
    switch (e) {
      case "bigint":
        return BigInt(t);
      case "bytes":
        return Buffer.from(t, "base64");
      case "decimal":
        return new Re(t);
      case "datetime":
      case "date":
        return new Date(t);
      case "time":
        return new Date(`1970-01-01T${t}Z`);
      case "bigint-array":
        return t.map((r) => pt("bigint", r));
      case "bytes-array":
        return t.map((r) => pt("bytes", r));
      case "decimal-array":
        return t.map((r) => pt("decimal", r));
      case "datetime-array":
        return t.map((r) => pt("datetime", r));
      case "date-array":
        return t.map((r) => pt("date", r));
      case "time-array":
        return t.map((r) => pt("time", r));
      default:
        return t;
    }
  }
  function Ol(e) {
    let t = [], r = bm(e);
    for (let n = 0;n < e.rows.length; n++) {
      let i = e.rows[n], o = { ...r };
      for (let s = 0;s < i.length; s++)
        o[e.columns[s]] = pt(e.types[s], i[s]);
      t.push(o);
    }
    return t;
  }
  function bm(e) {
    let t = {};
    for (let r = 0;r < e.columns.length; r++)
      t[e.columns[r]] = null;
    return t;
  }
  function wm(e) {
    if (e) {
      if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
      if (e.kind === "itx")
        return { kind: "itx", options: Dl(e) };
      Fe(e, "Unknown transaction kind");
    }
  }
  function Dl(e) {
    return { id: e.id, payload: e.payload };
  }
  function xm(e, t) {
    return Fn(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
  }
  function Pm(e) {
    return e.code === "P2009" || e.code === "P2012";
  }
  function _l(e) {
    if (e.kind === "Union")
      return { kind: "Union", errors: e.errors.map(_l) };
    if (Array.isArray(e.selectionPath)) {
      let [, ...t] = e.selectionPath;
      return { ...e, selectionPath: t };
    }
    return e;
  }
  function Vl(e, t) {
    for (let [r, n] of Object.entries(e)) {
      if (!Nl.includes(r)) {
        let i = qt(r, Nl);
        throw new F(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
      }
      Tm[r](n, t);
    }
    if (e.datasourceUrl && e.datasources)
      throw new F('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
  }
  function qt(e, t) {
    if (t.length === 0 || typeof e != "string")
      return "";
    let r = Rm(e, t);
    return r ? ` Did you mean "${r}"?` : "";
  }
  function Rm(e, t) {
    if (t.length === 0)
      return null;
    let r = t.map((i) => ({ value: i, distance: (0, jl.default)(e, i) }));
    r.sort((i, o) => i.distance < o.distance ? -1 : 1);
    let n = r[0];
    return n.distance < 3 ? n.value : null;
  }
  function Cm(e, t) {
    return ql(t.models, e) ?? ql(t.types, e);
  }
  function ql(e, t) {
    let r = Object.keys(e).find((n) => Mt(n) === t);
    if (r)
      return e[r];
  }
  function Sm(e, t) {
    let r = Ot(e);
    for (let o of t)
      switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
    let { message: n, args: i } = yn(r, "colorless");
    return `Error validating "omit" option:

${i}

${n}`;
  }
  function Bl(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
      let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
        o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
      }, l = (u) => {
        o || (o = true, r(u));
      };
      for (let u = 0;u < e.length; u++)
        e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Fn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
    });
  }
  function Hl(e) {

    class t {
      constructor(n) {
        this._originalClient = this;
        this._middlewares = new _n;
        this._createPrismaPromise = uo();
        this.$extends = aa;
        e = n?.__internal?.configOverride?.(e) ?? e, Ta(e), n && Vl(n, e);
        let i = new Jl.EventEmitter().on("error", () => {
        });
        this._extensions = vn.empty(), this._previewFeatures = In(e), this._clientVersion = e.clientVersion ?? Ll, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Cl(this._previewFeatures);
        let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && _r.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && _r.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
        if (n?.adapter) {
          s = Si(n.adapter);
          let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
          if (s.provider !== l)
            throw new R(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
          if (n.datasources || n.datasourceUrl !== undefined)
            throw new R("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
        }
        let a = !s && Ht(o, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
        try {
          let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
          c && L.enable("prisma:client");
          let p = _r.default.resolve(e.dirname, e.relativePath);
          Wl.default.existsSync(p) || (p = e.dirname), tt("dirname", e.dirname), tt("relativePath", e.relativePath), tt("cwd", p);
          let d = u.engine || {};
          if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: _r.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? undefined, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Al(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Ra(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2000, timeout: l.transactionOptions?.timeout ?? 5000, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: _t, getBatchRequestPayload: wt, prismaGraphQLToJSError: st, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: R, PrismaClientKnownRequestError: V, debug: L("prisma:client:accelerateEngine"), engineVersion: Gl.version, clientVersion: e.clientVersion } }, tt("clientVersion", e.clientVersion), this._engine = Za(e, this._engineConfig), this._requestHandler = new Mn(this, i), l.log)
            for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                Zt.log(`${Zt.tags[g] ?? ""}`, h.message || h.query);
              });
            }
          this._metrics = new bt(this._engine);
        } catch (l) {
          throw l.clientVersion = this._clientVersion, l;
        }
        return this._appliedParent = dr(this);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClient";
      }
      $use(n) {
        this._middlewares.use(n);
      }
      $on(n, i) {
        n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
      }
      $connect() {
        try {
          return this._engine.start();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        }
      }
      async $disconnect() {
        try {
          await this._engine.stop();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        } finally {
          Co();
        }
      }
      $executeRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: lo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $executeRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined) {
            let [s, a] = Ul(n, i);
            return ao(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
          }
          throw new J("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
        });
      }
      $executeRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => (ao(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
      }
      $runCommandRaw(n) {
        if (e.activeProvider !== "mongodb")
          throw new J(`The ${e.activeProvider} provider does not support \$runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
        return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: fl, callsite: Ze(this._errorFormat), transaction: i }));
      }
      async $queryRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: lo({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $queryRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined)
            return this.$queryRawInternal(o, "$queryRaw", ...Ul(n, i));
          throw new J("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
        });
      }
      $queryRawTyped(n) {
        return this._createPrismaPromise((i) => {
          if (!this._hasPreviewFlag("typedSql"))
            throw new J("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
          return this.$queryRawInternal(i, "$queryRawTyped", n);
        });
      }
      $queryRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
      }
      _transactionWithArray({ promises: n, options: i }) {
        let o = Om.nextId(), s = Sl(n.length), a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
          let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
          return l.requestTransaction?.(p) ?? l;
        });
        return Bl(a);
      }
      async _transactionWithCallback({ callback: n, options: i }) {
        let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
        try {
          let u = { kind: "itx", ...a };
          l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
        } catch (u) {
          throw await this._engine.transaction("rollback", o, a).catch(() => {
          }), u;
        }
        return l;
      }
      _createItxClient(n) {
        return dr(ve(sa(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => uo(n)), re(Im, () => n.id), Et(wl)]));
      }
      $transaction(n, i) {
        let o;
        typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
          throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
        } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
        let s = { name: "transaction", attributes: { method: "$transaction" } };
        return this._tracingHelper.runInChildSpan(s, o);
      }
      _request(n) {
        n.otelParentCtx = this._tracingHelper.getActiveContext();
        let i = n.middlewareArgsMapper ?? Am, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
          let c = this._middlewares.get(++a);
          if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, (O) => c(u, (T) => (O?.end(), l(T))));
          let { runInTransaction: p, args: d, ...f } = u, g = { ...n, ...f };
          d && (g.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== undefined && p === false && delete g.transaction;
          let h = await fa(this, g);
          return g.model ? ca({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
        };
        return this._tracingHelper.runInChildSpan(s.operation, () => new Ql.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
      }
      async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
        try {
          n = u ? u(n) : n;
          let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => pl({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
          return L.enabled("prisma:client") && (tt("Prisma Client call:"), tt(`prisma.${i}(${Bs(n)})`), tt("Generated request:"), tt(JSON.stringify(h, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
        } catch (g) {
          throw g.clientVersion = this._clientVersion, g;
        }
      }
      get $metrics() {
        if (!this._hasPreviewFlag("metrics"))
          throw new J("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
        return this._metrics;
      }
      _hasPreviewFlag(n) {
        return !!this._engineConfig.previewFeatures?.includes(n);
      }
      $applyPendingMigrations() {
        return this._engine.applyPendingMigrations();
      }
    }
    return t;
  }
  function Ul(e, t) {
    return km(e) ? [new ie(e, t), Pl] : [e, vl];
  }
  function km(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
  }
  function Kl(e) {
    return new Proxy(e, { get(t, r) {
      if (r in t)
        return t[r];
      if (!Dm.has(r))
        throw new TypeError(`Invalid enum value: ${String(r)}`);
    } });
  }
  function zl(e) {
    Ht(e, { conflictCheck: "warn" });
  }
  var __dirname = "/home/yigs/project-carter/packages/database/prisma/generate/client/runtime", __filename = "/home/yigs/project-carter/packages/database/prisma/generate/client/runtime/library.js";
  var Yl = Object.create;
  var Lr = Object.defineProperty;
  var Zl = Object.getOwnPropertyDescriptor;
  var Xl = Object.getOwnPropertyNames;
  var eu = Object.getPrototypeOf;
  var tu = Object.prototype.hasOwnProperty;
  var Z = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Vt = (e, t) => {
    for (var r in t)
      Lr(e, r, { get: t[r], enumerable: true });
  };
  var fo = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of Xl(t))
        !tu.call(e, i) && i !== r && Lr(e, i, { get: () => t[i], enumerable: !(n = Zl(t, i)) || n.enumerable });
    return e;
  };
  var k = (e, t, r) => (r = e != null ? Yl(eu(e)) : {}, fo(t || !e || !e.__esModule ? Lr(r, "default", { value: e, enumerable: true }) : r, e));
  var ru = (e) => fo(Lr({}, "__esModule", { value: true }), e);
  var $o = Z((lf, Yn) => {
    var v = Yn.exports;
    Yn.exports.default = v;
    var D = "\x1B[", Jt = "\x1B]", ft = "\x07", Qr = ";", Mo = process.env.TERM_PROGRAM === "Apple_Terminal";
    v.cursorTo = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      return typeof t != "number" ? D + (e + 1) + "G" : D + (t + 1) + ";" + (e + 1) + "H";
    };
    v.cursorMove = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      let r = "";
      return e < 0 ? r += D + -e + "D" : e > 0 && (r += D + e + "C"), t < 0 ? r += D + -t + "A" : t > 0 && (r += D + t + "B"), r;
    };
    v.cursorUp = (e = 1) => D + e + "A";
    v.cursorDown = (e = 1) => D + e + "B";
    v.cursorForward = (e = 1) => D + e + "C";
    v.cursorBackward = (e = 1) => D + e + "D";
    v.cursorLeft = D + "G";
    v.cursorSavePosition = Mo ? "\x1B7" : D + "s";
    v.cursorRestorePosition = Mo ? "\x1B8" : D + "u";
    v.cursorGetPosition = D + "6n";
    v.cursorNextLine = D + "E";
    v.cursorPrevLine = D + "F";
    v.cursorHide = D + "?25l";
    v.cursorShow = D + "?25h";
    v.eraseLines = (e) => {
      let t = "";
      for (let r = 0;r < e; r++)
        t += v.eraseLine + (r < e - 1 ? v.cursorUp() : "");
      return e && (t += v.cursorLeft), t;
    };
    v.eraseEndLine = D + "K";
    v.eraseStartLine = D + "1K";
    v.eraseLine = D + "2K";
    v.eraseDown = D + "J";
    v.eraseUp = D + "1J";
    v.eraseScreen = D + "2J";
    v.scrollUp = D + "S";
    v.scrollDown = D + "T";
    v.clearScreen = "\x1Bc";
    v.clearTerminal = process.platform === "win32" ? `${v.eraseScreen}${D}0f` : `${v.eraseScreen}${D}3J${D}H`;
    v.beep = ft;
    v.link = (e, t) => [Jt, "8", Qr, Qr, t, ft, e, Jt, "8", Qr, Qr, ft].join("");
    v.image = (e, t = {}) => {
      let r = `${Jt}1337;File=inline=1`;
      return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + ft;
    };
    v.iTerm = { setCwd: (e = process.cwd()) => `${Jt}50;CurrentDir=${e}${ft}`, annotation: (e, t = {}) => {
      let r = `${Jt}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
      if ((n || i) && !(n && i && typeof t.length < "u"))
        throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + ft;
    } };
  });
  var Zn = Z((uf, qo) => {
    qo.exports = (e, t = process.argv) => {
      let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
      return n !== -1 && (i === -1 || n < i);
    };
  });
  var Bo = Z((cf, Vo) => {
    var Vu = __require("os"), jo = __require("tty"), de = Zn(), { env: Q } = process, Qe;
    de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
    "FORCE_COLOR" in Q && (Q.FORCE_COLOR === "true" ? Qe = 1 : Q.FORCE_COLOR === "false" ? Qe = 0 : Qe = Q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(Q.FORCE_COLOR, 10), 3));
    function Xn(e) {
      return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
    }
    function ei(e, t) {
      if (Qe === 0)
        return 0;
      if (de("color=16m") || de("color=full") || de("color=truecolor"))
        return 3;
      if (de("color=256"))
        return 2;
      if (e && !t && Qe === undefined)
        return 0;
      let r = Qe || 0;
      if (Q.TERM === "dumb")
        return r;
      if (process.platform === "win32") {
        let n = Vu.release().split(".");
        return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in Q)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => (n in Q)) || Q.CI_NAME === "codeship" ? 1 : r;
      if ("TEAMCITY_VERSION" in Q)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Q.TEAMCITY_VERSION) ? 1 : 0;
      if (Q.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in Q) {
        let n = parseInt((Q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (Q.TERM_PROGRAM) {
          case "iTerm.app":
            return n >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(Q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Q.TERM) || ("COLORTERM" in Q) ? 1 : r;
    }
    function Bu(e) {
      let t = ei(e, e && e.isTTY);
      return Xn(t);
    }
    Vo.exports = { supportsColor: Bu, stdout: Xn(ei(true, jo.isatty(1))), stderr: Xn(ei(true, jo.isatty(2))) };
  });
  var Qo = Z((pf, Go) => {
    var Uu = Bo(), gt = Zn();
    function Uo(e) {
      if (/^\d{3,4}$/.test(e)) {
        let r = /(\d{1,2})(\d{2})/.exec(e);
        return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
      }
      let t = (e || "").split(".").map((r) => parseInt(r, 10));
      return { major: t[0], minor: t[1], patch: t[2] };
    }
    function ti(e) {
      let { env: t } = process;
      if ("FORCE_HYPERLINK" in t)
        return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
      if (gt("no-hyperlink") || gt("no-hyperlinks") || gt("hyperlink=false") || gt("hyperlink=never"))
        return false;
      if (gt("hyperlink=true") || gt("hyperlink=always") || "NETLIFY" in t)
        return true;
      if (!Uu.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
        return false;
      if ("TERM_PROGRAM" in t) {
        let r = Uo(t.TERM_PROGRAM_VERSION);
        switch (t.TERM_PROGRAM) {
          case "iTerm.app":
            return r.major === 3 ? r.minor >= 1 : r.major > 3;
          case "WezTerm":
            return r.major >= 20200620;
          case "vscode":
            return r.major > 1 || r.major === 1 && r.minor >= 72;
        }
      }
      if ("VTE_VERSION" in t) {
        if (t.VTE_VERSION === "0.50.0")
          return false;
        let r = Uo(t.VTE_VERSION);
        return r.major > 0 || r.minor >= 50;
      }
      return false;
    }
    Go.exports = { supportsHyperlink: ti, stdout: ti(process.stdout), stderr: ti(process.stderr) };
  });
  var Wo = Z((df, Wt) => {
    var Gu = $o(), ri = Qo(), Jo = (e, t, { target: r = "stdout", ...n } = {}) => ri[r] ? Gu.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
    Wt.exports = (e, t, r = {}) => Jo(e, t, r);
    Wt.exports.stderr = (e, t, r = {}) => Jo(e, t, { target: "stderr", ...r });
    Wt.exports.isSupported = ri.stdout;
    Wt.exports.stderr.isSupported = ri.stderr;
  });
  var ii = Z((Pf, Qu) => {
    Qu.exports = { name: "@prisma/engines-version", version: "5.20.0-12.06fc58a368dc7be9fbbbe894adf8d445d208c284", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "06fc58a368dc7be9fbbbe894adf8d445d208c284" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
  });
  var oi = Z((Jr) => {
    Object.defineProperty(Jr, "__esModule", { value: true });
    Jr.enginesVersion = undefined;
    Jr.enginesVersion = ii().prisma.enginesVersion;
  });
  var Yo = Z((Vf, Hu) => {
    Hu.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
  });
  var Xo = Z((Bf, Hr) => {
    var Ku = __require("fs"), Zo = __require("path"), zu = __require("os"), Yu = Yo(), Zu = Yu.version, Xu = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function ec(e) {
      let t = {}, r = e.toString();
      r = r.replace(/\r\n?/mg, `
`);
      let n;
      for (;(n = Xu.exec(r)) != null; ) {
        let i = n[1], o = n[2] || "";
        o = o.trim();
        let s = o[0];
        o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
      }
      return t;
    }
    function ui(e) {
      console.log(`[dotenv@${Zu}][DEBUG] ${e}`);
    }
    function tc(e) {
      return e[0] === "~" ? Zo.join(zu.homedir(), e.slice(1)) : e;
    }
    function rc(e) {
      let t = Zo.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
      e && (e.path != null && (t = tc(e.path)), e.encoding != null && (r = e.encoding));
      try {
        let o = Wr.parse(Ku.readFileSync(t, { encoding: r }));
        return Object.keys(o).forEach(function(s) {
          Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && ui(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
        }), { parsed: o };
      } catch (o) {
        return n && ui(`Failed to load ${t} ${o.message}`), { error: o };
      }
    }
    var Wr = { config: rc, parse: ec };
    Hr.exports.config = Wr.config;
    Hr.exports.parse = Wr.parse;
    Hr.exports = Wr;
  });
  var os = Z((Kf, is) => {
    is.exports = (e) => {
      let t = e.match(/^[ \t]*(?=\S)/gm);
      return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
    };
  });
  var as = Z((zf, ss) => {
    var sc = os();
    ss.exports = (e) => {
      let t = sc(e);
      if (t === 0)
        return e;
      let r = new RegExp(`^[ \\t]{${t}}`, "gm");
      return e.replace(r, "");
    };
  });
  var mi = Z((rg, ls) => {
    ls.exports = (e, t = 1, r) => {
      if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
      if (typeof t != "number")
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
      if (typeof r.indent != "string")
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
      if (t === 0)
        return e;
      let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return e.replace(n, r.indent.repeat(t));
    };
  });
  var ds = Z((og, ps) => {
    ps.exports = ({ onlyFirst: e = false } = {}) => {
      let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t, e ? undefined : "g");
    };
  });
  var yi = Z((sg, ms) => {
    var fc = ds();
    ms.exports = (e) => typeof e == "string" ? e.replace(fc(), "") : e;
  });
  var fs = Z((ug, Yr) => {
    Yr.exports = (e = {}) => {
      let t;
      if (e.repoUrl)
        t = e.repoUrl;
      else if (e.user && e.repo)
        t = `https://github.com/${e.user}/${e.repo}`;
      else
        throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
      let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
      for (let i of n) {
        let o = e[i];
        if (o !== undefined) {
          if (i === "labels" || i === "projects") {
            if (!Array.isArray(o))
              throw new TypeError(`The \`${i}\` option should be an array`);
            o = o.join(",");
          }
          r.searchParams.set(i, o);
        }
      }
      return r.toString();
    };
    Yr.exports.default = Yr.exports;
  });
  var io = Z((lv, Xa) => {
    Xa.exports = function() {
      function e(t, r, n, i, o) {
        return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
      }
      return function(t, r) {
        if (t === r)
          return 0;
        if (t.length > r.length) {
          var n = t;
          t = r, r = n;
        }
        for (var i = t.length, o = r.length;i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
          i--, o--;
        for (var s = 0;s < i && t.charCodeAt(s) === r.charCodeAt(s); )
          s++;
        if (i -= s, o -= s, i === 0 || o < 3)
          return o;
        var a = 0, l, u, c, p, d, f, g, h, O, T, S, C, E = [];
        for (l = 0;l < i; l++)
          E.push(l + 1), E.push(t.charCodeAt(s + l));
        for (var me = E.length - 1;a < o - 3; )
          for (O = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), S = r.charCodeAt(s + (p = a + 2)), C = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0;l < me; l += 2)
            g = E[l], h = E[l + 1], u = e(g, u, c, O, h), c = e(u, c, p, T, h), p = e(c, p, d, S, h), f = e(p, d, f, C, h), E[l] = f, d = p, p = c, c = u, u = g;
        for (;a < o; )
          for (O = r.charCodeAt(s + (u = a)), f = ++a, l = 0;l < me; l += 2)
            g = E[l], E[l] = f = e(g, u, f, O, E[l + 1]), u = g;
        return f;
      };
    }();
  });
  var _m = {};
  Vt(_m, { Debug: () => Un, Decimal: () => Re, Extensions: () => qn, MetricsClient: () => bt, NotFoundError: () => Le, PrismaClientInitializationError: () => R, PrismaClientKnownRequestError: () => V, PrismaClientRustPanicError: () => le, PrismaClientUnknownRequestError: () => B, PrismaClientValidationError: () => J, Public: () => jn, Sql: () => ie, defineDmmfProperty: () => hs, empty: () => ws, getPrismaClient: () => Hl, getRuntime: () => Tn, join: () => Es, makeStrictEnum: () => Kl, makeTypedQueryFactory: () => bs, objectEnumValues: () => en, raw: () => Ai, skip: () => tn, sqltag: () => Ii, warnEnvConflicts: () => zl, warnOnce: () => Xt });
  module.exports = ru(_m);
  var qn = {};
  Vt(qn, { defineExtension: () => go, getExtensionContext: () => ho });
  var jn = {};
  Vt(jn, { validator: () => yo });
  var Nr = {};
  Vt(Nr, { $: () => Po, bgBlack: () => du, bgBlue: () => hu, bgCyan: () => bu, bgGreen: () => fu, bgMagenta: () => yu, bgRed: () => mu, bgWhite: () => Eu, bgYellow: () => gu, black: () => lu, blue: () => rt, bold: () => H, cyan: () => De, dim: () => Oe, gray: () => Bt, green: () => qe, grey: () => pu, hidden: () => su, inverse: () => ou, italic: () => iu, magenta: () => uu, red: () => ce, reset: () => nu, strikethrough: () => au, underline: () => X, white: () => cu, yellow: () => ke });
  var Vn;
  var bo;
  var Eo;
  var wo;
  var xo = true;
  typeof process < "u" && ({ FORCE_COLOR: Vn, NODE_DISABLE_COLORS: bo, NO_COLOR: Eo, TERM: wo } = process.env || {}, xo = process.stdout && process.stdout.isTTY);
  var Po = { enabled: !bo && Eo == null && wo !== "dumb" && (Vn != null && Vn !== "0" || xo) };
  var nu = M(0, 0);
  var H = M(1, 22);
  var Oe = M(2, 22);
  var iu = M(3, 23);
  var X = M(4, 24);
  var ou = M(7, 27);
  var su = M(8, 28);
  var au = M(9, 29);
  var lu = M(30, 39);
  var ce = M(31, 39);
  var qe = M(32, 39);
  var ke = M(33, 39);
  var rt = M(34, 39);
  var uu = M(35, 39);
  var De = M(36, 39);
  var cu = M(37, 39);
  var Bt = M(90, 39);
  var pu = M(90, 39);
  var du = M(40, 49);
  var mu = M(41, 49);
  var fu = M(42, 49);
  var gu = M(43, 49);
  var hu = M(44, 49);
  var yu = M(45, 49);
  var bu = M(46, 49);
  var Eu = M(47, 49);
  var wu = 100;
  var vo = ["green", "yellow", "blue", "magenta", "cyan", "red"];
  var Ut = [];
  var To = Date.now();
  var xu = 0;
  var Bn = typeof process < "u" ? process.env : {};
  globalThis.DEBUG ??= Bn.DEBUG ?? "";
  globalThis.DEBUG_COLORS ??= Bn.DEBUG_COLORS ? Bn.DEBUG_COLORS === "true" : true;
  var Gt = { enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  }, disable() {
    let e = globalThis.DEBUG;
    return globalThis.DEBUG = "", e;
  }, enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
    return r && !n;
  }, log: (...e) => {
    let [t, r, ...n] = e;
    (console.warn ?? console.log)(`${t} ${r}`, ...n);
  }, formatters: {} };
  var Un = new Proxy(Pu, { get: (e, t) => Gt[t], set: (e, t, r) => Gt[t] = r });
  var L = Un;
  var So = k(__require("fs"));
  var Qn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
  var Mr = "libquery_engine";
  var ko = k(__require("child_process"));
  var Kn = k(__require("fs/promises"));
  var Ur = k(__require("os"));
  var _e = Symbol.for("@ts-pattern/matcher");
  var Tu = Symbol.for("@ts-pattern/isVariadic");
  var jr = "@ts-pattern/anonymous-select-key";
  var Jn = (e) => !!(e && typeof e == "object");
  var qr = (e) => e && !!e[_e];
  var we = (e, t, r) => {
    if (qr(e)) {
      let n = e[_e](), { matched: i, selections: o } = n.match(t);
      return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
    }
    if (Jn(e)) {
      if (!Jn(t))
        return false;
      if (Array.isArray(e)) {
        if (!Array.isArray(t))
          return false;
        let n = [], i = [], o = [];
        for (let s of e.keys()) {
          let a = e[s];
          qr(a) && a[Tu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
        }
        if (o.length) {
          if (o.length > 1)
            throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
          if (t.length < n.length + i.length)
            return false;
          let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
          return n.every((u, c) => we(u, s[c], r)) && i.every((u, c) => we(u, a[c], r)) && (o.length === 0 || we(o[0], l, r));
        }
        return e.length === t.length && e.every((s, a) => we(s, t[a], r));
      }
      return Object.keys(e).every((n) => {
        let i = e[n];
        return ((n in t) || qr(o = i) && o[_e]().matcherType === "optional") && we(i, t[n], r);
        var o;
      });
    }
    return Object.is(t, e);
  };
  var Ge = (e) => {
    var t, r, n;
    return Jn(e) ? qr(e) ? (t = (r = (n = e[_e]()).getSelectionKeys) == null ? undefined : r.call(n)) != null ? t : [] : Array.isArray(e) ? Qt(e, Ge) : Qt(Object.values(e), Ge) : [];
  };
  var Qt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
  var Jm = pe(I(function(e) {
    return true;
  }));
  var Be = (e) => Object.assign(pe(e), { startsWith: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && n.startsWith(r)))));
    var r;
  }, endsWith: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && n.endsWith(r)))));
    var r;
  }, minLength: (t) => Be(j(e, ((r) => I((n) => je(n) && n.length >= r))(t))), length: (t) => Be(j(e, ((r) => I((n) => je(n) && n.length === r))(t))), maxLength: (t) => Be(j(e, ((r) => I((n) => je(n) && n.length <= r))(t))), includes: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && n.includes(r)))));
    var r;
  }, regex: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && !!n.match(r)))));
    var r;
  } });
  var Wm = Be(I(je));
  var Ee = (e) => Object.assign(pe(e), { between: (t, r) => Ee(j(e, ((n, i) => I((o) => be(o) && n <= o && i >= o))(t, r))), lt: (t) => Ee(j(e, ((r) => I((n) => be(n) && n < r))(t))), gt: (t) => Ee(j(e, ((r) => I((n) => be(n) && n > r))(t))), lte: (t) => Ee(j(e, ((r) => I((n) => be(n) && n <= r))(t))), gte: (t) => Ee(j(e, ((r) => I((n) => be(n) && n >= r))(t))), int: () => Ee(j(e, I((t) => be(t) && Number.isInteger(t)))), finite: () => Ee(j(e, I((t) => be(t) && Number.isFinite(t)))), positive: () => Ee(j(e, I((t) => be(t) && t > 0))), negative: () => Ee(j(e, I((t) => be(t) && t < 0))) });
  var Hm = Ee(I(be));
  var Ue = (e) => Object.assign(pe(e), { between: (t, r) => Ue(j(e, ((n, i) => I((o) => Ve(o) && n <= o && i >= o))(t, r))), lt: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n < r))(t))), gt: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n > r))(t))), lte: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n <= r))(t))), gte: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n >= r))(t))), positive: () => Ue(j(e, I((t) => Ve(t) && t > 0))), negative: () => Ue(j(e, I((t) => Ve(t) && t < 0))) });
  var Km = Ue(I(Ve));
  var zm = pe(I(function(e) {
    return typeof e == "boolean";
  }));
  var Ym = pe(I(function(e) {
    return typeof e == "symbol";
  }));
  var Zm = pe(I(function(e) {
    return e == null;
  }));
  var Xm = pe(I(function(e) {
    return e != null;
  }));
  var Wn = { matched: false, value: undefined };
  var Hn = class e {
    constructor(t, r) {
      this.input = undefined, this.state = undefined, this.input = t, this.state = r;
    }
    with(...t) {
      if (this.state.matched)
        return this;
      let r = t[t.length - 1], n = [t[0]], i;
      t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
      let o = false, s = {}, a = (u, c) => {
        o = true, s[u] = c;
      }, l = !n.some((u) => we(u, this.input, a)) || i && !i(this.input) ? Wn : { matched: true, value: r(o ? jr in s ? s[jr] : s : this.input, this.input) };
      return new e(this.input, l);
    }
    when(t, r) {
      if (this.state.matched)
        return this;
      let n = !!t(this.input);
      return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : Wn);
    }
    otherwise(t) {
      return this.state.matched ? this.state.value : t(this.input);
    }
    exhaustive() {
      if (this.state.matched)
        return this.state.value;
      let t;
      try {
        t = JSON.stringify(this.input);
      } catch {
        t = this.input;
      }
      throw new Error(`Pattern matching error: no pattern matches value ${t}`);
    }
    run() {
      return this.exhaustive();
    }
    returnType() {
      return this;
    }
  };
  var Do = __require("util");
  var Su = { warn: ke("prisma:warn") };
  var Au = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var Iu = (0, Do.promisify)(ko.default.exec);
  var te = L("prisma:get-platform");
  var Ou = ["1.0.x", "1.1.x", "3.0.x"];
  var Br = {};
  var Ho = k(Wo());
  var Ju = k(oi());
  var $ = k(__require("path"));
  var Wu = k(oi());
  var Df = L("prisma:engines");
  var _f = "libquery-engine";
  $.default.join(__dirname, "../query-engine-darwin");
  $.default.join(__dirname, "../query-engine-darwin-arm64");
  $.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
  $.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
  $.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
  $.default.join(__dirname, "../query-engine-linux-static-x64");
  $.default.join(__dirname, "../query-engine-linux-static-arm64");
  $.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
  $.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
  $.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
  $.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
  $.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../query_engine-windows.dll.node");
  var si = k(__require("fs"));
  var zo = L("chmodPlusX");
  var pi = k(Xo());
  var Kr = k(__require("fs"));
  var ht = k(__require("path"));
  var ci = L("prisma:tryLoadEnv");
  var ns = "library";
  var Je;
  ((t) => {
    let e;
    ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.createManyAndReturn = "createManyAndReturn", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
  })(Je ||= {});
  var zt = k(__require("path"));
  var us = k(mi());
  var fi = class {
    constructor(t) {
      this.config = t;
    }
    toString() {
      let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: ac(t.binaryTargets) }));
      return `generator ${t.name} {
${(0, us.default)(lc(n), 2)}
}`;
    }
  };
  var Zt = {};
  Vt(Zt, { error: () => dc, info: () => pc, log: () => cc, query: () => mc, should: () => cs, tags: () => Yt, warn: () => hi });
  var Yt = { error: ce("prisma:error"), warn: ke("prisma:warn"), info: De("prisma:info"), query: rt("prisma:query") };
  var cs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var Ei = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
  var gs = new Set;
  var Xt = (e, t, ...r) => {
    gs.has(e) || (gs.add(e), hi(t, ...r));
  };
  var V = class extends Error {
    constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
      super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  w(V, "PrismaClientKnownRequestError");
  var Le = class extends V {
    constructor(t, r) {
      super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
    }
  };
  w(Le, "NotFoundError");
  var R = class e extends Error {
    constructor(t, r, n) {
      super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  w(R, "PrismaClientInitializationError");
  var le = class extends Error {
    constructor(t, r) {
      super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  w(le, "PrismaClientRustPanicError");
  var B = class extends Error {
    constructor(t, { clientVersion: r, batchRequestIdx: n }) {
      super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  w(B, "PrismaClientUnknownRequestError");
  var J = class extends Error {
    constructor(r, { clientVersion: n }) {
      super(r);
      this.name = "PrismaClientValidationError";
      this.clientVersion = n;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  w(J, "PrismaClientValidationError");
  var bt = class {
    constructor(t) {
      this._engine = t;
    }
    prometheus(t) {
      return this._engine.metrics({ format: "prometheus", ...t });
    }
    json(t) {
      return this._engine.metrics({ format: "json", ...t });
    }
  };
  var Xr = Symbol();
  var Pi = new WeakMap;
  var Ne = class {
    constructor(t) {
      t === Xr ? Pi.set(this, `Prisma.${this._getName()}`) : Pi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Pi.get(this);
    }
  };
  var tr = class extends Ne {
    _getNamespace() {
      return "NullTypes";
    }
  };
  var rr = class extends tr {
  };
  vi(rr, "DbNull");
  var nr = class extends tr {
  };
  vi(nr, "JsonNull");
  var ir = class extends tr {
  };
  vi(ir, "AnyNull");
  var en = { classes: { DbNull: rr, JsonNull: nr, AnyNull: ir }, instances: { DbNull: new rr(Xr), JsonNull: new nr(Xr), AnyNull: new ir(Xr) } };
  var ys = Symbol();
  var or = class {
    constructor(t) {
      if (t !== ys)
        throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(t) {
      return t === undefined ? tn : t;
    }
  };
  var tn = new or(ys);
  var Ti = new WeakMap;
  var sr = class {
    constructor(t, r) {
      Ti.set(this, { sql: t, values: r });
    }
    get sql() {
      return Ti.get(this).sql;
    }
    get values() {
      return Ti.get(this).values;
    }
  };
  var Ci = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (;this.registeredErrors[r] !== undefined; )
        r++;
      return this.registeredErrors[r] = { error: t }, r;
    }
  };
  var Si = (e) => {
    let t = new Ci;
    if (e.transactionContext === undefined && e.startTransaction === undefined)
      throw new Error("[prisma:driverAdapters] Either `adapter.transactionContext` or `adapter.startTransaction` must be defined.");
    let r = e.transactionContext === undefined ? fe(t, () => Promise.resolve(Ri(e))) : fe(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: fe(t, e.queryRaw.bind(e)), executeRaw: fe(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => hc(t, s)) };
    return e.getConnectionInfo && (n.getConnectionInfo = bc(t, e.getConnectionInfo.bind(e))), n;
  };
  var hc = (e, t) => {
    let r = fe(e, t.startTransaction.bind(t));
    return { adapterName: t.adapterName, provider: t.provider, queryRaw: fe(e, t.queryRaw.bind(t)), executeRaw: fe(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => yc(e, o)) };
  };
  var yc = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: fe(e, t.queryRaw.bind(t)), executeRaw: fe(e, t.executeRaw.bind(t)), commit: fe(e, t.commit.bind(t)), rollback: fe(e, t.rollback.bind(t)) });
  var Gl = k(ii());
  var Ql = __require("async_hooks");
  var Jl = __require("events");
  var Wl = k(__require("fs"));
  var _r = k(__require("path"));
  var ie = class e {
    constructor(t, r) {
      if (t.length - 1 !== r.length)
        throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
      let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
      this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
      let i = 0, o = 0;
      for (;i < r.length; ) {
        let s = r[i++], a = t[i];
        if (s instanceof e) {
          this.strings[o] += s.strings[0];
          let l = 0;
          for (;l < s.values.length; )
            this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
          this.strings[o] += a;
        } else
          this.values[o++] = s, this.strings[o] = a;
      }
    }
    get sql() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `?${this.strings[r++]}`;
      return n;
    }
    get statement() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `:${r}${this.strings[r++]}`;
      return n;
    }
    get text() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `\$${r}${this.strings[r++]}`;
      return n;
    }
    inspect() {
      return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
    }
  };
  var ws = Ai("");
  var Pe = class {
    constructor() {
      this._map = new Map;
    }
    get(t) {
      return this._map.get(t)?.value;
    }
    set(t, r) {
      this._map.set(t, { value: r });
    }
    getOrCreate(t, r) {
      let n = this._map.get(t);
      if (n)
        return n.value;
      let i = r();
      return this.set(t, i), i;
    }
  };
  var rn = { enumerable: true, configurable: true, writable: true };
  var xs = Symbol.for("nodejs.util.inspect.custom");
  var xt = class {
    constructor(t = 0, r) {
      this.context = r;
      this.lines = [];
      this.currentLine = "";
      this.currentIndent = 0;
      this.currentIndent = t;
    }
    write(t) {
      return typeof t == "string" ? this.currentLine += t : t.write(this), this;
    }
    writeJoined(t, r, n = (i, o) => o.write(i)) {
      let i = r.length - 1;
      for (let o = 0;o < r.length; o++)
        n(r[o], this), o !== i && this.write(t);
      return this;
    }
    writeLine(t) {
      return this.write(t).newLine();
    }
    newLine() {
      this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = undefined;
      let t = this.afterNextNewLineCallback;
      return this.afterNextNewLineCallback = undefined, t?.(), this;
    }
    withIndent(t) {
      return this.indent(), t(this), this.unindent(), this;
    }
    afterNextNewline(t) {
      return this.afterNextNewLineCallback = t, this;
    }
    indent() {
      return this.currentIndent++, this;
    }
    unindent() {
      return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t) {
      return this.marginSymbol = t, this;
    }
    toString() {
      return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
      return this.currentLine.length;
    }
    indentedCurrentLine() {
      let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
      return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
    }
  };
  var vt = 9000000000000000;
  var ze = 1e9;
  var Oi = "0123456789abcdef";
  var an = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var ln = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var ki = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -vt, maxE: vt, crypto: false };
  var Ss;
  var Me;
  var x = true;
  var cn = "[DecimalError] ";
  var Ke = cn + "Invalid argument: ";
  var As = cn + "Precision limit exceeded";
  var Is = cn + "crypto unavailable";
  var Os = "[object Decimal]";
  var ee = Math.floor;
  var G = Math.pow;
  var wc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var xc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var Pc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var ks = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var he = 1e7;
  var b = 7;
  var vc = 9007199254740991;
  var Tc = an.length - 1;
  var Di = ln.length - 1;
  var m = { toStringTag: Os };
  m.absoluteValue = m.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), y(e);
  };
  m.ceil = function() {
    return y(new this.constructor(this), this.e + 1, 2);
  };
  m.clampedTo = m.clamp = function(e, t) {
    var r, n = this, i = n.constructor;
    if (e = new i(e), t = new i(t), !e.s || !t.s)
      return new i(NaN);
    if (e.gt(t))
      throw Error(Ke + t);
    return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
  };
  m.comparedTo = m.cmp = function(e) {
    var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
    if (!s || !a)
      return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0])
      return s[0] ? l : a[0] ? -u : 0;
    if (l !== u)
      return l;
    if (o.e !== e.e)
      return o.e > e.e ^ l < 0 ? 1 : -1;
    for (n = s.length, i = a.length, t = 0, r = n < i ? n : i;t < r; ++t)
      if (s[t] !== a[t])
        return s[t] > a[t] ^ l < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
  };
  m.cosine = m.cos = function() {
    var e, t, r = this, n = r.constructor;
    return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Rc(n, Ns(n, r)), n.precision = e, n.rounding = t, y(Me == 2 || Me == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
  };
  m.cubeRoot = m.cbrt = function() {
    var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
    if (!c.isFinite() || c.isZero())
      return new p(c);
    for (x = false, o = c.s * G(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = K(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = G(r, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3;; )
      if (a = n, l = a.times(a).times(a), u = l.plus(c), n = N(u.plus(c).times(a), u.plus(l), s + 2, 1), K(a.d).slice(0, s) === (r = K(n.d)).slice(0, s))
        if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
          if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
            n = a;
            break;
          }
          s += 4, i = 1;
        } else {
          (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
          break;
        }
    return x = true, y(n, e, p.rounding, t);
  };
  m.decimalPlaces = m.dp = function() {
    var e, t = this.d, r = NaN;
    if (t) {
      if (e = t.length - 1, r = (e - ee(this.e / b)) * b, e = t[e], e)
        for (;e % 10 == 0; e /= 10)
          r--;
      r < 0 && (r = 0);
    }
    return r;
  };
  m.dividedBy = m.div = function(e) {
    return N(this, new this.constructor(e));
  };
  m.dividedToIntegerBy = m.divToInt = function(e) {
    var t = this, r = t.constructor;
    return y(N(t, new r(e), 0, 1, 1), r.precision, r.rounding);
  };
  m.equals = m.eq = function(e) {
    return this.cmp(e) === 0;
  };
  m.floor = function() {
    return y(new this.constructor(this), this.e + 1, 3);
  };
  m.greaterThan = m.gt = function(e) {
    return this.cmp(e) > 0;
  };
  m.greaterThanOrEqualTo = m.gte = function(e) {
    var t = this.cmp(e);
    return t == 1 || t === 0;
  };
  m.hyperbolicCosine = m.cosh = function() {
    var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite())
      return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero())
      return a;
    r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / dn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Tt(s, 1, o.times(t), new s(1), true);
    for (var l, u = e, c = new s(8);u--; )
      l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
    return y(o, s.precision = r, s.rounding = n, true);
  };
  m.hyperbolicSine = m.sinh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    if (!i.isFinite() || i.isZero())
      return new o(i);
    if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
      i = Tt(o, 2, i, i, true);
    else {
      e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / dn(5, e)), i = Tt(o, 2, i, i, true);
      for (var s, a = new o(5), l = new o(16), u = new o(20);e--; )
        s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
    }
    return o.precision = t, o.rounding = r, y(i, t, r, true);
  };
  m.hyperbolicTangent = m.tanh = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, N(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
  };
  m.inverseCosine = m.acos = function() {
    var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
    return n !== -1 ? n === 0 ? t.isNeg() ? ge(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ge(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = ge(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
  };
  m.inverseHyperbolicCosine = m.acosh = function() {
    var e, t, r = this, n = r.constructor;
    return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, x = false, r = r.times(r).minus(1).sqrt().plus(r), x = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
  };
  m.inverseHyperbolicSine = m.asinh = function() {
    var e, t, r = this, n = r.constructor;
    return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, x = false, r = r.times(r).plus(1).sqrt().plus(r), x = true, n.precision = e, n.rounding = t, r.ln());
  };
  m.inverseHyperbolicTangent = m.atanh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, t, true) : (o.precision = r = n - i.e, i = N(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
  };
  m.inverseSine = m.asin = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ge(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
  };
  m.inverseTangent = m.atan = function() {
    var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
    if (u.isFinite()) {
      if (u.isZero())
        return new c(u);
      if (u.abs().eq(1) && p + 4 <= Di)
        return s = ge(c, p + 4, d).times(0.25), s.s = u.s, s;
    } else {
      if (!u.s)
        return new c(NaN);
      if (p + 4 <= Di)
        return s = ge(c, p + 4, d).times(0.5), s.s = u.s, s;
    }
    for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r;e; --e)
      u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for (x = false, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u;e !== -1; )
      if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== undefined)
        for (e = t;s.d[e] === o.d[e] && e--; )
          ;
    return r && (s = s.times(2 << r - 1)), x = true, y(s, c.precision = p, c.rounding = d, true);
  };
  m.isFinite = function() {
    return !!this.d;
  };
  m.isInteger = m.isInt = function() {
    return !!this.d && ee(this.e / b) > this.d.length - 2;
  };
  m.isNaN = function() {
    return !this.s;
  };
  m.isNegative = m.isNeg = function() {
    return this.s < 0;
  };
  m.isPositive = m.isPos = function() {
    return this.s > 0;
  };
  m.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  m.lessThan = m.lt = function(e) {
    return this.cmp(e) < 0;
  };
  m.lessThanOrEqualTo = m.lte = function(e) {
    return this.cmp(e) < 1;
  };
  m.logarithm = m.log = function(e) {
    var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
    if (e == null)
      e = new c(10), t = true;
    else {
      if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
        return new c(NaN);
      t = e.eq(10);
    }
    if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
      return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t)
      if (r.length > 1)
        o = true;
      else {
        for (i = r[0];i % 10 === 0; )
          i /= 10;
        o = i !== 1;
      }
    if (x = false, a = p + f, s = He(u, a), n = t ? un(c, a + 10) : He(e, a), l = N(s, n, a, 1), ur(l.d, i = p, d))
      do
        if (a += 10, s = He(u, a), n = t ? un(c, a + 10) : He(e, a), l = N(s, n, a, 1), !o) {
          +K(l.d).slice(i + 1, i + 15) + 1 == 100000000000000 && (l = y(l, p + 1, 0));
          break;
        }
      while (ur(l.d, i += 10, d));
    return x = true, y(l, p, d);
  };
  m.minus = m.sub = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.constructor;
    if (e = new g(e), !f.d || !e.d)
      return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
    if (f.s != e.s)
      return e.s = -e.s, f.plus(e);
    if (u = f.d, d = e.d, a = g.precision, l = g.rounding, !u[0] || !d[0]) {
      if (d[0])
        e.s = -e.s;
      else if (u[0])
        e = new g(f);
      else
        return new g(l === 3 ? -0 : 0);
      return x ? y(e, a, l) : e;
    }
    if (r = ee(e.e / b), c = ee(f.e / b), u = u.slice(), o = c - r, o) {
      for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o;n--; )
        t.push(0);
      t.reverse();
    } else {
      for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0;n < s; n++)
        if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
      o = 0;
    }
    for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s;n > 0; --n)
      u[s++] = 0;
    for (n = d.length;n > o; ) {
      if (u[--n] < d[n]) {
        for (i = n;i && u[--i] === 0; )
          u[i] = he - 1;
        --u[i], u[n] += he;
      }
      u[n] -= d[n];
    }
    for (;u[--s] === 0; )
      u.pop();
    for (;u[0] === 0; u.shift())
      --r;
    return u[0] ? (e.d = u, e.e = pn(u, r), x ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
  };
  m.modulo = m.mod = function(e) {
    var t, r = this, n = r.constructor;
    return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? y(new n(r), n.precision, n.rounding) : (x = false, n.modulo == 9 ? (t = N(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = N(r, e, 0, n.modulo, 1), t = t.times(e), x = true, r.minus(t));
  };
  m.naturalExponential = m.exp = function() {
    return _i(this);
  };
  m.naturalLogarithm = m.ln = function() {
    return He(this);
  };
  m.negated = m.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, y(e);
  };
  m.plus = m.add = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
    if (e = new d(e), !p.d || !e.d)
      return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
    if (p.s != e.s)
      return e.s = -e.s, p.minus(e);
    if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
      return c[0] || (e = new d(p)), x ? y(e, a, l) : e;
    if (o = ee(p.e / b), n = ee(e.e / b), u = u.slice(), i = o - n, i) {
      for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse();i--; )
        r.push(0);
      r.reverse();
    }
    for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0;i; )
      t = (u[--i] = u[i] + c[i] + t) / he | 0, u[i] %= he;
    for (t && (u.unshift(t), ++n), s = u.length;u[--s] == 0; )
      u.pop();
    return e.d = u, e.e = pn(u, n), x ? y(e, a, l) : e;
  };
  m.precision = m.sd = function(e) {
    var t, r = this;
    if (e !== undefined && e !== !!e && e !== 1 && e !== 0)
      throw Error(Ke + e);
    return r.d ? (t = Ds(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
  };
  m.round = function() {
    var e = this, t = e.constructor;
    return y(new t(e), e.e + 1, t.rounding);
  };
  m.sine = m.sin = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Sc(n, Ns(n, r)), n.precision = e, n.rounding = t, y(Me > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.squareRoot = m.sqrt = function() {
    var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
    if (u !== 1 || !a || !a[0])
      return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for (x = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = K(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3;; )
      if (o = n, n = o.plus(N(s, o, r + 2, 1)).times(0.5), K(o.d).slice(0, r) === (t = K(n.d)).slice(0, r))
        if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
          if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
          }
          r += 4, i = 1;
        } else {
          (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
          break;
        }
    return x = true, y(n, l, c.rounding, e);
  };
  m.tangent = m.tan = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = N(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, y(Me == 2 || Me == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.times = m.mul = function(e) {
    var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
    if (e.s *= c.s, !d || !d[0] || !f || !f[0])
      return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
    for (r = ee(c.e / b) + ee(e.e / b), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s;n--; )
      o.push(0);
    for (n = u;--n >= 0; ) {
      for (t = 0, i = l + n;i > n; )
        a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % he | 0, t = a / he | 0;
      o[i] = (o[i] + t) % he | 0;
    }
    for (;!o[--s]; )
      o.pop();
    return t ? ++r : o.shift(), e.d = o, e.e = pn(o, r), x ? y(e, p.precision, p.rounding) : e;
  };
  m.toBinary = function(e, t) {
    return Li(this, 2, e, t);
  };
  m.toDecimalPlaces = m.toDP = function(e, t) {
    var r = this, n = r.constructor;
    return r = new n(r), e === undefined ? r : (oe(e, 0, ze), t === undefined ? t = n.rounding : oe(t, 0, 8), y(r, e + r.e + 1, t));
  };
  m.toExponential = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = Te(n, true) : (oe(e, 0, ze), t === undefined ? t = i.rounding : oe(t, 0, 8), n = y(new i(n), e + 1, t), r = Te(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toFixed = function(e, t) {
    var r, n, i = this, o = i.constructor;
    return e === undefined ? r = Te(i) : (oe(e, 0, ze), t === undefined ? t = o.rounding : oe(t, 0, 8), n = y(new o(i), e + i.e + 1, t), r = Te(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
  };
  m.toFraction = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.d, h = f.constructor;
    if (!g)
      return new h(f);
    if (u = r = new h(1), n = l = new h(0), t = new h(n), o = t.e = Ds(g) - f.e - 1, s = o % b, t.d[0] = G(10, s < 0 ? b + s : s), e == null)
      e = o > 0 ? t : u;
    else {
      if (a = new h(e), !a.isInt() || a.lt(u))
        throw Error(Ke + a);
      e = a.gt(t) ? o > 0 ? t : u : a;
    }
    for (x = false, a = new h(K(g)), c = h.precision, h.precision = o = g.length * b * 2;p = N(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
      r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
    return i = N(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = N(u, n, o, 1).minus(f).abs().cmp(N(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], h.precision = c, x = true, d;
  };
  m.toHexadecimal = m.toHex = function(e, t) {
    return Li(this, 16, e, t);
  };
  m.toNearest = function(e, t) {
    var r = this, n = r.constructor;
    if (r = new n(r), e == null) {
      if (!r.d)
        return r;
      e = new n(1), t = n.rounding;
    } else {
      if (e = new n(e), t === undefined ? t = n.rounding : oe(t, 0, 8), !r.d)
        return e.s ? r : e;
      if (!e.d)
        return e.s && (e.s = r.s), e;
    }
    return e.d[0] ? (x = false, r = N(r, e, 0, t, 1).times(e), x = true, y(r)) : (e.s = r.s, r = e), r;
  };
  m.toNumber = function() {
    return +this;
  };
  m.toOctal = function(e, t) {
    return Li(this, 8, e, t);
  };
  m.toPower = m.pow = function(e) {
    var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0])
      return new l(G(+a, u));
    if (a = new l(a), a.eq(1))
      return a;
    if (n = l.precision, o = l.rounding, e.eq(1))
      return y(a, n, o);
    if (t = ee(e.e / b), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= vc)
      return i = _s(l, a, r, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
    if (s = a.s, s < 0) {
      if (t < e.d.length - 1)
        return new l(NaN);
      if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
        return a.s = s, a;
    }
    return r = G(+a, u), t = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (x = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = _i(e.times(He(a, n + r)), n), i.d && (i = y(i, n + 5, 1), ur(i.d, n, o) && (t = n + 10, i = y(_i(e.times(He(a, t + r)), t), t + 5, 1), +K(i.d).slice(n + 1, n + 15) + 1 == 100000000000000 && (i = y(i, n + 1, 0)))), i.s = s, x = true, l.rounding = o, y(i, n, o));
  };
  m.toPrecision = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = Te(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e, 1, ze), t === undefined ? t = i.rounding : oe(t, 0, 8), n = y(new i(n), e, t), r = Te(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toSignificantDigits = m.toSD = function(e, t) {
    var r = this, n = r.constructor;
    return e === undefined ? (e = n.precision, t = n.rounding) : (oe(e, 1, ze), t === undefined ? t = n.rounding : oe(t, 0, 8)), y(new n(r), e, t);
  };
  m.toString = function() {
    var e = this, t = e.constructor, r = Te(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  };
  m.truncated = m.trunc = function() {
    return y(new this.constructor(this), this.e + 1, 1);
  };
  m.valueOf = m.toJSON = function() {
    var e = this, t = e.constructor, r = Te(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() ? "-" + r : r;
  };
  var N = function() {
    function e(n, i, o) {
      var s, a = 0, l = n.length;
      for (n = n.slice();l--; )
        s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
      return a && n.unshift(a), n;
    }
    function t(n, i, o, s) {
      var a, l;
      if (o != s)
        l = o > s ? 1 : -1;
      else
        for (a = l = 0;a < o; a++)
          if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
          }
      return l;
    }
    function r(n, i, o, s) {
      for (var a = 0;o--; )
        n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
      for (;!n[0] && n.length > 1; )
        n.shift();
    }
    return function(n, i, o, s, a, l) {
      var u, c, p, d, f, g, h, O, T, S, C, E, me, ae, jt, U, ne, Ie, z, dt, Fr = n.constructor, $n = n.s == i.s ? 1 : -1, Y = n.d, _ = i.d;
      if (!Y || !Y[0] || !_ || !_[0])
        return new Fr(!n.s || !i.s || (Y ? _ && Y[0] == _[0] : !_) ? NaN : Y && Y[0] == 0 || !_ ? $n * 0 : $n / 0);
      for (l ? (f = 1, c = n.e - i.e) : (l = he, f = b, c = ee(n.e / f) - ee(i.e / f)), z = _.length, ne = Y.length, T = new Fr($n), S = T.d = [], p = 0;_[p] == (Y[p] || 0); p++)
        ;
      if (_[p] > (Y[p] || 0) && c--, o == null ? (ae = o = Fr.precision, s = Fr.rounding) : a ? ae = o + (n.e - i.e) + 1 : ae = o, ae < 0)
        S.push(1), g = true;
      else {
        if (ae = ae / f + 2 | 0, p = 0, z == 1) {
          for (d = 0, _ = _[0], ae++;(p < ne || d) && ae--; p++)
            jt = d * l + (Y[p] || 0), S[p] = jt / _ | 0, d = jt % _ | 0;
          g = d || p < ne;
        } else {
          for (d = l / (_[0] + 1) | 0, d > 1 && (_ = e(_, d, l), Y = e(Y, d, l), z = _.length, ne = Y.length), U = z, C = Y.slice(0, z), E = C.length;E < z; )
            C[E++] = 0;
          dt = _.slice(), dt.unshift(0), Ie = _[0], _[1] >= l / 2 && ++Ie;
          do
            d = 0, u = t(_, C, z, E), u < 0 ? (me = C[0], z != E && (me = me * l + (C[1] || 0)), d = me / Ie | 0, d > 1 ? (d >= l && (d = l - 1), h = e(_, d, l), O = h.length, E = C.length, u = t(h, C, O, E), u == 1 && (d--, r(h, z < O ? dt : _, O, l))) : (d == 0 && (u = d = 1), h = _.slice()), O = h.length, O < E && h.unshift(0), r(C, h, E, l), u == -1 && (E = C.length, u = t(_, C, z, E), u < 1 && (d++, r(C, z < E ? dt : _, E, l))), E = C.length) : u === 0 && (d++, C = [0]), S[p++] = d, u && C[0] ? C[E++] = Y[U] || 0 : (C = [Y[U]], E = 1);
          while ((U++ < ne || C[0] !== undefined) && ae--);
          g = C[0] !== undefined;
        }
        S[0] || S.shift();
      }
      if (f == 1)
        T.e = c, Ss = g;
      else {
        for (p = 1, d = S[0];d >= 10; d /= 10)
          p++;
        T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, g);
      }
      return T;
    };
  }();
  m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
  m[Symbol.toStringTag] = "Decimal";
  var ot = m.constructor = Ms(ki);
  an = new ot(an);
  ln = new ot(ln);
  var Re = ot;
  var cr = class {
    constructor(t, r, n, i, o) {
      this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
    }
    _toGraphQLInputType() {
      let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
      return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
  };
  var mn = class {
    constructor(t) {
      this.value = t;
    }
    write(t) {
      t.write(this.value);
    }
    markAsError() {
      this.value.markAsError();
    }
  };
  var fn = (e) => e;
  var gn = { bold: fn, red: fn, green: fn, dim: fn, enabled: false };
  var $s = { bold: H, red: ce, green: qe, dim: Oe, enabled: true };
  var St = { write(e) {
    e.writeLine(",");
  } };
  var Ce = class {
    constructor(t) {
      this.contents = t;
      this.isUnderlined = false;
      this.color = (t2) => t2;
    }
    underline() {
      return this.isUnderlined = true, this;
    }
    setColor(t) {
      return this.color = t, this;
    }
    write(t) {
      let r = t.getCurrentLineLength();
      t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
        t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
      });
    }
  };
  var Ye = class {
    constructor() {
      this.hasError = false;
    }
    markAsError() {
      return this.hasError = true, this;
    }
  };
  var At = class extends Ye {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    addItem(r) {
      return this.items.push(new mn(r)), this;
    }
    getField(r) {
      return this.items[r];
    }
    getPrintWidth() {
      return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
    }
    write(r) {
      if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithItems(r);
    }
    writeEmpty(r) {
      let n = new Ce("[]");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithItems(r) {
      let { colors: n } = r.context;
      r.writeLine("[").withIndent(() => r.writeJoined(St, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(n.red("~".repeat(this.getPrintWidth())));
      });
    }
    asObject() {
    }
  };
  var qs = ": ";
  var hn = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = false;
    }
    markAsError() {
      this.hasError = true;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + qs.length;
    }
    write(t) {
      let r = new Ce(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(qs).write(this.value);
    }
  };
  var It = class e extends Ye {
    constructor() {
      super(...arguments);
      this.fields = {};
      this.suggestions = [];
    }
    addField(r) {
      this.fields[r.name] = r;
    }
    addSuggestion(r) {
      this.suggestions.push(r);
    }
    getField(r) {
      return this.fields[r];
    }
    getDeepField(r) {
      let [n, ...i] = r, o = this.getField(n);
      if (!o)
        return;
      let s = o;
      for (let a of i) {
        let l;
        if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof At && (l = s.value.getField(Number(a))), !l)
          return;
        s = l;
      }
      return s;
    }
    getDeepFieldValue(r) {
      return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
      return !!this.getField(r);
    }
    removeAllFields() {
      this.fields = {};
    }
    removeField(r) {
      delete this.fields[r];
    }
    getFields() {
      return this.fields;
    }
    isEmpty() {
      return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
      return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
      let n = this;
      for (let i of r) {
        if (!(n instanceof e))
          return;
        let o = n.getSubSelectionValue(i);
        if (!o)
          return;
        n = o;
      }
      return n;
    }
    getDeepSelectionParent(r) {
      let n = this.getSelectionParent();
      if (!n)
        return;
      let i = n;
      for (let o of r) {
        let s = i.value.getFieldValue(o);
        if (!s || !(s instanceof e))
          return;
        let a = s.getSelectionParent();
        if (!a)
          return;
        i = a;
      }
      return i;
    }
    getSelectionParent() {
      let r = this.getField("select")?.value.asObject();
      if (r)
        return { kind: "select", value: r };
      let n = this.getField("include")?.value.asObject();
      if (n)
        return { kind: "include", value: n };
    }
    getSubSelectionValue(r) {
      return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
      let r = Object.values(this.fields);
      return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
    }
    write(r) {
      let n = Object.values(this.fields);
      if (n.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithContents(r, n);
    }
    asObject() {
      return this;
    }
    writeEmpty(r) {
      let n = new Ce("{}");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithContents(r, n) {
      r.writeLine("{").withIndent(() => {
        r.writeJoined(St, [...n, ...this.suggestions]).newLine();
      }), r.write("}"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  };
  var W = class extends Ye {
    constructor(r) {
      super();
      this.text = r;
    }
    getPrintWidth() {
      return this.text.length;
    }
    write(r) {
      let n = new Ce(this.text);
      this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
    }
    asObject() {
    }
  };
  var Ni = class {
    constructor(t) {
      this.errorMessages = [];
      this.arguments = t;
    }
    write(t) {
      t.write(this.arguments);
    }
    addErrorMessage(t) {
      this.errorMessages.push(t);
    }
    renderAllMessages(t) {
      return this.errorMessages.map((r) => r(t)).join(`
`);
    }
  };
  var gp = "P2037";
  var pr = "<unknown>";
  var yp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var bp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var wp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var Pp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
  var vp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var Rp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
  var Sp = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var Mi = class {
    getLocation() {
      return null;
    }
  };
  var $i = class {
    constructor() {
      this._error = new Error;
    }
    getLocation() {
      let t = this._error.stack;
      if (!t)
        return null;
      let n = Us(t).find((i) => {
        if (!i.file)
          return false;
        let o = di(i.file);
        return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
      });
      return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
    }
  };
  var Gs = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
  var zs = (e) => Array.isArray(e) ? e : e.split(".");
  var qi = (e, t) => zs(t).reduce((r, n) => r && r[n], e);
  var Ys = (e, t, r) => zs(t).reduceRight((n, i, o, s) => Object.assign({}, qi(e, s.slice(0, o)), { [i]: n }), r);
  var na = k(mi());
  var ra = k(__require("fs"));
  var Zs = { keyword: De, entity: De, value: (e) => H(rt(e)), punctuation: rt, directive: De, function: De, variable: (e) => H(rt(e)), string: (e) => H(qe(e)), boolean: ke, number: De, comment: Bt };
  var $p = (e) => e;
  var En = {};
  var qp = 0;
  var P = { manual: En.Prism && En.Prism.manual, disableWorkerMessageHandler: En.Prism && En.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
    if (e instanceof ye) {
      let t = e;
      return new ye(t.type, P.util.encode(t.content), t.alias);
    } else
      return Array.isArray(e) ? e.map(P.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
  }, type: function(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }, objId: function(e) {
    return e.__id || Object.defineProperty(e, "__id", { value: ++qp }), e.__id;
  }, clone: function e(t, r) {
    let n, i, o = P.util.type(t);
    switch (r = r || {}, o) {
      case "Object":
        if (i = P.util.objId(t), r[i])
          return r[i];
        n = {}, r[i] = n;
        for (let s in t)
          t.hasOwnProperty(s) && (n[s] = e(t[s], r));
        return n;
      case "Array":
        return i = P.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
          n[a] = e(s, r);
        }), n);
      default:
        return t;
    }
  } }, languages: { extend: function(e, t) {
    let r = P.util.clone(P.languages[e]);
    for (let n in t)
      r[n] = t[n];
    return r;
  }, insertBefore: function(e, t, r, n) {
    n = n || P.languages;
    let i = n[e], o = {};
    for (let a in i)
      if (i.hasOwnProperty(a)) {
        if (a == t)
          for (let l in r)
            r.hasOwnProperty(l) && (o[l] = r[l]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
    let s = n[e];
    return n[e] = o, P.languages.DFS(P.languages, function(a, l) {
      l === s && a != e && (this[a] = o);
    }), o;
  }, DFS: function e(t, r, n, i) {
    i = i || {};
    let o = P.util.objId;
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        r.call(t, s, t[s], n || s);
        let a = t[s], l = P.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
  } }, plugins: {}, highlight: function(e, t, r) {
    let n = { code: e, grammar: t, language: r };
    return P.hooks.run("before-tokenize", n), n.tokens = P.tokenize(n.code, n.grammar), P.hooks.run("after-tokenize", n), ye.stringify(P.util.encode(n.tokens), n.language);
  }, matchGrammar: function(e, t, r, n, i, o, s) {
    for (let h in r) {
      if (!r.hasOwnProperty(h) || !r[h])
        continue;
      if (h == s)
        return;
      let O = r[h];
      O = P.util.type(O) === "Array" ? O : [O];
      for (let T = 0;T < O.length; ++T) {
        let S = O[T], C = S.inside, E = !!S.lookbehind, me = !!S.greedy, ae = 0, jt = S.alias;
        if (me && !S.pattern.global) {
          let U = S.pattern.toString().match(/[imuy]*$/)[0];
          S.pattern = RegExp(S.pattern.source, U + "g");
        }
        S = S.pattern || S;
        for (let U = n, ne = i;U < t.length; ne += t[U].length, ++U) {
          let Ie = t[U];
          if (t.length > e.length)
            return;
          if (Ie instanceof ye)
            continue;
          if (me && U != t.length - 1) {
            S.lastIndex = ne;
            var p = S.exec(e);
            if (!p)
              break;
            var c = p.index + (E ? p[1].length : 0), d = p.index + p[0].length, a = U, l = ne;
            for (let _ = t.length;a < _ && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
              l += t[a].length, c >= l && (++U, ne = l);
            if (t[U] instanceof ye)
              continue;
            u = a - U, Ie = e.slice(ne, l), p.index -= ne;
          } else {
            S.lastIndex = 0;
            var p = S.exec(Ie), u = 1;
          }
          if (!p) {
            if (o)
              break;
            continue;
          }
          E && (ae = p[1] ? p[1].length : 0);
          var c = p.index + ae, p = p[0].slice(ae), d = c + p.length, f = Ie.slice(0, c), g = Ie.slice(d);
          let z = [U, u];
          f && (++U, ne += f.length, z.push(f));
          let dt = new ye(h, C ? P.tokenize(p, C) : p, jt, p, me);
          if (z.push(dt), g && z.push(g), Array.prototype.splice.apply(t, z), u != 1 && P.matchGrammar(e, t, r, U, ne, true, h), o)
            break;
        }
      }
    }
  }, tokenize: function(e, t) {
    let r = [e], n = t.rest;
    if (n) {
      for (let i in n)
        t[i] = n[i];
      delete t.rest;
    }
    return P.matchGrammar(e, r, t, 0, 0, false), r;
  }, hooks: { all: {}, add: function(e, t) {
    let r = P.hooks.all;
    r[e] = r[e] || [], r[e].push(t);
  }, run: function(e, t) {
    let r = P.hooks.all[e];
    if (!(!r || !r.length))
      for (var n = 0, i;i = r[n++]; )
        i(t);
  } }, Token: ye };
  P.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
  P.languages.javascript = P.languages.extend("clike", { "class-name": [P.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
  P.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  P.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: P.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
  P.languages.markup && P.languages.markup.tag.addInlined("script", "javascript");
  P.languages.js = P.languages.javascript;
  P.languages.typescript = P.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
  P.languages.ts = P.languages.typescript;
  ye.stringify = function(e, t) {
    return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
      return ye.stringify(r, t);
    }).join("") : jp(e.type)(e.content);
  };
  var ea = k(as());
  var wn = class e {
    static read(t) {
      let r;
      try {
        r = ra.default.readFileSync(t, "utf-8");
      } catch {
        return null;
      }
      return e.fromContent(r);
    }
    static fromContent(t) {
      let r = t.split(/\r?\n/);
      return new e(1, r);
    }
    constructor(t, r) {
      this.firstLineNumber = t, this.lines = r;
    }
    get lastLineNumber() {
      return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(t, r) {
      if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
        return this;
      let n = t - this.firstLineNumber, i = [...this.lines];
      return i[n] = r(i[n]), new e(this.firstLineNumber, i);
    }
    mapLines(t) {
      return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
    }
    lineAt(t) {
      return this.lines[t - this.firstLineNumber];
    }
    prependSymbolAt(t, r) {
      return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
    }
    slice(t, r) {
      let n = this.lines.slice(t - 1, r).join(`
`);
      return new e(t, ta(n).split(`
`));
    }
    highlight() {
      let t = Xs(this.toString());
      return new e(this.firstLineNumber, t.split(`
`));
    }
    toString() {
      return this.lines.join(`
`);
    }
  };
  var Bp = { red: ce, gray: Bt, dim: Oe, bold: H, underline: X, highlightSource: (e) => e.highlight() };
  var Up = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
  var Yp = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
  var Zp = ["aggregate", "count", "groupBy"];
  var Bi = Symbol();
  var da = (e) => e;
  var Pn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Pe;
      this.modelExtensionsCache = new Pe;
      this.queryCallbacksCache = new Pe;
      this.clientExtensions = er(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      this.batchCallbacks = er(() => {
        let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
        return r2 ? t2.concat(r2) : t2;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => Ea(this.previous?.getAllComputedFields(t), this.extension, t));
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Se(t);
        return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== undefined && (o[t][r] !== undefined && i.push(o[t][r]), o[t].$allOperations !== undefined && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== undefined && (o.$allModels[r] !== undefined && i.push(o.$allModels[r]), o.$allModels.$allOperations !== undefined && i.push(o.$allModels.$allOperations)), o[r] !== undefined && i.push(o[r]), o.$allOperations !== undefined && i.push(o.$allOperations), n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  };
  var vn = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e;
    }
    static single(t) {
      return new e(new Pn(t));
    }
    isEmpty() {
      return this.head === undefined;
    }
    append(t) {
      return new e(new Pn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
  var Pa = L("prisma:client");
  var va = { Vercel: "vercel", "Netlify CI": "netlify" };
  var ld = "Cloudflare-Workers";
  var ud = "node";
  var cd = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
  var ka = k(__require("fs"));
  var fr = k(__require("path"));
  var dd = L("prisma:client:engines:resolveEnginePath");
  var md = () => new RegExp("runtime[\\\\/]library\\.m?js$");
  var Ui = k(yi());
  var Na = k(fs());
  var An = class extends Error {
    constructor(t, r) {
      super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
    }
    get [Symbol.toStringTag]() {
      return this.name;
    }
  };
  var se = class extends An {
    constructor(t, r) {
      super(t, r), this.isRetryable = r.isRetryable ?? true;
    }
  };
  var Ft = class extends se {
    constructor(r) {
      super("This request must be retried", A(r, true));
      this.name = "ForcedRetryError";
      this.code = "P5001";
    }
  };
  w(Ft, "ForcedRetryError");
  var at = class extends se {
    constructor(r, n) {
      super(r, A(n, false));
      this.name = "InvalidDatasourceError";
      this.code = "P6001";
    }
  };
  w(at, "InvalidDatasourceError");
  var lt = class extends se {
    constructor(r, n) {
      super(r, A(n, false));
      this.name = "NotImplementedYetError";
      this.code = "P5004";
    }
  };
  w(lt, "NotImplementedYetError");
  var q = class extends se {
    constructor(t, r) {
      super(t, r), this.response = r.response;
      let n = this.response.headers.get("prisma-request-id");
      if (n) {
        let i = `(The request id was: ${n})`;
        this.message = this.message + " " + i;
      }
    }
  };
  var ut = class extends q {
    constructor(r) {
      super("Schema needs to be uploaded", A(r, true));
      this.name = "SchemaMissingError";
      this.code = "P5005";
    }
  };
  w(ut, "SchemaMissingError");
  var Gi = "This request could not be understood by the server";
  var gr = class extends q {
    constructor(r, n, i) {
      super(n || Gi, A(r, false));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
  w(gr, "BadRequestError");
  var hr = class extends q {
    constructor(r, n) {
      super("Engine not started: healthcheck timeout", A(r, true));
      this.name = "HealthcheckTimeoutError";
      this.code = "P5013";
      this.logs = n;
    }
  };
  w(hr, "HealthcheckTimeoutError");
  var yr = class extends q {
    constructor(r, n, i) {
      super(n, A(r, true));
      this.name = "EngineStartupError";
      this.code = "P5014";
      this.logs = i;
    }
  };
  w(yr, "EngineStartupError");
  var br = class extends q {
    constructor(r) {
      super("Engine version is not supported", A(r, false));
      this.name = "EngineVersionNotSupportedError";
      this.code = "P5012";
    }
  };
  w(br, "EngineVersionNotSupportedError");
  var Qi = "Request timed out";
  var Er = class extends q {
    constructor(r, n = Qi) {
      super(n, A(r, false));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
  w(Er, "GatewayTimeoutError");
  var gd = "Interactive transaction error";
  var wr = class extends q {
    constructor(r, n = gd) {
      super(n, A(r, false));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
  w(wr, "InteractiveTransactionError");
  var hd = "Request parameters are invalid";
  var xr = class extends q {
    constructor(r, n = hd) {
      super(n, A(r, false));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
  w(xr, "InvalidRequestError");
  var Ji = "Requested resource does not exist";
  var Pr = class extends q {
    constructor(r, n = Ji) {
      super(n, A(r, false));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
  w(Pr, "NotFoundError");
  var Wi = "Unknown server error";
  var Lt = class extends q {
    constructor(r, n, i) {
      super(n || Wi, A(r, true));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
  w(Lt, "ServerError");
  var Hi = "Unauthorized, check your connection string";
  var vr = class extends q {
    constructor(r, n = Hi) {
      super(n, A(r, false));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
  w(vr, "UnauthorizedError");
  var Ki = "Usage exceeded, retry again later";
  var Tr = class extends q {
    constructor(r, n = Ki) {
      super(n, A(r, true));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
  w(Tr, "UsageExceededError");
  var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var Ua = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.20.0-12.06fc58a368dc7be9fbbbe894adf8d445d208c284", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
  var Cr = class extends se {
    constructor(r, n) {
      super(`Cannot fetch data from service:
${r}`, A(n, true));
      this.name = "RequestError";
      this.code = "P5010";
    }
  };
  w(Cr, "RequestError");
  var vd = "function" < "u" ? __require : () => {
  };
  var Yi = class {
    constructor(t = {}) {
      this.headers = new Map;
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string")
          this.headers.set(r, n);
        else if (Array.isArray(n))
          for (let i of n)
            this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      return this.headers.get(t) ?? null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers)
        t.call(r, i, n, this);
    }
  };
  var Td = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
  var Ga = L("prisma:client:dataproxyEngine");
  var Ja = 3;
  var Zi = L("prisma:client:dataproxyEngine");
  var Xi = class {
    constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
      this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
      this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
    }
  };
  var Sr = class {
    constructor(t) {
      this.name = "DataProxyEngine";
      Va(t), this.config = t, this.env = { ...t.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = ja(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== undefined && await this.startPromise, this.startPromise = (async () => {
        let [t, r] = this.extractHostAndApiKey();
        this.host = t, this.headerBuilder = new Xi({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Qa(t, this.config), Zi("host", this.host);
      })(), await this.startPromise;
    }
    async stop() {
    }
    propagateResponseExtensions(t) {
      t?.logs?.length && t.logs.forEach((r) => {
        switch (r.level) {
          case "debug":
          case "error":
          case "trace":
          case "warn":
          case "info":
            break;
          case "query": {
            let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
            if (!this.tracingHelper.isEnabled()) {
              let [i] = n.split("/* traceparent");
              n = i;
            }
            this.logEmitter.emit("query", { query: n, timestamp: Ba(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
          }
        }
      }), t?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(t) {
      return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: true };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await ct(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
        r.ok || Zi("schema response status", r.status);
        let n = await Rr(r, this.clientVersion);
        if (n)
          throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: new Date, target: "" }), n;
        this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: new Date, target: "" });
      });
    }
    request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
      return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
    }
    async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
      let o = n?.kind === "itx" ? n.options : undefined, s = wt(t, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
      return a.map((u) => ("errors" in u) && u.errors.length > 0 ? st(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
    }
    requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
      return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
        let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
        o(s);
        let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
        a.ok || Zi("graphql response status", a.status), await this.handleError(await Rr(a, this.clientVersion));
        let l = await a.json(), u = l.extensions;
        if (u && this.propagateResponseExtensions(u), l.errors)
          throw l.errors.length === 1 ? st(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new B(l.errors, { clientVersion: this.config.clientVersion });
        return l;
      } });
    }
    async transaction(t, r, n) {
      let i = { start: "starting", commit: "committing", rollback: "rolling back" };
      return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
        if (t === "start") {
          let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
          o(a);
          let l = await ct(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
          await this.handleError(await Rr(l, this.clientVersion));
          let u = await l.json(), c = u.extensions;
          c && this.propagateResponseExtensions(c);
          let p = u.id, d = u["data-proxy"].endpoint;
          return { id: p, payload: { endpoint: d } };
        } else {
          let s = `${n.payload.endpoint}/${t}`;
          o(s);
          let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
          await this.handleError(await Rr(a, this.clientVersion));
          let u = (await a.json()).extensions;
          u && this.propagateResponseExtensions(u);
          return;
        }
      } });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = _t({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
      try {
        i = new URL(n);
      } catch {
        throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:")
        throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      let l = a.get("api_key");
      if (l === null || l.length < 1)
        throw new at(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
      return [s, l];
    }
    metrics() {
      throw new lt("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
    }
    async withRetry(t) {
      for (let r = 0;; r++) {
        let n = (i) => {
          this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: new Date, target: "" });
        };
        try {
          return await t.callback({ logHttpCall: n });
        } catch (i) {
          if (!(i instanceof se) || !i.isRetryable)
            throw i;
          if (r >= Ja)
            throw i instanceof Ft ? i.cause : i;
          this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Ja} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: new Date, target: "" });
          let o = await qa(r);
          this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: new Date, target: "" });
        }
      }
    }
    async handleError(t) {
      if (t instanceof ut)
        throw await this.uploadSchema(), new Ft({ clientVersion: this.clientVersion, cause: t });
      if (t)
        throw t;
    }
    applyPendingMigrations() {
      throw new Error("Method not implemented.");
    }
  };
  var to = k(__require("os"));
  var Ha = k(__require("path"));
  var eo = Symbol("PrismaLibraryEngineCache");
  var Ka = { async loadLibrary(e) {
    let t = await zn(), r = await Da("library", e);
    try {
      return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => Ad(r));
    } catch (n) {
      let i = li({ e: n, platformInfo: t, id: r });
      throw new R(i, e.clientVersion);
    }
  } };
  var ro;
  var za = { async loadLibrary(e) {
    let { clientVersion: t, adapter: r, engineWasm: n } = e;
    if (r === undefined)
      throw new R(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Tn().prettyName})`, t);
    if (n === undefined)
      throw new R("WASM engine was unexpectedly `undefined`", t);
    ro === undefined && (ro = (async () => {
      let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
      if (s == null)
        throw new R("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
      let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
      return o.__wbg_set_wasm(l.exports), o.QueryEngine;
    })());
    let i = await ro;
    return { debugPanic() {
      return Promise.reject("{}");
    }, dmmf() {
      return Promise.resolve("{}");
    }, version() {
      return { commit: "unknown", version: "unknown" };
    }, QueryEngine: i };
  } };
  var Id = "P2036";
  var Ae = L("prisma:client:libraryEngine");
  var Ya = [...Qn, "native"];
  var Ar = class {
    constructor(t, r) {
      this.name = "LibraryEngine";
      this.libraryLoader = r ?? Ka, t.engineWasm !== undefined && (this.libraryLoader = r ?? za), this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, t.enableDebugLogs && (this.logLevel = "debug");
      let n = Object.keys(t.overrideDatasources)[0], i = t.overrideDatasources[n]?.url;
      n !== undefined && i !== undefined && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
    }
    async applyPendingMigrations() {
      throw new Error("Cannot call this method from this type of engine instance");
    }
    async transaction(t, r, n) {
      await this.start();
      let i = JSON.stringify(r), o;
      if (t === "start") {
        let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
        o = await this.engine?.startTransaction(a, i);
      } else
        t === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : t === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
      let s = this.parseEngineResponse(o);
      if (Dd(s)) {
        let a = this.getExternalAdapterError(s);
        throw a ? a.error : new V(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
      }
      return s;
    }
    async instantiateLibrary() {
      if (Ae("internalSetup"), this.libraryInstantiationPromise)
        return this.libraryInstantiationPromise;
      Gn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
    }
    async getCurrentBinaryTarget() {
      {
        if (this.binaryTarget)
          return this.binaryTarget;
        let t = await nt();
        if (!Ya.includes(t))
          throw new R(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(H(t))}. Possible binaryTargets: ${qe(Ya.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return t;
      }
    }
    parseEngineResponse(t) {
      if (!t)
        throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
      try {
        return JSON.parse(t);
      } catch {
        throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
        try {
          let t = new WeakRef(this), { adapter: r } = this.config;
          r && Ae("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
            t.deref()?.logger(n);
          }, r);
        } catch (t) {
          let r = t, n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
        }
      }
    }
    logger(t) {
      let r = this.parseEngineResponse(t);
      if (r) {
        if ("span" in r) {
          this.config.tracingHelper.createEngineSpan(r);
          return;
        }
        r.level = r?.level.toLowerCase() ?? "unknown", Od(r) ? this.logEmitter.emit("query", { timestamp: new Date, query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : kd(r) ? this.loggerRustPanic = new le(no(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: new Date, message: r.message, target: r.module_path });
      }
    }
    parseInitError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    parseRequestError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
    }
    async start() {
      if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
        return Ae(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
      if (this.libraryStarted)
        return;
      let t = async () => {
        Ae("library starting");
        try {
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, Ae("library started");
        } catch (r) {
          let n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
        } finally {
          this.libraryStartingPromise = undefined;
        }
      };
      return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
    }
    async stop() {
      if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
        return Ae("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted)
        return;
      let t = async () => {
        await new Promise((n) => setTimeout(n, 5)), Ae("library stopping");
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = undefined, Ae("library stopped");
      };
      return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
    }
    version() {
      return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(t) {
      return this.library?.debugPanic(t);
    }
    async request(t, { traceparent: r, interactiveTransaction: n }) {
      Ae(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
      try {
        await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
        let s = this.parseEngineResponse(await this.executingQueryPromise);
        if (s.errors)
          throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        if (this.loggerRustPanic)
          throw this.loggerRustPanic;
        return { data: s, elapsed: 0 };
      } catch (s) {
        if (s instanceof R)
          throw s;
        if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:"))
          throw new le(no(this, s.message), this.config.clientVersion);
        let a = this.parseRequestError(s.message);
        throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
      }
    }
    async requestBatch(t, { transaction: r, traceparent: n }) {
      Ae("requestBatch");
      let i = wt(t, r);
      await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Wa(r));
      let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
      if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
      let { batchResult: a, errors: l } = s;
      if (Array.isArray(a))
        return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 });
      throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
    }
    buildQueryError(t) {
      if (t.user_facing_error.is_panic)
        return new le(no(this, t.user_facing_error.message), this.config.clientVersion);
      let r = this.getExternalAdapterError(t.user_facing_error);
      return r ? r.error : st(t, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(t) {
      if (t.error_code === Id && this.config.adapter) {
        let r = t.meta?.id;
        zr(typeof r == "number", "Malformed external JS error received from the engine");
        let n = this.config.adapter.errorRegistry.consumeError(r);
        return zr(n, "External error with reported id was not registered"), n;
      }
    }
    async metrics(t) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t));
      return t.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
  var il = k(io());
  var ue = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.isRequired = false;
    }
    makeRequired() {
      return this.isRequired = true, this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
    }
  };
  var Ir = class {
    constructor() {
      this.fields = [];
    }
    addField(t, r) {
      return this.fields.push({ write(n) {
        let { green: i, dim: o } = n.context.colors;
        n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
      } }), this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.writeLine(r("{")).withIndent(() => {
        t.writeJoined(St, this.fields).newLine();
      }).write(r("}")).addMarginSymbol(r("+"));
    }
  };
  var tm = 3;
  var nm = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
  var cl = "explicitly `undefined` values are not allowed";
  var oo = class e {
    constructor(t) {
      this.params = t;
      this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
    }
    throwValidationError(t) {
      Dn({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
    }
    getSelectionPath() {
      return this.params.selectionPath;
    }
    getArgumentPath() {
      return this.params.argumentPath;
    }
    getArgumentName() {
      return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
      if (!(!this.params.modelName || !this.modelOrType))
        return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
    }
    isRawAction() {
      return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
    }
    isPreviewFeatureOn(t) {
      return this.params.previewFeatures.includes(t);
    }
    getComputedFields() {
      if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(t) {
      return this.modelOrType?.fields.find((r) => r.name === t);
    }
    nestSelection(t) {
      let r = this.findField(t), n = r?.kind === "object" ? r.type : undefined;
      return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
    }
    getGlobalOmit() {
      return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Mt(this.params.modelName)] ?? {} : {};
    }
    shouldApplyGlobalOmit() {
      switch (this.params.action) {
        case "findFirst":
        case "findFirstOrThrow":
        case "findUniqueOrThrow":
        case "findMany":
        case "upsert":
        case "findUnique":
        case "createManyAndReturn":
        case "create":
        case "update":
        case "delete":
          return true;
        case "executeRaw":
        case "aggregateRaw":
        case "runCommandRaw":
        case "findRaw":
        case "createMany":
        case "deleteMany":
        case "groupBy":
        case "updateMany":
        case "count":
        case "aggregate":
        case "queryRaw":
          return false;
        default:
          Fe(this.params.action, "Unknown action");
      }
    }
    nestArgument(t) {
      return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
    }
  };
  var fl = (e) => ({ command: e });
  var gl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
  var mm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
  var wl = mm;
  var fm = /^(\s*alter\s)/i;
  var xl = L("prisma:client");
  var lo = ({ clientMethod: e, activeProvider: t }) => (r) => {
    let n = "", i;
    if (r instanceof sr)
      n = r.sql, i = { values: $t(r.values), __prismaRawParameters__: true };
    else if (Array.isArray(r)) {
      let [o, ...s] = r;
      n = o, i = { values: $t(s || []), __prismaRawParameters__: true };
    } else
      switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: $t(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: $t(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = gl(r), i = { values: $t(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
    return i?.values ? xl(`prisma.${e}(${n}, ${i.values})`) : xl(`prisma.${e}(${n})`), { query: n, parameters: i };
  };
  var Pl = { requestArgsToMiddlewareArgs(e) {
    return [e.strings, ...e.values];
  }, middlewareArgsToRequestArgs(e) {
    let [t, ...r] = e;
    return new ie(t, r);
  } };
  var vl = { requestArgsToMiddlewareArgs(e) {
    return [e];
  }, middlewareArgsToRequestArgs(e) {
    return e[0];
  } };
  var Rl = { isEnabled() {
    return false;
  }, getTraceParent() {
    return "00-10-10-00";
  }, async createEngineSpan() {
  }, getActiveContext() {
  }, runInChildSpan(e, t) {
    return t();
  } };
  var co = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Rl;
    }
  };
  var _n = class {
    constructor() {
      this._middlewares = [];
    }
    use(t) {
      this._middlewares.push(t);
    }
    get(t) {
      return this._middlewares[t];
    }
    has(t) {
      return !!this._middlewares[t];
    }
    length() {
      return this._middlewares.length;
    }
  };
  var kl = k(yi());
  var ym = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
  var Nn = class {
    constructor(t) {
      this.options = t;
      this.tickActive = false;
      this.batches = {};
    }
    request(t) {
      let r = this.options.batchBy(t);
      return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
        this.dispatchBatches(), this.tickActive = false;
      }))), new Promise((n, i) => {
        this.batches[r].push({ request: t, resolve: n, reject: i });
      })) : this.options.singleLoader(t);
    }
    dispatchBatches() {
      for (let t in this.batches) {
        let r = this.batches[t];
        delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
          n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
        }).catch((n) => {
          r[0].reject(n);
        }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
          if (n instanceof Error)
            for (let i = 0;i < r.length; i++)
              r[i].reject(n);
          else
            for (let i = 0;i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
        }).catch((n) => {
          for (let i = 0;i < r.length; i++)
            r[i].reject(n);
        }));
      }
    }
    get [Symbol.toStringTag]() {
      return "DataLoader";
    }
  };
  var Em = L("prisma:client:request_handler");
  var Mn = class {
    constructor(t, r) {
      this.logEmitter = r, this.client = t, this.dataloader = new Nn({ batchLoader: ga(async ({ requests: n, customDataProxyFetch: i }) => {
        let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => mo(p.protocolQuery.action));
        return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: wm(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
          if (p instanceof Error)
            return p;
          try {
            return this.mapQueryEngineResult(n[d], p);
          } catch (f) {
            return f;
          }
        });
      }), singleLoader: async (n) => {
        let i = n.transaction?.kind === "itx" ? Dl(n.transaction) : undefined, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: mo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
        return this.mapQueryEngineResult(n, o);
      }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Il(n.protocolQuery), batchOrder(n, i) {
        return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
      } });
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
        this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: new Date }), r;
      }
    }
    handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
      if (Em(t), xm(t, i) || t instanceof Le)
        throw t;
      if (t instanceof V && Pm(t)) {
        let u = _l(t.meta);
        Dn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
      }
      let l = t.message;
      if (n && (l = Dt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new V(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
      } else {
        if (t.isPanic)
          throw new le(l, this.client._clientVersion);
        if (t instanceof B)
          throw new B(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
        if (t instanceof R)
          throw new R(l, this.client._clientVersion);
        if (t instanceof le)
          throw new le(l, this.client._clientVersion);
      }
      throw t.clientVersion = this.client._clientVersion, t;
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, kl.default)(t) : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t))
        return t;
      let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = qi(o, s), l = i === "queryRaw" ? Ol(a) : Ln(a);
      return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
  var Fl = "5.20.0";
  var Ll = Fl;
  var jl = k(io());
  var F = class extends Error {
    constructor(t) {
      super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientConstructorValidationError";
    }
  };
  w(F, "PrismaClientConstructorValidationError");
  var Nl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
  var Ml = ["pretty", "colorless", "minimal"];
  var $l = ["info", "query", "warn", "error"];
  var Tm = { datasources: (e, { datasourceNames: t }) => {
    if (e) {
      if (typeof e != "object" || Array.isArray(e))
        throw new F(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
      for (let [r, n] of Object.entries(e)) {
        if (!t.includes(r)) {
          let i = qt(r, t) || ` Available datasources: ${t.join(", ")}`;
          throw new F(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
        }
        if (typeof n != "object" || Array.isArray(n))
          throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (n && typeof n == "object")
          for (let [i, o] of Object.entries(n)) {
            if (i !== "url")
              throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string")
              throw new F(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
      }
    }
  }, adapter: (e, t) => {
    if (e === null)
      return;
    if (e === undefined)
      throw new F('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (!In(t).includes("driverAdapters"))
      throw new F('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
    if (Kt() === "binary")
      throw new F('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }, datasourceUrl: (e) => {
    if (typeof e < "u" && typeof e != "string")
      throw new F(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
  }, errorFormat: (e) => {
    if (e) {
      if (typeof e != "string")
        throw new F(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
      if (!Ml.includes(e)) {
        let t = qt(e, Ml);
        throw new F(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
      }
    }
  }, log: (e) => {
    if (!e)
      return;
    if (!Array.isArray(e))
      throw new F(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
    function t(r) {
      if (typeof r == "string" && !$l.includes(r)) {
        let n = qt(r, $l);
        throw new F(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
      }
    }
    for (let r of e) {
      t(r);
      let n = { level: t, emit: (i) => {
        let o = ["stdout", "event"];
        if (!o.includes(i)) {
          let s = qt(i, o);
          throw new F(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
        }
      } };
      if (r && typeof r == "object")
        for (let [i, o] of Object.entries(r))
          if (n[i])
            n[i](o);
          else
            throw new F(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
    }
  }, transactionOptions: (e) => {
    if (!e)
      return;
    let t = e.maxWait;
    if (t != null && t <= 0)
      throw new F(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
    let r = e.timeout;
    if (r != null && r <= 0)
      throw new F(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
  }, omit: (e, t) => {
    if (typeof e != "object")
      throw new F('"omit" option is expected to be an object.');
    if (e === null)
      throw new F('"omit" option can not be `null`');
    let r = [];
    for (let [n, i] of Object.entries(e)) {
      let o = Cm(n, t.runtimeDataModel);
      if (!o) {
        r.push({ kind: "UnknownModel", modelKey: n });
        continue;
      }
      for (let [s, a] of Object.entries(i)) {
        let l = o.fields.find((u) => u.name === s);
        if (!l) {
          r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
          continue;
        }
        if (l.relationName) {
          r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
          continue;
        }
        typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
      }
    }
    if (r.length > 0)
      throw new F(Sm(e, r));
  }, __internal: (e) => {
    if (!e)
      return;
    let t = ["debug", "engine", "configOverride"];
    if (typeof e != "object")
      throw new F(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
    for (let [r] of Object.entries(e))
      if (!t.includes(r)) {
        let n = qt(r, t);
        throw new F(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
  } };
  var tt = L("prisma:client");
  typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
  var Am = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
  var Im = Symbol.for("prisma.client.transaction.id");
  var Om = { id: 0, nextId() {
    return ++this.id;
  } };
  var Dm = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
  /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
});

// prisma/generate/client/index.js
var require_client = __commonJS((exports) => {
  var __dirname = "/home/yigs/project-carter/packages/database/prisma/generate/client";
  Object.defineProperty(exports, "__esModule", { value: true });
  var {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
    PrismaClientRustPanicError: PrismaClientRustPanicError2,
    PrismaClientInitializationError: PrismaClientInitializationError2,
    PrismaClientValidationError: PrismaClientValidationError2,
    NotFoundError: NotFoundError2,
    getPrismaClient: getPrismaClient2,
    sqltag: sqltag2,
    empty: empty2,
    join: join2,
    raw: raw2,
    skip: skip2,
    Decimal: Decimal2,
    Debug: Debug2,
    objectEnumValues: objectEnumValues2,
    makeStrictEnum: makeStrictEnum2,
    Extensions: Extensions2,
    warnOnce: warnOnce2,
    defineDmmfProperty: defineDmmfProperty2,
    Public: Public2,
    getRuntime: getRuntime2
  } = require_library();
  var Prisma = {};
  exports.Prisma = Prisma;
  exports.$Enums = {};
  Prisma.prismaVersion = {
    client: "5.20.0",
    engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
  };
  Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
  Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
  Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
  Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
  Prisma.PrismaClientValidationError = PrismaClientValidationError2;
  Prisma.NotFoundError = NotFoundError2;
  Prisma.Decimal = Decimal2;
  Prisma.sql = sqltag2;
  Prisma.empty = empty2;
  Prisma.join = join2;
  Prisma.raw = raw2;
  Prisma.validator = Public2.validator;
  Prisma.getExtensionContext = Extensions2.getExtensionContext;
  Prisma.defineExtension = Extensions2.defineExtension;
  Prisma.DbNull = objectEnumValues2.instances.DbNull;
  Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
  Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
  Prisma.NullTypes = {
    DbNull: objectEnumValues2.classes.DbNull,
    JsonNull: objectEnumValues2.classes.JsonNull,
    AnyNull: objectEnumValues2.classes.AnyNull
  };
  var path = __require("path");
  exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
    Serializable: "Serializable"
  });
  exports.Prisma.UserScalarFieldEnum = {
    id: "id",
    name: "name",
    email: "email",
    emailVerified: "emailVerified",
    image: "image",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  };
  exports.Prisma.SessionScalarFieldEnum = {
    id: "id",
    expiresAt: "expiresAt",
    ipAddress: "ipAddress",
    userAgent: "userAgent",
    userId: "userId"
  };
  exports.Prisma.AccountScalarFieldEnum = {
    id: "id",
    accountId: "accountId",
    providerId: "providerId",
    userId: "userId",
    accessToken: "accessToken",
    refreshToken: "refreshToken",
    idToken: "idToken",
    expiresAt: "expiresAt",
    password: "password"
  };
  exports.Prisma.VerificationScalarFieldEnum = {
    id: "id",
    identifier: "identifier",
    value: "value",
    expiresAt: "expiresAt"
  };
  exports.Prisma.PostScalarFieldEnum = {
    id: "id",
    title: "title",
    content: "content",
    published: "published"
  };
  exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc"
  };
  exports.Prisma.NullsOrder = {
    first: "first",
    last: "last"
  };
  exports.Prisma.ModelName = {
    User: "User",
    Session: "Session",
    Account: "Account",
    Verification: "Verification",
    Post: "Post"
  };
  var config2 = {
    generator: {
      name: "client",
      provider: {
        fromEnvVar: null,
        value: "prisma-client-js"
      },
      output: {
        value: "/home/yigs/project-carter/packages/database/prisma/generate/client",
        fromEnvVar: null
      },
      config: {
        engineType: "library"
      },
      binaryTargets: [
        {
          fromEnvVar: null,
          value: "rhel-openssl-3.0.x",
          native: true
        }
      ],
      previewFeatures: [
        "prismaSchemaFolder"
      ],
      sourceFilePath: "/home/yigs/project-carter/packages/database/prisma/schema/schema.prisma",
      isCustomOutput: true
    },
    relativeEnvPaths: {
      rootEnvPath: null,
      schemaEnvPath: "../../../.env"
    },
    relativePath: "../../schema",
    clientVersion: "5.20.0",
    engineVersion: "06fc58a368dc7be9fbbbe894adf8d445d208c284",
    datasourceNames: [
      "db"
    ],
    activeProvider: "sqlite",
    postinstall: false,
    inlineDatasources: {
      db: {
        url: {
          fromEnvVar: "DATABASE_URL",
          value: null
        }
      }
    },
    inlineSchema: "model User {\n  id            String    @id\n  name          String\n  email         String\n  emailVerified Boolean\n  image         String?\n  createdAt     DateTime\n  updatedAt     DateTime\n  Session       Session[]\n  Account       Account[]\n\n  @@unique([email])\n  @@map(\"user\")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  ipAddress String?\n  userAgent String?\n  userId    String\n  users     User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"session\")\n}\n\nmodel Account {\n  id           String    @id\n  accountId    String\n  providerId   String\n  userId       String\n  users        User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken  String?\n  refreshToken String?\n  idToken      String?\n  expiresAt    DateTime?\n  password     String?\n\n  @@map(\"account\")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n\n  @@map(\"verification\")\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generate/client\"\n  previewFeatures = [\"prismaSchemaFolder\"]\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean @default(false)\n}\n",
    inlineSchemaHash: "ccd0433ace328286e4e6cc44b3a7482705cf9b6472b2984e6fd2f07c7bb7a27f",
    copyEngine: true
  };
  var fs = __require("fs");
  config2.dirname = __dirname;
  if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
    const alternativePaths = [
      "prisma/generate/client",
      "generate/client"
    ];
    const alternativePath = alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
    }) ?? alternativePaths[0];
    config2.dirname = path.join(process.cwd(), alternativePath);
    config2.isBundled = true;
  }
  config2.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"user\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Session\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Account\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email\"]}],\"isGenerated\":false},\"Session\":{\"dbName\":\"session\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Account\":{\"dbName\":\"account\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Verification\":{\"dbName\":\"verification\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Post\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}");
  defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
  config2.engineWasm = undefined;
  var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
  warnEnvConflicts2({
    rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
  });
  var PrismaClient = getPrismaClient2(config2);
  exports.PrismaClient = PrismaClient;
  Object.assign(exports, Prisma);
  path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
  path.join(process.cwd(), "prisma/generate/client/libquery_engine-rhel-openssl-3.0.x.so.node");
  path.join(__dirname, "schema.prisma");
  path.join(process.cwd(), "prisma/generate/client/schema.prisma");
});

// index.ts
var import_client = __toESM(require_client(), 1);
var prismaClient = new import_client.PrismaClient;
export {
  prismaClient
};
