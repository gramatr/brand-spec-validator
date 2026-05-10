/**
 * Types describing the shape of brand-spec's `brand.yaml`.
 *
 * These are intentionally permissive — `brand.yaml` is hand-authored and
 * may contain notes/illustrative fields. We model only what the validator
 * uses to make rule decisions.
 */

import { z } from 'zod';

const FrontmatterFieldSchema = z
  .object({
    type: z.string().optional(),
    required: z.boolean().optional(),
    enum: z.array(z.union([z.string(), z.number(), z.boolean()])).optional(),
    const: z.union([z.string(), z.number(), z.boolean()]).optional(),
    format: z.string().optional(),
    items: z.record(z.unknown()).optional(),
    notes: z.string().optional(),
    properties: z.record(z.unknown()).optional(),
    required_when: z.string().optional(),
  })
  .passthrough();

export type FrontmatterField = z.infer<typeof FrontmatterFieldSchema>;

const FrontmatterMapSchema = z.record(FrontmatterFieldSchema);

export type FrontmatterMap = z.infer<typeof FrontmatterMapSchema>;

const FileEntrySchema = z
  .object({
    path: z.string().optional(),
    pattern: z.string().optional(),
    glob: z.string().optional(),
    required: z.boolean().optional(),
    recommended: z.boolean().optional(),
    min_files: z.number().optional(),
    notes: z.string().optional(),
    frontmatter: FrontmatterMapSchema.optional(),
    body_sections_recommended: z.array(z.string()).optional(),
    file_header_convention: z.string().optional(),
  })
  .passthrough();

export type FileEntry = z.infer<typeof FileEntrySchema>;

const DirectoryEntrySchema = z
  .object({
    path: z.string(),
    required: z.boolean().optional(),
    recommended: z.boolean().optional(),
    notes: z.string().optional(),
    contents: z.array(FileEntrySchema).optional(),
  })
  .passthrough();

export type DirectoryEntry = z.infer<typeof DirectoryEntrySchema>;

const LayerSchema = z
  .object({
    required: z.boolean().optional(),
    recommended: z.boolean().optional(),
    description: z.string().optional(),
    files: z.array(FileEntrySchema).optional(),
    directories: z.array(DirectoryEntrySchema).optional(),
  })
  .passthrough();

export type Layer = z.infer<typeof LayerSchema>;

const ValidationRuleSchema = z
  .object({
    id: z.string(),
    rule: z.string(),
    severity: z.enum(['error', 'warn']).optional(),
  })
  .passthrough();

export type ValidationRule = z.infer<typeof ValidationRuleSchema>;

const CommonFieldsSchema = z.record(FrontmatterFieldSchema).optional();

export const BrandSpecSchema = z
  .object({
    schema_version: z.number(),
    contract_name: z.string(),
    contract_version: z.string(),
    conventions: z
      .object({
        file_format: z.string().optional(),
        data_format: z.string().optional(),
        frontmatter: z
          .object({
            syntax: z.string().optional(),
            presence: z.string().optional(),
            common_fields: CommonFieldsSchema,
          })
          .passthrough()
          .optional(),
        file_naming: z.record(z.unknown()).optional(),
        reserved_prefixes: z.record(z.unknown()).optional(),
      })
      .passthrough()
      .optional(),
    layers: z.record(LayerSchema),
    validation: z.array(ValidationRuleSchema),
  })
  .passthrough();

export type BrandSpec = z.infer<typeof BrandSpecSchema>;
