# clash-rules-adobe-telemetry

用于匹配 Adobe 遥测的 Clash RULE-SET

## 使用

### Rule Providers

- **jsDelivr** (Recommend)

  [https://cdn.jsdelivr.net/gh/Zhousiru/clash-rules-adobe-telemetry@dist/adobe-telemetry.yml](https://cdn.jsdelivr.net/gh/Zhousiru/clash-rules-adobe-telemetry@dist/adobe-telemetry.yml)

- **GitHub**

  [https://raw.githubusercontent.com/Zhousiru/clash-rules-adobe-telemetry/refs/heads/dist/adobe-telemetry.yml](https://raw.githubusercontent.com/Zhousiru/clash-rules-adobe-telemetry/refs/heads/dist/adobe-telemetry.yml)

### 示例配置

```yml
rule-providers:
  adobe-telemetry:
    type: http
    behavior: domain
    url: https://cdn.jsdelivr.net/gh/Zhousiru/clash-rules-adobe-telemetry@dist/adobe-telemetry.yml
    path: ./ruleset/adobe-telemetry.yml
    interval: 86400

rules:
  - RULE-SET,adobe-telemetry,REJECT
```

## Thanks

[ignaciocastro/a-dove-is-dumb](https://github.com/ignaciocastro/a-dove-is-dumb)
