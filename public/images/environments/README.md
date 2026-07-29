# Drop your center photos here

Use these exact filenames:

| File | Use |
|------|-----|
| `hero.jpg` | Homepage full-bleed hero |
| `training-lab.jpg` | Classroom / PC rows |
| `networking-lab.jpg` | Cabling / network lab |
| `server-room.jpg` | Racks / infrastructure |
| `workspace.jpg` | Consulting / office |
| `certification.jpg` | Study / exam prep area |
| `security-operations.jpg` | Security / SOC style space |

Recommended: landscape, at least 1600px wide, well lit.

Then open `src/lib/site/environment-visuals.ts` and set:

```ts
export const USE_LOCAL_ENVIRONMENT_PHOTOS = true;
```

Until then, curated placeholders are used.
